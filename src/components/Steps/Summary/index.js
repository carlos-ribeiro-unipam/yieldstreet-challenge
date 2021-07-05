/* eslint-disable react/display-name */
import React from "react";
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
    dataIndex: 'fav_book',
    key: 'fav_book',
  },
  {
    title: 'Favorite Colors',
    key: 'fav_colors',
    dataIndex: 'fav_colors',
    render: colors => (
      <>
        {colors.map((color) => (
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

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    gender: 'M',
    email: 'New York No. 1 Lake Park',
    fav_book: 'Le Monde',
    fav_colors: ['red', 'green'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    gender: 'F',
    email: 'London No. 1 Lake Park',
    fav_book: 'Le Monde',
    fav_colors: ['blue'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    gender: 'M',
    email: 'Sidney No. 1 Lake Park',
    fav_book: 'Le Monde',
    fav_colors: ['yellow', 'red'],
  },
];

function Summary() {
  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
      />
    </>
  );
}

export default Summary;
