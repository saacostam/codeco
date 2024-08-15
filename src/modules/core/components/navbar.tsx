import { ALGORITHMS } from "../../algorithms";
import { LogoIcon } from "../../icons";

export function Navbar(){
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl" href="./#/"><LogoIcon/> CoDeCo</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li>
                    <details>
                        <summary>Select an Algorithm</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            {
                                ALGORITHMS.map(({ id, title }) => (
                                    <li key={id}><a href={`./#/${id}`}>{title}</a></li>
                                ))
                            }
                        </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    )
}