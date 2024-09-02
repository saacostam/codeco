export const HUFFMAN_SOURCE_CODE = `
// Función para construir el árbol de Huffman a partir de un texto
export function buildHuffmanTree(text: string) {
    // Crear un mapa de frecuencias para contar cuántas veces aparece cada carácter
    const freqMap = new Map<string, number>();
    for (const char of text) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Crear una cola de prioridad con nodos basados en las frecuencias de los caracteres
    const priorityQueue: Node[] = Array.from(freqMap.entries()).map(([char, freq]) => new Node(char, freq));
    // Ordenar la cola de prioridad por frecuencia
    priorityQueue.sort((a, b) => a.compareTo(b));

    // Construir el árbol de Huffman combinando nodos hasta que quede uno solo
    while (priorityQueue.length > 1) {
        // Extraer los dos nodos con menor frecuencia
        const left = priorityQueue.shift()!;
        const right = priorityQueue.shift()!;
        // Crear un nuevo nodo que sea la combinación de los dos nodos extraídos
        const merged = new Node(null, left.freq + right.freq);
        merged.left = left;
        merged.right = right;
        // Agregar el nodo combinado de nuevo a la cola de prioridad
        priorityQueue.push(merged);
        // Volver a ordenar la cola de prioridad
        priorityQueue.sort((a, b) => a.compareTo(b));
    }

    // El nodo restante es la raíz del árbol de Huffman
    const root = priorityQueue[0];

    // Calcular la profundidad máxima del árbol
    let depth = 0;
    const dfs = (node: Node | null, level = 0) => {
        if (!node) return depth = Math.max(depth, level);
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root);

    // Retornar el árbol de Huffman y la profundidad máxima
    return {
        root: root,
        depth: depth,
    };
}

// Función para generar los códigos de Huffman a partir del árbol de Huffman
export function generateCodes(
    node: Node | null,
    prefix: string = '',
    codebook: Map<string, string> = new Map()
): Map<string, string> {
    if (node) {
        // Si el nodo es una hoja, asignar el código correspondiente
        if (node.char !== null) {
            codebook.set(node.char, prefix);
        }
        // Recursivamente generar códigos para los nodos hijos
        generateCodes(node.left, prefix + '0', codebook);
        generateCodes(node.right, prefix + '1', codebook);
    }
    return codebook;
}

// Función para codificar un texto utilizando los códigos de Huffman
export function huffmanEncoding(text: string): [string, Map<string, string>] {
    // Construir el árbol de Huffman y obtener los códigos de Huffman
    const { root } = buildHuffmanTree(text);
    const huffCodes = generateCodes(root);
    // Codificar el texto utilizando los códigos de Huffman
    const encodedText = Array.from(text).map(char => huffCodes.get(char) || '').join('');
    return [encodedText, huffCodes];
}

// Función para decodificar un texto codificado con Huffman
export function huffmanDecoding(encodedText: string, huffCodes: Map<string, string>): string {
    // Crear un mapa inverso de códigos para decodificar
    const reverseCodes = new Map<string, string>();
    huffCodes.forEach((code, char) => reverseCodes.set(code, char));

    let currentCode = '';
    let decodedText = '';

    // Recorrer el texto codificado y construir el texto decodificado
    for (const bit of encodedText) {
        currentCode += bit;
        if (reverseCodes.has(currentCode)) {
            decodedText += reverseCodes.get(currentCode);
            currentCode = '';
        }
    }

    return decodedText;
}
`
