# YouTube sem Home

Extensão para Brave/Chrome que redireciona a home do YouTube para Inscrições e esconde as recomendações ao lado do player, as sugestões no fim do vídeo e os Shorts.

## Instalação

1. Abra `brave://extensions` ou `chrome://extensions`.
2. Ative o **Modo do desenvolvedor**.
3. Clique em **Carregar sem compactação** e selecione esta pasta.

Depois de editar um arquivo, clique em recarregar no card da extensão e atualize a aba do YouTube.

## Trocar o destino

Altere a URL em `rules.json` e a constante `DESTINO` em `content.js`.

## Se algo voltar a aparecer

O YouTube muda o layout de vez em quando. Inspecione o elemento que voltou e ajuste o seletor em `hide.css`.
