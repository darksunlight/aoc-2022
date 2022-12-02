interface Array {
    sum(): Array;
    max(): Array;
    min(): Array;
    toInt(): Array<number>;
    sortAsc(): Array;
    sortDesc(): Array;
}

interface String {
    toInt(): number;
}

interface Number {
    toChar(): string;
}