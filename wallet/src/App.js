import React, { useState } from 'react';
import { generateMnemonic } from 'bip39';

function App() {
  const [mnemonic, setMnemonic] = useState('');

  // Function to generate a new mnemonic phrase
  const generateMnemonicPhrase = () => {
    const newMnemonic = generateMnemonic();

    setMnemonic(newMnemonic);
  };

  

  return (
    <div>
      <button onClick={generateMnemonicPhrase}>Generate Mnemonic Phrase</button>
      <p>Mnemonic Phrase: {mnemonic}</p>
    </div>
  );
}

export default App;
