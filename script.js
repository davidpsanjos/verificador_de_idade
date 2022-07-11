function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO]Verifique os dados inseridos e tente novamente!`)
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15) {
                //criança
                img.setAttribute('src', 'midia/meninoedit.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'midia/jovemmedit.png')
            }
            else if (idade < 50) {
                //adulto
               img.setAttribute('src', 'midia/adultoedit.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'midia/idoso.png')
            } 
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                //criança
                img.setAttribute('src', 'midia/meninaedit.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'midia/jovemfedit.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'midia/adultaedit.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'midia/idosa.png')
            } 
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}