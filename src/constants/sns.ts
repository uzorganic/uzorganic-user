const INSTAGRAM_GLOBAL = 'https://www.instagram.com/im_organic_official';
const INSTAGRAM_UZ = 'https://www.instagram.com/safocosmetics.uz/';

export const instagramUrl = (locale?: string) =>
  locale === 'uz' ? INSTAGRAM_UZ : INSTAGRAM_GLOBAL;
