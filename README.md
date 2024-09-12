# Cronômetro em JavaScript

Este é um projeto de cronômetro simples desenvolvido com HTML, CSS, JavaScript e Bootstrap. O cronômetro permite que o usuário insira um tempo inicial (em horas, minutos e segundos) e execute uma contagem regressiva com opções de iniciar, pausar e reiniciar o cronômetro.

## 🛠️ Funcionalidades

- **Iniciar o cronômetro**: Começa a contagem regressiva do tempo definido.
- **Pausar o cronômetro**: Pausa a contagem em qualquer momento.
- **Reiniciar o cronômetro**: Reseta o tempo para 00:00:00 e para a contagem.
- **Exibição do tempo**: O display do cronômetro mostra o formato `"horas : minutos : segundos"` até que o tempo acabe, momento em que ele muda para `"O TEMPO ACABOU!!!"`.

## 🧰 Conceitos de JavaScript Utilizados

Este projeto utiliza os seguintes conceitos de JavaScript:

- **`let` e `const`**: Para declaração de variáveis e constantes.
- **Arrow Functions**: Para funções de uma forma mais concisa.
- **Objetos**: Para armazenar o estado do cronômetro (`timerState`).
- **Template Literals**: Para formatar strings de exibição do tempo.
- **Operador Ternário**: Para formatação condicional de dígitos.
- **Desestruturação**: Para acessar as propriedades do objeto `timerState`.

## Você pode acessá-lo através do link: https://cronometro-desafiojs.netlify.app/

ou clonar o repositório e rodar o projeto localmente:

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- Navegador Web para rodar o projeto.

## 🚀 Clonando o Repositório

1. Abra o terminal no local onde deseja clonar o repositório.
2. Execute o comando abaixo:

   ```bash
   git clone git@github.com:Alessandra1999/desafio-js-bootcampitalents.git

3. Navegue até o diretório do projeto:

   ```bash
   cd desafio-js-bootcampitalents

## ▶️ Rodando o Projeto Localmente

- Abra o arquivo `index.html` no seu navegador preferido.
- Você pode simplesmente clicar duas vezes no arquivo ou usar um servidor local como o VS Code Live Server.

## 📄 Estrutura do Projeto

- **index.html**: Estrutura básica do cronômetro e integração com Bootstrap.
- **style.css**: Estilos para o layout e responsividade do cronômetro.
- **script.js**: Lógica do cronômetro, controle de tempo e funções principais.

## 📷 Demonstração

O cronômetro apresenta uma interface simples com botões de iniciar, pausar e reiniciar, e campos para inserção de tempo em horas, minutos e segundos.

## 📝 Como Funciona

1. Insira o tempo desejado nos campos de horas, minutos e segundos.
2. Clique em "Iniciar" para começar a contagem regressiva.
3. Use "Pausar" para pausar o cronômetro e "Reiniciar" para zerar o tempo.
4. O display mostrará sempre "horas : minutos : segundos" até que o tempo acabe, momento em que ele exibirá "O TEMPO ACABOU!!!".

