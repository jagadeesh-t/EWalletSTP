import English from './English';
import Portugese from './Portugese';
import storage from '../../utils/storage.util';

const currentLangState = {
  langCode: 'pt'
};

const listOfLanguages = {
  en: English,
  pt: Portugese
};

module.exports = {
  get language () {
    return listOfLanguages[currentLangState.langCode];
  },
  setCurrent (langCode) {
    storage.set('LANGUAGE', langCode);
    currentLangState.langCode = langCode;
  },
  currentLangState,
  listOfLanguages
};
