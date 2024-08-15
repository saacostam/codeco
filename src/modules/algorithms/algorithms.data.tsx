import { ReactNode } from "react";
import { HuffmanPage } from "../pages";

interface Algorithm{
    id: string;
    page: ReactNode;
    title: string,
    source: string;
    description: ReactNode;
}

export const ALGORITHMS: Algorithm[] = [
    {
        id: 'huffman',
        title: 'Huffman Code',
        description: <span>Huffman code is a particular type of optimal prefix code that is commonly used for lossless data compression. The output from Huffman's algorithm can be viewed as a variable-length code table for encoding a source symbol (such as a character in a file). The algorithm derives this table from the estimated probability or frequency of occurrence (weight) for each possible value of the source symbol. (...) more common symbols are generally represented using fewer bits than less common symbols.</span>,
        page: <HuffmanPage/>,
        source: 'https://en.wikipedia.org/wiki/Huffman_coding',
    },
];
