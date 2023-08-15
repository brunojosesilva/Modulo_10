
/* arrays para validacao */
const listaCPF = [];

/* linhas da tabela tarefas */
let linhasContato = '';

/* indicador de alerta */
let inAlerta = false;
let camposincorretos = 0;

$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(00) 00000-0000'
})

$('#cpf').mask('000.000.000-00',{
    placeholder: '000.000.000-00'
})

$('#cep').mask('00000-000',{
    placeholder: '000000-00'
})

$(document).ready(function () {
  
    inInclui = true;
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo.', 
            telefone: 'Por favor, informe seu telefone.',
            email: 'Por fafor, informe seu email.',
            cpf: 'Por favor informe seu CPF.',
            endereco: 'Por favor informe seu endereço.',
            cep: 'Por favor informe o CEP do seu endereço.'
        },
        submitHandler: function (form) {
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            camposincorretos = validador.numberOfInvalids();
        }
    })
})  

$('form').on('submit', function (e) {
    e.preventDefault();

    /* recupera o form informada */
    const inputNome = $('#nome').val();
    const inputEmail = $('#email').val();
    const inputTelefone = $('#telefone').val();
    const inputCpf = $('#cpf').val();
    const inputEndereco = $('#endereco').val();
    const inputCep = $('#cep').val();

    validaContato(inputCpf);

    if (!inAlerta) {
        incluiContato(inputNome, inputEmail, inputTelefone, inputCpf, inputEndereco, inputCep);
    }

    /* limpa o campo do formulario */ 
    $('#nome').val('');
    $('#email').val('');
    $('#telefone').val('');
    $('#cpf').val('');
    $('#endereco').val('');
    $('#cep').val('');

})  

function validaContato(inputCpf) {

    if (listaCPF.includes(inputCpf)) {
        alert('Contato já incluido.')
        inAlerta = true;
    } else {
        inAlerta = false;
    }
}

function incluiContato(inputNome, inputEmail, inputTelefone, inputCpf, inputEndereco, inputCep) {
    
    listaCPF.push(inputCpf);

    /* prepara novo item na tabela */
    const itemTabela = $('<tr></tr>');

    $(`<td>${inputNome}</td>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');

    $(`<td>${inputEmail}</td>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');

    $(`<td>${inputTelefone}</td>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');

    $(`<td>${inputCpf}</td>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');

    $(`<td>${inputEndereco}</td>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');

    $(`<td>${inputCep}</td>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');
}