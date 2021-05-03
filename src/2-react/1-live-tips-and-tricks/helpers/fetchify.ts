export const fetchify = (isFetched: boolean, content: string | void | null) => {
    if (!isFetched && !content) {
        return 'Загрузка...';
    }

    if (content) {
        return content;
    }

    return null;
};
