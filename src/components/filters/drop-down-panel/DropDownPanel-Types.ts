export interface IDropDownPanel {
    title: string;
    options: string[];
    onSelect: (option: string) => void;
}