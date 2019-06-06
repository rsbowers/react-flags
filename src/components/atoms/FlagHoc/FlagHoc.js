import React from 'react';

import { useFlags } from "../../../flags";

const FlagHocComponent = ({ children, flag }) => {
  const flags = useFlags();
  if(flags[flag]) {
    return children;
  }
  return null;
};

export default FlagHocComponent;
