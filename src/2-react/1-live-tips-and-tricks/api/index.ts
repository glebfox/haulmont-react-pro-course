// Core
import axios from 'axios';

// Types
import { TagModel } from '../types/TagModel';
import waait from 'waait';

export const api = Object.freeze({
    async getTags() {
        await waait(1000);

        const { data } = await axios.get<TagModel[]>(
            `${process.env.REACT_APP_API_URL}/tags`
        );

        return data;
    }
})

