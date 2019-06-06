import React from 'react';

import { useFlags } from "../../../flags";
import { GoldTierButton } from './GoldTierButton.style';

const GoldTierButtonComponent = () => {
  const { goldTier } = useFlags();
  if(goldTier) {
    return (
      <GoldTierButton>
        <p>GoldTierButton Component</p>
      </GoldTierButton>
    )
  }
  return null;
};

export default GoldTierButtonComponent;
