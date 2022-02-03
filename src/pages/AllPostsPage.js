import React from 'react';
import {useEffect} from "react";
import {useState} from "react";
import SinglePost from "../components/SinglePost";

const AllPostsPage = () => {

    const [getData, setData] = useState([])

    useEffect(() => {
        fetch('http://167.99.138.67:1111/getallposts')
            .then(response => response.json())
            .then(data =>
                setData(data.data)
            );
    }, [])

    return (
            <div className="d-flex wrap">
                {getData.map((x, i) => <SinglePost item={x} key={i}/>)}
            </div>
    );
};

export default AllPostsPage;