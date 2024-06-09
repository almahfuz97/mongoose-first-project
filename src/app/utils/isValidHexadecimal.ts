export const isValidHexadecimal = (id: string): boolean => {
    const hexRegex = /^[0-9a-fA-F]{24}$/;
    return hexRegex.test(id);
};