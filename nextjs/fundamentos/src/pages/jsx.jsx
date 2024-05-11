import Layout from "../components/Layout";

export default function Jsx() {
    const titulo = <h1>JSX é um Conceito Central</h1>;

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>;
    }

    return (
        <Layout titulo="Entendendo o JSX">
            {titulo}
            {subtitulo()}
            <h3>{JSON.stringify({nome: 'João', idade: 30})}</h3>
        </Layout>
    )
}