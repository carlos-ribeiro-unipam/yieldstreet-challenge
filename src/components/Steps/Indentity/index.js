import React, { useState } from "react";
import { Input } from 'antd';
import './styles.scss';

function Identity() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="identity-step">
      <Input
        className="name-input"
        value={name}
        placeholder="Name"
        onChange={setName}
      />
      <Input
        value={email}
        placeholder="Email"
        onChange={setEmail}
      />
    </div>
  );
}

export default Identity;
