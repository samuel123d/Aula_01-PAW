import React from 'react';
import ReactDOM from 'react-dom';

function Usuario(props) {
  return (
    <div>
      <p>Nome: {props.nome} {props.sobrenome}</p>
      <p>CPF: {props.cpf}</p>
      <p>Contato: {props.telefone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

function IMC(props) {
  const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    if (imc < 18.5) return 'Abaixo do Peso';
    if (imc < 24.9) return 'Peso Normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  const imc = calcularIMC(props.peso, props.altura);

  return (
    <div>
      <p>Peso: {props.peso} kg</p>
      <p>Altura: {props.altura} m</p>
      <p>IMC: {imc}</p>
    </div>
  );
}

function App() {
  const usuarios = [
    { nome: 'Samuel', sobrenome: 'Anderson', cpf: '000.000.000-00', telefone: '(84) 00000-0000', email: 'jj@email.com' },
    { nome: 'Samuel', sobrenome: 'Chad', cpf: '111.111.111-11', telefone: '(84) 11111-1111', email: 'ms@email.com' },
    { nome: 'Jordan', sobrenome: 'Breno', cpf: '222.222.222-22', telefone: '(84) 22222-2222', email: 'ap@email.com' },
    { nome: 'Keven', sobrenome: 'William', cpf: '333.333.333-33', telefone: '(84) 33333-3333', email: 'cs@email.com' },
    { nome: 'Luiz', sobrenome: 'França', cpf: '444.444.444-44', telefone: '(84) 44444-4444', email: 'fo@email.com' },
  ];

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {usuarios.map((usuario, index) => (
        <Usuario key={index} {...usuario} />
      ))}
      <h1>Calculadora de IMC</h1>
      <IMC peso={66} altura={1.70} />
      <IMC peso={125} altura={1.90} />
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);