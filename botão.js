var controles = document.querySelector('#controles');
var css_texto = document.querySelector('.css');
var botao = document.querySelector('.btn');

function mudanca_change(evento){
    var name = evento.target.name;
    var value = evento.target.value;
    console.log(name,value);
    if(name == 'texto'){
        botao.innerText = value;
    } 
    if(name == 'width'){
        botao.style.width = value + 'px';
    }
    if(name == 'color'){
        botao.style.color = value;
    }
    if(name == 'background_color'){
        botao.style.backgroundColor = value;
    }
    if(name == 'heigth'){
        botao.style.height = value + 'px';
    }
    if(name == 'width'){
        botao.style.width = value + 'px';
    }
    if(name == 'border'){
        botao.style.border = value;
    }
    if(name == 'border_radius'){
        botao.style.borderRadius = value + 'px';
    }
    if(name == 'font_family'){
        botao.style.fontFamily = value;
    }
    if(name == 'font_size'){
        botao.style.fontSize = value + 'px';
    }

    
    function salva_valores(name,value){
        localStorage[name] = value;
    }
    salva_valores(name,value);
    
}   


function mostra_css(){
    css_texto.innerHTML = botao.style.cssText.split(';').join(';<br>');
    css_texto.style.color = 'black';
    
}

mostra_css();




controles.addEventListener('change',mudanca_change);
controles.addEventListener('change',mostra_css);