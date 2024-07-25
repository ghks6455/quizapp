const quizData = [
  {
    question: "뉴진스 멤버가 아닌것은?",
    a: "하니",
    b: "민지",
    c: "원영",
    d: "혜인",
    correct: "c",
  },
  {
    question: "다음주 수업은 무슨 요일까지 일까요?",
    a: "월",
    b: "화",
    c: "수",
    d: "목",
    correct: "b",
  },
  {
    question: "4-1=?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
  },
  {
    question: "a 누르세요",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correct: "a",
  },
];
//1. getElementByid로 보기,문제,버튼 태그 가져오기
// 라디오 버튼
//2. querySelectorAll로 라디오버튼 가져오기
const answerEls = document.querySelectorAll(".answer");
// 제목
const questionEl = document.getElementById("question");
// 보기
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
// 제출버튼
const submitBtn = document.getElementById("submit");
// 모든 요소를 자식으로 갖고 있는 부모 div
const div = document.getElementById("quiz");
// 문제 인덱스 값
let currentQuiz = 0;
// 점수 인덱스 값
let score = 0;
// 첫번째 문제 출력
loadQuiz();

function loadQuiz() {
  dselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  // 태그에 질문값 넣기
  questionEl.textContent = currentQuizData.question;
  // 보기 값 넣기
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
}

function dselectAnswers() {
  answerEls.forEach((answerEls) => {
    answerEls.checked = false;
  });
}

// 선택된 라디오 태그의 id값 가져오기
function getSelected() {
  let answer;

  answerEls.forEach((el) => {
    //el -> <input>
    // input태그에 checked속성이 true라면
    // 태그의 id값을 answer에 넣기
    if (el.checked) {
      answer = el.id;
    }
  });
  // answer 변수 반환
  return answer;
}

submitBtn.addEventListener("click", () => {
  // 선택된 보기 값
  const answer = getSelected();
  console.log(answer);
  // 선택된 id값이 존재한다면 실행
  if (answer) {
    // 선택한 값이 정답과 일치한다면
    if (answer === quizData[currentQuiz].correct) {
      // 점수 1점 추가
      score++;
    }
    // 문제 인덱스 1 추가
    currentQuiz++;
    // 문제 개수가 index값 보다 크다면
    if (currentQuiz < quizData.length) {
      // 퀴즈 불러오기 함수 호출

      loadQuiz();
    } else {
      div.innerHTML = `<h2>총 ${score}/${quizData.length} 개 맞추셨습니다.</h2>
      <button onclick='location.reload()'>다시하기</button>`;
    }
  }
});

//3. 화면에 첫번째 문제의 보기와 제목을 보여주기
// 문제를 보여주는 코드를 함수로 묶어서 만들기
// let index = 0;
// function quiz() {
//   const quiz = quizData[index];

//   questionEl.textContent = quiz.question;
//   a_text.textContent = quiz.a;
//   b_text.textContent = quiz.b;
//   c_text.textContent = quiz.c;
//   d_text.textContent = quiz.d;
// }
//4. 버튼을 클릭했을때 다음문제로 넘어가기
// 문제가 다음으로 바뀐다는것 = quiz배열의 인덱스값 증가

//선택된 라디오버튼의 id값을 가져오는 함수 생성

//5. 선택된 input의 id값과 문제객체의 정답이 일치하는지 비교
//6. 문제를 다풀고나면 맞춘문제/전체문제 알려주기
//7. 재시작버튼을 누르면 처음으로 돌아가기
