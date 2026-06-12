import React from 'react';

export const SociedadePlay: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col" id="sociedadeplay">
      {/* Align header space with Destaques section title on desktop */}
      <div className="mb-5 border-b border-transparent pb-3 h-[29px] hidden lg:block" />
      
      <div className="relative overflow-hidden rounded-2xl bg-brand-blue text-white p-6 shadow-md border border-white/5 flex flex-col justify-between flex-1 select-none min-h-[220px] lg:min-h-0">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col gap-3.5 text-left relative z-10">
          {/* Logo Brand */}
          <div className="flex items-center text-lg font-black tracking-tighter">
            <span>Sociedade</span>
            <span className="text-brand-yellow flex items-center ml-0.5 font-black">
              PLAY
              <span className="w-4 h-4 rounded-full bg-brand-yellow flex items-center justify-center ml-1 shadow-sm shrink-0">
                <span className="w-0 h-0 border-t-[2.5px] border-t-transparent border-b-[2.5px] border-b-transparent border-l-[4px] border-l-brand-blue ml-0.5" />
              </span>
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-semibold">
            Assista, ouça e se conecte. Conteúdos exclusivos da Rádio Sociedade.
          </p>
        </div>

        <button
          onClick={() => console.log('Acessar Sociedade Play')}
          className="w-full bg-brand-yellow hover:bg-[#e09a00] text-brand-blue font-black text-[11px] uppercase tracking-wider py-3 rounded-lg shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 mt-6 cursor-pointer relative z-10"
        >
          ACESSE AGORA
        </button>
      </div>
    </div>
  );
};

export default SociedadePlay;

