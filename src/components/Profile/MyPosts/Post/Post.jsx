import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.postItem}>
                <img className={style.avatar} src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' alt='' />
                {props.messages}
            </div>

            <div className={style.likeItem}>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;