import { ReactNode } from "react";

interface Algorithm{
    id: string;
    title: string,
    description: ReactNode;
}

export const ALGORITHMS: Algorithm[] = [
    {
        id: 'huffman',
        title: 'Huffman Coding',
        description: <span><a href="https://en.wikipedia.org/wiki/Huffman_coding" className="link link-primary">Huffman code</a> is a particular type of optimal prefix code that is commonly used for lossless data compression. The output from Huffman's algorithm can be viewed as a variable-length code table for encoding a source symbol (such as a character in a file). The algorithm derives this table from the estimated probability or frequency of occurrence (weight) for each possible value of the source symbol. (...) more common symbols are generally represented using fewer bits than less common symbols.</span>,
    }
];
