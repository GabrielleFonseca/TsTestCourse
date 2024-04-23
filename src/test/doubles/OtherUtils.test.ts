import {
  OtherStringUtils,
  calculateComplexity,
  toUpperCaseWithCallBack,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
  describe("OtherStringUtils test with spies", () => {
    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    it("should use a spy to track calls", () => {
      const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");

      sut.toUpperCase("someArg");

      expect(toUpperCaseSpy).toHaveBeenCalledWith("someArg");
    });

    it("should use a spy to track calls to other module", () => {
      const consoleLogSpy = jest.spyOn(console, "log");

      sut.logString("someArg");

      expect(consoleLogSpy).toHaveBeenCalledWith("someArg");
    });

    it("should use a spy to replace the implementation of a method", () => {
      jest.spyOn(sut as any, "callExternalService").mockImplementation(() => {
        console.log("Mocked external service call!");
      });

      sut.callExternalService();
    });
  });

  describe("Traking callbacks with Jest mocks", () => {
    const callBackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("calls callback for invalid argument - track calls", () => {
      const actual = toUpperCaseWithCallBack("", callBackMock);

      expect(actual).toBeUndefined();

      expect(callBackMock).toHaveBeenCalledWith("Invalid argument!");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });

    it("calls callback for valid argument - track calls", () => {
      const actual = toUpperCaseWithCallBack("someArg", callBackMock);

      expect(actual).toBe("SOMEARG");

      expect(callBackMock).toHaveBeenCalledWith("Called with someArg");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });
  });

  it("should calculate complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "someInfo",
        field2: "someOtherInfo",
      },
    };

    const actual = calculateComplexity(someInfo as any);

    expect(actual).toBe(10);
  });
});
