import { Alert, Container } from "react-bootstrap"

export const Index = () => {
  return (
    <Container>
      <Alert className="mt-4">
        Proyecto creado con la intención de aprender los conceptos básicos de <b>React Router DOM en su última version</b>
      </Alert>

      <Alert variant="warning">
        <b>Temas:</b>
        <ul>
          <li>Arquitectura de un proyecto con React-Router-DOM</li>
          <li>Configuración de enrutamiento</li>
          <li>Layout (Outlet y children)</li>
          <li>Rutas parametrizadas</li>
          <li>Utilización de API para implementar los loaders</li>
        </ul>
      </Alert>
    </Container>
    
  )
}
