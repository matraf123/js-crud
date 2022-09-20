 console.log('teste');

 const miniTwitter = {
    usuarios: [
        {
            username: 'rafa_lhaes',
        }
    ],
    posts: [
        {
            id:1,
            owner: 'rafa_lhaes',
            content: 'Meu primeiro tweet'
        }
    ],

 };

 // CREATE
function criaTweet({ dados }){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({owner: 'rafa_lhaes', content: 'Segundo tweet'});
criaPost({owner: 'rafa_lhaes', content: 'terceiro tweet'});
//console.log(miniTwitter.posts)

// READ 
function pegaPosts(){
    return miniTwitter.posts;
}
console.log(pegaPosts())

// UPDATE
function atualizaContentDoPost(id, novoConteudo){
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost(1, 'Novo conteúdo do post')
console.log(pegaPosts())

// DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostsAtualizada;
}
apagaPost(2);
console.log(pegaPosts());