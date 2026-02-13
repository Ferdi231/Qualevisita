import { Sport, VisitType, ProtocolDetail } from '../types';

export const PROTOCOLS: Record<string, ProtocolDetail> = {
  'A1': {
    code: 'A1',
    title: 'Tabella A1',
    description: 'Basso impegno cardiovascolare',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'Esame urine', 'Esame acuità visiva']
  },
  'A2': {
    code: 'A2',
    title: 'Tabella A2',
    description: 'Impegno cardiovascolare moderato con implicazioni neurologiche',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'Esame urine', 'Esame acuità visiva', 'Visita neurologica', 'EEG alla prima visita']
  },
  'A3': {
    code: 'A3',
    title: 'Tabella A3',
    description: 'Discipline di tiro e precisione',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'Esame urine', 'Esame acuità visiva', 'Visita ORL', 'Audiometria']
  },
  'A4': {
    code: 'A4',
    title: 'Tabella A4',
    description: 'Discipline aeree',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'Esame urine', 'Esame acuità visiva', 'Visita ORL', 'Audiometria']
  },
  'B1': {
    code: 'B1',
    title: 'Tabella B1',
    description: 'Standard elevato impegno cardiovascolare',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'ECG dopo sforzo (IRI o Cicloergometro)', 'Esame urine', 'Esame acuità visiva', 'Spirometria']
  },
  'B2': {
    code: 'B2',
    title: 'Tabella B2',
    description: 'Alto impegno cardiovascolare e rischio neurologico',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'ECG dopo prova da sforzo', 'Esame urine', 'Esame acuità visiva', 'Spirometria', 'Visita neurologica']
  },
  'B2 EEG': {
    code: 'B2 EEG',
    title: 'Tabella B2 + EEG',
    description: 'Alto impegno CV, rischio neurologico con EEG',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'ECG dopo prova da sforzo', 'Esame urine', 'Esame acuità visiva', 'Spirometria', 'Visita neurologica', 'EEG alla prima visita']
  },
  'B3': {
    code: 'B3',
    title: 'Tabella B3',
    description: 'Alto impegno con componenti neurosensoriali',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'ECG dopo prova da sforzo', 'Esame urine', 'Esame acuità visiva', 'Spirometria', 'Visita ORL']
  },
  'B4': {
    code: 'B4',
    title: 'Tabella B4',
    description: 'Alto rischio, impegno misto',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'ECG dopo prova da sforzo', 'Esame urine', 'Esame acuità visiva', 'Spirometria', 'Visita ORL', 'Audiometria']
  },
  'B5': {
    code: 'B5',
    title: 'Tabella B5',
    description: 'Attività subacquee e combattimento contatto pieno',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'ECG dopo prova da sforzo', 'Esame urine', 'Esame acuità visiva', 'Spirometria', 'Visita neurologica', 'EEG (prima visita/dopo KO)', 'Visita ORL', 'Audiometria']
  },
  'B6': {
    code: 'B6',
    title: 'Tabella B6',
    description: 'Tuffi e simili',
    exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'ECG dopo prova da sforzo', 'Esame urine', 'Esame acuità visiva', 'Spirometria', 'Visita neurologica', 'EEG alla prima visita', 'Visita ORL', 'Audiometria']
  },
  'B4bis': {
     code: 'B4bis',
     title: 'Tabella B4 Bis',
     description: 'Volo a motore/vela',
     exams: ['Anamnesi', 'Esame obiettivo', 'ECG a riposo', 'ECG dopo prova da sforzo', 'Esame urine', 'Esame acuità visiva', 'Spirometria', 'Visita ORL', 'Audiometria']
  }
};

// Add generic definitions for CIP
['A1 cip', 'A3 cip', 'B1 cip', 'B2 cip', 'Specifica'].forEach(k => {
    PROTOCOLS[k] = {
        code: k,
        title: k.includes('cip') ? `Protocollo CIP ${k.split(' ')[0]}` : k,
        description: 'Protocollo specifico per atleti con disabilità (CIP). Contattare il centro per dettagli sui test integrativi.',
        exams: ['Protocollo base (vedi tabella corrispondente)', 'Visita oculistica (se ipovedenti)', 'Esami specifici per patologia (es. lesioni mieliche)']
    };
});

