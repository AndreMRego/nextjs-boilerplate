import { Button } from '../components';

const Home = () => {
  const handleClick = () => {
    console.log('click');
  };

  return <Button handleClick={handleClick}>Hello</Button>;
};

export default Home;
