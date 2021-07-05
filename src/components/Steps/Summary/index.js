/* eslint-disable react/display-name */
import React from "react";
import PropTypes from 'prop-types';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Favorite Book',
    dataIndex: 'favoriteBook',
    key: 'favoriteBook',
  },
  {
    title: 'Favorite Colors',
    key: 'favoriteColors',
    dataIndex: 'favoriteColors',
    render: favoriteColors => (
      <>
        {favoriteColors.map((color) => (
          <Tag
            key={color}
            color={color}
          >
            {color.toUpperCase()}
          </Tag>
        ))}
      </>
    ),
  },
];

function Summary({ data }) {
  return (
    <>
      <Table
        dataSource={[ data ]}
        columns={columns}
      />
    </>
  );
}

export default Summary;

Summary.propTypes = {
  data: PropTypes.object,
};

