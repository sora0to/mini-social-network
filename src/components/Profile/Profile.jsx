import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts state={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;