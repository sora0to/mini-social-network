const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SENT_MESSAGE = 'SENT_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, messages: 'Hi, how are you?', likesCount: 12 },
                { id: 2, messages: 'It\'s my first post', likesCount: 11 },
                { id: 3, messages: 'Blabla', likesCount: 11 },
                { id: 4, messages: 'Dada', likesCount: 11 }
            ],
            newPostText: 'samurai',
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },

            ],
            newMessageBody: ""

        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                messages: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SENT_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SENT_MESSAGE })
export const updateNewMessageBodyCreater = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;
