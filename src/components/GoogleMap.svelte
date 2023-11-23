<script>
	import { onMount } from 'svelte';

	const googleMapsApiKey= import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

	let map;

	onMount(() => {

		if (typeof window !== 'undefined') {
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);

			window.initMap = initMap;
		} else {
			console.log('window is undefined');
		}
	});

	// Inside <script> tag
	let properties = [
		{
			address: '327 Darebin Rd, Thornbury VIC 3071',
			title: 'Property 2',
			lat: -37.7660201,
			lng: 145.0276779,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/Outline_2675-646334021dedb.jpg1686209501-1000x650.jpg'
		},
		{
			address: '1-5 Weston Street, Brunswick VIC 3056',
			title: 'Property 3',
			lat: -37.774714,
			lng: 144.961844,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/1-5_Weston_St_116_7565-5f09581c46835.jpg1599523607-1000x650.jpg'
		},
		{
			address: '6-7 Pitt Street, Reservoir VIC 3073',
			title: 'Property 4',
			lat: -37.7157308,
			lng: 144.98657,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/Ground13_3404-63ce2244c13cb.jpg1681168243-1000x650.jpg'
		},
		{
			address: '57-61 Gowan Loop, Coburg North VIC 3058',
			title: 'Property 5',
			lat: -37.7273944,
			lng: 144.9637677,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/Capture2_9959-62dde9e1e70ed.jpg1660614670-1000x650.jpg'
		},
		{
			address: '231 Chapel Street, Prahran VIC 3181',
			title: 'Property 6',
			lat: -37.8505625,
			lng: 144.9930859,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/620c37792a3e0-atrium-.jpeg-1000x650.jpg'
		},
		{
			address: '5, 88 Dynon Rd, West Melbourne VIC 3003',
			title: 'Property 7',
			lat: -37.8028539,
			lng: 144.9342667,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/Capture4_4106-63fbed4f3ace7.jpg1677543733-1000x650.jpg'
		},
		{
			address: '123 Bakers Road, Coburg North VIC 3058',
			title: 'Property 8',
			lat: -37.7266428,
			lng: 144.9549903,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/Ground1_1574-64362b75d44cd.jpg1683160388-1000x650.jpg'
		},
		{
			address: '250A Ingles St, Port Melbourne VIC 3207',
			title: 'Property 9',
			lat: -37.8276842,
			lng: 144.9399839,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/250a_Ingles_St_7_4075-5f4dce1c31b90.jpg1599523635-1000x650.jpg'
		},
		{
			address: '250D Ingles St, Port Melbourne VIC 3207',
			title: 'Property 10',
			lat: -37.8279336,
			lng: 144.9407867,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/250a_Ingles_St_7_4075-5f4dce1c31b90.jpg1599523635-1000x650.jpg'
		},
		{
			address: '43 Raglan Street, Preston VIC 3072',
			title: 'Property 11',
			lat: -37.7516506,
			lng: 145.0254945,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/250a_Ingles_St_1_2676-63f2bf9fcc6b0.jpg1686209536-1000x650.jpg'
		},
		{
			address: 'Unit 7, 7 Dalton Road, Thomastown VIC 3074',
			title: 'Property 12',
			lat: -37.6943715,
			lng: 145.0232523,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/43-raglan-port-melbourne-vic-3207-6513b79ad0754-6513b9f8835a5.jpg-1000x650.jpg'
		},
		{
			address: '437-481 Plummer St, Port Melbourne VIC 3207',
			title: 'Property 13',
			lat: -37.8320257,
			lng: 144.9262574,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/7-dalton-road-thomastown-vic-3074-64fa80f086e02-64fa81a66514b.jpg-1000x650.jpg'
		},
		{
			address: '702 Footscray Rd, West Melbourne VIC 3003',
			title: 'Property 14',
			lat: -37.8061402,
			lng: 144.9091438,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/437-481-plummer-st-port-melbourne-vic-3207-nslpropertygroup-nsl_73_58-1654513882.jpeg-1000x650.jpg'
		},
		{
			address: '17 Whitehall Street, Footscray VIC 3011',
			title: 'Property 15',
			lat: -37.8027634,
			lng: 144.9055919,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/Ground5_6386-638fff6506476.jpg1671145888-1000x650.jpg'
		},
		{
			address: '344 Lorimer Street, Port Melbourne VIC 3207',
			title: 'Property 16',
			lat: -37.8239926,
			lng: 144.9099111,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/59_1_aAquatica_Park_Photography_(1199)_rs_3x2.jpg1498716317-1000x650.jpg'
		},
		{
			address: 'Unit 6, 52 Wirraway Dr, Port Melbourne VIC 3207',
			title: 'Property 17',
			lat: -37.8247138,
			lng: 144.9067495,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/outline1_1743-647fdfbc3e9ae.jpg1686209529-1000x650.jpg'
		},
		{
			address: '1, 52 Wirraway Drive, Port Melbourne VIC 3207',
			title: 'Property 18',
			lat: -37.8247138,
			lng: 144.9067495,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/1-52-wirraway-drive-port-melbourne-vic-3207-6513b5e4d9ffe-6513b6ad3044c.jpg-1000x650.jpg'
		},
		{
			address: '260-262 Geelong Road, West Footscray VIC 3012',
			title: 'Property 19',
			lat: -37.8040156,
			lng: 144.8819131,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/5a33280c3d7ae-main.jpg-1000x650.jpg'
		},
		{
			address: '44-56 Hampstead Road, Maidstone VIC 3012',
			title: 'Property 20',
			lat: -37.778761,
			lng: 144.8764288,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/5a331da3cff85-44-56-hampstead-roadjpg.JPG-1000x650.jpg'
		},
		{
			address: '81-85 Ashley Street, Braybrook VIC 3019',
			title: 'Property 21',
			lat: -37.7912337,
			lng: 144.8633615,
			image:
				'https://d1ohh7hm3j7ub5.cloudfront.net/property-images/81-85-ashley-street-braybrook-vic-3019-6297f5624e076-1654125936.png-1000x650.jpg'
		},
		{
			address: 'Unit 7, 7 Dalton Road, Thomastown VIC 3074',
			title: 'Property 22',
			lat: -37.6943715,
			lng: 145.0232523,
			image: ''
		}
	];

	let currentInfoWindow = null;

	async function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: -37.7806, lng: 145.0323 }, // Replace with your desired center
			zoom: 13
		});

		var marker = new google.maps.Marker({
			position: { lat: -37.7806, lng: 145.0323 }, // Set the position of the marker
			map: map, // Specify the map to place the marker on
			icon: {
				url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png', // URL of the orange pin icon
				scaledSize: new google.maps.Size(40, 40) // Size of the icon
			},
			title: 'ALPHINGTON' // Optional: Text shown when hovering over the marker
		});

		let newList = [];
		for (const property of properties) {
			let distance = calculateDistance(property.lat, property.lng, -37.7806, 145.0323);

			let contentString = `
            <div style="width: 300px; height: 350px;"> 
                <img src="${property.image}" alt="Image" style="width: 100%;">
                <h3>${property.address}</h3>
                <p> <span class="font-bold">${distance.toFixed(2)}</span> km away from Alphinton</p>
            </div>`;

			let infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			let marker = new google.maps.Marker({
				position: { lat: property.lat, lng: property.lng },
				map: map,
				title: property.address + ' ' + distance.toFixed(2) + 'km',
				// label: {
				// 	text: property.address + '\n' + distance.toFixed(2) + 'km',
				// 	color: '#CC00CC',
				// 	fontSize: '16px',
				// 	fontWeight: 'bold'
				// }
			});

			marker.addListener('click', function () {
				if (currentInfoWindow) {
					currentInfoWindow.close(); // Close the currently open InfoWindow
				}
				infowindow.open(map, marker);
				currentInfoWindow = infowindow;
			});
		}
	}

	async function geocodeAddress(address) {
		var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
			address
		)}&key=${googleMapsApiKey}`;

		try {
			let response = await fetch(url);
			let data = await response.json();
			if (data.status === 'OK') {
				var lat = data.results[0].geometry.location.lat;
				var lng = data.results[0].geometry.location.lng;
				return { lat: lat, lng: lng };
			} else {
				console.error('Geocoding failed: ' + data.status);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

	function calculateDistance(lat1, lon1, lat2, lon2) {
		// Radius of the Earth in kilometers
		var R = 6371.0;

		// Convert degrees to radians
		var radLat1 = degreesToRadians(lat1);
		var radLon1 = degreesToRadians(lon1);
		var radLat2 = degreesToRadians(lat2);
		var radLon2 = degreesToRadians(lon2);

		// Difference in coordinates
		var dLat = radLat2 - radLat1;
		var dLon = radLon2 - radLon1;

		// Haversine formula
		var a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

		// Distance in kilometers
		var distance = R * c;

		return distance;
	}

	function degreesToRadians(degrees) {
		return degrees * (Math.PI / 180);
	}
</script>

<div id="map" style="width: 100%; height: 100vh;"></div>
