import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>¡Esta ruta no existe!</h1>
      <Link to="/">
        Puedes regresar a la pagina de inicio haciendo click aquí.
      </Link>
    </div>
  );
};

export default ErrorPage;