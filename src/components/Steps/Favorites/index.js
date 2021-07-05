import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Input, Checkbox } from 'antd';
import './styles.scss';

const colorOptions = ['Yellow', 'Blue', 'Red', 'Green'];

function Favorites({ data, onChange }) {
  const [favoriteBook, setFavoriteBook] = useState(data.favoriteBook);
  const [favoriteColors, setFavoriteColors] = useState(data.favoriteColors || []);

  const handleChangeFavoriteColors = (event) => {
    const value = event.target.value;
    const checkedItems = manageCheckedItems(value);
    onChange({ 'favoriteColors': checkedItems });
    setFavoriteColors(checkedItems);
  };

  const handleChangeFavoriteBook = (event) => {
    const value = event.target.value;
    onChange({ 'favoriteBook': value });
    setFavoriteBook(value);
  };

  const manageCheckedItems = (value) => {
    if (favoriteColors.includes(value)) {
      return favoriteColors.filter((item) => item !== value);
    } else {
      return [...favoriteColors, value];
    }
  };

  return (
    <div className="favotites-step">
      <Input
        value={favoriteBook}
        placeholder="Favorite Book"
        onChange={handleChangeFavoriteBook}
      />
      <div className="checkbox-options">
        <h4>Favorite Colors</h4>
        {colorOptions.map((color) => (
          <Checkbox
            key={color}
            value={color}
            checked={favoriteColors.includes(color)}
            onChange={handleChangeFavoriteColors}
          >
            {color}
          </Checkbox>
        ))}
      </div>
    </div>
  );
}

export default Favorites;

Favorites.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
};
