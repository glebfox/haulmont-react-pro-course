export const formatDate = (date: number | string | Date) => {
    if (!date) {
        return null;
    }

    return new Date(date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
    });
};

export const formatDayName = (date: number | string | Date) => {
    if (!date) {
        return null;
    }

    return new Date(date).toLocaleDateString('ru-RU', {
        weekday: 'long',
    });
};
