import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeaderProps{
    className?: string;
}

export function Header({
    children,
    className,
}: PropsWithChildren<HeaderProps>) {
    return (
        <h1 className={twMerge("text-3xl text-primary font-semibold", className)}>{children}</h1>
    )
}
