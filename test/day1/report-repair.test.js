const { expect } = require('@jest/globals');
import {repairReport, repairReportThree} from '../../src/report-repair';
import {inputOli, inputThiemo} from './input';

const testInput = [1721, 979, 366, 299, 675, 1456];

describe('repairReports', () => {
    test('should return 514579 for example input', () => {
        expect(repairReport(testInput)).toBe(514579);
    });
    
    test('should return Olis Output', () => {
        const output = repairReport(inputOli);
        console.log("Oli: ", output);
        expect(output).toBeTruthy();
    });
    
    test('should return Thiemos Output', () => {
        const output = repairReport(inputThiemo);
        console.log("Thiemo: ", output);
        expect(output).toBeTruthy();
    }); 
});

describe('repairReportsThree', () => {
    test('should return 241861950 for example input', () => {
        expect(repairReportThree(testInput)).toBe(241861950);
    });

    test('should return Olis Output', () => {
        const output = repairReportThree(inputOli);
        console.log("Oli: ", output);
        expect(output).toBeTruthy();
    });
    
    test('should return Thiemos Output', () => {
        const output = repairReportThree(inputThiemo);
        console.log("Thiemo: ", output);
        expect(output).toBeTruthy();
    }); 
});
