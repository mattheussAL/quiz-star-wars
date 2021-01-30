import React, { useState } from 'react';
import db from '../db.json';

import Head from 'next/head';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import AlternativeForm from '../src/components/AlternativeForm';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>Tela de resultado</Widget.Header>
      <Widget.Content>
        <p>Você acertou 
          {' '} 
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;

            if(isAcerto) somatoriaAtual + 1;

            return somatoriaAtual;

          }, 0)} */}
          {' '}
          perguntas</p>
 
          <ul>
            {results.map((result, index) => {
              <li key={`result__${result}`}>
                # {index + 1} {' '} Resultado: {result === true ? 'Acertou' : 'Errou'}
              </li>
            })}
          </ul>

      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Content>
        <img 
          src="https://codemyui.com/wp-content/uploads/2018/07/Lightsaber-Progress-Bar.gif"
          alt="loading"
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ 
  question, questionIndex, totalQuestions, onSubmit, addResult
}) {
  const [selectAlternative, setSelectAlternative] = useState(undefined);
  const [isQuestionSubmited,setIsQuestionSubmited] = useState(false);
  
  
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.aswer;
  const hasAlternativeSelected = selectAlternative !== undefined;

  return (
      <Widget>
        <Head><title>Quiz Star Wars</title></Head>

        <Widget.Header>
          <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
        </Widget.Header>

        <img
          src={question.image}
          style={{width: '100%', height: '139px', objectFit: 'cover'}}
          alt="Descrição"
        />
        <Widget.Content>
          <h2>{question.title}</h2>

          <AlternativeForm
            onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              setIsQuestionSubmited(true);
              setTimeout(() => {
                setSelectAlternative(undefined);
                setIsQuestionSubmited(false);
                isCorrect(isCorrect);
                onSubmit();
              }, 3000);
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              const AlternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
              const isSelected = selectedAlternative === alternativeIndex;

              return (
                <Widget.Topic
                  as="label"
                  key={alternativeId} 
                  htmlFor={alternativeId}
                  data-selected={isSelected}
                  data-status={isQuestionSubmited && AlternativeStatus}
                >
                  <input
                    type="radio"
                    name={questionId}
                    id={alternativeId}
                    styled={{display: 'none'}}
                    onChange={() => setSelectAlternative(alternativeIndex)}
                  />
                  {alternative}
                </Widget.Topic>
              );
            })}

            <Button type="submit" disabled={!hasAlternativeSelected}>
              Confirmar
            </Button>

            {isQuestionSubmited && isCorrect && <p>Você Acertou !</p>}
            {isQuestionSubmited && !isCorrect && <p>Você Errou !</p>}
          </AlternativeForm>
        </Widget.Content>
      </Widget>
  );
}

const screenStates = { QUIZ: 'QUIZ', LOADING: 'LOADING', RESULT: 'RESULT' };

export default function QuizPage() {
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [screenState, setScreenState] = useState(screenStates.LOADING);

  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;
  const question = db.questions[questionIndex];


  function addResult(result) 
    setResults([...results, result]);


  React.useEffect(() => setTimeout(() => setScreenState(screenStates.QUIZ), 1 * 1000), []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) setCurrentQuestion(nextQuestion)
    else setScreenState(screenStates.RESULT);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo quiz/>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
            <div className="success">
              <ResultWidget result={results}/>
              <img src="https://media1.tenor.com/images/7938622d12c1a104d1e649a9a5b82558/tenor.gif?itemid=15912806"/>
            </div>
          )
        }
      </QuizContainer>
    </QuizBackground>
  );
}