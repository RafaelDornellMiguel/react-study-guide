import estilos from "./page.module.css";

export default function Home() {
  return (
    <div className={estilos.container}>
      <header>
        <p>React JS</p>
      </header>

      <main>
        <section className={estilos.secao_titulo}>
          <h1>React JS</h1>
          <p className={estilos.className}>Biblioteca JavaScript para criar SPAs</p>
          <a href='https://react.dev/' target="_blank">Site Oficial</a>
        </section>

        <section className={estilos.secao_requisitos}>
          <h2>Requisitos</h2>
          <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>

          <div className={estilos.container_cards}>
            <div>
              <h3>HTML</h3>
              <p>Aprender a estruturar os elementos da página com HTML</p>
            </div>
            <div>
              <h3>CSS</h3>
              <p>Aprender a estilizar os elementos da página com CSS</p>
            </div>
            <div>
              <h3>JavaScript</h3>
              <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p className={estilos.autor}>Curso de introdução de React JS</p>
      </footer>
      
    </div>
  );
}
