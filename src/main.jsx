import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';

export const Estilo = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    font-family: 'Inconsolata', monospace;
    
    &:root{
      --Primary: #547095;
      --Secundary: #DAE84B;
      --Tertiary: #C65F14;
      --Quartenary: #9F212D;
      --Quintuary: #191A1E;
      --Acrilic: #3476A255;
      /* Alert Colors */
      --AlertColor: #FFFF00;
      --Danger: #EA0B0B;
      --Papiro: #EEC569; 

      /* Text Colors */
      --Dark-Gray: #6B6B6B;
      --Medium-Gray: #c1c1c1;
      --Light-Gray: #e6e6e6;
    }
  }

`;
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Estilo />
    <App />
  </>
);
