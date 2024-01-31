import '../styles/List.css';
import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import ListItem from './ListItem';

const List = () => {
  const items = [
    { name: 'projects' },
    { name: 'gallery' },
    { name: 'branding' },
    { name: 'furniture' },
    { name: 'products' },
    { name: 'contact' },
  ];

  return (
    <>
      {/* {listItems} */}
      <ListItem name={items[0].name} number={1} link={items[0].name} />
      <ListItem name={items[1].name} number={2} link={items[1].name} />
      <ListItem name={items[2].name} number={3} link={items[2].name} />
      <ListItem name={items[3].name} number={4} link={items[3].name} />
      <ListItem name={items[4].name} number={5} link={items[4].name} />
      <ListItem name={items[5].name} number={6} link={items[5].name} />
    </>
  );
};

export default List;
