import { twMerge } from "tailwind-merge";

interface LogiIconProps{
    className?: string;
}

export function LogoIcon({
    className,
}: LogiIconProps){
    return (
        <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" className={twMerge("w-8 h-8", className)}>
            <g id="color">
                <path fill="#d0cfce" d="m14.276,31.5192h3.2117l-.0234-1.1721-3.2401.0106c-.0434.3279.0085.8336.0519,1.1615Z"/>
                <polygon fill="#9b9b9a" points="52.4477 59.999 54.9527 38.197 51.7041 38.197 48.8004 59.999 52.4477 59.999"/>
                <path fill="#d0cfce" d="m47.6445,29.3771c.0569.5118.0938,1.0293.0938,1.556,0-.5267-.0369-1.0442-.0938-1.556Z"/>
                <path fill="#d0cfce" d="m48.8004,29.3771c-.4111-3.6953-2.5001-7.7075-5.8095-10.2492-2.6571-2.0407-6.2527-2.9817-9.2531-3.1947l.2712,26.9989c.2486.6495-.3346,2.4231.6547,2.6473,2.0178.4572,6.3562-1.3102,8.0762-2.6473,1.7857-1.3882,3.8837-3.5192,4.9515-6.3317.9164-2.4136.9159-5.4874,1.109-7.2233Z"/>
                <path fill="#9b9b9a" d="m34.7383,41.7864l-1.2595.1084.259,4.0384c2.2672-.1608,8.4311-2.5655,10.2455-4.0463,2.9667-2.4215,4.7545-5.8777,4.7545-10.9537,0-.5267,0-1.7478-1.0933-1.5561-.7412,6.6622-6.1689,11.9313-12.9062,12.4093Z"/>
                <path fill="#3f3f3f" d="m52.7421,27.7526l-3.4453-.0401c-.499.189-.6415,5.5357-.0034,6.2814h3.0961s2.7955-.5886,2.4704-3.7291c-.3754-2.5138-1.5545-2.5138-2.1178-2.5122Z"/>
            </g>
            <g id="line">
                <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m33.7378,45.9332c8.2843,0,15-6.7157,15-15s-6.7157-15-15-15v30Z"/>
                <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m52.6418,27.9625c1.6565.0351,2.9709,1.4064,2.9358,3.0629-.0351,1.6565-1.4064,2.9709-3.0629,2.9358"/>
                <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18.4115,32.4905h-4.3872s-.7404.0215-.7404-1.5303.7404-1.5305.7404-1.5305h4.3872v3.0608Z"/>
                <line x1="24.1309" x2="33.7378" y1="30.9332" y2="30.9332" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <line x1="22.1212" x2="33.7378" y1="27.6488" y2="15.9332" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <line x1="22.1564" x2="33.7378" y1="34.2741" y2="45.9332" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <line x1="40.2378" x2="58.8314" y1="59.999" y2="59.999" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <polyline fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="48.8004 59.999 51.7041 38.197 54.9527 38.197 52.049 59.999"/>
            </g>
        </svg>

    )
}
