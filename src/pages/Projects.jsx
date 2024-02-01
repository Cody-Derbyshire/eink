import '../styles/Projects.css';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

const Projects = () => {
  const items = [
    {
      name: 'poke API',
      desc: 'Gen I + II Pokedex built using React and the PokeAPI',

      url: 'https://poke-gen.onrender.com/',
    },
    {
      name: 'chatbot',
      desc: 'Chatbot built using JS',

      url: 'https://build-a-chatbot-wwl8.onrender.com/',
    },
    {
      name: 'font-face',
      desc: 'Webstore built to learn + test Stripe integration',

      url: 'https://react-online-shop.onrender.com/',
    },
    {
      name: 'bgf',
      desc: 'Webstore proof of concept using Framer Motion and Spline with focus on interactive UX',

      url: 'https://black-garlic-furniture.onrender.com/',
    },
  ];

  return (
    <>
      <div className='overlay'></div>
      <Header page={'Projects'} back={'y'} />
      <div className='list'>
        <ListItem
          name={items[0].name}
          number={1}
          extLink={items[0].url}
          usedFor={'projects'}
          desc={items[0].desc}
        />
        <ListItem
          name={items[1].name}
          number={2}
          extLink={items[1].url}
          usedFor={'projects'}
          desc={items[1].desc}
        />
        <ListItem
          name={items[2].name}
          number={3}
          extLink={items[2].url}
          usedFor={'projects'}
          desc={items[2].desc}
        />
        <ListItem
          name={items[3].name}
          number={4}
          extLink={items[3].url}
          usedFor={'projects'}
          desc={items[3].desc}
        />
      </div>
    </>
  );
};

export default Projects;
