import React from 'react'


export default function From() {
  return (
    <>
        <h1 className="title-form">Ecrivez un article</h1>
        <form action="" 
        className='container-form'>
            <label htmlFor="title">Titre</label>
            <textarea name="Article" 
            id="Article"
            placeholder='Votre Article'></textarea>
            <button>Envoyez l'article</button>
        </form>


    </>
  )
}
