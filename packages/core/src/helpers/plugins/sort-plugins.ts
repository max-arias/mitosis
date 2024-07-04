import { Plugin } from '../../types/plugins';

export const sortPlugins = (plugins: Plugin[]): Plugin[] => {
    return [...plugins].sort((a, b) => {
        const priorityA = a().priority ?? Infinity;
        const priorityB = b().priority ?? Infinity;
        return priorityA - priorityB;
    });
};
