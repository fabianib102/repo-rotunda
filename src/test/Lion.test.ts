import { Lion } from "../interfaces/Lion";

describe('Lion', () => {
  it('should speak like a lion', () => {
    const lion = new Lion();
    const result = lion.speak("I'm a lion");
    expect(result).toBe("I'm roar a roar lion roar");
  });
});