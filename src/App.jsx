import { useState } from "react";

const articlesData = ["Article 1", "Article 2", "Article 3", "Article 4", "Article 5"];

function App() {

  const [articles, setArticles] = useState(articlesData);
  const [newArticle, setNewArticle] = useState('');
  const [indexToModify, setIndexToModify] = useState(0);


  function handleSubmit(e) {

    e.preventDefault();

    setArticles([...articles, newArticle]);

    setNewArticle('');
  }

  function handleDelete(index) {

    setArticles(articles.filter((article, articleIndex) => articleIndex !== index));
  }

  function handleEdit(article, index) {

    const editEl = document.getElementById('edit');
    const submitEl = document.getElementById('submit');



    setNewArticle(article);
    editEl.classList.remove('d-none');
    submitEl.classList.add('d-none');



    setIndexToModify(index);
  }

  function handleSaveEdit(e) {
    e.preventDefault();
    const editEl = document.getElementById('edit');
    const submitEl = document.getElementById('submit');

    const modifiedArticle = newArticle;

    const articlesToModify = [...articles];

    articlesToModify[indexToModify] = modifiedArticle;

    setArticles(articlesToModify);
    setNewArticle('');

    editEl.classList.add('d-none');
    submitEl.classList.remove('d-none');
  }

  return (
    <>
      <div className="container my-5">

        <header className="bg-light p-5 border rounded-2">
          <h1>Articles List</h1>
        </header>

        <section className="mt-4">

          {
            articles.map((article, index) => (
              <div key={`article-${index + 1}`} className="card my-1 px-5 py-2 d-flex flex-row justify-content-between align-items-center">
                <h4 className="m-0">{article}</h4>
                <div className="d-flex gap-3">
                  <i className="fa-solid fa-pencil" onClick={() => handleEdit(article, index)}></i>
                  <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
                </div>
              </div >
            ))
          }

        </section >

        <form onSubmit={handleSubmit} className="my-4">

          <div className="mb-3 d-flex gap-2">
            <input type="text"
              className="px-5 form-control"
              name="articleTitle"
              id="articleTitle"
              aria-describedby="titleHelper"
              placeholder="Put your new article title here..."
              value={newArticle}
              onChange={(e) => setNewArticle(e.target.value)} />
            <button id="submit" className="btn btn-primary">Submit</button>
            <button id="edit" className="btn btn-primary d-none" onClick={(e) => handleSaveEdit(e)}>Edit</button>
          </div>

        </form>

      </div >
    </>
  )
}

export default App;
