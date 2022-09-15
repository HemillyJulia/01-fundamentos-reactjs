import { Header } from "./components/Header"
import {Post} from "./Post"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
 
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
        <Post 
        author="Machado de Assis"
        content= "É considerado por muitos críticos o maior escritor brasileiro de todos os tempos, e sem dúvida um dos maiores de língua portuguesa. Foi autodidata - ou seja, conheceu os grandes nomes da literatura universal sozinho. Publicou seu primeiro poema aos 18 anos, período em que começou a trabalhar como jornalista, escrevendo artigos sobre política." 
        />

        <Post 
        author="Carlos Drummond de Andrade"
        content= "Em termos de poesia, o itabirano Carlos Drummond de Andrade é talvez a maior referência. Formado em farmácia, já nos anos 20 iniciou sua carreira literária, com a fundação de uma revista modernista. Ao mesmo tempo em que trabalhava no Ministério da Educação do governo Getúlio Vargas entre 1934 e 1945, escrevia seus poemas."
        />
        </main>
      </div>
      

    </div>

  )
}











