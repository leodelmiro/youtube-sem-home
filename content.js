// O YouTube é uma SPA: clicar no logo ou em "Início" troca de página sem nova
// requisição, então a regra de rede (rules.json) não pega esses casos.
const DESTINO = "/feed/subscriptions";

const ehHome = (url) => url.origin === location.origin && url.pathname === "/";

// Intercepta o clique antes do roteador do YouTube, evitando carregar a home.
document.addEventListener(
  "click",
  (evento) => {
    const link = evento.target.closest?.("a[href]");
    if (!link || !ehHome(new URL(link.href))) return;

    evento.preventDefault();
    evento.stopImmediatePropagation();
    location.assign(DESTINO);
  },
  true
);

// Rede de segurança para navegações que não passam por um clique em link.
document.addEventListener("yt-navigate-finish", () => {
  if (ehHome(new URL(location.href))) location.replace(DESTINO);
});
