import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}
                    src='https://pps.whatsapp.net/v/t61.24694-24/244644637_1043538346398702_1208278052404706166_n.jpg?ccb=11-4&oh=01_AVy85LVAEki64XOxAaAQH9mcrUEWLhx1eMOxJJ2gbGZQuQ&oe=63344C8D'
                    />
                    <div className={styles.authorInfo}>
                    <strong>Alex Mendes </strong>    
                    <span> Software Engineer </span>

                    </div>
                </div>

                <time title='15 de setembro às 15:40h' dateTime='2022-09-15 15:40:45'>Publicado há 1h.</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>👉{' '}{' '}<a href=''> alex.developer/doctorcare</a></p> 
                <p><a href=''>#novoprojeto </a> {' '}{' '}
                <a href=''>#nlw </a>{' '}{' '}
                <a href=''>#rocketseat</a></p>

            </div>

        </article>
      
    )
}