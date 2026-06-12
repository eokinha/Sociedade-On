import React from 'react';
import { Editoria } from '../../../types/editoria';

interface TagEditoriaProps {
  editoria: Editoria;
  className?: string;
}

export const TagEditoria: React.FC<TagEditoriaProps> = ({ editoria, className = '' }) => {
  return (
    <span
      className={`inline-block text-[10px] md:text-xs font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded text-white ${className}`}
      style={{ backgroundColor: editoria.cor || '#0D1B4B' }}
    >
      {editoria.nome}
    </span>
  );
};

export default TagEditoria;
