import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './DetailPage.css'

const DetailPage = ({ diaryData }) => {

  const [diary, setDiary] = useState({});

  const { id } = useParams();
  const postId = Number(id);

  useEffect(() => {
    fetchData();
  }, [id]);  // id 값이 변화 할 때 마다 fetchData 호출

  const fetchData = async () => {
    const foundPost = diaryData.find((item) => item.id === postId);
    setDiary(foundPost);
  };


  return (
    <>
      <div className="detail">
        <p>{diary.id}</p>
        <p>{diary.title}</p>
        <p>{diary.content}</p>
        <p>{diary.date}</p>
        <p>{diary.weather}</p>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </>
  );
};

export default DetailPage;
