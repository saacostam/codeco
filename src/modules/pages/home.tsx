import { Link } from "react-router-dom";

import { ALGORITHMS } from "../algorithms";
import { Header } from "../core";
import { BookIcon, ClickIcon } from "../icons";

export function HomePage(){
    return (
        <>
            <Header className="text-center my-9">Available Algorithms</Header>
            {
                ALGORITHMS.map(({ id, title, description, source }) => (
                    <div className="card bg-base-100 shadow-xl" key={id}>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <a href={source} target="_blank" className="link text-sm font-light"><BookIcon className="inline mr-1"/>source</a>
                            <p>{description}</p>
                            <div className="card-actions justify-end">
                                <Link to={id} className="btn btn-primary"><ClickIcon/>Go To Demo</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
