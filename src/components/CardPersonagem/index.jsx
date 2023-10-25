/* eslint-disable react/prop-types */
import styled from "styled-components";
import "boxicons";
import { Link } from "react-router-dom";
import { colorAldeias, colorDaLetras, verificaIMG, verificaList, numberFormat } from "../../services/functions/color_aldeias";
import { aldeiaIMG } from "../../services/functions/villages";

const CardPersonagem = ({ personagem }) => {
  return (
    <>
      <Card
        $aldeia={
          verificaList(personagem.personal.affiliation) !== undefined &&
          colorAldeias(verificaList(personagem.personal.affiliation))
        }
        $letra={verificaList(personagem.personal.affiliation) !== undefined &&
            colorDaLetras(verificaList(personagem.personal.affiliation))}
      >
        <div className="image">
          <span>
            <div>
              <img
                src={personagem.personal.affiliation && aldeiaIMG(verificaList(personagem.personal.affiliation))}
                alt=""
              />
            </div>
          </span>

          <img src={verificaIMG(personagem.images)} alt="" />

        </div>
        <div className="texto">
          <h2>
            {personagem.name}<strong>#{numberFormat(personagem.id)}</strong>
          </h2>
          <h2>{"Sex:"}{personagem.personal.sex ? personagem.personal.sex :  "Sem sexo definido"}</h2>
          <h2>{"Occupation:"} {personagem.personal.occupation ? verificaList(personagem.personal.occupation) : "Indefinido" }</h2>
          <h2>{"Kekkei Genkai:"}{personagem.personal.kekkeiGenkai ? personagem.personal.kekkeiGenkai : <strong>Não Possui</strong>}</h2>
          <div className="action">
            <Link>
              {"Ver mais Infos"}
              <box-icon name="right-arrow-alt" color="#000000"></box-icon>
            </Link>
            <box-icon name="bookmarks" type="solid"></box-icon>
          </div>
        </div>
      </Card>
    </>
  );
};

const Card = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.$aldeia || "#c1c0c1"};
  color: ${(props) => props.$letra};
  backdrop-filter: blur(5px);
  border: 10px groove #f39e00;
  box-shadow: 3px 2px 38px 4px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 3px 2px 38px 4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 3px 2px 38px 4px rgba(0, 0, 0, 1);

  & .image {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: black;
    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 12px;
    }

    & span {
      position: absolute;
      top: 5px;
      left: 10px;
      rotate: -20deg;

      & div {
        width: 60px;
        height: 60px;
        position: relative;
        & img {
          width: 100%;
        }

        & h3 {
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.8rem;
          color: #00a2ff;
        }
      }
    }
  }

  & .texto {
    width: 100%;
    padding: 0 20px;
    color: ${(props) => props.$letra};

    & .action {
      margin-top: 35px;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & box-icon {
        width: 30px;
        height: 30px;
        cursor: pointer;
        fill: white;
          &:active{
            scale: .90;
            fill: red;
          }
      }

      & a {
        display: flex;
        font-weight: bold;
        transition-duration: 200ms;
        justify-content: space-between;
        align-items: center;
        color: ${(props) => props.$letra};
        border-bottom: 1px solid transparent;
        &:hover {
          border-bottom: 1px solid black;
        }
      }
    }

    & h2 {
      width: 100%;
      display: flex;
      border-bottom: 2px solid black;
      padding-bottom: 5px;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      margin: 5px 0;
      font-weight: bold;
      color: ${(props) => props.$letra};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      & img {
        width: 20px;
        object-fit: contain;
      }
    }
  }
`;

export default CardPersonagem;
