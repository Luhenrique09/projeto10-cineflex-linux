
import React , { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'


function FilmePage(){
/*       const URLFilmes = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    
    useEffect(() => { 
        const promise = axios.get(URLFilmes) 

        promise.then((res) => {
            console.log(res.data)
        })

        promise.catch((err) => {
            console.log(err)
        })        
    }, []); */


    return(
        <div>
            <Title>
                Selecione o filme
            </Title>
            <ConteudoFilmes>
                <CaixaFilme><img src='https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000' alt='filme1'/></CaixaFilme>
                <CaixaFilme><img src='https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000' alt='filme2'/></CaixaFilme>
                <CaixaFilme><img src='https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000' alt='filme3' /></CaixaFilme>
                <CaixaFilme><img src='https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000' alt='filme4'/></CaixaFilme>
                <CaixaFilme><img src='https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000' alt='filme5'/></CaixaFilme>
                <CaixaFilme><img src='https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000' alt='filme6'/></CaixaFilme>
                <CaixaFilme><img src='https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000' alt='filme7'/></CaixaFilme>
            </ConteudoFilmes>
        </div>
    )
}
export default FilmePage

const Title = styled.div`
  width: 100%;
  height: 110px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ConteudoFilmes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`

 const CaixaFilme = styled.div`
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 30px;

    img{
        width: 129px;
    }
` 