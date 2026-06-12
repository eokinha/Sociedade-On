import React, { useState } from 'react';

export const NewsletterInput: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="w-full">
      {subscribed ? (
        <div className="text-brand-yellow font-bold text-sm bg-brand-yellow/10 p-3 rounded-lg border border-brand-yellow/30 animate-pulse">
          ✓ Cadastro realizado com sucesso!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
            className="flex-1 bg-white/10 text-white placeholder-gray-400 focus:placeholder-transparent border border-white/20 focus:border-brand-yellow px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
          />
          <button
            type="submit"
            className="bg-brand-yellow hover:bg-[#e09a00] text-brand-blue font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow-md shrink-0"
          >
            Inscrever
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterInput;
