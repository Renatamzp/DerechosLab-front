function ReviewAnswers({ incorrectlyAnsweredQuestions, data }) {
  return (
    <div>
      <h3>Revisión de Preguntas Incorrectas</h3>
      {incorrectlyAnsweredQuestions.map((item, index) => (
        <div key={index}>
          <h4>{data[item.questionIndex].questionText}</h4>
          {data[item.questionIndex].choices.map((choice) => (
            <button
              key={choice}
              style={{
                backgroundColor:
                  choice === item.selectedOption
                    ? "red"
                    : choice ===
                      data[item.questionIndex].correctChoices.correctChoicesText
                    ? "green"
                    : "transparent",
              }}
            >
              {choice}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ReviewAnswers;
