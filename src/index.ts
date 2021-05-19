const add = (a: number, b: number): number => (typeof a === 'number' && typeof b === 'number' ? a + b : NaN);

export { add };
