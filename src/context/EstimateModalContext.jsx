import { createContext, useCallback, useContext, useMemo, useState } from "react";
import EstimateModal from "../components/sections/EstimateModal";

const EstimateModalContext = createContext(null);

export function EstimateModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openEstimateModal = useCallback(() => setIsOpen(true), []);
  const closeEstimateModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openEstimateModal, closeEstimateModal }),
    [isOpen, openEstimateModal, closeEstimateModal],
  );

  return (
    <EstimateModalContext.Provider value={value}>
      {children}
      <EstimateModal isOpen={isOpen} onClose={closeEstimateModal} />
    </EstimateModalContext.Provider>
  );
}

export function useEstimateModal() {
  const context = useContext(EstimateModalContext);

  if (!context) {
    throw new Error("useEstimateModal must be used within EstimateModalProvider");
  }

  return context;
}