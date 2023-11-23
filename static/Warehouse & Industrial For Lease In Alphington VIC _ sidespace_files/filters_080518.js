function clean($suburb) {
	return $suburb.replace(/[^A-Za-z0-9\-]/g, '-').toLowerCase();
}

$(document).ready(function() {  	
	$('body').on('click', '#search button', function (e) {
		e.preventDefault();

		var form = $('#search');
		var action = form.attr('action');

		var listingType = $('input[name=listing-type]:checked').val();

		var propertyTypes = [];
		var propertyTypesChecked = $('input[name="property-type[]"]:checked');

		for (var i = 0; i < propertyTypesChecked.length; i++) {
			propertyTypes.push(propertyTypesChecked[i].value);
		}

		// Append listing type to search URL
		action += '/for-' + listingType;

		// Append property types to search URL
		if (propertyTypes.length == 0 || propertyTypes[0] == 'default') {
			action += '/commercial-property';
		} else {
			action += '/' + propertyTypes.toString(',').replace(/,/g,'-');
		}		

		var suburbs = $('#search select[name="suburbs[]"] option');
		var priceMin = $('#price-min .selected');
		var priceMax = $('#price-max .selected');
		var floorMin = $('#floor-min .selected');
		var floorMax = $('#floor-max .selected');

		var refinements = [];

		// Append suburbs as query string
		if (suburbs.length > 0) {

			var suburbString = '';

			suburbs.each(function(index) {
				if (index > 0) {
					suburbString += '-';
				}
				suburbString += clean($(this).text());
			})
						
			// refinements.push(suburbString);
			action += '/' + suburbString;
		}

		// Append price-min as query string
		if (priceMin.attr('data-value') > 0) {
			refinements.push('price-min=' + priceMin.attr('data-value'));
		}

		// Append price-max as query string
		if (priceMax.attr('data-value') > 0) {
			refinements.push('price-max=' + priceMax.attr('data-value'));
		}

		// Append floor-min as query string
		if (floorMin.attr('data-value') > 0) {
			refinements.push('floor-min=' + floorMin.attr('data-value'));
		}

		// Append floor-max as query string
		if (floorMax.attr('data-value') > 0) {
			refinements.push('floor-max=' + floorMax.attr('data-value'));
		}

		for (var i = 0; i < refinements.length; i++) {
			if (i == 0) {
				action += "?" + refinements[i];
			} else {
				action += refinements[i];
			}

			if (i != refinements.length - 1) {
				action += "&";
			}
		}
		
		// console.log(action);
		window.location.href = action;
	});
});
