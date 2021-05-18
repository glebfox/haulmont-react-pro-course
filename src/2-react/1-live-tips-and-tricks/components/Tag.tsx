/* Cores */
import React, { ReactElement } from 'react';

export const Tag: React.FC<PropTypes> = (props) => {
    const { children, dataActive, id, title, handleTagSelect } = props;
    return (
        <span
            data-active={dataActive}
            onClick={() => handleTagSelect(id)}>
            {children} {title}
        </span>
    )
}

interface PropTypes {
    title: string;
    id: string;
    dataActive: boolean;
    handleTagSelect: (id: string) => void
    children: ReactElement;
}
