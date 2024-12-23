function generateParenthesis(n: number): string[] {
    const stack: { open: number; close: number; str: string }[] = [
        { open: 0, close: 0, str: "" },
    ];
    const result = [];

    while (stack.length) {
        const { open, close, str } = stack.pop();

        if (close === n) {
            result.push(str);
        }

        if (close < open) {
            stack.push({
                open: open,
                close: close + 1,
                str: str + ")",
            });
        }

        if (open < n) {
            stack.push({
                open: open + 1,
                close: close,
                str: str + "(",
            });
        }
    }

    return result;
}

console.log(generateParenthesis(1));
console.log(generateParenthesis(8).length);

/* function generateParenthesis(n: number): string[] {
    const allCombos = [];
    const stackWithData = [{ open: 0, close: 0, str: "" }];

    while (stackWithData.length) {
        let { open, close, str } = stackWithData.pop();

        if (str.length === n * 2) {
            allCombos.push(str);
        }

        if (open > close) {
            stackWithData.push({ open, close: close + 1, str: str + ")" });
        }

        if (open < n) {
            stackWithData.push({ open: open + 1, close, str: str + "(" });
        }
        console.log(stackWithData)
    }

    return allCombos;
}*/
