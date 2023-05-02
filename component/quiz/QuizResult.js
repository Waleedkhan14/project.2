import  react from "react";
import questions from "./datta";

const QuizResult = (props) => {
  return(
    <div className="Score-section">
        <h2>Completed!</h2>
        <h4>Total Score {props.Score}/25</h4>
        <h4>your correct Question {props.CorrectAns}  out of {questions.length}</h4>
        <button className="btn" onClick={props.handlePlayAgain}>play again</button>
    </div>
  );  
};

export default QuizResult;