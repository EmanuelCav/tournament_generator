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

    let rounds = Math.log(shuffleArr.length) / Math.log(2)
    let n = (round === "trip" ? shuffleArr.length : Math.floor(shuffleArr.length / 2))

    for (let t = 0; t < rounds; t++) {

        let matchs: IMatch[] = []

        for (let i = 0; i < n; i++) {
            if (t === 0) {
                matchs.push({
                    local: {
                        name: round === "trip" ? i < (shuffleArr.length / 2) ? shuffleArr[i].name : shuffleArr[shuffleArr.length - 1 - i + (shuffleArr.length / 2)].name : shuffleArr[i].name,
                        logo: round === "trip" ? i < (shuffleArr.length / 2) ? shuffleArr[i].logo.image : shuffleArr[shuffleArr.length - 1 - i + (shuffleArr.length / 2)].logo.image : shuffleArr[i].logo.image
                    },
                    visitant: {
                        name: round === "trip" ? i < (shuffleArr.length / 2) ? shuffleArr[shuffleArr.length - 1 - i].name : shuffleArr[i - (shuffleArr.length / 2)].name : shuffleArr[shuffleArr.length - 1 - i].name,
                        logo: round === "trip" ? i < (shuffleArr.length / 2) ? shuffleArr[shuffleArr.length - 1 - i].logo.image : shuffleArr[i - (shuffleArr.length / 2)].logo.image : shuffleArr[shuffleArr.length - 1 - i].logo.image
                    },
                    isMatchTrip: round === "trip" ? i < (shuffleArr.length / 2) ? false : round === "trip" : round === "trip"
                })
            } else {
                matchs.push({
                    local: {
                        name: "Not defined",
                        logo: "https://res.cloudinary.com/ddfm1znoo/image/upload/v1717421190/_715ec024-a870-44b1-9553-5499482553f9_ahgxhu.jpg"
                    },
                    visitant: {
                        name: "Not defined",
                        logo: "https://res.cloudinary.com/ddfm1znoo/image/upload/v1717421190/_715ec024-a870-44b1-9553-5499482553f9_ahgxhu.jpg"
                    },
                    isMatchTrip: round === "trip" ? i < (n / 2) ? false : round === "trip" : round === "trip"
                })
            }
        }

        n /= 2

        matchdays.push(matchs)
    }

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
                    },
                    isMatchTrip: isTrip
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
                    },
                    isMatchTrip: isTrip
                })
            }
        }

        matchdays.push(matchs)

        const element = shuffleArr.pop()

        if (shuffleArr.length % 2 !== 0) {
            shuffleArr.splice(1, 0, element)
        } else {
            shuffleArr.unshift(element)
        }

    }
}