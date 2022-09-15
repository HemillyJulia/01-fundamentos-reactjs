import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
export function Sidebar(){
    return(
<aside className={styles.sidebar}>
<img className={styles.cover}
src='https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
/>
<div className={styles.profile}>
<img  src='https://pps.whatsapp.net/v/t61.24694-24/294776597_603215161219504_369903346780479187_n.jpg?ccb=11-4&oh=01_AVwrkjza7G_s9t-8h7DHa2OAknRT1lHhcxV9MpguYb25jw&oe=63302CDD' alt='Foto'/>
    <strong>Hemilly Julia</strong>
    <span>Developer Student</span>
</div>
<footer>
    <a href='#'>
        <PencilLine size={20}/>
        Editar seu perfil
    </a>
</footer>
</aside>
    )
}

