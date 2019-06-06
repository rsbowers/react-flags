import React from 'react';

import { useFlags } from "../../../flags";
import { SilverTierButton } from './SilverTierButton.style';

const SilverTierButtonComponent = () => {
  const { silverTier, getColor } = useFlags();
  if(silverTier) {
    return (
      <SilverTierButton>
        <p>SilverTierButton Component</p>
        <p>{getColor}</p>
      </SilverTierButton>
    )
  }
  return null;
};

export default SilverTierButtonComponent;
