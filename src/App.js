import React, { Component } from 'react';
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { Container, Typography } from "@material-ui/core";

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm}/> 
      </Container>
    );
  }
}

//ao enviar é uma propriedade

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
