import { IMatch } from "interface/Event";

export function shuffle(array: any[]): any[] {
    let currentIndex = array.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array
}

export const generateMatchdays = (shuffleArr: any[], round: string): IMatch[][] => {

    let matchdays: IMatch[][] = []

    matchdaysGenerator(matchdays, shuffleArr, false)

    if (round === "trip") {
        matchdaysGenerator(matchdays, shuffleArr, true)
    }

    return matchdays
}

export const generateElimination = (shuffleArr: any[], round: string): IMatch[][] => {

    let matchdays: IMatch[][] = []

    let matchs: IMatch[] = []

    for (let i = 0; i < (round === "trip" ? Math.floor(shuffleArr.length) : Math.floor(shuffleArr.length / 2)); i++) {
        matchs.push({
            local: {
                name: shuffleArr[i].name,
                logo: shuffleArr[i].logo.image
            },
            visitant: {
                name: shuffleArr[shuffleArr.length - 1 - i].name,
                logo: shuffleArr[shuffleArr.length - 1 - i].logo.image
            }
        })
    }

    matchdays.push(matchs)

    return matchdays

}

export const generateGroups = (shuffleArr: any[], amountOfGroups: number, round: string) => {

    let matchdays: IMatch[][] = []
    let index: number = 0

    for (let i = 0; i < Math.floor(shuffleArr.length / amountOfGroups); i++) {
        matchdaysGenerator(matchdays, shuffleArr.slice(index, index + Math.floor(shuffleArr.length / amountOfGroups)), false)

        if (round === "trip") {
            matchdaysGenerator(matchdays, shuffleArr.slice(index, index + Math.floor(shuffleArr.length / amountOfGroups)), true)
        }

        index += Math.floor(shuffleArr.length / amountOfGroups)
    }    

    return matchdays

}

const matchdaysGenerator = (matchdays: IMatch[][], shuffleArr: any[], isTrip: boolean) => {

    const lengthArr = shuffleArr.length % 2 === 0 ? shuffleArr.length - 1 : shuffleArr.length

    for (let i = 0; i < lengthArr; i++) {
        
        let matchs: IMatch[] = []

        for (let j = 0; j < Math.floor(lengthArr / 2); j++) {
            if (isTrip) {
                matchs.push({
                    local: {
                        name: j % 2 !== 0 ? shuffleArr[shuffleArr.length - 1 - j].name : shuffleArr[shuffleArr.length % 2 === 0 ? j : j + 1].name,
                        logo: j % 2 !== 0 ? shuffleArr[shuffleArr.length - 1 - j].logo.image : shuffleArr[shuffleArr.length % 2 === 0 ? j : j + 1].logo.image
                    },
                    visitant: {
                        name: j % 2 !== 0 ? shuffleArr[shuffleArr.length % 2 === 0 ? j : j + 1].name : shuffleArr[shuffleArr.length - 1 - j].name,
                        logo: j % 2 !== 0 ? shuffleArr[shuffleArr.length % 2 === 0 ? j : j + 1].logo.image : shuffleArr[shuffleArr.length - 1 - j].logo.image
                    }
                })
            } else {
                matchs.push({
                    local: {
                        name: j % 2 === 0 ? shuffleArr[shuffleArr.length - 1 - j].name : shuffleArr[shuffleArr.length % 2 === 0 ? j : j + 1].name,
                        logo: j % 2 === 0 ? shuffleArr[shuffleArr.length - 1 - j].logo.image : shuffleArr[shuffleArr.length % 2 === 0 ? j : j + 1].logo.image
                    },
                    visitant: {
                        name: j % 2 === 0 ? shuffleArr[shuffleArr.length % 2 === 0 ? j : j + 1].name : shuffleArr[shuffleArr.length - 1 - j].name,
                        logo: j % 2 === 0 ? shuffleArr[shuffleArr.length % 2 === 0 ? j : j + 1].logo.image : shuffleArr[shuffleArr.length - 1 - j].logo.image
                    }
                })
            }
        }

        matchdays.push(matchs)

        const element = shuffleArr.pop()

        if(shuffleArr.length % 2 !== 0) {
            shuffleArr.splice(1, 0, element)
        } else {
            shuffleArr.unshift(element)
        }

    }
}