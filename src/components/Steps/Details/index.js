import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select, Radio } from 'antd';
import './styles.scss';

const { Option } = Select;

const ageOptions = [18, 25, 32, 40];
const genderOptions = ['Feminine', 'Masculine'];

function Details({ data, onChange }) {
  const [selectedAge, setSelectedAge] = useState(data.age);
  const [selectedGender, setSelectedGender] = useState(data.gender);

  const handleChangeAge = (value) => {
    onChange({ 'age': value });
    setSelectedAge(value);
  }
  
  const handleChangeGender = (event) => {
    const value = event.target.value;
    onChange({ 'gender': value });
    setSelectedGender(value);
  }

  return (
    <div className="details-step">
      <Select
        showSearch
        value={selectedAge}
        style={{ width: 200 }}
        placeholder="Select an age"
        optionFilterProp="children"
        onChange={handleChangeAge}
        filterOption={(input, option) =>
          option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {ageOptions.map((age) => (
          <Option
            key={age}
            value={age}
          >
            {age}
          </Option>
        ))}
      </Select>
      <div className="gender-selection">
        <h4>Select gender</h4>
        <Radio.Group
          onChange={handleChangeGender}
          value={selectedGender}
        >
          {genderOptions.map((gender) => (
            <Radio
              key={gender}
              value={gender}
            >
              {gender}
            </Radio>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
}

export default Details;

Details.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
};
