const form = document.getElementById('orderForm')
const formInputs = document.getElementById('formInputs')

form.addEventListener('submit', function(ev) {
    ev.preventDefault()

    const h1 = document.createElement('h1')
    h1.innerText = 'Adicionar tecnologia'
    const labelNome = document.createElement('label')
    labelNome.innerText = 'Nome:'
    const inputNome = document.createElement('input')
    inputNome.type = 'text'
    inputNome.name = 'nome'

    const br = document.createElement('br')
    // 0 A 2 ANOS
    const radioInput = document.createElement('input')
    radioInput.type = 'radio'
    radioInput.id = 'radio0' /*************/
    const radioLabel = document.createElement('label')
    const radioText = document.createElement('span')
    radioText.innerText = '0-2 anos | '
    radioLabel.appendChild(radioInput)
    radioLabel.appendChild(radioText)

    // 3 A 4 ANOS
    const radioInput1 = document.createElement('input')
    radioInput1.type = 'radio'
    radioInput.id = 'radio1' /*************/
    const radioLabel1 = document.createElement('label')
    const radioText1 = document.createElement('span')
    radioText1.innerText = '3-4 anos | '
    radioLabel1.appendChild(radioInput1)
    radioLabel1.appendChild(radioText1)

    // 5 OU MAIS ANOS
    const radioInput2 = document.createElement('input')
    radioInput2.type = 'radio'
    radioInput.id = 'radio2' /*************/
    const radioLabel2 = document.createElement('label')
    const radioText2 = document.createElement('span')
    radioText2.innerText = '5 ou mais anos'
    radioLabel2.appendChild(radioInput2)
    radioLabel2.appendChild(radioText2)

    const button = document.createElement('button')
    button.type = 'click'
    button.innerText = 'Cadastrar'


    button.addEventListener('click', function(event){
        event.preventDefault()
        cadastrar()
    })
    formInputs.append(h1,labelNome,inputNome, br,radioLabel, radioLabel1, radioLabel2, button)

    function checado(){
        if(document.getElementById('radio').checked){
            return '0-2 anos'
        } else if(document.getElementById('radio1').checked){
            return '3-4 anos'
        } else if(document.getElementById('radio2').checked){
            return '5 ou mais anos'
        }
    }


    function cadastrar() {

        const cadastro = []
    
        const nomeDev = document.querySelector('#name').value
    
        const inputNome1 = inputNome.value

        cadastro.push(nomeDev, inputNome1,checado())
    
        console.log(cadastro)

    }

})
