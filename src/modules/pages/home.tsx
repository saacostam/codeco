import { Link } from "react-router-dom";

import { ALGORITHMS } from "../algorithms";
import { Header } from "../core";

export function HomePage(){
    return (
        <>
            <Header className="text-center mb-8">Available Algorithms</Header>
            {
                ALGORITHMS.map(({ id, title, description }) => (
                    <div className="card bg-base-100 shadow-xl" key={id}>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                            <div className="card-actions justify-end">
                                <Link to={id} className="btn btn-primary">Demo</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
