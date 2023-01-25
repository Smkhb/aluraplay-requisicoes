async function listaVideos(){
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvetida = await conexao.json();
    return conexaoConvetida
}
export const conectaApi ={
    listaVideos
}