
const articles = [
  {
    id: 1,
    title: "Article 1",
    description: "Article 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quaerat nam suscipit corporis aspernatur inventore veniam nobis quisquam doloribus officia nesciunt, molestias minus quasi reprehenderit exercitationem ratione! Eum, unde dolorum."
  },
  {
    id: 2,
    title: "Article 2",
    description: "Article 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quaerat nam suscipit corporis aspernatur inventore veniam nobis quisquam doloribus officia nesciunt, molestias minus quasi reprehenderit exercitationem ratione! Eum, unde dolorum."
  },
  {
    id: 3,
    title: "Article 3",
    description: "Article 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quaerat nam suscipit corporis aspernatur inventore veniam nobis quisquam doloribus officia nesciunt, molestias minus quasi reprehenderit exercitationem ratione! Eum, unde dolorum."
  },
  {
    id: 4,
    title: "Article 4",
    description: "Article 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quaerat nam suscipit corporis aspernatur inventore veniam nobis quisquam doloribus officia nesciunt, molestias minus quasi reprehenderit exercitationem ratione! Eum, unde dolorum."
  },
  {
    id: 5,
    title: "Article 5",
    description: "Article 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quaerat nam suscipit corporis aspernatur inventore veniam nobis quisquam doloribus officia nesciunt, molestias minus quasi reprehenderit exercitationem ratione! Eum, unde dolorum."
  }
];

function App() {

  return (
    <>
      <div className="container my-5">

        <header className="bg-light p-5 border rounded-2">
          <h1>Articles List</h1>
        </header>

        <section id="articles_list" className="mt-3">

          {
            articles.map(article => (
              <div className="card my-1 px-5 py-2 d-flex flex-row justify-content-between align-items-center">
                <h4 className="m-0">{article.title}</h4>
                <div className="d-flex gap-3">
                  <a href=""><i class="fa-solid fa-pencil"></i></a>
                  <a href=""><i class="fa-solid fa-trash-can"></i></a>
                </div>
              </div>
            ))
          }

        </section >

      </div >

    </>
  )
}

export default App;
