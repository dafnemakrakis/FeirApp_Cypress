# FeirApp_Cypress


## How to run the tests

* In the project root:
  * Debug mode - Browser ```npx cypress open```
    * Select E2E Testing
    * Start E2E Testing in Chrome
    * Select the testing file you want to run
  * Headless mode ```npx cypress run``` 

## Cenários de teste

 ```
Página abrir com sucesso
      Dado que quero acessar o sistema
      Quando acessar a página inicial
      Então o sistema deve apresentar os elementos de pesquisa e mapa

Escolher todas as feiras com sucesso
      Dado que estou na página inicial
      Quando pesquisar por todas as feiras
      Então o sistema deve apresentar as feiras no mapa

Escolher as feiras de segunda-feira com sucesso
      Dado que quero escolher somente as feiras que funcionam na segunda-feira
      Quando pesquisar por feiras de segunda-feria
      Então o sistema deve apresentar as feiras no mapa
```

  
