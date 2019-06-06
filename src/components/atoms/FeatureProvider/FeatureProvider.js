import React from 'react';

import { FlagsProvider } from "../../../flags";

const FeatureProviderComponent = ({ data, children }) => {

  const flags = {
    ...data,
    silverTier: flags => {
      return flags.foo
    },
    goldTier: flags => {
      return flags.foo && flags.bar
    },
    getColor: flags => {
      let color;
      switch (flags.baz) {
        case 'green':
          color = 'I am green';
          break;
        default:
          color = 'I default to red';
      }
      return color;
    }
  }

  return (
    <FlagsProvider flags={flags}>
      {children}
    </FlagsProvider>
  )
};

export default FeatureProviderComponent;
