import { add } from '.';

describe('My Really Awesome Obviously Not A One-Liner Module That Is Very Useful', () => {
    it('should correctly add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
    it('should return NaN if any of the parameters are not a number', () => {
        expect(add(1, '3' as unknown as number)).toBe(NaN);
    });
});
