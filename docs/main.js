jQuery(function () {
	$("button[type=submit]").bind("click", function () {
    var $form = $(this).parents("form");
    var opcionesParticipacion = [];
    $("[name='participacion']:checked", $form).map((i, v) => opcionesParticipacion.push($(v).val()));
		$.ajax({
			method: "post",
			url: "https://info.partidodigital.org.uy/form/submit?ajax=true",
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
			dataType: "json",
			data: $.param({
				"mauticform[nombre]": $("[name=nombre]", $form).val(),
				"mauticform[apellido]": $("[name=apellido]", $form).val(),
				"mauticform[email]": $("[name=email]", $form).val(),
        "mauticform[participacion][]": opcionesParticipacion,
				"mauticform[submit]": 1,
				"mauticform[formId]": 7,
				"mauticform[formName]": "dialogosciudadanos",
				"mauticform[return]": ""
			}),
			beforeSend: function () {
				$("button[type=submit]", $form).prop('disabled', true);
        $("button[type=submit]", $form).html('Enviando...');
			},
			success: function () {
				$("button[type=submit]", $form).html('¡Enviado! Gracias por participar.');
				$("input[type=text], input[type=email]", $form).val("");
        $("[name='participacion']:checked").prop('checked',false);
        setTimeout(function() {
          $("button[type=submit]", $form).html('Registrarme en Diálogos Ciudadanos');
          $("button[type=submit]", $form).prop('disabled', false);
        }, 5000)
			},
			error: function (jqXHR, textStatus, errorThrown) {
				$("button[type=submit]", $form).html('Hubo un error al enviar tus datos. Intenta luego.');
        setTimeout(function() {
          $("button[type=submit]", $form).html('Registrarme en Diálogos Ciudadanos');
          $("button[type=submit]", $form).prop('disabled', false);
        }, 5000)
			}
		});
	});
});