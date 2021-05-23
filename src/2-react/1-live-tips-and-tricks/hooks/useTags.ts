// Core
import { useQuery } from 'react-query';

// Instruments
import { api } from '../api';

// Types
import { TagModel } from '../types/TagModel';

export const useTags = () => {
    const query = useQuery<TagModel[]>('tags', api.getTags, {
        cacheTime: 1000
    });

    return query;
}
