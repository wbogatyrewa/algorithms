/**
 * Sorts an array of strings using the Dutch National Flag problem algorithm.
 * @param {string[]} strs - The input array of strings to be sorted.
 * @returns {string[]} - The sorted array of strings.
*/
export default function dutchFlagProblem(strs: string[]): string[] {
    if (strs.length < 2) return strs;
    
    const pivot: string = strs[Math.floor(strs.length / 2)];
    const left: string[] = [];
    const mid: string[] = [];
    const right: string[] = [];

    for (let i = 0; i < strs.length; i++) {
        if (strs[i] > pivot) {
            left.push(strs[i]);
        }
        else if (strs[i] === pivot) {
            mid.push(strs[i]);
        }
        else {
            right.push(strs[i]);
        }
    }
    return [...dutchFlagProblem(left), ...mid, ...dutchFlagProblem(right)];
}