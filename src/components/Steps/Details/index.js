import React, { useEffect, useState } from 'react';
import { Select, Radio } from 'antd';
import './styles.scss';

const { Option } = Select;

const ageOptions = [18, 25, 32, 40];
const genderOptions = ['Feminine', 'Masculine'];

function Details() {
  const [selectedAge, setSelectedAge] = useState();
  const [selectedGender, setSelectedGender] = useState();

  const onChangeAge = (value) => {
    setSelectedAge(value);
  }
  
  const onChangeGender = (event) => {
    const value = event.target.value;
    setSelectedGender(value);
  }
  
  useEffect(() => {
    console.log(selectedAge);
    console.log(selectedGender);
  }, [selectedAge, selectedGender])

  return (
    <div className="details-step">
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select an age"
        optionFilterProp="children"
        onChange={onChangeAge}
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
          onChange={onChangeGender}
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
