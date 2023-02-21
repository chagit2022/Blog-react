import React, {useState} from 'react'
import "./Form.css"
import { useDispatch } from 'react-redux'


export default function From() {
 
  const [article, setArticle]=useState({
    title:"",
    body:"",
  })
  
  // pour envoyer les données
  const dispatch = useDispatch();

  // submit
  const handleForm = e => {
    // pour eviter d'actualiser la page
    e.preventDefault();
  }

  const handleInputs = e =>{
    if(e.target.classList.contains('inp-title')){
      const newObjState={...article, title: e.target.value};
      setArticle(newObjState);
    }
  }
  
  return (
    <>
        <h1 className="title-form">Ecrivez un article</h1>
        <form onSubmit={handleForm} action="" 
        className='container-form'>
            <label htmlFor="title">Titre</label>

            <input
            value={article.title}
            onChange={handleInputs} 
            type="text"
            className='inp-title' />

            <textarea 
            value={article.body}
            onChange={handleInputs}
            name="Article" 
            id="Article"
            placeholder='Votre Article'
            className='inp-body'></textarea>
            <button>Envoyez l'article</button>
        </form>


    </>
  )
}
