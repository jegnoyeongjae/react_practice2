import { Link } from 'react-router-dom';
const Home = ({diaryData}) => {
  return (
    <div>
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
      <ul>
        {diaryData.map((diary, idx)=>(
          <li key={idx}>
            <span>{diary.id}</span>
            <span>{diary.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
