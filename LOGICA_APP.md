# Documentazione Logica Applicativa - Qualevisita

L'applicazione **Qualevisita** è uno strumento progettato per atleti, genitori e medici sportivi per identificare rapidamente il tipo di visita medica agonistica richiesta per ogni disciplina sportiva, basandosi sulle normative vigenti (FMSI/Ministero della Salute).

## 1. Architettura Tecnica

- **Framework**: React 19 (Vite)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS (Vanilla CSS per logiche custom se necessario)
- **Iconografia**: Lucide React
- **Gestione Stato**: React hooks (`useState`, `useMemo`, `useEffect`)

## 2. Modello Dati (`types.ts`)

L'app si basa su due entità principali definite in `services/data.ts`:

### Sport
Rappresenta una disciplina sportiva con i suoi requisiti:
- `id`, `name`, `category`: Identificativi e classificazione.
- `visitType`: Il codice del protocollo (es. "A1", "B1").
- `minAgeM` / `minAgeF`: Età minima per l'agonismo (maschi/femmine).
- `ageType`: Il criterio di calcolo dell'età (Anagrafica, Solare, Sportiva).
- `seasonPeriod`: Il periodo della stagione sportiva (necessario per `ageType: 'Sportiva'`).

### ProtocolDetail
Definisce cosa prevede ogni tipo di visita:
- `code`: Corrisponde al `visitType` dello sport.
- `exams`: Array di esami richiesti (es. "ECG a riposo", "Spirometria").

## 3. Logica di Calcolo dell'Età (`AgeCalculator.tsx`)

Il cuore dell'applicazione gestisce tre diversi modi di calcolare l'età minima per l'accesso all'agonismo in Italia:

1.  **Anagrafica**: L'atleta diventa idoneo il giorno del compimento dell'età prevista.
2.  **Solare**: L'atleta è idoneo dal 1° Gennaio dell'anno in cui compie l'età prevista (millesimo).
3.  **Sportiva/CIP**: L'atleta è idoneo dall'inizio della stagione sportiva (es. 1° Luglio) dell'anno in cui compie l'età prevista. Se non specificato, si comporta come la Solare.

L'algoritmo calcola la `eligibleDate` (data di idoneità) e la confronta con la data odierna per restituire lo stato (`eligible`, `too_young`, `too_old`).

## 4. Flusso di Navigazione

L'interfaccia si divide in due viste principali gestite da uno stato `currentView`:

### Vista Ricerca (`search`)
- Permette di cercare uno sport per nome o categoria.
- Filtra i risultati in tempo reale tramite `useMemo`.
- Suddivide i risultati tra **Standard** e **CIP** (Comitato Italiano Paralimpico).
- Selezionando uno sport, si apre un modal (`DetailPanel`) con i dettagli della visita e il calcolatore.

### Vista Tabella (`table`)
- Offre una panoramica completa di tutti gli sport censiti.
- Organizza i dati in formato tabellare per una consultazione rapida tipo "foglio di calcolo".

## 5. Componenti Chiave

- **SearchBar**: Input di ricerca con debounce visivo.
- **SportList**: Griglia di card o lista per gli sport trovati.
- **DetailPanel**: Mostra la validità del certificato (mesi/anni) e l'elenco esami.
- **ProtocolBadge**: Componente UI per visualizzare il codice visita (A1, B1, ecc.) con colori distintivi.
- **AgeCalculator**: Tool interattivo per la verifica immediata dell'idoneità.

## 6. Directory Structure

```text
/
├── App.tsx             # Entry point, routing interno e state management
├── types.ts            # Definizioni interfacce TypeScript
├── components/         # Componenti UI riutilizzabili
│   ├── AgeCalculator   # Logica calcolo età
│   ├── DetailPanel     # Modal dettagli sport
│   ├── TableView       # Vista tabellare
│   └── ...
├── services/
│   └── data.ts         # Database degli sport e dei protocolli
└── ...
```
