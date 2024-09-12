import React from "react";
import Option from "./Option.js";
export default function Question({
  question,
  dispatch,
  answer,
  index,
  numQuestions,
}) {
  // console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
