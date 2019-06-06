import React from 'react';

import GoldTierButton from '../GoldTierButton';
import SilverTierButton from '../SilverTierButton';
import FreeTierButton from '../FreeTierButton';
import { Main } from './Main.style';

const MainComponent = () => (
  <Main>
    <h1>Main App</h1>
    <GoldTierButton />
    <SilverTierButton />
    <FreeTierButton />
  </Main>
);

export default MainComponent;
