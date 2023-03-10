Proposta do exercício:
Temos uma lista de cores disponibilizada no código abaixo.
Você irá criar um botão que, ao ser clicado, faz aparecer esta lista, e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores volte a sumir.

Como fazer:
Utilize os códigos HTML e CSS disponibilizados;
Crie o arquivo de código JS;
Referencie o arquivo JS no HTML.

Como resolvi:

PARTE 1:
- No arquivo HTML reescrevi parte do código do botão, adicionando a classe "botao-lista";

- No arquivo CSS chamei a tag .botao-lista e atribui a propriedade display:none para que a lista não fosse mostrada quando a página fosse carregada, apenas quando o botão fosse clicado;

- Criei o arquivo main.js e referenciei no HTML;

PARTE 2: 
Para mostrar a lista irei usar um evento de click, onde quando o botão for clicado o elemento lista receberá um novo atributo que dará a ele a propriedade de display block, fazendo com que a lista seja mostratada no navegador. 

- No arquivo de código JS, criei as constantes para refenciar a lista e o botao:

        const lista = document.querySelector("ul");
        const botao = document.querySelector(".botao-lista");

- Usei o addEventListener no elemento botao para adicionar o evento de click nele:

        botao.addEventListener("click", () => 

- Dentro do .addEventListener passei o evento que quero que ocorra: a adição de um atributo no elemento lista. Para adicionar o atributo usei o setAttribute:

        lista.setAttribute("data-lista", "mostrar");

- No arquivo CSS, chamei o data attribute adicionando a ele a propriedade display: block, então quando atribuido ao elemento lista fará com que o elemento receba essa propriedade e apareça na tela com o click. 

        [data-lista="mostrar"]{
            display: block;    
        }

PARTE 3:
Para adicionar um botão que faça a lista fechar, precisarei criar um botão de "fechar" no código HTML e também me atentar ao detalhe que ele precisa aparecer apenas quando a lista tiver aberta e sumir quando fecharmos a lista.

- No código HTML, criei um botão posicionado abaixo da lista com a classe "botao-fechar" e o texto "fechar";

- No arquivo CSS, adicionei nele a propriedade display: none, para ele não aparecer no navegador sem o click;

- No JS, comecei criando uma constante para referenciar o botao-fechar:

         const fechar = document.querySelector(".botao-fechar");

- Para o botao-fechar aparecer junto com a lista também adicionei a ele o data attribute:

        botao.addEventListener("click", () => {
            lista.setAttribute("data-lista", "mostrar");
            fechar.setAttribute("data-lista", "mostrar");
        });

Agora quando clico no botão aparece a lista e o botão de fechar.

PARTE 4:
Para o botão fechar fazer a lista sumir e sumir junto, usarei como base o código usado para mostrar, mudando apenas o data attribute para "esconder". E para isso no arquivo CSS vou dar a ele a propriedade display: none, assim quando atribuídos aos elementos, eles irão sumir da página do navegador.

- No arquivo SJ, adicionei o evento ao botao-fechar, então usei a constante fechar:

        fechar.addEventListener("click", () => {
            lista.setAttribute("data-lista", "esconder");
            fechar.setAttribute("data-lista", "esconder");
        });

- No arquivo CSS, chamei o data attribute e adicionei a propriedade display: none:

        [data-lista="esconder"] {
            display: none;
        }

Agora quando clico no botão fechar a lista some e o botão fechar some junto. 
