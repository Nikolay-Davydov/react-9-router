import React, { useEffect, useState } from 'react';
import Post from '../Post';
import axios from 'axios';
import {Link} from 'react-router-dom';

const URL = 'http://localhost:7777/posts';

export default function SinglePostPage({match, history}) {
  const id = match.params.id;
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(URL)
    .then(res => setPost(res.data.find(p => Number(p.id) === Number(id))))
  }, [id]);

  const onDelete = () => {
    axios.delete(`${URL}/${id}`)
      .then(() => history.push('/'))
  }

  const html = <>
    <Link to='/' className='link-normalizer'>
      <div className='post-back'>&lt; Назад</div>
    </Link>
    <div className='block'>
      <Post post={post} />
      <div className='post-buttons'>
        <div className='btn mr-3'>
          <Link to={`/edit/${id}`} className='link-normalizer'>
            Изменить
          </Link>
        </div>
        <div className='btn btn-del' onClick={onDelete}>Удалить</div>
      </div>
    </div>
  </>

  return (
    <>
      { post && html }
    </>
  );
}