import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
export function Sidebar(){
    return(
<aside className={styles.sidebar}>
<img className={styles.cover}
src='https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
/>
<div className={styles.profile}>

    <Avatar src='https://pps.whatsapp.net/v/t61.24694-24/173865416_835387597825920_4918501910225045977_n.jpg?ccb=11-4&oh=01_AVzDR7r2nwISihUyLTJ4qit5AVG-CNbcEorVlB8Q6-Bh_Q&oe=63378E6B'/>
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


