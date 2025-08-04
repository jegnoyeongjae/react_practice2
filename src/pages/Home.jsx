import { Link } from 'react-router-dom';
import DiaryItem from './DiaryItem';
const Home = () => {
  return (
    <div className='Home'>
      <Link to={'/new'}>
        <div>
          <span className="">새글 작성하기</span>
        </div>
      </Link>
      <Link to={'/list'}>
        <div>
          <span className="">목록 보러가기</span>
        </div>
      </Link>
    </div>
  );
};

export default Home;
