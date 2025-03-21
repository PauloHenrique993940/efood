import styled, { createGlobalStyle } from "styled-components";
export const cores = {
    branca: '#FFFFFF',
    rosa: '#E66767',
    rosaClaro: '#FFEBD9',
    blanck: '#FFEBD9',
}
export const GlobalCss = createGlobalStyle`
   * {
      margin:0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      text-decoration: none;
      color: ${cores.blanck}
   }
   body{
     cores: ${cores.rosa}
   }
   .container{
      max-width: 1024px;
      width:100%;
      margin: 0 auto;
      padding-top: 100px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 100px;
      grid-gap: 60px;

   }
   @media (max-width: 768px) {
      .container {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
      }
   }
   
   
   


`
