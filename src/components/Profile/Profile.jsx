import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts state={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default Profile;