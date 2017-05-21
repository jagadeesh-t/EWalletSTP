import Portugese from '../Portugese';
import English from '../English';

describe('Language constants', () => {
  it('sequence and no of English translations should be equal to number of Portugese translations', () => {
    const countEnglish = Object.keys(English);
    const countPortugese = Object.keys(Portugese);
    expect(countEnglish).toEqual(countPortugese);
  });
});
