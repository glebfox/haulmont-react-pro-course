/* Core */
import React, { useContext, useEffect } from 'react';

/* Components */
import { Tag } from './';

/* Other */
// import tags from '../mock-data/tags.json';
import { getTagIcon } from '../helpers';
import { Context } from '../lib/selectedTagContext';
import { useTags } from '../hooks/useTags';

export const Hero: React.FC<PropTypes> = ({ tipViewMode }) => {
    const [selectedTagId, setSelectedTagId] = useContext(Context);
    const { data: tags, isFetching } = useTags();

    useEffect(() => {
        if (selectedTagId === null && tags !== null && Array.isArray(tags)) {
            setSelectedTagId(tags[0].id);
        }
    }, []);

    const handleTagSelect = (id: string): void => {
        setSelectedTagId(id);
    };

    const tagsJSX = tags?.map((tag) => {
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
                {isFetching && <p>Загрузка...</p> }
                {!isFetching && tagsJSX}
            </div>
        </section>
    )
};

interface PropTypes {
    tipViewMode: string
}
