import React from 'react';
import {useNavigate} from "react-router-dom";

const SinglePost = ({item}) => {

    const nav = useNavigate()

    function goToUser() {
        nav("/user/"+item.username)
    }
    function goToPost() {
        nav(`/post/${item.username}/${item.id}`)
    }

    return (
        <div className="card">
            <h2 onClick={goToUser}>{item.username}</h2>
            <p>{item.title}</p>
            <img onClick={goToPost} src={item.image} alt=""/>
        </div>
    );
};

export default SinglePost;