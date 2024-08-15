export * from './node';
import { Node } from './node';

export function buildHuffmanTree(text: string) {
    const freqMap = new Map<string, number>();
    for (const char of text) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const priorityQueue: Node[] = Array.from(freqMap.entries()).map(([char, freq]) => new Node(char, freq));
    priorityQueue.sort((a, b) => a.compareTo(b));

    while (priorityQueue.length > 1) {
        const left = priorityQueue.shift()!;
        const right = priorityQueue.shift()!;
        const merged = new Node(null, left.freq + right.freq);
        merged.left = left;
        merged.right = right;
        priorityQueue.push(merged);
        priorityQueue.sort((a, b) => a.compareTo(b));
    }

    const root = priorityQueue[0];

    let depth = 0;
    const dfs = (node: Node | null, level = 0) => {
        if (!node) return depth = Math.max(depth, level);
        dfs(node.left, level+1);
        dfs(node.right, level+1);
    }
    dfs(root);

    return {
        root: root,
        depth: depth,
    };
}

export function generateCodes(node: Node | null, prefix: string = '', codebook: Map<string, string> = new Map()): Map<string, string> {
    if (node) {
        if (node.char !== null) {
            codebook.set(node.char, prefix);
        }
        generateCodes(node.left, prefix + '0', codebook);
        generateCodes(node.right, prefix + '1', codebook);
    }
    return codebook;
}

export function huffmanEncoding(text: string): [string, Map<string, string>] {
    const { root } = buildHuffmanTree(text);
    const huffCodes = generateCodes(root);
    const encodedText = Array.from(text).map(char => huffCodes.get(char) || '').join('');
    return [encodedText, huffCodes];
}

export function huffmanDecoding(encodedText: string, huffCodes: Map<string, string>): string {
    const reverseCodes = new Map<string, string>();
    huffCodes.forEach((code, char) => reverseCodes.set(code, char));

    let currentCode = '';
    let decodedText = '';

    for (const bit of encodedText) {
        currentCode += bit;
        if (reverseCodes.has(currentCode)) {
            decodedText += reverseCodes.get(currentCode);
            currentCode = '';
        }
    }

    return decodedText;
}

const text = "this is an example for huffman encoding";
const [encodedText, huffCodes] = huffmanEncoding(text);
console.log(`Encoded: ${encodedText}`);
console.log(`Codes: ${JSON.stringify(Array.from(huffCodes.entries()))}`);

const decodedText = huffmanDecoding(encodedText, huffCodes);
console.log(`Decoded: ${decodedText}`);
