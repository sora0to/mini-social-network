import style from './../Messages.module.css';

const Message = (props) => {
    return <div className={style.dialog}>{props.message}</div>
}

export default Message;