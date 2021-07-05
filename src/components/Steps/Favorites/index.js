import React, { useEffect, useState } from "react";
import { Input, Checkbox } from 'antd';
import './styles.scss';

const colorOptions = ['Yellow', 'Blue', 'Red', 'Green'];

function Favorites() {
  const [book, setBook] = useState();
  const [selectedColor, setSelectedColor] = useState([]);

  const onChange = (event) => {
    const value = event.target.value;
    setSelectedColor(value);
  }

  useEffect(() => {
    console.log(selectedColor);
  }, [selectedColor]);

  return (
    <div className="favotites-step">
      <Input
        value={book}
        placeholder="Favorite Book"
        onChange={setBook}
      />
      <div className="checkbox-options">
        <h4>Favorite Colors</h4>
        {colorOptions.map((color) => (
          <Checkbox
            key={color}
            value={color}
            onChange={onChange}
          >
            {color}
          </Checkbox>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
