import { useCallback, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Header, SubHeader } from "../core";
import { buildHuffmanTree, Node } from "../algorithms/huffman";
import ColorScale from "color-scales";

const MIN_MESSAGE = 0;
const MAX_MESSAGE = 201;

export function HuffmanPage(){
    const [message, setMessage] = useState("Hello World");
    const totalSteps = Math.max(message.length - 1, MIN_MESSAGE);

    const [step, _setStep] = useState<number>(MIN_MESSAGE);
    const setStep = useCallback((v: React.SetStateAction<number>) => _setStep(prev => {
        const newValue = v instanceof Function ? v(prev) : v;
        return Math.max(0, Math.min(newValue, totalSteps))
    }), [totalSteps]);

    const resetCurrentStep = () => setStep(totalSteps);
    useEffect(resetCurrentStep, [totalSteps, setStep]);

    const {root: tree, depth} = useMemo(() => buildHuffmanTree(message), [message])
    const colorScale = useMemo(() => new ColorScale(MIN_MESSAGE, Math.max(depth-1, MIN_MESSAGE + 1), ["#70CFDC", "#ffffff"]), [depth]);

    function renderNode({char, freq, left, right}: Node, depth = 0){
        return (
            <div className="flex flex-col grow">
                <div className="m-2 p-1 rounded outline outline-1 flex flex-col items-center text-sm" style={{ backgroundColor: colorScale.getColor(depth).toHexString()}}>
                    <span>{char === " " ? "SPACE" : char || "_"}</span>
                    <span>{freq || 0}</span>
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
            <Header className="text-center mb-8">Huffman Coding</Header>
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
                {tree && renderNode(tree)}
            </section>
            <section className="flex flex-col items-center">
                <progress className="progress progress-info w-full mb-4 outline outline-1" value={step} max={totalSteps}></progress>
                <div className="join mx-auto">
                    <button className="join-item btn btn-sm btn-outline" onClick={() => setStep(prev => prev-1)}>«</button>
                    <div className="join-item btn btn-sm btn-outline">STEP {step}/{totalSteps}</div>
                    <button className="join-item btn btn-sm btn-outline" onClick={() => setStep(prev => prev+1)}>»</button>
                </div>
            </section>
        </>
    )
}
