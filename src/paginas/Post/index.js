import './Post.css'
import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from 'react-markdown'
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  })

  const outrosPosts = posts
    .filter((post) => post.id !== Number(parametros.id)) // Filtra os posts
    .sort(() => Math.random() - 0.5) // Embaralha o array
    .slice(0, 4); // Pega os primeiros 4 elementos

  console.log(outrosPosts)

  if (!post) {
    return <NaoEncontrada />
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>

            <ul className='outros-posts'>
              {outrosPosts.map((post) => (
                <li key={post.id}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </PostModelo>



        } />

      </Route>

    </Routes>

  )
}