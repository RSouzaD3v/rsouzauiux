export type ButtonProps = {
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
