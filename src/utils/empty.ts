export const empty = (value: any): boolean => {
    return value === null || value === undefined ||
        (typeof value === 'string' && value.trim() === '') ||
        (typeof value === 'number' && value === 0);
};
