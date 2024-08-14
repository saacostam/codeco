export function Navbar(){
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl" href="#/">CoDeCo</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li>
                    <details>
                        <summary>Methods</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li><a href="/#/Huffman">Basic</a></li>
                            <li><a href="/#/Huffman">Huffman</a></li>
                        </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    )
}