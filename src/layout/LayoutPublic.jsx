import { Outlet, useNavigation } from "react-router-dom"
import { Header } from "../components/Header"
import { Container, Spinner } from "react-bootstrap";

export const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      {navigation.state === "loading" ? (
        <Container className="d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
          <Spinner/>
        </Container>
      ) : (
          <Outlet />
      )}
    </>
  );
}
