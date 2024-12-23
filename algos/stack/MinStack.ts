class MinStack {
    private values: number[];

    constructor() {
        this.values = [];
    }

    push(val: number): void {
        this.values.push(val);
    }

    pop(): void {
        this.values.splice(this.values.length - 1, 1);
    }

    top(): number {
        return this.values[this.values.length - 1];
    }

    getMin(): number {
        return Math.min(...this.values);
    }
}

