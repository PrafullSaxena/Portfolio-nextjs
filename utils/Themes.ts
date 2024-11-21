
const THEME_KEY = 'ps-portfolio-theme';

export const isSelectedThemeDark = (): boolean => {
    return document.getElementsByTagName('body')[0]?.classList.contains('dark') ? true : false;
}

// export const setThemeFromLocalStorage = () => {
//     const isDarkMode = isThemeFromLocalStorageDark();
//     if (isDarkMode) {
//         document.getElementById('body')?.classList.add('dark');
//     }
// }

// export const isThemeFromLocalStorageDark = (): boolean => {
//     const theme = localStorage.getItem(THEME_KEY);
//     return theme === 'dark' ? true : false;
// }

const storeThemeInLocalStorage = (isDarkMode: boolean) => {
    localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
}


export const toggleTheme  = () => {
    const isDarkMode = isSelectedThemeDark();
    storeThemeInLocalStorage(!isDarkMode);
    document.getElementsByTagName('body')[0]?.classList.toggle('dark')
}