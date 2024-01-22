import { Tiger } from "../interfaces/Tiger";

describe('Tiger', () => {
  it('should speak like a tiger', () => {
    const tiger = new Tiger();
    const result = tiger.speak("Lions suck");
    expect(result).toBe("Lions grrr suck grrr");
  });
});