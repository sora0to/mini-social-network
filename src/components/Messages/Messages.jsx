import style from './Messages.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreater } from '../../Redux/state';

const Messages = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />)
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreater(body));
    }

    return (
        <div>
            <div className={style.dialogsWindow}>
                <div className={style.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={style.messagesItem}>
                    {messagesElements}
                </div>
            </div>
            <div className={style.messages}>
                <textarea value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Enter your message'></textarea>
                <div><button onClick={onSendMessageClick}>Sent</button></div>
            </div>
        </div>
    );
}

export default Messages;