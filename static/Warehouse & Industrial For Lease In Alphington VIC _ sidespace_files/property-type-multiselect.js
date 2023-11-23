$(document).ready(function(){
	var propertyTypesSelected = [];
	var multiselect = $('#property-type .selected');

	$('input[name="property-type[]"]:checked').each(function(){
		var propertyType = $(this).next().text();
		propertyTypesSelected.push(propertyType);
	})
	updateMultiselect();

	$('#property-type .custom-multiselect').on("click", function(e) {
		e.stopPropagation();
		$(this).find('.arrow').toggleClass('up');
		$('#property-type .custom-multiselect-options').toggle();
	});

	$('#property-type .custom-multiselect-options').on("click", function(e) {
		e.stopPropagation();
	});

	$(window).on("click", function() {
		if ($('#property-type .custom-multiselect-options').css('display') != 'none') {
			$('#property-type .arrow').toggleClass('up');
			$('#property-type .custom-multiselect-options').hide();
		}
	});

	$('input[name="property-type[]"]').change(function() {
		if ($(this).attr('value') == 'default') {
			if (this.checked) {
				uncheckTypes();
				propertyTypesSelected = [];
				updateMultiselect("Any property type");
			} else {
				updateMultiselect("Property Type(s)");
			}
		} else {
			var propertyType = $(this).next().text();

			if (this.checked) {
				uncheckDefault();
				propertyTypesSelected.push(propertyType);
			} else {
				propertyTypesSelected.splice($.inArray(propertyType, propertyTypesSelected), 1);
			}
			updateMultiselect();
		}
	});

	function updateMultiselect(text) {
		if (text != null) {
			multiselect.html(text);
		} else {
			if (propertyTypesSelected.length == 0) {
				multiselect.html("Property Type(s)");
			} else if (propertyTypesSelected.length < 2) {
				multiselect.html(propertyTypesSelected[0]);
			} else {
				multiselect.html(propertyTypesSelected[0] + '<span> & ' + (propertyTypesSelected.length - 1) + ' more</span>');
			}
		}
	}
})

function uncheckDefault() {
	$('input[value=default]').attr('checked', false);
}

function uncheckTypes() {
	$('input[name="property-type[]"]').each(function() {
		if ($(this).attr('value') != 'default') {
			$(this).attr('checked', false);
		}
	})
}
