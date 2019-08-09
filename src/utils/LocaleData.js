
import i18n from 'i18n-js';
export const en = {
    welcome: 'Welcome',
    name: 'irshad',
    time: 'Time is {{someValue}}',
};
export const fr = {
    welcome: 'Bienvenue',
    name: 'irshad vali',
    time: 'Time is {{someValue}}',
};
export const ar = {
    welcome: 'أهلا بك',
    name: 'إرشاد فالي',
    time: `'الوقت هو {{someValue}}`,
};
export const hi = {
    welcome: 'स्वागत हे',
    name: 'इरशाद वली',
    time: `समय है {{someValue}}`,
};

export const multiLangText = {
    english: "en",
    french: "fr",
    arabic: "ar",
    hindi: "hi"

}

i18n.fallbacks = true;
i18n.translations = { ar, fr, hi, en };