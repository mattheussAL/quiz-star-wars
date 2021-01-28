import React, { useState } from 'react'; 
import { useRouter } from 'next/router';
import db from '../db.json';

import Head from 'next/head';
import Input from '../src/components/Input';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

export default function Home() {
  const route = useRouter();
  const [name, setName] = useState('')
  
  function handleEventSubmit(event) {
    event.preventDefault()

    route.push(`/quiz?name=${name}`);
  }

  function handleChange(element) {
    setName(element.target.value)
  }

  return (
    <>
      <QuizBackground BackgroundImage={db.bg}>
        <Head>
          <title>Quiz Star Wars</title>
        </Head>
        <QuizLogo />
        <QuizContainer >

          <Widget>
            <Widget.Header><h1>{db.title}</h1></Widget.Header>
            <Widget.Content><p>{db.description}</p></Widget.Content>

            <form onSubmit={handleEventSubmit}>
              <Input onChange={handleChange} />

              <Button type="submit">Jogar</Button>
            </form>
          </Widget>

          <Widget>
            <Widget.Header><h1>Quiz da Galera</h1></Widget.Header>
            <Widget.Content>
              <ul>
                <li><a href="https://quiz-imersao-react.vercel.app" target="_blank">Data Science Quiz</a></li>
                <li><a href="https://imersao-react-alura.malufell.vercel.app" target="_blank">How I Met Your Mother!</a></li>
                <li><a href="https://quiz-padrao-projetos.thassya.vercel.app" target="_blank">Padrão de Projetos</a></li>
                <li><a href="https://aluraquiz-base.henrique1818.vercel.app" target="_blank">Vingadores</a></li>
              </ul>
            </Widget.Content>
          </Widget>

          <Footer />
        </QuizContainer>

        <GitHubCorner projectUrl="https://github.com/omariosouto" />
      </QuizBackground>
    </>
  )
}
