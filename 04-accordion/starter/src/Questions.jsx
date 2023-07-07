import Question from "./Question";

const Questions = ({ questions }) => {
  return questions.map((question) => {
    return <Question key={question.id} question={question} />;
  });
};
export default Questions;
