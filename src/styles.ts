import { createGlobalStyle } from "styled-components";

export const cores = {
    branca: '#FFFFFF',
   rosa: '#EA1D2C',
   rosaClaro: '#FFF1F2',
   blanck: '#FFF1F2',
    cortextForms: '#4B4B4B'
}

export const breakpoints =  {
   tablet: '768px',
   desktop: '1024px'
}
export const GlobalCss = createGlobalStyle`
   * {
      margin:0;
      padding:0;
      box-sizing: border-box;
         font-family: "Nunito Sans", "Segoe UI", sans-serif;
   }
   body{
       background-color: #f7f7f7;
       color: ${cores.cortextForms};
    }
    a {
       text-decoration: none;
   }
   .container{
      max-width: 1024px;
      width:100%;
      margin: 0 auto;
         padding: 48px 24px 72px;
      display: grid;
      grid-template-columns: 1fr 1fr;
         gap: 24px;

      @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
            padding: 32px 16px 48px;
      }
   }


`
