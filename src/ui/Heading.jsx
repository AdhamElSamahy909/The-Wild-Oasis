import { css, styled } from "styled-components";

// const test = css`
//   text-align: center;
// `;

// Since this is a React component, it need to start with an uppercase
// Behind the scenes, the styled components creates randomly named classes. The CSS that we just wrote is
// only scoped fo this exact component which eliminates all the problems of global CSS
// Since this is in fact a template literal, we can actually write JS expressions in there
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    `}

  line-height: 1.4;

  @media (max-width: 768px) {
    width: max-content;
    justify-self: center;
  }
`;

export default Heading;
