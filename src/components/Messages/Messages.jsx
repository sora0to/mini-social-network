import style from './Messages.module.css';

const Messages = () => {
    return (
        <div>
            <div className={style.dialogsItem}>

            </div>
            <div className={style.messages}>
                <textarea ></textarea>
                <button>Sent</button>
            </div>
        </div>
    );
}

export default Messages;