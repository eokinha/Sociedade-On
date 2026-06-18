import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const WidgetCambio: React.FC = () => {
  // Mock data
  const moedas = [
    { nome: 'USD', valor: '5,12', variacao: 'alta' as const },
    { nome: 'EUR', valor: '5,58', variacao: 'baixa' as const },
  ];

  return (
    <div className="flex items-center gap-3 text-2xs font-bold">
      {moedas.map((moeda) => (
        <div key={moeda.nome} className="flex items-center gap-1 text-white/90">
          <span className="text-white/60">{moeda.nome}</span>
          <span className="text-white font-black">R$ {moeda.valor}</span>
          {moeda.variacao === 'alta' ? (
            <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
          ) : (
            <TrendingDown className="w-2.5 h-2.5 text-red-400" />
          )}
        </div>
      ))}
    </div>
  );
};

export default WidgetCambio;
