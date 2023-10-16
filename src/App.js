import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

const App = (props) => {
    return (
        <div className='app-wrapper'>

            <Header />
            <NavBar />

            <div className='app-wrapper-content'>
                <Routes>

                    <Route path='/profile'
                        element={<Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText} />} />

                    <Route path='/messages' element={<Messages />} />

                </Routes>
            </div>
        </div>
    )
}

export default App;