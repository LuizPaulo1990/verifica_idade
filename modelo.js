function verificar(){
    
    var data = new Date();
    
    var ano = data.getFullYear();
    
    var fano = document.getElementById('txtano');
    
    var res = document.querySelector('div#resultado');
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert(' [ERRO] Verifique os dados e tente novament');
    } else {
       var fsex = document.getElementsByName('radsex');
       var idade = ano - Number(fano.value);
       var gênero = '';
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');
       if (fsex[0].checked){
        gênero = 'Homem';
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'imagens/garotinho.jpg');
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/rapaz.jpg');
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'imagens/homem.jpg');
        } else{
            //senhor
            img.setAttribute('src', 'imagens/senhor.jpg');
        }
       } else if (fsex[1].checked){
        gênero = 'Mulher';
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'imagens/garotinha.jpg');
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/mocinha.jpg');
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'imagens/mulher.jpg');
        } else{
            //senhor
            img.setAttribute('src', 'imagens/senhora.jpg');
        }
       }
       res.style.textAlign = 'center';
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
       res.appendChild(img);
    }


}