import Container from "./Container";
import Section from "./Section";
import Form from "./Form";
import Clock from "./Clock";

function App() {
  return (
    <Container>
      <Section>
        <Clock />
        <Form />
      </Section>
    </Container>
  );
}

export default App;
