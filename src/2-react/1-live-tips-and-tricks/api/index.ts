// Core
import axios from 'axios';

// Types
import { TagModel } from '../types/TagModel';

export const api = Object.freeze({
    async getTags() {
        const { data } = await axios.get<TagModel[]>(
            `${process.env.REACT_APP_API_URL}/tags`
        );

        return data;
    }
})

