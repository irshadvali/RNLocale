/* eslint-disable prettier/prettier */
import i18n from 'i18n-js';
export const en = {
  welcome: 'Welcome',
  name: 'irshad',
  time: 'Time is {{someValue}}',
  state: 'Uttar Pradesh',
  city:'Kanpur',
  pincode:'208019',
};
export const fr = {
  welcome: 'Bienvenue',
  name: 'irshad vali',
  time: 'Time is {{someValue}}',
  state: 'Uttar Pradesh',
  city:'Kanpur',
  pincode:'208019',
};
export const ar = {
  welcome: 'أهلا بك',
  name: 'إرشاد فالي',
  time: '\'الوقت هو {{someValue}}',
  state: 'ولاية اوتار براديش',
  city:'كانبور',
  pincode:'٢٠٨٠١٩',
};
export const hi = {
  welcome: 'स्वागत हे',
  name: 'इरशाद वली',
  time: 'समय है {{someValue}}',
  state: 'उत्तर प्रदेश',
  city:'कानपुर',
  pincode:'२०८०१९',
};

export const multiLangText = {
  english: 'en',
  french: 'fr',
  arabic: 'ar',
  hindi: 'hi',
};

i18n.fallbacks = true;
i18n.translations = { ar, fr, hi, en };
