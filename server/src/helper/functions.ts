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

export const generateMatchdays = (shuffleArr: any[]): IMatch[][] => {

    let matchdays: IMatch[][] = []

    for (let i = 0; i < shuffleArr.length - 1; i++) {

        let matchs: IMatch[] = []

        for (let j = 0; j < shuffleArr.length / 2; j++) {
            matchs.push({
                local: {
                    name: shuffleArr[j].name,
                    logo: shuffleArr[j].logo.image
                },
                targetLocal: 0,
                visitant: {
                    name: shuffleArr[shuffleArr.length - 1 - j].name,
                    logo: shuffleArr[shuffleArr.length - 1 - j].logo.image
                },
                targetVisitant: 0
            })
        }

        matchdays.push(matchs)

        const element = shuffleArr.pop()
        shuffleArr.splice(1, 0, element)

    }

    return matchdays
}
