function evalRPN(tokens: string[]): number {
    while (tokens.length !== 1) {
        for (let i = 0; i < tokens.length; i++) {
            if ("+-*/".includes(tokens[i])) {
                let val = String(
                    Math.trunc(eval(`(${tokens[i - 2]})${tokens[i]}(${tokens[i - 1]})`))
                );

                tokens[i] = val;
                tokens.splice(i - 2, 2);
                break;
            }
        }
    }
    return Number(tokens[0]);
}

// console.log(evalRPN(["2","1","+","3","*"]))
console.log(
    evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
    ])
);
