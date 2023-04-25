# Projeto Validação de formulário JavaScript - programadores iniciantes

## Seja bem vindo

O projeto consiste em uma página web que valida informações de um formulário, especificamente o CPF de um usuário. A validação é feita em tempo real, ou seja, o usuário é notificado imediatamente se o CPF inserido é válido ou inválido.

A seguir, vou descrever com mais detalhes cada um dos arquivos presentes nos links fornecidos:

index.html: este é o arquivo principal da página web. Ele contém a estrutura do formulário e a referência aos arquivos de script que fornecem a validação.

main.js: este arquivo contém a lógica do programa para a validação do formulário. Ele inclui funções para obter os valores inseridos pelo usuário no formulário e, em seguida, chama a função de validação de CPF contida no arquivo validacpf.js.

validacpf.js: este arquivo contém a função para validar o CPF inserido pelo usuário. A função usa uma expressão regular para verificar se o CPF é válido ou não. Se o CPF for válido, a função retorna true, caso contrário, retorna false.

O projeto utiliza HTML, CSS e JavaScript para criar uma interface de usuário interativa que permite ao usuário inserir informações no formulário e ver a validação em tempo real. O código foi organizado de forma modular, com a lógica de validação separada em um arquivo JavaScript separado.

Para utilizar o projeto, o usuário deve baixar os arquivos index.html, main.js e validacpf.js e colocá-los na mesma pasta. Em seguida, basta abrir o arquivo index.html em um navegador para visualizar a página web e testar a validação do CPF no formulário.

Em resumo, o projeto consiste em uma página web simples que fornece validação em tempo real para um formulário de CPF. Ele pode ser usado como um exemplo para programadores iniciantes que desejam aprender sobre HTML, CSS e JavaScript e como criar páginas web interativas com validação de formulários.