import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'http://localhost:7777/posts';

export default function EditPostPage({ match, history }) {
  const id = Number(match.params.id);
  const [content, setContent] = useState('')

  useEffect(() => {
    axios.get(URL)
      .then(res => setContent(res.data.find(p => Number(p.id) === id).content))
  }, [id]);

  const handleTextChange = ({ target }) => setContent(target.value);

  const postEditedPost = () => {
    if (!content) {
      return;
    }
    axios.post(URL, { id, content })
      .then(() => {
        setContent('')
        history.push(`/posts/${id}`)
      });
  };

  return (
    <>
      <div className='title'>Редактирование поста</div>
      <div className='addpost-block block'>
        <Link to={`/posts/${id}`}>
          <span className="material-icons addpost-close">close</span>
        </Link>
        <textarea className='addpost-textarea' rows="5" onChange={handleTextChange} value={content}></textarea>
        <div className='btn' onClick={postEditedPost}>Опубликовать</div>
      </div>
    </>
  );
}