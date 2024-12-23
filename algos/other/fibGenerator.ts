function* fibGenerator(): Generator<number, any, number> {
    const his = [0, 1]
    let i = 1

    while (true) {
        i++;
        console.log(his)
        const result = his[i-1] + his[i-2]
        his.push(result)
        yield result
    }
};

const gen = fibGenerator();
console.log(gen.next().value) // 0
console.log(gen.next().value) // 1
console.log(gen.next().value)