// RAW Data parser helper function logic applied to generate this list
export const SPORTS_LIST: Sport[] = [
  {
    id: 's1',
    name: 'Aeromodelli < 25 Kg',
    category: 'Aeromodellismo',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's2',
    name: 'Aeromodelli > 25 Kg',
    category: 'Aeromodellismo',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 16, maxAgeM: null,
    minAgeF: 16, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's3',
    name: 'Mongolfiera',
    category: 'Aerostatica',
    visitType: 'A4',
    validityYears: 2,
    minAgeM: 17, maxAgeM: null,
    minAgeF: 17, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's4',
    name: 'Altri',
    category: 'Generale',
    visitType: 'A1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's5',
    name: 'Arbitri Calcio',
    category: 'Arbitri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 15, maxAgeM: 45,
    minAgeF: 15, maxAgeF: 45,
    ageType: 'Sportiva',
    seasonPeriod: '01/07 - 30/06'
  },
  {
    id: 's6',
    name: 'Arbitri Football Americano',
    category: 'Arbitri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 18, maxAgeM: 65,
    minAgeF: 18, maxAgeF: 65,
    ageType: 'Anagrafica'
  },
  {
    id: 's7',
    name: 'Arbitri hockey ghiaccio',
    category: 'Arbitri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 16, maxAgeM: null,
    minAgeF: 16, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's8',
    name: 'Arbitri Hockey prato, indoor, beach',
    category: 'Arbitri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/09 - 31/09'
  },
  {
    id: 's9',
    name: 'Arbitri Hockey rotelle',
    category: 'Arbitri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 18, maxAgeM: 50,
    minAgeF: 18, maxAgeF: 50,
    ageType: 'Sportiva',
    seasonPeriod: '01/08 - 31/07'
  },
  {
    id: 's10',
    name: 'Arbitri Kickboxing',
    category: 'Arbitri',
    visitType: 'A1',
    validityYears: 1,
    minAgeM: 18, maxAgeM: 70,
    minAgeF: 18, maxAgeF: 70,
    ageType: 'Anagrafica'
  },
  {
    id: 's11',
    name: 'Arbitri Pallacanestro',
    category: 'Arbitri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 13, maxAgeM: null,
    minAgeF: 13, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's12',
    name: 'Arbitri Pallamano',
    category: 'Arbitri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's13',
    name: 'Arbitri Rugby',
    category: 'Arbitri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 16, maxAgeM: 55,
    minAgeF: 16, maxAgeF: 55,
    ageType: 'Solare'
  },
  {
    id: 's14',
    name: 'Boulder, Lead, Speed, Combinata olimpica',
    category: 'Arrampicata sportiva',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's15',
    name: 'Atletica Leggera',
    category: 'Atletica',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's16',
    name: 'Finbal e Finbasket',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's17',
    name: 'Fotografia sub con ARA',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 18, maxAgeM: null,
    minAgeF: 18, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's18',
    name: 'Hockey subacqueo',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's19',
    name: 'Immersione in apnea',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's20',
    name: 'Nuoto pinnato',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's21',
    name: 'Orientamento',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's22',
    name: 'Pesca in apnea',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 18, maxAgeM: null,
    minAgeF: 18, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's23',
    name: 'Rugby subacqueo',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's24',
    name: 'Safari fotografico subacqueo con ARA',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 18, maxAgeM: null,
    minAgeF: 18, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's25',
    name: 'Safari fotografico subacqueo in apnea',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 14, maxAgeM: null,
    minAgeF: 14, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's26',
    name: 'Tiro bersaglio subacqueo',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 16, maxAgeM: null,
    minAgeF: 16, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's27',
    name: 'Video subaqueo con ARA',
    category: 'Attività Subacquea',
    visitType: 'B3',
    validityYears: 1,
    minAgeM: 18, maxAgeM: null,
    minAgeF: 18, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's28',
    name: 'Karting',
    category: 'Automobilismo',
    visitType: 'A1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's29',
    name: 'Regolarità nazionale, Slalom nazionale',
    category: 'Automobilismo',
    visitType: 'A1',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's30',
    name: 'Velocità, Rally, Autocross, Rallycross',
    category: 'Automobilismo',
    visitType: 'A2',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's31',
    name: 'Badminton',
    category: 'Racchetta',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's32',
    name: 'Baseball',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 9, maxAgeM: 38,
    minAgeF: 9, maxAgeF: 32,
    ageType: 'Solare'
  },
  {
    id: 's33',
    name: 'Biathlon',
    category: 'Sport Invernali',
    visitType: 'B4',
    validityYears: 1,
    minAgeM: 11, maxAgeM: null,
    minAgeF: 11, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's34',
    name: 'Stecca, Boccette, Poll - Snooker, Carambola',
    category: 'Biliardo Sportivo',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's35',
    name: 'Birilli su ghiaccio (Stock sport)',
    category: 'Sport Invernali',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/07 - 30/06'
  },
  {
    id: 's36',
    name: 'Bob',
    category: 'Sport Invernali',
    visitType: 'B2 EEG',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's37',
    name: 'Raffa, Petanque, Volo (prove tradizionali)',
    category: 'Bocce',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's38',
    name: 'Volo prove veloci',
    category: 'Bocce',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 11, maxAgeM: 50,
    minAgeF: 11, maxAgeF: 50,
    ageType: 'Solare'
  },
  {
    id: 's39',
    name: 'Bowling',
    category: 'Precisione',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 9, maxAgeM: null,
    minAgeF: 9, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's40',
    name: 'Bridge',
    category: 'Giochi',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's41',
    name: 'Tiro al piattello con fucili con canna ad anima liscia',
    category: 'Caccia',
    visitType: 'A3',
    validityYears: 1,
    minAgeM: 14, maxAgeM: null,
    minAgeF: 14, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's42',
    name: 'Tiro con l\'arco da caccia',
    category: 'Caccia',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's43',
    name: 'Tiro di campagna con carabina a canna rigata',
    category: 'Caccia',
    visitType: 'A3',
    validityYears: 1,
    minAgeM: 16, maxAgeM: null,
    minAgeF: 16, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's44',
    name: 'Tiro fucili da caccia a palla, canna ad anima liscia',
    category: 'Caccia',
    visitType: 'A3',
    validityYears: 1,
    minAgeM: 16, maxAgeM: null,
    minAgeF: 16, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's45',
    name: 'Calcio',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/07 - 30/06'
  },
  {
    id: 's46',
    name: 'Calcio storico fiorentino',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 15, maxAgeM: 70,
    minAgeF: null, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's47',
    name: 'Tutte',
    category: 'Canoa Kayak',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 9, maxAgeM: null,
    minAgeF: 9, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's48',
    name: 'Canottaggio sedile fisso',
    category: 'Canottaggio',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 9, maxAgeM: 60,
    minAgeF: 9, maxAgeF: 60,
    ageType: 'Solare'
  },
  {
    id: 's49',
    name: 'Timoniere',
    category: 'Canottaggio',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's50',
    name: 'Vogatore',
    category: 'Canottaggio',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 11, maxAgeM: null,
    minAgeF: 11, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's51',
    name: 'Altre Specialità',
    category: 'Ciclismo',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 13, maxAgeM: null,
    minAgeF: 13, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's52',
    name: 'BMX e Trial',
    category: 'Ciclismo',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's53',
    name: 'Agility',
    category: 'Cinotecnica',
    visitType: 'A3',
    validityYears: 1,
    minAgeM: 10, maxAgeM: 75,
    minAgeF: 10, maxAgeF: 75,
    ageType: 'Solare'
  },
  {
    id: 's54',
    name: 'Combinata Nordica, Salto con gli sci',
    category: 'Sport Invernali',
    visitType: 'B2 EEG',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's55',
    name: 'Cricket',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's56',
    name: 'Curling',
    category: 'Sport Invernali',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/07 - 30/06'
  },
  {
    id: 's57',
    name: 'Dama',
    category: 'Giochi',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 11, maxAgeM: null,
    minAgeF: 11, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's58',
    name: 'Cheerleading',
    category: 'Danza Sportiva',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare',
    seasonPeriod: '01/09 - 31/08'
  },
  {
    id: 's59',
    name: 'Danze accademiche, coreografiche, nazionali, internazionali...',
    category: 'Danza Sportiva',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare',
    seasonPeriod: '01/09 - 31/08'
  },
  {
    id: 's60',
    name: 'Figura',
    category: 'Pattinaggio', // inferred or kept general?
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/07 - 30/06'
  },
  {
    id: 's61',
    name: 'Flag Football',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's62',
    name: 'Freestyle',
    category: 'Sport Invernali',
    visitType: 'B2',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's63',
    name: 'Tutte (artistica, ritmica, trampolino elastico, aerobica)',
    category: 'Ginnastica',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's64',
    name: 'Golf',
    category: 'Golf',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's65',
    name: 'Grappling, Brazilian Jiu-Jitsu',
    category: 'Combattimento',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's66',
    name: 'Hockey inline',
    category: 'Hockey',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's67',
    name: 'Hockey prato, indoor, beach',
    category: 'Hockey',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's68',
    name: 'Hockey su ghiaccio',
    category: 'Hockey',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/07 - 30/06'
  },
  {
    id: 's69',
    name: 'Hockey su pista',
    category: 'Hockey',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's70',
    name: 'Hydrospeed',
    category: 'Acquatici',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's71',
    name: 'Judo, Lotta, Karate, Ju-Jitsu, Aikido, Sumo, Capoeira',
    category: 'Combattimento',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's72',
    name: 'Contatto leggero: Point, Light, Kick light, Muay thai light',
    category: 'Kickboxing',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: 50,
    minAgeF: 10, maxAgeF: 50,
    ageType: 'Anagrafica'
  },
  {
    id: 's73',
    name: 'Contatto pieno: Full, Low Kick, K1, Muay Thai, Shoot, Sambo',
    category: 'Kickboxing',
    visitType: 'B5',
    validityYears: 1,
    minAgeM: 16, maxAgeM: 40,
    minAgeF: 16, maxAgeF: 40,
    ageType: 'Anagrafica'
  },
  {
    id: 's74',
    name: 'Senza contatto: Forme musicali, Cicuiti, Aerokickboxing',
    category: 'Kickboxing',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: 50,
    minAgeF: 8, maxAgeF: 50,
    ageType: 'Anagrafica'
  },
  {
    id: 's75',
    name: 'Tutte',
    category: 'Mixed Martial Arts (MMA)',
    visitType: 'B5',
    validityYears: 1,
    minAgeM: 13, maxAgeM: null,
    minAgeF: 13, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's76',
    name: 'Motocross, Enduro, Trial, Speedway, Motoslitte, Quad',
    category: 'Motociclismo',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: 70,
    minAgeF: 8, maxAgeF: 70,
    ageType: 'Anagrafica'
  },
  {
    id: 's77',
    name: 'Altre Specialità',
    category: 'Motonautica',
    visitType: 'A2',
    validityYears: 1,
    minAgeM: 12, maxAgeM: 55,
    minAgeF: 12, maxAgeF: 55,
    ageType: 'Anagrafica'
  },
  {
    id: 's78',
    name: 'Endurance, Moto d\'Acqua, Offshore 3C/3D',
    category: 'Motonautica',
    visitType: 'A2',
    validityYears: 1,
    minAgeM: 12, maxAgeM: 55,
    minAgeF: 12, maxAgeF: 55,
    ageType: 'Anagrafica'
  },
  {
    id: 's79',
    name: 'Nuoto',
    category: 'Nuoto',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's80',
    name: 'Nuoto salvamento',
    category: 'Nuoto',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 9, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's81',
    name: 'Nuoto sincronizzato',
    category: 'Nuoto',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 9, maxAgeM: null,
    minAgeF: 9, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's82',
    name: 'Orientamento',
    category: 'Orientamento',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 13, maxAgeM: 75,
    minAgeF: 13, maxAgeF: 75,
    ageType: 'Solare'
  },
  {
    id: 's83',
    name: 'Palla Pugno',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's84',
    name: 'Pallacanestro',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 11, maxAgeM: null,
    minAgeF: 11, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's85',
    name: 'Pallamano',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's86',
    name: 'Pallanuoto',
    category: 'Acquatici',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 9, maxAgeM: null,
    minAgeF: 9, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's87',
    name: 'Pallavolo/Beach',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's88',
    name: 'Pancrazio Athlima: Tutte',
    category: 'Combattimento',
    visitType: 'B5',
    validityYears: 1,
    minAgeM: 13, maxAgeM: null,
    minAgeF: 13, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's89',
    name: 'Pattinaggio artistico',
    category: 'Pattinaggio',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's90',
    name: 'Pattinaggio corsa',
    category: 'Pattinaggio',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's91',
    name: 'Specialità con tiro',
    category: 'Pentathlon Moderno',
    visitType: 'B4',
    validityYears: 1,
    minAgeM: 11, maxAgeM: null,
    minAgeF: 11, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's92',
    name: 'Specialità senza tiro (Biatlhe, Combinata)',
    category: 'Pentathlon Moderno',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 11, maxAgeM: null,
    minAgeF: 11, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's93',
    name: 'Pesca di superficie sportiva: Tutte',
    category: 'Pesca',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's94',
    name: 'Pesistica: Tutte',
    category: 'Pesistica',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 13, maxAgeM: null,
    minAgeF: 13, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's95',
    name: 'Amatoriale-Gym Boxe',
    category: 'Pugilato',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 13, maxAgeM: 40,
    minAgeF: 13, maxAgeF: 40,
    ageType: 'Anagrafica'
  },
  {
    id: 's96',
    name: 'AOB (Aiba Open Boxing)',
    category: 'Pugilato',
    visitType: 'B5',
    validityYears: 1,
    minAgeM: 13, maxAgeM: 40,
    minAgeF: 13, maxAgeF: 40,
    ageType: 'Anagrafica'
  },
  {
    id: 's97',
    name: 'APB (AIBA Pro Boxing) / PRO / WSB',
    category: 'Pugilato',
    visitType: 'B5',
    validityYears: 1,
    minAgeM: 18, maxAgeM: 40,
    minAgeF: 18, maxAgeF: 40,
    ageType: 'Anagrafica'
  },
  {
    id: 's98',
    name: 'Rafting',
    category: 'Acquatici',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's99',
    name: 'Rugby',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: 42,
    minAgeF: 12, maxAgeF: 42,
    ageType: 'Solare'
  },
  {
    id: 's100',
    name: 'Scacchi',
    category: 'Giochi',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's101',
    name: 'Fioretto, Sciabola, Spada',
    category: 'Scherma',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's102',
    name: 'Sci alpinismo',
    category: 'Sport Invernali',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's103',
    name: 'Combinata Alpina',
    category: 'Sci alpino',
    visitType: 'B2',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's104',
    name: 'Discesa libera, Super G',
    category: 'Sci alpino',
    visitType: 'B2 EEG',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's105',
    name: 'Slalom Speciale e Gigante',
    category: 'Sci alpino',
    visitType: 'B2',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's106',
    name: 'Snowboard',
    category: 'Sci alpino',
    visitType: 'B2',
    validityYears: 1,
    minAgeM: 11, maxAgeM: null,
    minAgeF: 11, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's107',
    name: 'Sci d\'erba, Carving, Telemark',
    category: 'Sci',
    visitType: 'B2',
    validityYears: 1,
    minAgeM: 11, maxAgeM: null,
    minAgeF: 11, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's108',
    name: 'Sci di fondo, Skiroll',
    category: 'Sci',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's109',
    name: 'Slalom, Figura, Salto, Wakeboard',
    category: 'Sci nautico',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's110',
    name: 'Velocità piloti ed osservatori',
    category: 'Sci nautico',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 18, maxAgeM: null,
    minAgeF: 18, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's111',
    name: 'Sci Velocità',
    category: 'Sci',
    visitType: 'B2 EEG',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's112',
    name: 'Skateboarding',
    category: 'Vari',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's113',
    name: 'Skeleton',
    category: 'Sport Invernali',
    visitType: 'B2 EEG',
    validityYears: 1,
    minAgeM: 14, maxAgeM: null,
    minAgeF: 14, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's114',
    name: 'Skiroll, Freestyle, Downhill...',
    category: 'Pattinaggio',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's115',
    name: 'Pista artificiale',
    category: 'Slittino',
    visitType: 'B2 EEG',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's116',
    name: 'Pista naturale',
    category: 'Slittino',
    visitType: 'A2',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's117',
    name: 'Softball',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 9, maxAgeM: 38,
    minAgeF: 9, maxAgeF: 32,
    ageType: 'Solare'
  },
  {
    id: 's118',
    name: 'Polo',
    category: 'Sport equestri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's119',
    name: 'Salto ostacoli, Completo, Dressage...',
    category: 'Sport equestri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's120',
    name: 'Squash',
    category: 'Racchetta',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 11, maxAgeM: 60,
    minAgeF: 11, maxAgeF: 60,
    ageType: 'Anagrafica'
  },
  {
    id: 's121',
    name: 'Surf',
    category: 'Acquatici',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's122',
    name: 'Tackle Football',
    category: 'Sport di Squadra',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: 48,
    minAgeF: 12, maxAgeF: 48,
    ageType: 'Anagrafica'
  },
  {
    id: 's123',
    name: 'Taekwondo',
    category: 'Combattimento',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's124',
    name: 'Tamburello',
    category: 'Vari',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's125',
    name: 'Tennis tavolo',
    category: 'Racchetta',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's126',
    name: 'Tennis, Beach tennis, Paddle',
    category: 'Racchetta',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: 80,
    minAgeF: 8, maxAgeF: 80,
    ageType: 'Anagrafica'
  },
  {
    id: 's127',
    name: 'Aria compressa (carabina e pistola a mt 10)',
    category: 'Tiro a Segno',
    visitType: 'A3',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's128',
    name: 'Armi a fuoco',
    category: 'Tiro a Segno',
    visitType: 'A3',
    validityYears: 1,
    minAgeM: 16, maxAgeM: null,
    minAgeF: 16, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's129',
    name: 'Tiro a volo',
    category: 'Tiro',
    visitType: 'A3',
    validityYears: 1,
    minAgeM: 13, maxAgeM: null,
    minAgeF: 13, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's130',
    name: 'Tiro alla fune',
    category: 'Vari',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 15, maxAgeM: 60,
    minAgeF: 15, maxAgeF: 50,
    ageType: 'Solare'
  },
  {
    id: 's131',
    name: 'Tiro con l\'arco',
    category: 'Tiro',
    visitType: 'A1',
    validityYears: 2,
    minAgeM: 9, maxAgeM: null,
    minAgeF: 9, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's132',
    name: 'Tiro Dinamico Sportivo',
    category: 'Tiro',
    visitType: 'A3',
    validityYears: 1,
    minAgeM: 18, maxAgeM: null,
    minAgeF: 18, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's133',
    name: 'Triathlon: Tutte',
    category: 'Triathlon',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's134',
    name: 'Tuffi',
    category: 'Acquatici',
    visitType: 'B6',
    validityYears: 1,
    minAgeM: 9, maxAgeM: null,
    minAgeF: 9, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/01 - 31/12'
  },
  {
    id: 's135',
    name: 'Turismo Equestre: Tutte',
    category: 'Sport equestri',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's136',
    name: 'Twirling',
    category: 'Danza/Ginnastica',
    visitType: 'A1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Solare'
  },
  {
    id: 's137',
    name: 'Vela: Tutte',
    category: 'Acquatici',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: 60,
    minAgeF: 10, maxAgeF: 60,
    ageType: 'Solare'
  },
  {
    id: 's138',
    name: 'Velocità (Sportiva)',
    category: 'Vari',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'Sportiva',
    seasonPeriod: '01/07 - 30/06'
  },
  {
    id: 's139',
    name: 'Velocità (Anagrafica)',
    category: 'Vari',
    visitType: 'A2',
    validityYears: 1,
    minAgeM: 8, maxAgeM: 70,
    minAgeF: 8, maxAgeF: 70,
    ageType: 'Anagrafica'
  },
  {
    id: 's140',
    name: 'Volo a motore/a vela',
    category: 'Aerei',
    visitType: 'B4bis',
    validityYears: 1,
    minAgeM: 16, maxAgeM: null,
    minAgeF: 16, maxAgeF: null,
    ageType: 'Anagrafica'
  },
  {
    id: 's141',
    name: 'Wushu Kun Fu tradizionale Contatto leggero',
    category: 'Combattimento',
    visitType: 'B1',
    validityYears: 1,
    minAgeM: 10, maxAgeM: 40,
    minAgeF: 10, maxAgeF: 40,
    ageType: 'Solare'
  },
  {
    id: 's142',
    name: 'Wushu Kun Fu tradizionale Contatto Pieno',
    category: 'Combattimento',
    visitType: 'B5',
    validityYears: 1,
    minAgeM: 13, maxAgeM: 40,
    minAgeF: 13, maxAgeF: 40,
    ageType: 'Solare'
  },
  // Tabella 2 - CIP
  {
    id: 'cip1',
    name: 'Atletica Leggera (CIP)',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 13, maxAgeM: null,
    minAgeF: 13, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip2',
    name: 'Biathlon (CIP)',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip3',
    name: 'Bocce (CIP)',
    category: 'Disabilità',
    visitType: 'A1 cip',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip4',
    name: 'Calcio (CIP)',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip5',
    name: 'Canoa - Kayak (CIP)',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip6',
    name: 'Canottaggio sedile fisso (CIP)',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip7',
    name: 'Ciclismo (CIP)',
    category: 'Disabilità',
    visitType: 'B2 cip',
    validityYears: 1,
    minAgeM: 14, maxAgeM: null,
    minAgeF: 14, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip8',
    name: 'Curling (CIP)',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: 14, maxAgeM: null,
    minAgeF: 14, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip9',
    name: 'Disciplina non codificata',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip10',
    name: 'Discipline Dir-P',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip11',
    name: 'Equitazione (CIP)',
    category: 'Disabilità',
    visitType: 'B2 cip',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip12',
    name: 'Ginnastica (CIP)',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: 12,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip13',
    name: 'Goalball',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip14',
    name: 'Golf (CIP)',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: null, maxAgeM: null,
    minAgeF: null, maxAgeF: null,
    ageType: 'CIP'
  },
  {
    id: 'cip15',
    name: 'Hockey su carrozzina',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: 9, maxAgeM: null,
    minAgeF: 9, maxAgeF: null,
    ageType: 'CIP'
  },
  {
    id: 'cip16',
    name: 'Hockey su ghiaccio (CIP)',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: 16, maxAgeM: null,
    minAgeF: 16, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip17',
    name: 'Judo - lotta (CIP)',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 14, maxAgeM: null,
    minAgeF: 14, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip18',
    name: 'Minibasket (CIP)',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: 6, maxAgeM: 18,
    minAgeF: 6, maxAgeF: 18,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip19',
    name: 'Nuoto (CIP)',
    category: 'Disabilità',
    visitType: 'B2 cip',
    validityYears: 1,
    minAgeM: 9, maxAgeM: null,
    minAgeF: 9, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip20',
    name: 'Pallacanestro (CIP)',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 14, maxAgeM: null,
    minAgeF: 14, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip21',
    name: 'Pallavolo (CIP)',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip22',
    name: 'Scherma (CIP)',
    category: 'Disabilità',
    visitType: 'A1 cip',
    validityYears: 1,
    minAgeM: 14, maxAgeM: null,
    minAgeF: 14, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip23',
    name: 'Sci alpino (CIP)',
    category: 'Disabilità',
    visitType: 'B2 cip',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip24',
    name: 'Sci nordico (CIP)',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 16, maxAgeM: null,
    minAgeF: 16, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip25',
    name: 'Showdown',
    category: 'Disabilità',
    visitType: 'Specifica',
    validityYears: 1,
    minAgeM: 10, maxAgeM: null,
    minAgeF: 10, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip26',
    name: 'Tennis (CIP)',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip27',
    name: 'Tennis Tavolo (CIP)',
    category: 'Disabilità',
    visitType: 'A1 cip',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip28',
    name: 'Tiro a segno (CIP)',
    category: 'Disabilità',
    visitType: 'A3 cip',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip29',
    name: 'Tiro con Arco (CIP)',
    category: 'Disabilità',
    visitType: 'A1 cip',
    validityYears: 1,
    minAgeM: 12, maxAgeM: null,
    minAgeF: 12, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip30',
    name: 'Torball',
    category: 'Disabilità',
    visitType: 'B1 cip',
    validityYears: 1,
    minAgeM: 15, maxAgeM: null,
    minAgeF: 15, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  },
  {
    id: 'cip31',
    name: 'Vela (CIP)',
    category: 'Disabilità',
    visitType: 'A1 cip',
    validityYears: 1,
    minAgeM: 8, maxAgeM: null,
    minAgeF: 8, maxAgeF: null,
    ageType: 'CIP',
    seasonPeriod: '01/10 - 30/9'
  }
];