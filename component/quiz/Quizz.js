import React, { useState } from "react";
import  "./Quiz.css";
import questions from "./datta";
import QuizResult from "./QuizResult";
const Quizz = () => {
 const[CurrentQuestion, SetCurrentquestions] = useState(0)
 const[Score,setScore]=useState(0)
 const[CorrectAns,setCorrectAns]=useState(0)
 const[ShowResult,setShowResult]=useState(false)
 const[Clicked,setClicked]=useState(false)

 const handleAnswerOptions = (iscorrect) =>{
 if (iscorrect){
setScore(Score+5)
setCorrectAns(CorrectAns+1);
 }
 setClicked(true)
 };
 const handleNextOptions=() =>{

 const nextQuestion=CurrentQuestion+1 
 if (nextQuestion<questions.length) {
    SetCurrentquestions (nextQuestion); 
  } else{
    setShowResult(true)
    }
 };
 const handlePlayAgain =()=>{
 SetCurrentquestions(0)   
 setScore(0)
 setCorrectAns(0)
 setShowResult(false)
 };
    return(

 <>
<div className="app">
 {
 ShowResult?(
        <QuizResult Score ={Score} 
        CorrectAns ={CorrectAns} 
        handlePlayAgain = {handlePlayAgain} />):(    <>
<div className="question-section">
    <h5>Score{Score}</h5>
    <div className="question-count">
    <span>
        Question{CurrentQuestion + 1} of {questions.length}
   </span>
    </div>
    <div className="question-text">
        {questions[CurrentQuestion].QuestionText}
    </div>
</div> 

<div className="answer-section">

 {questions[CurrentQuestion].answeroptions.map((ans,i)=>{
return <button key={i}onClick={()=>handleAnswerOptions(ans.iscorrect)}>
    {ans.answerText}</button>
 })}   

<div className="actions">
    <button onClick={handlePlayAgain}>Quit</button>
    <button disabled={!Clicked} onClick={handleNextOptions}>Next</button>

</div>
    </div>  
    </> )
        }
    
   

</div>

 </>

    )
} 
 export default Quizz;