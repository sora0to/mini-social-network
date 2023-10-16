import React from 'react';

import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let PostsElements =
        props.state.map(p => <Post messages={p.messages} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>
                <textarea className={style.textArea} ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                <button onClick={addPost} className={style.btnSent}>Add post</button>
            </div>
            <div>
                {PostsElements}
            </div>
        </div>
    );
}

export default MyPosts;