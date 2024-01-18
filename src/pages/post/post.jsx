import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import './post.css';
import { useParams } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import posts from '../../posts';

export default function Post() {
  const { id } = useParams();

  const [isTimeoutFinished, setIsTimeoutFinished] = useState(false);
  const [post, setPost] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        posts.forEach((e) => {
          if (e.id === id)
            setPost(e)
        })
        setTimeout(() => {
          setIsTimeoutFinished(true);
          document.querySelector('#loader').style.display = 'none'
        }, 2000)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  },);

  return (
    <>
      <div id='loader'>
        <PropagateLoader color="white" />
      </div>
      <Nav />
      {isTimeoutFinished && (
        <div id="post">
          <h1 id='postTitle'>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.matter }} id='postMatter'></div>
        </div>
      )}
    </>
  )
}
