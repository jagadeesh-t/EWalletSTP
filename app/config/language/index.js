import English from './English';
import Portugese from './Portugese';
import storage from '../../utils/storage.util';

const current = {
  lang: 'English'
};

const listOfLanguages = {
  English,
  Portugese
};

module.exports = {
  get language () {
    return listOfLanguages[current.lang];
  },
  setCurrent (language) {
    storage.set('LANGUAGE', language);
    current.lang = language;
  }
};
