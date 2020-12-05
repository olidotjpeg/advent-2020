const matcher = /(?<min>\d+)-(?<max>\d+) (?<char>\w): (?<password>\w+)/;

export const passwordPhilosophy = (input) => {
    return input.reduce((acc, policy) => {
        const result = matcher.exec(policy);

        if(result.groups) {
            const {min, max, char, password} = result.groups;
            let occurences = 0;
            const passwordChars = password.match(new RegExp(char, 'g'));
            if (passwordChars) {
                occurences = passwordChars.length;
            }

            if (occurences >= +min && occurences <= +max) {
                return acc + 1;
            }
        }
        return acc;
    }, 0);
}