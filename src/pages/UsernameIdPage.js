import React, {useEffect, useState} from 'react';
import SinglePost from "../components/SinglePost";
import {useParams} from "react-router-dom";


const UsernameIdPage = () => {

    const {username, id} = useParams()

    const [getData, setData] = useState([])

    useEffect(() => {
        fetch(`http://167.99.138.67:1111/getsinglepost/${username}/${id}`)
            .then(response => response.json())
            .then(data =>
                setData(data.data)
            );
            console.log(getData)
    }, [])

    return (
            <div className="d-flex wrap">
                <SinglePost item={getData}/>
            </div>
    );
};

export default UsernameIdPage;