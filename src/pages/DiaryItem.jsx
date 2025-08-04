import { Link } from "react-router-dom";
const DiaryItem = ({ diary }) => {
  return (
    <div>
      <li>
        <span>{diary.id}</span>
        <Link to={`/detail/${diary.id}`}>
          <span>{diary.title}</span>
        </Link>
        <span>{diary.weather}</span>
        <span>{diary.date}</span>
      </li>
    </div>
  );
};

export default DiaryItem;
