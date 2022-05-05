import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    width: 300px;
    font-weight: 500;
    font-size: 20px;
<<<<<<< HEAD
=======

>>>>>>> 99cc798059ca13615a45e64b660b28998cffc7d2
    text-align: center;
    h1 {
      margin-top: 1.6rem;
    }
    button {
      padding: 15px 20px;
      margin-top: 1rem;
      background-color: ${(props) => props.theme.blue};
      color: white;
      font-size: 16px;
      border-radius: 8px;
    }
  }
`;
const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to="/" className="logo">
        <img
          srcSet="/images/logo.png"
          alt="monkey-blog"
          className="img-notFound"
        />
        <h1>Oops! Page not found</h1>
        <button>Back Home</button>
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
