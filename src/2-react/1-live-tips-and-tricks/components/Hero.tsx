/* Core */
import React, { useContext, useEffect } from 'react';

/* Components */
import { Tag } from './';

/* Other */
import tags from '../mock-data/tags.json';
import { getTagIcon } from '../helpers';
import { Context } from '../lib/selectedTagContext';

export const Hero: React.FC<PropTypes> = ({ tipViewMode }) => {
    const [selectedTagId, setSelectedTagId] = useContext(Context);

    useEffect(() => {
        if (selectedTagId === null && tags !== null) {
            setSelectedTagId(tags[0].id);
        }
    }, []);

    const handleTagSelect = (id: string): void => {
        setSelectedTagId(id);
    };

    const tagsJSX = tags.map((tag) => {
        const TagIcon = getTagIcon(tag.name);

        return (
            <Tag
                key={tag.id}
                title={tag.name}
                dataActive={
                    tipViewMode === 'all-topics' ||
                    selectedTagId === tag.id
                }
                handleTagSelect={handleTagSelect}
                id={tag.id}>
                <TagIcon />
            </Tag>
        )
    });

    return (
        <section className='hero'>
            <div className='title'>
                <h1>Типсы и Триксы</h1>
                <h2>Все темы</h2>
            </div>

            <div className='tags'>
                {tagsJSX}
            </div>
        </section>
    )
};

interface PropTypes {
    tipViewMode: string
}
