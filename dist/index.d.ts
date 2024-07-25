import React$1 from 'react';

type ButtonProps = {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    styled?: {
        bgcolor?: string;
        color?: string;
        borderRadius?: string;
        padding?: number | string;
        hoverEvent?: boolean;
    };
};

declare const Button: React$1.FC<ButtonProps>;

export { Button };
