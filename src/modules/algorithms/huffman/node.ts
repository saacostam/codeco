export class Node {
    char: string | null;
    freq: number;
    left: Node | null;
    right: Node | null;

    constructor(char: string | null, freq: number) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }

    public compareTo(other: Node): number {
        return this.freq - other.freq;
    }
}
