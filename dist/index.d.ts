import React$1 from 'react';

interface HeaderProps {
    links: {
        title: string;
        link: string;
    }[];
    children: string | number | undefined | React.ReactNode;
    styled?: {
        bgcolor?: string;
        color?: string;
        padding?: string | number;
    };
}

declare const Header: React$1.FC<HeaderProps>;

export { Header };
