import db from '../db.json';

import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import { Widget, QuizContainer } from '../src/components/Widget';

export default function Home() {
  return (
    <>
      <QuizBackground BackgroundImage={db.bg}>
        <QuizLogo />
        <QuizContainer >

          <Widget>
            <Widget.Header><h1>{db.title}</h1></Widget.Header>
            <Widget.Content><p>{db.description}</p></Widget.Content>

            <form>
              <input 
                type="text"
                placeholder="Digite seu nome padalwan :)"
                required
              />

              <button type="submit" id="play" name="play">Jogar</button>
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
