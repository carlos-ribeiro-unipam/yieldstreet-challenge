import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './styles.scss';

function Identity({ data, onChange }) {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);

  const handleChangeName = (event) => {
    const value = event.target.value;
    onChange({ 'name': value });
    setName(value);
  }

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    onChange({ 'email': value });
    setEmail(value);
  }

  return (
    <div className="identity-step">
      <Input
        className="name-input"
        value={name}
        placeholder="Name"
        onChange={handleChangeName}
      />
      <Input
        value={email}
        placeholder="Email"
        onChange={handleChangeEmail}
      />
    </div>
  );
}

export default Identity;

Identity.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
};
