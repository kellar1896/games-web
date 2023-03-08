export type PageRoute = {
    id: string;
    path: string;
    element:()=> JSX.Element;
    children?: PageRoute[];
}