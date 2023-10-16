import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={style.profileContainer}>
            <div className={style.cover}>
                <img className={style.coverImage} src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=1800&t=st=1697339454~exp=1697340054~hmac=484f54a512aafab9f1aa639b394a29fe58f0e113ddee89da1bcea22238ee1812" alt="cover" />
            </div>

            <div className={style.profileInfo}>
                <div className={style.avatarContainer}>
                    <img className={style.avatarImage} src="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg" alt="avatar" />
                </div>
                <div className={style.description}>
                    <div className={style.descriptionName}>Serhii</div>
                    <div className={style.descriptionAboutMe}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi at eius hic distinctio iusto explicabo, ex a quo quos nam dolorum obcaecati
                        maiores tempore dolorem unde maxime quod veritatis? Ullam.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;