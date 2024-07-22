import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

const EditPost = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const {id} = useParams()


  return (
    <div className='new-post'>
      <h2>Editando: {title}</h2>

      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título: </label>
          <input type="text" name='title' id='title' placeholder='Digite o título' onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteúdo: </label>
          <textarea name="body" id="body" placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)}></textarea>
        </div>

        <input type="submit" value={'Editar post'} className="btn"/>
      </form>

    </div>
  )
}

export default EditPost