import React, { useState, useEffect } from 'react';
import { Sport } from '../types';
import { Calculator, Calendar, CheckCircle2, XCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface AgeCalculatorProps {
  sport: Sport;
}

type EligibilityResult = {
  status: 'eligible' | 'too_young' | 'too_old' | 'error';
  message: string;
  eligibilityDate?: Date;
};

export const AgeCalculator: React.FC<AgeCalculatorProps> = ({ sport }) => {
  const [birthDateStr, setBirthDateStr] = useState<string>('');
  const [gender, setGender] = useState<'M' | 'F'>('M');
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const minAge = gender === 'M' ? sport.minAgeM : sport.minAgeF;
  const maxAge = gender === 'M' ? sport.maxAgeM : sport.maxAgeF;

  useEffect(() => {
    calculateEligibility();
  }, [birthDateStr, gender, sport]);

  const calculateEligibility = () => {
    // If empty, reset result (show info state)
    if (!birthDateStr) {
      setResult(null);
      return;
    }

    const birthDate = new Date(birthDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 1. Validation Logic
    if (isNaN(birthDate.getTime())) {
         setResult({ status: 'error', message: "La data inserita non è valida." });
         return;
    }

    if (birthDate > today) {
        setResult({ status: 'error', message: "La data di nascita non può essere nel futuro." });
        return;
    }

    if (birthDate.getFullYear() < 1900) {
        setResult({ status: 'error', message: "Inserire un anno di nascita valido." });
        return;
    }
    
    if (minAge === null) {
      setResult(null);
      return;
    }

    // 2. Eligibility Calculation
    let eligibleDate: Date;
    const birthYear = birthDate.getFullYear();

    switch (sport.ageType) {
      case 'Anagrafica':
        // IDONEO: Giorno del compleanno
        eligibleDate = new Date(birthYear + minAge, birthDate.getMonth(), birthDate.getDate());
        break;

      case 'Solare':
        // IDONEO: 1° Gennaio dell'anno in cui compie gli anni (millesimo)
        eligibleDate = new Date(birthYear + minAge, 0, 1);
        break;

      case 'Sportiva':
      case 'CIP':
        if (!sport.seasonPeriod || sport.seasonPeriod === '01/01 - 31/12') {
          eligibleDate = new Date(birthYear + minAge, 0, 1);
        } else {
          // Es. 01/07 - 30/06
          const [startStr] = sport.seasonPeriod.split(' - ');
          const [day, month] = startStr.split('/').map(Number);
          eligibleDate = new Date(birthYear + minAge, month - 1, day);
        }
        break;

      default:
        eligibleDate = new Date(birthYear + minAge, 0, 1);
    }

    // 3. Max Age Check
    let tooOldDate: Date | null = null;
    let isTooOld = false;

    if (maxAge !== null) {
       if (sport.ageType === 'Anagrafica') {
           tooOldDate = new Date(birthYear + maxAge + 1, birthDate.getMonth(), birthDate.getDate());
       } else {
           tooOldDate = new Date(birthYear + maxAge + 1, 0, 1);
       }

       if (tooOldDate && today >= tooOldDate) {
           isTooOld = true;
       }
    }

    const isEligible = today >= eligibleDate && !isTooOld;

    if (isTooOld) {
        setResult({
            status: 'too_old',
            message: `L'atleta ha superato l'età massima prevista (${maxAge} anni).`
        });
    } else if (isEligible) {
        setResult({
            status: 'eligible',
            message: "L'atleta ha l'età corretta per l'agonismo.",
            eligibilityDate: eligibleDate
        });
    } else {
        setResult({
            status: 'too_young',
            message: "L'atleta non ha ancora raggiunto l'età minima.",
            eligibilityDate: eligibleDate
        });
    }
  };

  const formatDate = (d: Date) => {
    return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // Helper to determine styles based on status
  const getResultStyle = (status: EligibilityResult['status']) => {
      switch (status) {
          case 'eligible':
              return 'bg-green-50 border-green-200 text-green-800';
          case 'too_old':
              return 'bg-red-50 border-red-200 text-red-800';
          case 'too_young':
              return 'bg-amber-50 border-amber-200 text-amber-800';
          case 'error':
              return 'bg-red-100 border-red-300 text-red-900';
          default:
              return 'bg-gray-50 border-gray-200';
      }
  };

  const getResultIcon = (status: EligibilityResult['status']) => {
      switch (status) {
          case 'eligible':
              return <CheckCircle2 className="w-6 h-6 shrink-0 text-green-600 mt-0.5" />;
          case 'too_old':
              return <XCircle className="w-6 h-6 shrink-0 text-red-600 mt-0.5" />;
          case 'too_young':
              return <AlertCircle className="w-6 h-6 shrink-0 text-amber-600 mt-0.5" />;
          case 'error':
              return <AlertTriangle className="w-6 h-6 shrink-0 text-red-700 mt-0.5" />;
      }
  };

  if (minAge === null) return null;

  return (
    <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-5 border border-slate-200 shadow-sm relative overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>

      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <Calculator className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-gray-800">Verifica Età Agonistica</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 relative z-10">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Sesso</label>
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setGender('M')}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                gender === 'M' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Maschio
            </button>
            <button
              onClick={() => setGender('F')}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                gender === 'F' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Femmina
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Data di Nascita</label>
          <div className="relative">
            <input
              type="date"
              value={birthDateStr}
              onChange={(e) => setBirthDateStr(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow placeholder-gray-400"
              placeholder="gg/mm/aaaa"
            />
            <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Result Box */}
      {result && birthDateStr && (
        <div className={`rounded-lg p-4 border animate-fade-in ${getResultStyle(result.status)}`}>
          <div className="flex items-start gap-3">
            {getResultIcon(result.status)}
            
            <div>
              <p className="font-bold text-lg leading-tight">
                {result.status === 'eligible' ? 'Idoneo per età' : 
                 result.status === 'too_young' ? 'Non ancora idoneo' : 
                 result.status === 'too_old' ? 'Non idoneo' : 'Errore'}
              </p>
              <p className="text-sm opacity-90 mt-1">{result.message}</p>
              
              {result.status === 'too_young' && result.eligibilityDate && (
                <div className="mt-3 bg-white/60 rounded p-2 text-sm font-medium inline-block border border-amber-200/50">
                  Data idoneità: <span className="font-bold">{formatDate(result.eligibilityDate)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {!birthDateStr && (
        <div className="flex items-center text-xs text-gray-400 mt-2 bg-gray-50 p-2 rounded border border-gray-100">
           <Info className="w-4 h-4 mr-2" />
           Inserisci la data completa per verificare l'idoneità.
        </div>
      )}
    </div>
  );
};