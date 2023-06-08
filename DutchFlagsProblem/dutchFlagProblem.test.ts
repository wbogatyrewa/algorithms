import dutchFlagProblem from "./dutchFlagProblem";

test("sort string array [\"green\", \"blue\", \"red\", \"red\"]", () => {
    expect(dutchFlagProblem(["green", "blue", "red", "red"])).toStrictEqual(["red", "red", "green", "blue"]);
});