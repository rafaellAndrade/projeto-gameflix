function readTextFile(file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}


function TrocaFoto(element){
    divFoto = document.getElementById('foto-principal');
    divFoto.style.background = `linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('/img/capa-${element.id}.jpg')`;    
    divFoto.style['background-size'] = `cover`;    

    readTextFile("./js/owl/descricao-jogos.json", function(text){
      let data = JSON.parse(text);
      const titulo = document.getElementById('titulo-id')
      const descricao = document.getElementById('descricao-id')

      data.filter(jsonArquivo => {
        if(jsonArquivo.id === element.id ) {
          titulo.innerHTML = jsonArquivo.nome
          descricao.innerHTML = jsonArquivo.descricao
        }        
      })      
      //console.log(data);
    });   
}
