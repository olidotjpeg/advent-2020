import {passwordPhilosophy} from '../../src/password-philosophy';
import {inputOli, inputThiemo} from './input';

const testInput = [
    '1-3 a: abcde',
    '1-3 b: cdefg',
    '2-9 c: ccccccccc'
];

describe("passwordPhilosophy", () => {
    test('should return 2 for test input', () => {
        expect(passwordPhilosophy(testInput)).toBe(2);
    });

    test('should return Olis Output', () => {
        const output = passwordPhilosophy(inputOli);
        console.log("Oli: ", output);
        expect(output).toBeTruthy();
    });

    test('should return Thiemos Output', () => {
        const output = passwordPhilosophy(inputThiemo);
        console.log("Thiemo: ", output);
        expect(output).toBeTruthy();
    });
});
