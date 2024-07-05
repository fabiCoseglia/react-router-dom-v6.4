import { Link, useRouteError } from "react-router-dom"


export const NotFound = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div className="text-center">
      <h2 className="text-center">{error.status}</h2>
      <h3 className="text-center">{error.data}</h3>
      <Link to={'/'} className="text-center btn btn-primary mt-4">Volver al Home</Link>
      </div>

  )
}
