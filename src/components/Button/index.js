import React from 'react';

import { ButtonPage } from './styles';

function Button({children}) {
  return (
    <div>
      <ButtonPage>{children}</ButtonPage>
    </div>
  )
}

export default Button;