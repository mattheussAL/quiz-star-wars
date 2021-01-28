import React from 'react';

import { InputPage } from './styles';

function Input({ onChange }) {
  return (
    <div>
      <InputPage
        required
        onChange={onChange}
        placeholder="Diga seu nome padalwan"
      />
    </div>
  );
}

export default Input;