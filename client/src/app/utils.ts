export const sum = <T>(items: T[], numberGetter: (value: T) => number) => items.reduce((sum, item) => sum + numberGetter(item), 0);
