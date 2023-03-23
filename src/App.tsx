import React, {useState} from 'react';

import {AuthorizationForm} from './Components/AuthorizationForm';
import {ArrEl} from './types';

function App() {
  const initialArray: ArrEl[] = [
    {
        id: 'first_name',
        type: 'inputText',
        label: 'First Name',
        defaultValue: 'Some first name'
    },
    {
        id: 'last_name',
        type: 'inputEmail',
        defaultValue: 'someemail@example.com'
    },
    {
        id: 'email',
        type: 'inputEmail',
        label: 'Email',
        required: true
    },
    {
        id: 'password',
        type: 'inputPassword',
        label: 'Password',
        required: true
    },
]
  const [codeInputValue, setCodeInputValue] = useState<ArrEl[]>(initialArray);
  const handleChange = (e: any) => {
    e.preventDefault();
    let value: ArrEl[];
    try {
      value = JSON.parse(e.target.value);
    } catch(e) {
      value=[]
    }
    setCodeInputValue(value)
  };

  return (
    <div className='app'>
      <textarea className="codeInput" onChange={handleChange}>{JSON.stringify(codeInputValue, null, 4)}</textarea>
      <AuthorizationForm fieldsArray={codeInputValue} />
    </div>
  );
}

export default App;
