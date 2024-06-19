import { IMatch } from "../interface/Event"

export const isPowerTwo = (n: number): boolean => {

    let i = 1

    while (Math.pow(2, i) <= n) {

        if (Math.pow(2, i) % n === 0) return true

        i++
    }

    return false

}

export const headersElimination = (n: number): string[] => {

    let array: string[] = []

    for (let i = 0; i < n; i++) {
        if(i === (n - 1)) {
            array.push("Final")
        } else if (i === (n - 2)) {
            array.push("Semi-finals")
        } else {
            array.push(`Round of ${Math.pow(2, (n - i))}`)
        }
    }

    return array

}

export const eliminationMatch = (matchs: IMatch[][], index: number, n: number): string => {
    if(index === matchs.length - 1) {
        return "Final"
    }

    if(index === matchs.length - 2) {
        return "Semi-finals"
    }

    return `Round of ${Math.pow(2, (n - index))}`
}