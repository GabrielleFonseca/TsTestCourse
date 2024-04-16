import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/passwordChecker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  describe("Password valid cases", () => {
    it("password with more than 8 chars is valid", () => {
      const actual = sut.checkPassword("12345678");
      expect(actual.reasons).not.toContain(PasswordErrors.TOO_SHORT);
    });

    it("password with uppercase letter is valid", () => {
      const actual = sut.checkPassword("Teste");
      expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPERCASE);
    });

    it("password with lowercase letter is valid", () => {
      const actual = sut.checkPassword("Teste");
      expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWERCASE);
    });

    it("Admin password with number is valid", () => {
      const actual = sut.checkAdminPassword("1234Teste");
      expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
    });
  });

  describe("Password invalid cases", () => {
    it("password with less than 8 chars is invalid", () => {
      const actual = sut.checkPassword("1234");
      expect(actual.valid).toBe(false);
      expect(actual.reasons).toContain(PasswordErrors.TOO_SHORT);
    });

    it("password with no uppercase letter is invalid", () => {
      const actual = sut.checkPassword("1234teste");
      expect(actual.valid).toBe(false);
      expect(actual.reasons).toContain(PasswordErrors.NO_UPPERCASE);
    });

    it("password with no lowercase letter is invalid", () => {
      const actual = sut.checkPassword("1234TESTE");
      expect(actual.valid).toBe(false);
      expect(actual.reasons).toContain(PasswordErrors.NO_LOWERCASE);
    });

    it("Admin password with no number is invalid", () => {
      const actual = sut.checkAdminPassword("TesteTeste");
      expect(actual.valid).toBe(false);
      expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    });
  });
});
