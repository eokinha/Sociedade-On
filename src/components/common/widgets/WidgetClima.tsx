import React from 'react';
import { CloudSun, Droplets, Wind, Thermometer, Sun, CloudRain } from 'lucide-react';

interface WidgetClimaProps {
  variant?: 'inline' | 'sidebar';
}

export const WidgetClima: React.FC<WidgetClimaProps> = ({ variant = 'inline' }) => {
  // Mock data
  const clima = {
    temperatura: 28,
    max: 31,
    min: 24,
    condicao: 'Parcialmente Nublado',
    cidade: 'Salvador',
    estado: 'BA',
    humidade: '72%',
    vento: '18 km/h',
    previsao: [
      { dia: 'Amanhã', temp: 29, cond: 'sol', icon: Sun },
      { dia: 'Sex', temp: 27, cond: 'chuva', icon: CloudRain },
      { dia: 'Sáb', temp: 28, cond: 'nublado', icon: CloudSun }
    ]
  };

  if (variant === 'sidebar') {
    return (
      <div className="w-full bg-white border border-gray-100 p-5 select-none rounded-xs">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2.5">
          <div>
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider">
              Previsão do Tempo
            </h3>
            <p className="text-2xs text-brand-gray font-bold uppercase mt-0.5">
              {clima.cidade} — {clima.estado}
            </p>
          </div>
            <span className="text-2xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 uppercase rounded-xs">
            Agora
          </span>
        </div>

        {/* Main Temp Row */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm">
            <CloudSun className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="flex items-baseline">
              <span className="text-3xl font-black text-brand-blue leading-none">{clima.temperatura}</span>
              <span className="text-lg font-extrabold text-brand-blue leading-none">°C</span>
            </div>
            <p className="text-xs font-bold text-brand-gray mt-1">
              {clima.condicao}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-2 bg-gray-50/50 p-2.5 border border-gray-100/50 rounded-xs mb-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-3.5 h-3.5 text-blue-500 font-bold" />
            <div className="min-w-0">
              <p className="text-2xs font-bold text-brand-gray uppercase">Umidade</p>
              <p className="text-xs font-black text-brand-blue leading-tight">{clima.humidade}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-3.5 h-3.5 text-teal-500" />
            <div className="min-w-0">
              <p className="text-2xs font-bold text-brand-gray uppercase">Vento</p>
              <p className="text-xs font-black text-brand-blue leading-tight">{clima.vento}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 col-span-2 border-t border-gray-100/80 pt-2 mt-1">
            <Thermometer className="w-3.5 h-3.5 text-brand-red" />
            <div className="flex gap-4">
              <div>
                <span className="text-2xs font-bold text-brand-gray uppercase mr-1">Máx</span>
                <span className="text-xs font-black text-brand-blue">{clima.max}°</span>
              </div>
              <div>
                <span className="text-2xs font-bold text-brand-gray uppercase mr-1">Mín</span>
                <span className="text-xs font-black text-brand-blue">{clima.min}°</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Day Forecast */}
        <div className="flex flex-col gap-2 pt-2 border-t border-gray-50">
          {clima.previsao.map((prev, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs">
              <span className="text-xs font-bold text-brand-gray w-16">{prev.dia}</span>
              <prev.icon className={`w-4 h-4 ${prev.cond === 'sol' ? 'text-amber-500' : prev.cond === 'chuva' ? 'text-blue-400' : 'text-gray-400'}`} />
              <span className="text-xs font-black text-brand-blue text-right w-12">{prev.temp}°C</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // default inline (topbar)
  return (
    <div className="flex items-center gap-1.5 text-white/90 text-2xs font-bold">
      <CloudSun className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
      <span className="text-white font-black">{clima.temperatura}°C</span>
      <span className="text-white/60 hidden lg:inline">|</span>
      <span className="text-white/60 hidden lg:inline">{clima.cidade}</span>
    </div>
  );
};

export default WidgetClima;
