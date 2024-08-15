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
        <h1 className={twMerge("text-4xl text-accent font-semibold", className)}>{children}</h1>
    )
}

export function SubHeader({
    children,
    className,
}: PropsWithChildren<HeaderProps>) {
    return (
        <h3 className={twMerge("text-2xl text-accent font-semibold", className)}>{children}</h3>
    )
}
