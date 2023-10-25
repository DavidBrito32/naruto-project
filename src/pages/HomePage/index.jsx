/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import bg from "./assets/bg.avif";
import CardPersonagem from "../../components/CardPersonagem";
import { useAxios } from "../../hooks/useAxios";
import { personagensURL } from "../../constants/Endpoints";
import {
  colorAldeias,
  colorDaLetras,
} from "../../services/functions/color_aldeias";
import { useState } from "react";
import { verificaList } from "../../services/functions/color_aldeias";

const HomePage = () => {
  const { data, error, loading } = useAxios(personagensURL);
  const { characters } = data;
  console.log(characters);
  const [search, setSearch] = useState({
    nome: "",
    aldeia: "",
  });

  const pesquisarAldeias = (variavel) => {
    if (variavel) {
      if (variavel !== "") {
        setSearch({ ...search, aldeia: variavel });
      }
    }
  };

  return (
    <>
      <HomeContainer>
        <h1>Todos os Personagens</h1>
        <div className="form">
          <input
            type="text"
            onChange={(e) => setSearch({ ...search, nome: e.target.value })}
            placeholder="Pesquise pelo nome"
          />
          <button onClick={() => pesquisarAldeias("")}>Pesquisar</button>
          <div className="vilas">
            <h1>Escolha a aldeia para ver os personagens</h1>
            <Span onClick={() => setSearch({ ...search, aldeia: "" })}>
              <h3>Todas</h3>
            </Span>
            <Span
              $bg={colorAldeias("konohagakure")}
              letra={colorDaLetras("konohagakure")}
              onClick={() => pesquisarAldeias("konohagakure")}
            >
              <h3>Konoha</h3>
            </Span>
            <Span
              $bg={colorAldeias("sunagakure")}
              letra={colorDaLetras("sunagakure")}
              onClick={() => pesquisarAldeias("sunagakure")}
            >
              <h3>Areia</h3>
            </Span>
            <Span
              $bg={colorAldeias("kumogakure")}
              $letra={colorDaLetras("kumogakure")}
              onClick={() => pesquisarAldeias("kumogakure")}
            >
              <h3>Nuvem</h3>
            </Span>
            <Span
              $bg={colorAldeias("Hoshigakure")}
              $letra={colorDaLetras("Hoshigakure")}
              onClick={() => pesquisarAldeias("Hoshigakure")}
            >
              <h3>Estrela</h3>
            </Span>
            <Span
              $bg={colorAldeias("iwagakure")}
              $letra={colorDaLetras("iwagakure")}
              onClick={() => pesquisarAldeias("iwagakure")}
            >
              <h3>Pedra</h3>
            </Span>
            <Span
              $bg={colorAldeias("takigakure")}
              $letra={colorDaLetras("takigakure")}
              onClick={() => pesquisarAldeias("takigakure")}
            >
              <h3>Cachoeira</h3>
            </Span>
            <Span
              $bg={colorAldeias("kusagakure")}
              $letra={colorDaLetras("kusagakure")}
              onClick={() => pesquisarAldeias("kusagakure")}
            >
              <h3>Grama</h3>
            </Span>
            <Span
              $bg={colorAldeias("otogakure")}
              $letra={colorDaLetras("otogakure")}
              onClick={() => pesquisarAldeias("otogakure")}
            >
              <h3>Som</h3>
            </Span>
            <Span
              $bg={colorAldeias("akatsuki")}
              $letra={colorDaLetras("akatsuki")}
              onClick={() => pesquisarAldeias("akatsuki")}
            >
              <h3>Akatsuki</h3>
            </Span>
          </div>
        </div>
        <ul>
          {error && <p>{error}</p>}
          {characters && characters
              .filter((personagens) => personagens.id > 0)
              .filter((personagem) => {
                if (search !== "") {
                  return personagem.name
                    .toLowerCase()
                    .includes(search.nome.toLocaleLowerCase());
                } else {
                  return personagem;
                }
              })
              .filter((personagem) => {
                if (search.aldeia !== "") {
                  return (
                    personagem.personal.affiliation &&
                    verificaList(personagem.personal.affiliation)
                      .toLowerCase() === search.aldeia.toLocaleLowerCase()
                  );
                } else {
                  return personagem;
                }
              })
              .map((item) => (
                <li key={item.id}>
                  <CardPersonagem personagem={item} />
                </li>
              ))}
        </ul>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 15vh);
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  & .form {
    width: 100%;
    height: 30vh;
    margin: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & input {
      width: 500px;
      height: 50px;
      border-radius: 4px;
      padding-left: 20px;
      font-size: 1.2rem;
      background-color: transparent;
      border: 2px solid white;
      color: white;
      font-weight: bold;
    }

    & button {
      width: 150px;
      height: 50px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.5rem;
      background-color: transparent;
      border: 2px solid white;
      color: white;
      font-weight: bold;
    }

    & .vilas {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      & h1 {
        width: 100%;
        font-size: 1.8rem;
      }
    }
  }

  & h1 {
    padding-top: 30px;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 30px;
  }

  & ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    & li {
      width: 345px;
      height: 466px;
    }
  }

  @media only screen and (max-width: 480px){
    padding: 0;
      & h1{
        font-size: 1.5rem;
        color: yellow;
      }

      & .form{
        margin-bottom: 180px;

        & .vilas{
          gap: 3px;
        }

          & h1{
            color: white;
          }

          & input{
            width: 50%;
            height: 30px;
            font-size: 1rem;
          }
          & button{
            width: 100px;
            font-size: .9rem;
            height: 30px;
          }
      }
  }
  @media only screen and (min-width: 480px) and (max-width: 768px){
    padding: 0 5px;
      & h1{
        font-size: 1.5rem;
        color: yellow;
      }

      & .form{
        margin-bottom: 200px;

          & h1{
            color: white;
          }

          & input{
            width: 50%;
          }
      }
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: white;
  width: 150px;
  height: 50px;
  border-radius: 12px;
  border: 2px dashed white;
  cursor: pointer;

  @media only screen and (max-width: 480px){
    width: calc(100% / 4);
    font-size: .8rem;
  }

  &:active {
    scale: 0.97;
  }

  &:hover {
    opacity: 0.8;
  }
  background-color: ${(props) => props.$bg};
  color: ${(props) => props.$letra};
`;

export default HomePage;
