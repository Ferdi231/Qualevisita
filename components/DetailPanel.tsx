import React from 'react';
import { Sport, ProtocolDetail } from '../types';
import { ProtocolBadge } from './ProtocolBadge';
import { CheckCircle2, Clock, AlertCircle, FileText, Calendar, Users, AlertTriangle, FileWarning, Stethoscope, Activity, FileInput, Phone, CalendarCheck } from 'lucide-react';
import { AgeCalculator } from './AgeCalculator';

interface DetailPanelProps {
  sport: Sport | null;
  protocol: ProtocolDetail | null;
}

// Keywords for External Specialist Exams (Patient brings result)
const EXTERNAL_KEYWORDS = [
  'eeg', 
  'elettroencefalogramma', 
  'orl', 
  'audiometria', 
  'oculistica', 
  'fondo', 
  'fundus',
  'campimetria', 
  'stereopsi', 
  'vestibolare', 
  'sierologia', 
  'hiv', 
  'hbv', 
  'hcv', 
  'gravidanza', 
  'beta-hcg',
  'rmn',
  'risonanza'
];

// Keywords for Specialist Exams performed internally by the Sports Doctor
const INTERNAL_SPECIALIST_KEYWORDS = [
  'neurologica',
  'visita neurologica'
];

export const DetailPanel: React.FC<DetailPanelProps> = ({ sport, protocol }) => {
  if (!sport) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-white rounded-2xl border border-gray-100 shadow-lg text-gray-400 min-h-[400px]">
        <FileText className="w-16 h-16 mb-4 opacity-20" />
        <h3 className="text-xl font-semibold mb-2 text-gray-600">Nessuno sport selezionato</h3>
        <p className="max-w-xs mx-auto">
          Seleziona uno sport dalla lista a sinistra per visualizzare i dettagli della visita medica richiesta.
        </p>
      </div>
    );
  }

  const formatAge = (val: number | null) => val === null ? 'Senza Limiti' : `${val} anni`;

  // Logic to separate exams
  const externalExams: string[] = [];
  const internalSpecialistExams: string[] = [];
  const standardExams: string[] = [];

  if (protocol) {
    protocol.exams.forEach(exam => {
      const lowerExam = exam.toLowerCase();
      
      const isExternal = EXTERNAL_KEYWORDS.some(keyword => lowerExam.includes(keyword));
      const isInternalSpecialist = INTERNAL_SPECIALIST_KEYWORDS.some(keyword => lowerExam.includes(keyword));

      if (isExternal) {
        externalExams.push(exam);
      } else if (isInternalSpecialist) {
        internalSpecialistExams.push(exam);
      } else {
        standardExams.push(exam);
      }
    });
  }

  const hasSpecialistExams = externalExams.length > 0 || internalSpecialistExams.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden sticky top-8 animate-fade-in-up transform transition-all">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-6 text-white relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
        
        <div className="flex justify-between items-start mb-4 gap-4 relative z-10">
          <div>
            <span className="text-blue-100 text-xs font-bold tracking-wider uppercase bg-blue-800/40 border border-blue-400/20 px-2 py-1 rounded inline-block mb-2 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              {sport.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight drop-shadow-md">{sport.name}</h2>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20 shrink-0 shadow-inner">
             <ProtocolBadge type={sport.visitType} size="lg" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-8">
        
        {/* Ages and Validity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
             <h4 className="flex items-center text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">
               <Users className="w-4 h-4 mr-2 text-blue-500" /> Età Prescritte
             </h4>
             <div className="space-y-3">
               <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Maschi</span>
                  <div className="text-sm">
                    <span className="text-slate-500">Min:</span> <span className="font-bold text-slate-900 mr-2">{formatAge(sport.minAgeM)}</span>
                    <span className="text-slate-500">Max:</span> <span className="font-bold text-slate-900">{formatAge(sport.maxAgeM)}</span>
                  </div>
               </div>
               <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Femmine</span>
                  <div className="text-sm">
                    <span className="text-slate-500">Min:</span> <span className="font-bold text-slate-900 mr-2">{formatAge(sport.minAgeF)}</span>
                    <span className="text-slate-500">Max:</span> <span className="font-bold text-slate-900">{formatAge(sport.maxAgeF)}</span>
                  </div>
               </div>
               <div className="text-xs text-slate-400 text-right mt-1">
                 Tipologia Età: <span className="font-medium text-slate-600">{sport.ageType}</span>
               </div>
             </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex items-center text-blue-800 font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                <Clock className="w-5 h-5 mr-2" />
                Validità Certificato
              </div>
              <p className="text-blue-900 text-2xl font-bold">{sport.validityYears} {sport.validityYears === 1 ? 'Anno' : 'Anni'}</p>
            </div>

            {sport.seasonPeriod && (
               <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="flex items-center text-indigo-800 font-semibold mb-1 group-hover:text-indigo-600 transition-colors">
                  <Calendar className="w-5 h-5 mr-2" />
                  Stagione Sportiva
                </div>
                <p className="text-indigo-900 font-medium">{sport.seasonPeriod}</p>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Age Calculator */}
        <AgeCalculator sport={sport} />

        {/* AGE-RELATED BLOOD TESTS BANNER */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4 shadow-sm animate-fade-in">
          <div className="flex items-start">
            <div className="bg-red-100 p-2 rounded-full mr-3 shrink-0">
              <Activity className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="text-red-900 font-bold text-sm uppercase mb-1">Richiesta Esami Ematici Over 40/50</h4>
              <p className="text-red-800 text-sm leading-relaxed">
                Per i soggetti <strong>Maschi &gt; 40 anni</strong> e <strong>Femmine &gt; 50 anni</strong> sono richiesti esami ematici con profilo lipidico completo (HDL, TG, Colesterolo totale).
              </p>
            </div>
          </div>
        </div>

        {/* SPECIALIST EXAMS BANNER */}
        {hasSpecialistExams && (
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 shadow-[0_4px_20px_-5px_rgba(245,158,11,0.3)] animate-fade-in">
            <div className="flex items-start mb-4">
               <div className="bg-amber-100 p-2 rounded-full mr-3 shrink-0 animate-pulse-slow">
                 <FileWarning className="w-6 h-6 text-amber-600" />
               </div>
               <div>
                 <h3 className="text-amber-900 font-bold text-lg uppercase tracking-wide">
                   Accertamenti Specialistici Integrativi
                 </h3>
               </div>
            </div>
            
            {/* EXTERNAL EXAMS SECTION */}
            {externalExams.length > 0 && (
              <div className="mb-4">
                <p className="text-amber-800 text-sm font-semibold mb-2 flex items-center">
                   <AlertTriangle className="w-4 h-4 mr-1.5" />
                   DA EFFETTUARE ESTERNAMENTE:
                </p>
                <p className="text-amber-700 text-xs mb-2 pl-6">
                   Il paziente <strong>DEVE</strong> presentarsi alla visita con il referto.
                </p>
                <ul className="space-y-2 pl-6">
                  {externalExams.map((exam, index) => (
                    <li key={`ext-${index}`} className="flex items-start bg-white/80 p-2 rounded border border-amber-200 shadow-sm">
                      <span className="text-gray-900 font-bold text-sm uppercase">{exam}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* INTERNAL SPECIALIST EXAMS SECTION */}
            {internalSpecialistExams.length > 0 && (
              <div className={externalExams.length > 0 ? "pt-4 border-t border-amber-200" : ""}>
                 <p className="text-blue-800 text-sm font-semibold mb-2 flex items-center">
                   <Stethoscope className="w-4 h-4 mr-1.5" />
                   ESECUTI IN SEDE DAL MEDICO DELLO SPORT:
                </p>
                <ul className="space-y-2 pl-6">
                  {internalSpecialistExams.map((exam, index) => (
                    <li key={`int-spec-${index}`} className="flex items-start bg-blue-50/80 p-2 rounded border border-blue-200 shadow-sm">
                       <span className="text-gray-900 font-bold text-sm uppercase">{exam}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* STANDARD EXAMS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-1 h-6 bg-blue-500 rounded-full mr-3 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
            Protocollo Base ({sport.visitType})
          </h3>
          
          {protocol ? (
            <>
              {protocol.description && <p className="text-gray-600 mb-4 ml-4 italic">{protocol.description}</p>}
              <ul className="space-y-3 ml-4">
                {standardExams.map((exam, index) => (
                  <li key={`std-${index}`} className="flex items-start bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.01] hover:border-blue-200">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 drop-shadow-sm" />
                    <span className="text-gray-700 font-medium text-sm md:text-base">{exam}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
             <div className="ml-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-500 italic">
               Dettagli protocollo specifico non disponibili. Fare riferimento alla normativa vigente per la tabella {sport.visitType}.
             </div>
          )}
        </div>

        {/* Notes */}
        {sport.notes && (
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 ml-0 md:ml-4 shadow-sm">
            <div className="flex items-center text-amber-800 font-semibold mb-2">
              <AlertCircle className="w-5 h-5 mr-2" />
              Note
            </div>
            <p className="text-amber-700 text-sm">{sport.notes}</p>
          </div>
        )}

        {/* CHRONIC PATHOLOGY REMINDER */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start animate-fade-in">
          <FileInput className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
          <p className="text-blue-800 text-sm">
             <strong>Promemoria:</strong> Ricorda di portare eventualmente documentazione specifica se affetto da patologie croniche.
          </p>
        </div>

      </div>
      
      {/* Footer CTA */}
      <div className="bg-gray-50 p-6 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+390461381638"
              className="flex-1 flex items-center justify-center bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 mr-2" />
              Chiama Ora
            </a>
            
            <a 
              href="https://prenota.policura.it/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <CalendarCheck className="w-5 h-5 mr-2" />
              Prenota Online
            </a>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center">
          Le normative possono subire variazioni. Contattare la segreteria per conferma.
        </p>
      </div>
    </div>
  );
};
