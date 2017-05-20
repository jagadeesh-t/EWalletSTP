import Portugese from '../Portugese';
import English from '../English';

describe('Language constants', () => {
  it('sequence and no of English translations should be equal to number of Portugese translations', () => {
    const countEnglish = Object.keys(English);
    const countPortugese = Object.keys(Portugese);
    expect(countEnglish).toEqual(countPortugese);
  });

  it('should have a version info showing what version is the language file in', () => {
    // A KEY with LANG_VERSION should be present in both the language files (English and Portugese) so that we can track the language version
    expect(English.LANG_VERSION).not.toBeUndefined();
    expect(Portugese.LANG_VERSION).not.toBeUndefined();
  });

  it('the language version should be same for both english and Portugese', () => {
    expect(English.LANG_VERSION).toEqual(Portugese.LANG_VERSION);
  });
});
