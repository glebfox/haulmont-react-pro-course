export const formatDate = (date: string | Date | void) => {
    if (!date) {
        return null;
    }

    const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return formattedDate;
};
