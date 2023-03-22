import React, {useState} from 'react';

import {AuthorizationForm} from './Components/AuthorizationForm';

function App() {
  const initialArray = [
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
  const [codeInputValue, setCodeInputValue] = useState(initialArray);
  const handleChange = (e: any) => {
    e.preventDefault();
    const value = JSON.parse(e.target.value);
    setCodeInputValue(value)
  };

  return (
    <div className='app'>
      <textarea className="codeInput" onChange={handleChange}>{JSON.stringify(codeInputValue, null, 4)}</textarea>
        {/* @ts-expect-error */}
      <AuthorizationForm fieldsArray={codeInputValue} />
    </div>
  );
}

export default App;
