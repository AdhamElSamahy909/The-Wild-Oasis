import { styled } from "styled-components";
import GloabalStyles from "./styles/Globalstyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  const StyledApp = styled.div`
    padding: 20px;
  `;

  // Insteas of using all of the CSS variables, the styled-components library actually gives us its own way
  // of providing variables like these to our entire application by using a mechanism that is called themes.
  // So basically, with styled-components, themes, we can also inject design tokens into our application.
  // However, this mehanism was designed before css varuables were really popular, and really usable, in
  // modern CSS.
  return (
    <>
      {/* This component does not accept any children and it needs to be a sibling of the comoponent that we need to style */}
      <GloabalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            {/* What's really cool about this is that these styled components can receive all the styles and props that normal HTML
      or JSX elements can receive */}
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert("check in")}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("check out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>

            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
// Styled Components essentially allow us to write CSS right inside our JS components. The way it works is
// that we take a regular HTML element and then using the styled fn , we create a brand new React component
// with some CSS styles applied to it. Then, we can use and reuse that component instead of using the regular
// HTML element
