const next = document.querySelectorAll('.btn')
next.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const nextstep = 'step-' + this.getAttribute('data-next')
        atual.classList.remove('ativo')
        document.getElementById(nextstep).classList.add('ativo')
    })
})
//não entendi kkkkkkkk