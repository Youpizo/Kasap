//Page conteneur, entourer des éléments de "layout" pour styliser

import React from "react";
import "../Layout/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

export default Layout;

