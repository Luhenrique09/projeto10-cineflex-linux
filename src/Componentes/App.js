import React from 'react';
import styled from 'styled-components';
import FilmePage from './FilmePage';
import GlobalStyle from "./GlobalStyle";


function App (){
  return(
    <div>
      <GlobalStyle/>
      <Top>
        CINEFLEX
      </Top>
      <FilmePage/>
     

    </div>
  )
}
export default App;


const Top = styled.div`
  background-color: #C3CFD9;
  width: 100%;
  height: 67px;
  color: #E8833A;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`


