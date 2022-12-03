interface Array {
    sum(): Array;
    max(): Array;
    min(): Array;
    toInt(): Array<number>;
    sortAsc(): Array;
    sortDesc(): Array;
    chunks(): Array;
}

interface String {
    toInt(): number;
    lines(): string[];
}

interface Number {
    toChar(): string;
}