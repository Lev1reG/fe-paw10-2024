"use client";

import { createContext, useContext, useState } from "react";

const FormPopUpContext = createContext();

export const FormPopUpProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [dataChanged, setDataChanged] = useState(false);

  return (
    <FormPopUpContext.Provider value={{ open, setOpen, id, setId, dataChanged, setDataChanged }}>
      {children}
    </FormPopUpContext.Provider>
  );
};

export const useFormPopUp = () => {
  const context = useContext(FormPopUpContext);
  if (!context) {
    throw new Error("useFormPopUp must be used within a TableDataProvider");
  }
  return context;
};
