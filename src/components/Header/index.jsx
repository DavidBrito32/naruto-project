import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import clan from "./assets/meu_clan.svg";
import logo from "./assets/logo.png";
import menu from "./assets/shuriken.png";
import { goToMyClan } from "../../routes/Cordinators/navegacao";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <h3>
            <img src={menu} alt="" />
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Aldeias</Link>
              </li>
              <li>
                <Link>Clans</Link>
              </li>
            </ul>
          </h3>

          <div className="meu-clan" onClick={() => goToMyClan(navigate)}>
            <img src={clan} alt="img" />
            <h4>Meu Clã</h4>
          </div>
        </nav>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: linear-gradient(to right, #FCAA11, #F3541D);
  position: sticky;
  top: 0;
  border: 5px solid black;
  z-index: 10;

  & .logo {
    width: 200px;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  & nav {
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    & h3 {
      display: flex;
      padding-left: 40px;
      flex-direction: column;
      cursor: pointer;
      text-align: center;
      font-size: 2rem;

      & img {
        display: block;
        width: 70px;
        object-fit: contain;
      }

      &:hover {
        & img {
          animation: rotacao 1s infinite reverse linear;
        }
        ul {
          visibility: visible;
          opacity: 1;
          height: 250px;
        }
      }

      & ul {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        top: 120px;
        left: -30px;
        width: 200px;
        height: 0px;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-direction: column;
        transition: 600ms;
        border-radius: 12px;
        overflow: hidden;
        background-color: #00000085;
        backdrop-filter: blur(3px);
        padding-top: 10px;

        & li {
          overflow: hidden;
          & a {
            font-size: 1.3rem;
            color: #F3541D;
            &:hover {
              color: #fa774c;
            }
          }
        }
      }
    }

    & .meu-clan {
      width: 100px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition-duration: 100ms;

      &:hover {
        background-color: #ffffff15;
        scale: 1.1;
      }
      &:active {
        scale: 0.97;
      }
      & img {
        width: 70px;
      }
      & h2 {
        font-size: 1.5rem;
      }
    }
  }

  @keyframes rotacao {
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 480px){
    justify-content: space-between;
    padding: 0 10px;
    & .logo {
      width: 150px;
      height: 150px;
    }

    & nav{
      width: 150px;
      justify-content: center;
      & img{
        width: 50px;
        height: 50px;
      }

      & h3{
        padding: 0;
      }
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 768px){
    justify-content: space-between;
    padding: 0 10px;
    & .logo {
      width: 150px;
      height: 150px;
    }

    & nav{
      width: 150px;
      justify-content: center;
      & img{
        width: 50px;
        height: 50px;
      }

      & h3{
        padding: 0;
      }
    }
  }
`;

export default Header;
