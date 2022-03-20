

export const getId = (url: string) => {
    return url.split('people')[1].replace('/', '').replace('/', '');
}