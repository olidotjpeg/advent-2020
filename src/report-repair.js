export const repairReport = (report) => {
    const fixedReport = report.map((element, index) => {
        let match;
        report.slice(index+1).map((nextElement) => {
            if(element + nextElement === 2020) {
                match = nextElement;
            }
        });
        
        return match ? element * match : null;  
    }).filter((element) => {
        return element;
    });

    return fixedReport.shift();
}

export const repairReportThree = (report) => {
    const fixedReport = report.map((element, index) => {
        let matches;
        report.slice(index+1).map((nextElement) => {
            report.slice(index+2).map((nextNextElement) => {
                if(element + nextElement + nextNextElement === 2020) {
                    matches = [nextElement, nextNextElement];
                }
            });
            
        });
        
        return matches ? element * matches[0] * matches[1] : null;  
    }).filter((element) => {
        return element;
    });

    return fixedReport.shift();
}