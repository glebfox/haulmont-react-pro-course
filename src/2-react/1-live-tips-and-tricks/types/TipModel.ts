export interface TipModel {
    id: string;
    title: string;
    preview: string;
    tag: {
        id: string;
        name: string;
    };
    body: string;
    author: string;
    created: string;
}
