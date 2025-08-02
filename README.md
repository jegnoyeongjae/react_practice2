작업폴더 설정하기

 1. 내이름 폴더에 새로운 작업폴더 만들기 (폴더명 : react_diary3_practice)

 2. vsCode의 루트폴더로 1번 폴더 선택하기 

 3. 리액트 설치하기

     npm create vite@latest .

 4. 노드 모듈 설치하기 

     npm install 

 5. 불필요한 파일과 폴더 삭제하기  

     public 폴더 안의 vite.svg 파일 삭제

     src 폴더 안의 assets 폴더 삭제

 6. 파일 내용 정리하기 

     App.css와 index.css의 내용 모두 삭제하기 

     index.html에서 lang속성과 title태그 내용 수정, icon정보 삭제하기 

     App.jsx의 내용 모두 삭제하고 컴포넌트 함수의 기본 틀 작성하기 

 7. 공유폴더에서 자료 확인하기 

    웹폰트_프리텐다드.txt -> 내용 복사해서  index.html에 웹폰트 정보 추가하기

    reset.css -> 내용 복사해서 index.css에 붙여넣기 

​
// 파일 생성
src/ 
   ㄴ pages/
               ㄴ index.js
               ㄴ Home.jsx
               ㄴ ListPage.jsx
               ㄴ DetailPage.jsx
               ㄴ CreatePage.jsx
               ㄴ EditPage.jsx
​

라우팅과 axio 설정하기 

1. 라우팅 설치 

npm install react-router-dom

​

2. axios 설치

npm install axios --save

​

3. App.jsx에 라우터 설정하기 

페이지 컴포넌트

패스 경로

Home

'/'

ListPage

'/list'

DetailPage

'/detail/:id'

CreatePage

'/new'

EditPage

'/edit/:id'

 

Home.jsx 

2개의 링크 영역 생성하기 : "새글 작성하기", "목록 보러가기"

-> Link로 처리하면 됨. 

​

​

App.jsx 

1. 상태변수 선언하기 - useState() 사용

      - 전체 다이어리 데이터 담아둘 상태변수 a

      - 데이터 준비상태를 알려줄 상태변수 b

2. 상태변수 b의 값에 따라 return 되는 값 다르게 만들기 

      상태변수 b의 값이 거짓이라면? 화면에는 "데이터 로딩 중입니다"가 출력 

      상태변수 b의 값이 참이라면? 브라우저 라우터 동작 처리 

      -> 확인방법 : (1-2) 상태변수의 초깃값으로 true/false 넣어보기. 

3. 데이터 패치 함수 선언하기. 

      axios.get()으로 public에 있는 json 파일 읽기. 

      상태변수 a의 값으로 저장하기

4. useEffect를 사용해 3번 함수 호출하기

     -> 왜? 컴포넌트 마운트 시점에 한 번만 호출하도록 

5. 상태변수 a를 ListPage에 넘겨주기 -> props로 

​

// App 컴포넌트 내용 흐름 참고하기 
const App = () => {
      상태변수 a 선언
      상태변수 b 선언 
      
      useEffect(()=>{
          데이터 패치 함수 호출;
      }, [])

      데이터 패치 함수 선언하기

       if(상태변수 b가 false) {
           return "데이터 로딩 중입니다";
       }
       
       return 브라우저 라우터;
}
​

​

// 파일 생성
src/ 
   ㄴ components/
         ㄴ diary/
               ㄴ index.js
               ㄴ DiarList.jsx
               ㄴ DiarItem.jsx
​

​

ListPage.jsx

1. props 전달받기 

2. 다이어리 목록만 분리해서 관리할 수 있도록 DiaryList 컴포넌트 연결하기 

3. DiaryList 컴포넌트에 props로 전달받은 다이어리 데이터 props로 넘겨주기 

​

​

DiaryList.jsx

1. props 전달받기

2. 다이어리의 각 항목을 관리할  DiaryItem 컴포넌트 연결하기

3. props로 전달받은 전체 다이어리 데이터의 배열에 대해 map메서드 적용해 

  일기 데이터의 갯수만큼 DiaryItem 출력하기. 

  이때, 각 DiaryItem 컴포넌트에 각 일기 데이터 props로 넘겨주기 

​

DiaryItem.jsx

1. props 전달받기

2. 일기 데이터의 제목과 날짜 정보를 출력하기 

3. 각 일기 데이터를 클릭하면 상세페이지로 이동하도록 Link 작성하기

   상세페이지의 링크 경로는 '/detail/아이디'

​

App.jsx 

1. DetailPage에 전체 일기 데이터 props로 넘겨주기 

​

​

// 파일 생성
src/ 
   ㄴ components/
         ㄴ diary/
               ㄴ DiaryContent.jsx
​

DetailPage.jsx

1. props 전달받기

2. useParams()로 주소에 있는 id 파라미터 값 저장하기 

3. 현재 페이지에서 보여 줄 일기데이터의 상태를 관리할 상태변수 c 선언하기

4. props 전달받은 데이터 중 2번과 일치하는 데이터만 선택해서 상태변수 c에 셋팅하는 동작을 가진 함수 선언하기

5. useEffect를 사용해 2번에서 저장한 id값이 달라질때마다 4번 함수가 호출되도록 지정하기 

6. DiaryContent 컴포넌트 호출해 화면에 출력하기

7. DiaryContent 컴포넌트에 상태변수 c를 props로 넘겨주기 

8. 삭제버튼과 수정버튼 만들기 

​

​

​

DiaryContent.jsx

1. props 전달받기

2. 화면에 상세페이지 내용 출력하기
