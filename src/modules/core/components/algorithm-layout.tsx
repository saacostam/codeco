import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../icons";

export function AlgorithmLayout({
    children
}: PropsWithChildren){
    return (
        <>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link to={'/'}><LogoIcon className="w-5 h-5"/> All Algorithms</Link></li>
                    <li><Link to={'./'}>Demo</Link></li>
                </ul>
            </div>
            {children}
        </>
    )
}
