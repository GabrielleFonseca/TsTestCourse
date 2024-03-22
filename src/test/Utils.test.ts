import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suit", () => {
  it("should return uppercase of a valid string", () => {
    // Arrange
    const sut = toUpperCase;
    const expected = "ABC";

    // Act
    const actual = sut("abc");

    // Assert
    expect(actual).toBe(expected);
  });

  describe("getStingInfo for arg Abc-String should:", () => {
    test("return rigth lowerCase", () => {
      const actual = getStringInfo("Abc-String");
      expect(actual.lowerCase).toBe("abc-string");
    });

    test("return right upperCase", () => {
      const actual = getStringInfo("Abc-String");
      expect(actual.upperCase).toBe("ABC-STRING");
    });

    test("return right characters", () => {
      const actual = getStringInfo("Abc-String");
      expect(actual.characters).toEqual([
        "A",
        "b",
        "c",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
      expect(actual.characters).toContain<string>("A");
      expect(actual.characters).toEqual(
        expect.arrayContaining([
          "A",
          "b",
          "c",
          "-",
          "S",
          "t",
          "r",
          "i",
          "n",
          "g",
        ])
      );
    });

    test("return right length", () => {
      const actual = getStringInfo("Abc-String");
      expect(actual.length).toBe(10);
    });

    test("return defined extraInfo", () => {
      const actual = getStringInfo("Abc-String");
      expect(actual.extraInfo).toBeDefined();
    });

    test("return right extraInfo", () => {
      const actual = getStringInfo("Abc-String");
      expect(actual.extraInfo).toEqual({});
    });
  });
});
