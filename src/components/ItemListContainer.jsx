import Container from "react-bootstrap/Container";
export const ItemListContainer = (props) => {
  return (
    <Container className="mt-5 text-center">
      <h1>{props.greeting}</h1>
    </Container>
  );
};
