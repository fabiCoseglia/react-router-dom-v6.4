import { Card, CardBody, CardText, CardTitle, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom"

export const Post = () => {
    const {post} = useLoaderData();
  return (
    <Container className="d-flex gap-2 flex-column mt-4">
            <Card>
              <CardBody>
                <CardTitle>{post.id}- {post.title}</CardTitle>
                <CardText>{post.body}</CardText>
                <Container className="d-flex gap-2">              
                 <Link
                  to={`/`}
                  className="btn btn-dark"
                  style={{ height: "2rem" }}
                >
                  {" "}
                  Volver al Home
                </Link>
                <Link
                  to={`/blog`}
                  className="btn btn-dark"
                  style={{ height: "2rem" }}
                >
                  {" "}
                  Volver al Listado
                </Link>
                </Container> 
              </CardBody>
            </Card>
        </Container>
  )
}
