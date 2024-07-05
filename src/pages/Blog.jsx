import { Alert, Card, CardBody, CardText, CardTitle, Container} from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom"


export const Blog = () => {
    const {posts} = useLoaderData();
    return (
      <>
        <Container className="d-flex gap-2 flex-column mt-2">
          <Alert>Implementación de rutas parametrizadas</Alert>
          {posts.map((post, index) => (
            <Card key={index}>
              <CardBody>
                <CardTitle>{post.id}- {post.title}</CardTitle>
                <CardText>{post.body}</CardText>
                <Link
                  to={`/blog/${post.id}`}
                  className="btn btn-dark"
                  style={{ height: "2rem" }}
                >
                  {" "}
                  Ir al Post
                </Link>
              </CardBody>
            </Card>
          ))}
        </Container>
      </>
    );
}


