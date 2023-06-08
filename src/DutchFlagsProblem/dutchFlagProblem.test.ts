import dutchFlagProblem from "./dutchFlagProblem";

describe("test for Dutch Flags Problem", () => {
    test("sort string array [\"green\", \"blue\", \"red\", \"red\"]", () => {
        expect(dutchFlagProblem(["green", "blue", "red", "red"])).toStrictEqual(["red", "red", "green", "blue"]);
    });
    test("sort string array [\"green\", \"green\", \"red\", \"red\"]", () => {
        expect(dutchFlagProblem(["green", "green", "red", "red"])).toStrictEqual(["red", "red", "green", "green"]);
    });
    test("sort string array [\"green\"]", () => {
        expect(dutchFlagProblem(["green"])).toStrictEqual(["green"]);
    });
    test("sort null array []", () => {
        expect(dutchFlagProblem([])).toStrictEqual([]);
    });
});