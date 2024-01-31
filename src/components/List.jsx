import '../styles/List.css';
import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const List = () => {
  const [index, setIndex] = useState(0);

  const items = [
    { name: 'projects' },
    { name: 'gallery' },
    { name: 'branding' },
    { name: 'furniture' },
    { name: 'products' },
    { name: 'costume' },
    { name: 'contact' },
  ];

  const handleHover = (i) => {
    setIndex(i);
  };

  const listItems = items.map((item, i) => {
    return (
      <>
        <div className='menu-item' key={index}>
          <h1 className='li-item' onMouseEnter={() => handleHover(i)}>
            {item.name}
          </h1>
        </div>
      </>
    );
  });

  return (
    <>
      {listItems}
      {/* <div className='menu-item'>
        <h1
          className='li-item'
          onMouseEnter={() => (setActive = 'projects')}
          onMouseLeave={() => (setActive = '')}
        >
          projects
        </h1>
        {active === 'projects' ? (
          <span className='icon material-symbols-outlined'>gesture</span>
        ) : null}
      </div>

      <h1 className='li-item'>branding</h1>
      <h1 className='li-item'>furniture</h1>
      <h1 className='li-item'>products</h1>
      <h1 className='li-item'>costume</h1>
      <h1 className='li-item'>contact</h1> */}
    </>
  );
};

export default List;
