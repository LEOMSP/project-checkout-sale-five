var j3 = jQuery.noConflict();
j3(document).ready(function(){
  j3('.date').mask('00/00/0000');
  j3('.time').mask('00:00:00');
  j3('.date_time').mask('00/00/0000 00:00:00');
  j3('.cep').mask('00000-000');
  j3('.phone').mask('0000-0000');
  j3('.phone_with_ddd').mask('(00) 00000-0000');
  j3('.phone_us').mask('(000) 000-0000');
  j3('.mixed').mask('AAA 000-S0S');
  j3('.cpf').mask('000.000.000-00', {reverse: true});
  j3('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  j3('.money').mask('000.000.000.000.000,00', {reverse: true});
  j3('.money2').mask("#.##0,00", {reverse: true});
  j3('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  j3('.ip_address').mask('099.099.099.099');
  j3('.percent').mask('##0,00%', {reverse: true});
  j3('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  j3('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  j3('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  j3('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});