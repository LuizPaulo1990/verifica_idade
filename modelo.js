function verificar(){
   
    var data = new Date();
   
    var ano = data.getFullYear();

    var fano = document.querySelector('input#txtano');
    
    var resultado = document.querySelector('div#resultado');
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        
        alert('[ERRO] Verifique os dados e tente novamente!');

    } else{
        
        var fsex = document.getElementsByName('radsex');
        
        var idade = ano - Number(fano.value);
        
        var gênero = '';

        var img = document.createElement('img');

        if (fsex[0].checked){

            gênero = 'Homem'

            if(idade >= 0 && idade <10){
            
                img.setAttribute('src', '../imagens/garotinho.jpg');
                
                resultado.innerHTML = `Detectamos um garoto de ${idade} anos.`;

            }else if (idade < 18){
                
                img.setAttribute('src', '../imagens/rapaz.jpg');
                
                resultado.innerHTML = `Detectamos um rapaz de ${idade} anos.`;

            }else if (idade < 50){
                
                img.setAttribute('src', '../imagens/homem.jpg');
                
                resultado.innerHTML = `Detectamos um homem de ${idade} anos.`;

            }else{
                
                img.setAttribute('src', '../imagens/senhor.jpg');
                
                resultado.innerHTML = `Detectamos um senhor de ${idade} anos.`;

            }

        } else {

            gênero = 'Mulher';

            if(idade >= 0 && idade <10){
                
                img.setAttribute('src', '../imagens/garotinha.jpg');
                
                resultado.innerHTML = `Detectamos uma garota de ${idade} anos.`;
                
            }else if (idade < 18){
                
                img.setAttribute('src', '../imagens/mocinha.jpg');
               
                resultado.innerHTML = `Detectamos uma mocinha de ${idade} anos.`;

            }else if (idade < 50){
                
                img.setAttribute('src', '../imagens/mulher.jpg');

                resultado.innerHTML = `Detectamos uma mulher de ${idade} anos.`;

            }else{
                
                img.setAttribute('src', '../imagens/senhora.jpg');

                resultado.innerHTML = `Detectamos uma senhora de ${idade} anos.`;
            }

        }
        
        resultado.style.textAlign = 'center';
        
        resultado.appendChild(img);



    }
   
    

}
