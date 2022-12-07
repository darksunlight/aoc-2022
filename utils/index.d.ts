interface Array {
    sum(): Array;
    max(): Array;
    min(): Array;
    toInt(): Array<number>;
    sortAsc(): Array;
    sortDesc(): Array;
    windowed(size: number, step = 1, partialWindows = false): Array;
    chunks(): Array;
}

interface String {
    toInt(): number;
    lines(): string[];
}

interface Number {
    toChar(): string;
}