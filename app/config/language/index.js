import English from './English';
import Portugese from './Portugese';
import storage from '../../utils/storage.util';

const current = {
  langCode: 'en'
};

export const listOfLanguages = {
  en: English,
  pt: Portugese
};

module.exports = {
  get language () {
    return listOfLanguages[current.langCode];
  },
  setCurrent (langCode) {
    storage.set('LANGUAGE', langCode);
    current.langCode = langCode;
  }
};
