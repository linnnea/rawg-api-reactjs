import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return <div>Home page</div>;
};

export default Home;
