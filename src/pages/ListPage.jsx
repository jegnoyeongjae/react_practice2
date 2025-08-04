import { Link } from 'react-router-dom';
import DiaryItem from './DiaryItem';
import './ListPage.css';
const ListPage = ({diaryData}) => {
  return (
    <div className='List'>
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
          <DiaryItem key={idx} diary={diary}/>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
