import SingleQuestion from "./SingleQuestion";
import Question from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          {...question}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        ></SingleQuestion>
      ))}
    </section>
  );
};
export default Questions;
