import { useMemo, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { twMerge } from "tailwind-merge";

import { Header, SubHeader } from "../core";
import { huffmanEncoding, HUFFMAN_SOURCE_CODE, Node, huffmanDecoding } from "../algorithms/huffman";
import ColorScale from "color-scales";
import { ChevronIcon, TreeIcon } from "../icons";

const MIN_MESSAGE = 0;
const MAX_MESSAGE = 201;

export function HuffmanPage(){
    const [message, setMessage] = useState("Hello World");

    const {root: tree, depth, encodedText, huffCodes} = useMemo(() => huffmanEncoding(message), [message])
    const decodedMessage = useMemo(() => huffmanDecoding(encodedText, huffCodes), [encodedText, huffCodes])
    const colorScale = useMemo(() => new ColorScale(MIN_MESSAGE, Math.max(depth-1, MIN_MESSAGE + 1), ["#70CFDC", "#ffffff"]), [depth]);

    function renderNode({char, freq, left, right}: Node, depth = 0){
        return (
            <div className="flex flex-col grow">
                <div className="m-2 p-1 rounded outline outline-1 flex flex-col items-center text-sm" style={{ backgroundColor: colorScale.getColor(depth).toHexString()}}>
                    {char && <span>{char ? <kbd className="kbd kbd-xs">{char === ' ' ? 'space' : char}</kbd> : "_"}</span>}
                    <span className="font-semibold">{freq || 0}</span>
                </div>
                <div className="flex w-100">
                    {left && renderNode(left, depth+1)}
                    {right && renderNode(right, depth+1)}
                </div>
            </div>
        )
    }

    return (
        <>
            <Header className="text-center mb-8">Huffman Code</Header>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Write the message you want to encode:</span>
                </div>
                <textarea
                    className="textarea textarea-primary textarea-bordered rounded h-20"
                    placeholder="Messsage:"
                    onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE))}
                    value={message}
                ></textarea>
                <div className="label">
                    <span className="label-text-alt"></span>
                    <span className={twMerge("label-text-alt font-semibold", message.length === MAX_MESSAGE ? "text-error" : "")}>{message.length >= MAX_MESSAGE && "Max message limit!"} ({message.length}/{MAX_MESSAGE})</span>
                </div>
            </label>
            <section className="overflow-x-auto mb-8">
                <SubHeader className="text-center mb-4">Huffman Tree</SubHeader>
                {tree ? renderNode(tree) : <>
                    <TreeIcon className="w-48 h-48 block mx-auto"/>
                    <div className="w-fit mx-auto alert alert-success block max-w-64">
                        <SubHeader className="text-center text-lg block">Empty Message!</SubHeader>
                        <p className="text-center">Add a message to display the output huffman tree.</p>
                    </div>
                </>}
            </section>
            <section className="mb-8">
                <SubHeader className="text-center mb-4">Huffman Codes</SubHeader>
                <table className="table table-xs table-zebra bg-base-100 border outline outline-primary w-64 mx-auto">
                    <thead>
                        <tr>
                            <th>Char</th>
                            <th>Encoding</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...huffCodes.entries()].map(([char, code]) => (
                                <tr key={code}>
                                    <th>{char ? <kbd className="kbd kbd-xs">{char === ' ' ? 'space' : char}</kbd> : "_"}</th>
                                    <td><code>{code}</code></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            <section className="mb-8">
                <SubHeader className="text-center mb-4">Encoding</SubHeader>
                <div className="mockup-code">
                    <pre data-prefix=">" className="text-success"><code>{encodedText}</code></pre>
                </div>
            </section>
            <section className="mb-8">
                <SubHeader className="text-center mb-4">Decoded Message</SubHeader>
                <div className="mockup-code">
                    <pre data-prefix=">" className="text-success"><code>{decodedMessage}</code></pre>
                </div>
            </section>
            <section className="collapse overflow-x-auto mb-8 border-primary border">
                <input type="checkbox" className="peer" />
                <div
                    className="collapse-title text-primary-content"
                >
                    <SubHeader className="text-center flex items-center justify-center">Source Code <ChevronIcon className="inline"/></SubHeader>
                </div>
                <div
                    className="collapse-content text-primary-content"
                >
                    <CopyBlock
                    text={HUFFMAN_SOURCE_CODE}
                    language="typescript"
                    showLineNumbers
                    theme={dracula}
                />
                </div>
            </section>
        </>
    )
}
