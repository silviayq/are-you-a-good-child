function storeAnswer(index, value) {
    let answers = JSON.parse(localStorage.getItem("childQuizAnswers")) || [];
    answers[index] = value;
    localStorage.setItem("childQuizAnswers", JSON.stringify(answers));
  }
  
  function getAnswers() {
    return JSON.parse(localStorage.getItem("childQuizAnswers")) || [];
  }
  