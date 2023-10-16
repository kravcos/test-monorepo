import React from 'react';

interface InputProps {
  children?: React.ReactNode;
}

export function Input({ children }: InputProps) {
  return (
    <div>
      <h1>input</h1>
      {children}
    </div>
  );
}
