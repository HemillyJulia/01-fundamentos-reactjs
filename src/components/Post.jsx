import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { useState } from "react";


export function Post({author, publishedAt, content}) {

//Armazenar um array de comentários.
  const [comments, setComments] = useState(['Post muito bacana, parabéns.'])

//Armazenar um comentário novo ( O valor do Input)
  const [newCommentText, setNewCommentText] = useState('') 
 
  
 const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale:ptBR})

 const publishedDateRelativeToNow = formatDistanceToNow (publishedAt, {
  locale:ptBR,
  addSuffix:true
 })
 
 function handleCreateNewComment(event){
  event.preventDefault()

    
 setComments([...comments,newCommentText ])
 setNewCommentText('')

 }

 function handleNewCommentChange (event){
  event.target.setCustomValidity ('')
  setNewCommentText (event.target.value)
  
 }

 function handleNewCommentInvalid(event){
  event.target.setCustomValidity('Esse campo é obrigatório')
 }

 //A função abaixo irá receber qual comentário que eu quero remover e vai fazer algo com esse comentário.

 function deleteComment(commentToDelete){
  const listaDeComentariosSemOQueEuDeletei = comments.filter(comment => {
    return comment !== commentToDelete  })

setComments(listaDeComentariosSemOQueEuDeletei)
 }

const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span> {author.role}</span>
          </div>
        </div>

        <time title="" dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow }
        </time>
      </header>
      <div className={styles.content}>
       {content.map((line,index) => {
        if (line.type === 'paragraph'){
          return <p key={index}> {line.content}</p>
        } else if (line.type ==='link') {
          return <p key = {index}><a href="#"> {line.content} </a></p>
        }
       })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

        <strong>Deixe seu feedback</strong>
        
        <textarea name ="commentTextArea"
         placeholder="Deixe um comentário" 
         value={newCommentText}
         onChange={handleNewCommentChange}
         onInvalid={handleNewCommentInvalid}
         required/>
        
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div>
        {comments.map ((inserindoComentarioNovo,index) => {

          // A função deleteComment eu enviei como propriedade pro meu componente Comment
          return (
          <Comment key={index} 
          content={inserindoComentarioNovo} 
          onDeleteComment={deleteComment}/>)
        })}
      </div>
    </article>
  );
}





