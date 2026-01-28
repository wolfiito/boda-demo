"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface WeddingContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  isEnvelopeOpen: boolean;
  setIsEnvelopeOpen: (isOpen: boolean) => void; 
}

const WeddingContext = createContext<WeddingContextType | undefined>(undefined);

export function WeddingProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <WeddingContext.Provider 
      value={{ 
        isPlaying, 
        togglePlay, 
        isEnvelopeOpen, 
        setIsEnvelopeOpen 
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
}

export function useWedding() {
  const context = useContext(WeddingContext);
  if (context === undefined) {
    throw new Error("useWedding debe usarse dentro de un WeddingProvider");
  }
  return context;
}