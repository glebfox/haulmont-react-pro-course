/* Core */
import { createContext, useState, SetStateAction } from 'react';

export const Context = createContext<SelectedTagProvideShape>([
    null,
    () => null,
]);

export const SelectedTagProvider: React.FC = props => {
    const state = useState<string | null>(null);

    return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

/* Types */
type SelectedTagProvideShape = [
        string | null,
    React.Dispatch<SetStateAction<string | null>>,
];
