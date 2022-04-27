// Function Transition Tela
$(function(){

	//$('section').hide();
	//$('section').first().show();
	
	var atual_fs, next_fs, prev_fs;

	$('.next').click(function(){
		atual_fs = $(this).parent();
		next_fs = $(this).parent().next();

		$('#progress li').eq($('section').index(next_fs)).addClass('active');
		atual_fs.hide(0);
		next_fs.show(0);
	});

	$('.prev').click(function(){
		atual_fs = $(this).parent();
		prev_fs = $(this).parent().prev();

		$('#progress li').eq($('section').index(atual_fs)).removeClass('active');
		atual_fs.hide(0);
		prev_fs.show(0);
	});

	$('#formulario input[type=submit]').click(function(){
		return false;
	});

});


// Function Save Exibi Inputs
$(function(){

	var $exibirFullname = $(".exibir-fullname"); // Exibi Nome Completo
	var $exibirTipoCar = $(".exibir-tipocar"); // Exibi Tipo do Carro
	var $exibirMarcaCar = $(".exibir-marcacar"); // Exibi Marca do Carro
	var $exibirModeloCar = $(".exibir-modelocar"); // Exibi Modelo do Carro
	var $exibirAnoCar = $(".exibir-anocar"); // Exibi Ano do Carro
	var $exibirPlano = $(".exibir-plano"); // Exibi Plano

	// Salva as variaveis via JS

	// Nome Completo
	$("#fullname").on("keyup", function () {
	    var texto = $(this).val();
	    $exibirFullname.text(texto);
	});

	// Tipo do Veículo
	$("#tipo-car").on("change", function () {
	    var texto = $(this).children("option:selected").val();
	    $exibirTipoCar.text(texto);
	}).trigger("change");

	// Marca do Veículo
	$("#marca-car").on("change", function () {
	    var texto = $(this).children("option:selected").val();
	    $exibirMarcaCar.text(texto);
	}).trigger("change");

	// Modelo do Veículo
	$("#modelo-car").on("change", function () {
	    var texto = $(this).children("option:selected").val();
	    $exibirModeloCar.text(texto);
	}).trigger("change");

	// Ano do Veículo
	$("#ano-car").on("change", function () {
	    var texto = $(this).children("option:selected").val();
	    $exibirAnoCar.text(texto);
	}).trigger("change");

	// Tipo do Plano
	$('input:radio[name="plano"]').change(function() {
		
		if ($("#radio-1")) {
          	var texto = $(this).val();
	    	$exibirPlano.text(texto); 

        } else if ($("#radio-2")) {
          	var texto = $(this).val();
	    	$exibirPlano.text(texto);

        } else if ($("#radio-3")) {
          	var texto = $(this).val();
	    	$exibirPlano.text(texto);

        } else if ($("#radio-4")) {
          	var texto = $(this).val();
	    	$exibirPlano.text(texto);
	    	
        }

    });

});


// Consulta CEP
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    //document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        //document.getElementById('ibge').value=(conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
            //document.getElementById('ibge').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};


// Mask Jquery Inputs
$(document).ready(function(){
	$('.date').mask('00/00/0000');
	$('.time').mask('00:00:00');
	$('.date_time').mask('00/00/0000 00:00:00');
	$('.cep').mask('00000-000');
	$('.phone').mask('0000-0000');
	$('.phone_with_ddd').mask('(00) 0000-0000');
	$('.phone_us').mask('(000) 000-0000');
	$('.mixed').mask('AAA 000-S0S');
	$('.cpf').mask('000.000.000-00', {reverse: true});
	$('.cnpj').mask('00.000.000/0000-00', {reverse: true});
	$('.money').mask('000.000.000.000.000,00', {reverse: true});
	$('.money2').mask("#.##0,00", {reverse: true});
	$('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
	translation: {
	  'Z': {
	    pattern: /[0-9]/, optional: true
	  }
	}
	});
	$('.ip_address').mask('099.099.099.099');
	$('.percent').mask('##0,00%', {reverse: true});
	$('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
	//$('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
	$('.fallback').mask("00r00r0000", {
	  translation: {
	    'r': {
	      pattern: /[\/]/,
	      fallback: '/'
	    },
	    placeholder: "__/__/____"
	  }
	});
	$('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});
