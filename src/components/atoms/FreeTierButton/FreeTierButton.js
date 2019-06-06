import React from 'react';

import FlagHOC from '../FlagHoc';
import { FreeTierButton } from './FreeTierButton.style';

const FreeTierButtonComponent = () => (
  <FlagHOC flag='free'>
    <FreeTierButton>
      <p>FreeTierButton Component</p>
    </FreeTierButton>
  </FlagHOC>
);

export default FreeTierButtonComponent;
