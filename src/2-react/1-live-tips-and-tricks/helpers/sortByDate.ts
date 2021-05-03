/* Instruments */
import { TipModel } from '../types';

export const sortByDate = (a: TipModel, b: TipModel) => {
    // @ts-expect-error
    return new Date(b.created) - new Date(a.created);
};
