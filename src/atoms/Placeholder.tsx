import React from "react";

type propsType = { className?: string };

function Placeholder({ className = "" }: propsType) {
  return <div className={className + " bg-slate-700 rounded-lg "} />;
}

export default Placeholder;
