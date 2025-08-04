import { useEffect, useReducer, useState } from 'react'; // 순서적으로 react, router, pageComponent, css순으로 작성하는것이 유리함. 당장은 실행에 문제가 없으나 추후에 에러가 발생하는 원인이 될 수 있음.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ListPage,
  CreatePage,
  DetailPage,
  EditPage,
  Home,
} from './pages';
import './App.css';
import axios from 'axios';

function App() {
  const [diaryData, setDiaryData] = useState();
  const [dataIsOk, setDataIsOk] = useState(false);

  useEffect(() => {
    const loading = async () => {
      try {
        const res = await axios.get('/data/initialDiary.json');
        setDiaryData(res.data)
        setDataIsOk(true);
      } catch (error) {
        console.error('초기데이터 로딩 실패 : ', error);
        setDataIsOk(false);
      }
    };
    loading();
  }, []);



  if (!dataIsOk) {
    return (
      <p>
        데이터 로딩 중입니다.
      </p>
    )
  }

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/list" element={<ListPage diaryData={diaryData}/>} />
          <Route path="/detail/:id" element={<DetailPage diaryData={diaryData}/>} />
          <Route path="/new" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
