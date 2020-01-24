import React from 'react';
import { Section, Container } from 'bloomer';

import Items from './components/Items';

function App() {
  return (
    <Section>
    <Container isFluid className="App">
      <div className="level"><h1 className="level-item title is-1">Magic Item Bag</h1></div>
      <Items />
    </Container>
    </Section>
  );
}

export default App;
