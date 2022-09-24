const questions = [
  {
    question: 'Chcę, żeby każdy otrzymywał wynagrodzenie bez względu na płeć',
    effects: [
      { axis: 'Economic', value: 22 }, { axis: 'People', value: 22 }, // lewo dodaje prawo odejmuje
    ],
  },
  {
    question: 'Paczkomaty i kasy samoobsługowe to lepsze rozwiązanie od tradycyjnych sklepów i poczty',
    effects: [
      { axis: 'Technological', value: 22 }, { axis: 'Economic', value: 10 }, // lewo dodaje prawo odejmuje
    ],
  },
  {
    question: 'Za ustrój powinny odpowiadać osoby o odpowiednim pochodzeniu lub wykształceniu',
    effects: [
      { axis: 'People', value: 30 },
    ],
  },
  {
    question: 'Indywidualny sukces nie istnieje, człowiek zawdzięcza swoją pozycję innym',
    effects: [
      { axis: 'Group', value: -13 },
    ],
  },
  {
    question: 'Historia nie jest cykliczna, tylko liniowa',
    effects: [
      { axis: 'Societal', value: 15 },
    ],
  },
  {
    question: 'Dominacja kultury anglosaskiej jest niesprawiedliwa',
    effects: [
      { axis: 'Country', value: 15 },
    ],
  },
  {
    question: 'Rząd powinien ograniczać swobodę ludzi w sytuacjach wyjątkowych',
    effects: [
      { axis: 'Rule', value: 15 },
    ],
  },
  {
    question: 'Rząd powinien nakładać cła na określone towary',
    effects: [
      { axis: 'Global', value: 30 }, { axis: 'Economic', value: -22 },
    ],
  },
];

export default questions;
