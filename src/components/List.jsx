import '../styles/List.css';
import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import ListItem from './ListItem';

const List = ({ hoveredClass, setHoveredClass }) => {
  const items = [
    { name: 'projects' },
    { name: 'branding' },
    { name: 'furniture' },
    { name: 'products' },
    { name: 'contact' },
  ];

  return (
    <>
      <ListItem
        name={items[0].name}
        number={1}
        link={items[0].name}
        usedFor={'landing'}
        hoverClass={'fl-green-sap-blue'}
        hoveredClass={hoveredClass}
        setHoveredClass={setHoveredClass}
      />
      <ListItem
        name={items[1].name}
        number={2}
        link={items[1].name}
        usedFor={'landing'}
        hoverClass={'rad-pink-neon-green'}
        hoveredClass={hoveredClass}
        setHoveredClass={setHoveredClass}
      />
      <ListItem
        name={items[2].name}
        number={3}
        link={items[2].name}
        usedFor={'landing'}
        hoverClass={'navy-blue-neon-green2'}
        hoveredClass={hoveredClass}
        setHoveredClass={setHoveredClass}
      />
      <ListItem
        name={items[3].name}
        number={4}
        link={items[3].name}
        usedFor={'landing'}
        hoverClass={'yellow-dark-yellow'}
        hoveredClass={hoveredClass}
        setHoveredClass={setHoveredClass}
      />
      <ListItem
        name={items[4].name}
        number={5}
        link={items[4].name}
        usedFor={'landing'}
        hoverClass={'pink-dark-pink'}
        hoveredClass={hoveredClass}
        setHoveredClass={setHoveredClass}
      />
    </>
  );
};

export default List;
