"use client";
import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [navbarContent, setNavbarContent] = useState(null);
  return (
    <NavbarContext.Provider value={{ navbarContent, setNavbarContent }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  return useContext(NavbarContext);
}
