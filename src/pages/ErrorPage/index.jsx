import { Link } from "react-router-dom";


const ErrorPage = () => {

    return (
        <>
            <h1>Ops, você tentou acessar uma pagina que nao existe</h1>
            <Link to={"/"}>Voltar a segurança</Link>
        </>
    )
}

export default ErrorPage;