import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import './posts.css';
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import allPosts from '../../posts'

export default function Posts() {
  const [isTimeoutFinished, setIsTimeoutFinished] = useState(false);
  const [posts, setPosts] = useState([])
  const [originalPosts, setOriginalPosts] = useState([]);
  let width = window.innerWidth
  width = Math.floor(width / 100) * 100

  useEffect(() => {
    setTimeout(() => {
      setPosts(allPosts);
      setOriginalPosts(allPosts);
      setIsTimeoutFinished(true);
      document.querySelector('#loader').style.display = 'none'
    }, 2000)
  }, []);

  const search = (e) => {
    const value = document.querySelector('#search').value
    if (value === '' || value === undefined) {
      setPosts(originalPosts);
    } else {
      let filteredPosts = []
      originalPosts.forEach((post) => {
        if (post.title.includes(value) || post.des.includes(value)) {
          filteredPosts.push(post)
        }
      })
      setPosts(filteredPosts);
    }
  };
  return (
    <>
      <div id='loader'>
        <PropagateLoader color="white" />
      </div>
      <Nav />
      <div id='header'>
        <h1 id='title'>Posts</h1>
        <input id='search' onKeyUp={search} />
        <i className='fas fa-search' onClick={search}></i>
      </div>
      {isTimeoutFinished && (
        <div id="posts">
          {posts.length!==0 && posts.map((e) => (
              <Link className='link' to={`/post/${e.id}`}>
                <div className='post'>
                  <h1 className='postTitle'>{e.title.slice(0, Math.trunc(width / 10 / 2 - 5))}.....</h1>
                  <p className='postDes'>{e.des.slice(0, Math.trunc(width / 2))}........</p>
                </div>
              </Link>
            ))
          }
          {
            posts.length===0 && (
              <h1>No posts found</h1>
            )
          }
        </div>
      )}
    </>
  );
}