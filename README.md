# projeto-gameflix
Neste projeto foi recriada a interface da Netflix utilizando tecnologias simples como HTML5, CSS3 e JavaScript.  

O GAMEFLIX seria uma plataforma onde é possível encontrar seus jogos favoritos e jogar.  

Ao clicar no jogo desejado a foto do jogo principal é trocada (capa do topo), assim como o título e a breve descrição do jogo que foi clicado. 
Então todos os jogos presentes no cátalago podem subir para o topo e assim assumir a imagem de capa. Contento o botão de jogar  e o de mais informações.

OBS: Titulos e descrições do jogo estão sendo puxadas de um arquivo JSON e sendo injetadas no HTML.
As fotos também estão sendo trocadas recendo o ID da foto quando clicadas, armazenando a caminho da foto com o ID com uma template string e injetando logo após.
As funções se encontram no arquivo index.JS, dentro das pastas js/owl/index.js o arquivo JSON se encontra lá também.
