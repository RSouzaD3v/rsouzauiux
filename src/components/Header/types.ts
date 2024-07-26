export interface HeaderProps {
    links: {
        title: string;
        link: string;
    }[];
    children: string | number | undefined | React.ReactNode;
    styled?: {
        bgcolor?: string;
        color?: string;
        padding?: string | number;
    }
}