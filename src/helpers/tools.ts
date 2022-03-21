
export const getId = (url: string) => {
    if(url)
        return url.split('people')[1].replace('/', '').replace('/', '');
}
