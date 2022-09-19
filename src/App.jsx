import { Header } from "./components/Header"
import {Post} from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'

const posts =[
  {
    id:1,
    author:{
      avatarUrl:"https://pps.whatsapp.net/v/t61.24694-24/244644637_1043538346398702_1208278052404706166_n.jpg?ccb=11-4&oh=01_AVy85LVAEki64XOxAaAQH9mcrUEWLhx1eMOxJJ2gbGZQuQ&oe=63344C8D",
      name: 'Alex Mendes',
      role: 'Software Engineer', 
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋',},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'Link', content:'alex.developer/doctorcare'},
    ],
    publishedAt: new Date('2022-09-19 18:15:45'),
  },
  {
    id:2,
    author:{
      avatarUrl:"https://pps.whatsapp.net/v/t61.24694-24/289277971_974678179892640_7192266113523776130_n.jpg?ccb=11-4&oh=01_AVyheGRsl3Znk9NSguONnXnchpJIbC14LRNmBds2KK6tJQ&oe=6332835A",
      name: 'Carlos Eduardo',
      role: 'Student', 
    },
    content:[
      {type: 'paragraph', content:'Iai, pessoal, tudo massa? 👋',},
      {type: 'paragraph', content:'Estou adorando tudo que estou aprendendo com a Rocketseat e com cada um de vocês, vamos que vamos!🚀'},
      {type: 'Link', content:'carlos.eduardo/student'}
    ],
    publishedAt: new Date('2022-09-17 07:25:05'),
  },
]

export function App() {
 
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          {posts.map((post,index) => {
            return (
              <Post
              key = {index}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}

              />
            )

          })}
        </main>
      </div>
       

    </div>

  )
}











