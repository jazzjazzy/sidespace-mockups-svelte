<script>
	import { onMount } from 'svelte';

	let OAuth = false;

	function handleDivClick() {
		OAuth = false;
	}

	onMount(() => {
		OAuth = true;
	});
</script>

<div id="wrapper">
	<div id="dark-overlay"></div>

	<div class="small-nav close-small-nav">
		<ul class="nav">
			<li class="button-li">
				<button type="button" class="close" aria-hidden="true">×</button>
			</li>
			<li class="item active">
				<a
					href="https://sidespace.com.au/for-lease"
					onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Mobile Menu Click&#39;, &#39;Lease&#39;);"
				>
					<img
						src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/lease.svg"
						alt="Lease Logo"
						class="lease mr-4 image-icon"
					/>
					Lease
				</a>
			</li>
			<li class="item mt-35">
				<a
					href="https://sidespace.com.au/for-sale"
					onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Mobile Menu Click&#39;, &#39;Buy&#39;);"
				>
					<img
						src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/sale.svg"
						alt="Buy Logo"
						class="mr-4 image-icon"
					/>
					Buy
				</a>
			</li>
			<li class="item mt-35">
				<a
					href="https://sidespace.com.au/media"
					onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Header Click&#39;, &#39;News &amp; Media&#39;);"
				>
					<img
						src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/news-icon.svg"
						alt="News &amp; Media"
						class="mr-4 image-icon"
					/>
					News &amp; Media
				</a>
			</li>
			<li class="list">
				<a
					href="https://sidespace.com.au/list"
					onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Listing&#39;, &#39;Mobile Menu Click&#39;, &#39;List Your Property&#39;);"
					class="btn btn-primary">List with us</a
				>
			</li>
		</ul>

		<div class="box-desc">
			<div class="content">
				<h4 class="title">Can’t find what you’re looking for? Let us help you.</h4>
				<p class="desc">
					Free concierge service. <br /> Instant response. <br /> 100% market coverage.
				</p>
				<div class="team">
					<img
						src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/veronica_nonnis.png"
					/>
					<img
						src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/ritchiesean.jpg"
					/>
					<img
						src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/ameedelosreyes.jpeg"
					/>
				</div>
				<a
					href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic#"
					class="link link-primary btn-concierge"
					onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Concierge (Home)&#39;);"
					data-tf-popup="d1qwynHj"
					data-tf-iframe-props="title=Concierge Service"
					data-tf-medium="snippet"
				>
					Get started <i class="fa fa-angle-right ml-2"></i>
				</a>
			</div>
		</div>
	</div>

	<div id="preNav">
		<div class="inner-container"></div>
	</div>

	<!-- #nav -->

	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<!-- #nav -->
	<script type="text/javascript">
		function showNav() {
			$('#dark-overlay').show();
			$('.small-nav').animate(
				{
					right: '0%'
				},
				200
			);
		}

		function hideNav() {
			$('#dark-overlay').hide();
			$('.small-nav').animate(
				{
					right: '-90%'
				},
				200
			);
		}

		$(document).ready(function () {
			$('#toggle-btn').click(function () {
				showNav();
			});

			$('#dark-overlay').click(function () {
				hideNav();
			});

			$('.small-nav .close').click(function () {
				hideNav();
			});

			$('.small-nav .box-desc .btn-concierge').click(function () {
				// e.preventDefault();
				hideNav();
			});
		});
	</script>
	<script>
		$(document).ready(function () {
			$('#open-newsletter').click(function (e) {
				e.preventDefault();
				$('#subscription').modal({ backdrop: 'true', keyboard: false });
			});

			$('#subscribe-btn').click(function (e) {
				e.preventDefault();

				var button = $(this);
				var form = $('#subscribe-form');

				button.prop('disabled', true);
				button.find('span.text').hide();
				button.find('.spinner').show();

				$action = form.attr('action');
				$method = form.attr('method');
				$data = form.serialize();

				$.ajax({
					method: $method,
					url: $action,
					data: $data
				})
					.success(function (result) {
						if (result.result == 'ok') {
							ga('send', 'event', 'Newsletter', 'Newsletter Submit', 'Newsletter Popup Submitted');

							$('p.error').hide();
							form.hide();
							$('p.success').show();
							setTimeout(function () {
								$('#subscription').modal('hide');
							}, 2000);
						} else {
							$('p.error').text('Please enter a valid email address.');
							$('p.error').show();

							button.prop('disabled', false);
							button.find('span.text').show();
							button.find('.spinner').hide();
						}
					})
					.error(function (result) {
						$error = JSON.parse(result.responseText);
						$errorMsg = $error['email'][0];
						$('p.error').text($errorMsg);
						$('p.error').show();

						button.prop('disabled', false);
						button.find('span.text').show();
						button.find('.spinner').hide();
					});
			});
		});
	</script>

	<div class="modal fade" id="subscription" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">
					<div class="cover-image">
						<p>Get first access to the latest news, hottest new listings and more.</p>
					</div>
					<div class="form">
						<p class="error">Please enter a valid email address.</p>
						<p class="success">Thank you for subscribing!</p>
						<form
							role="form"
							action="https://sidespace.com.au/subscriber-save"
							id="subscribe-form"
							method="POST"
						>
							<input type="hidden" name="_token" value="TQ9zeI51lPq2pNcXGV6inGRdE8r0rtGgzbUSxDO3" />
							<input
								type="email"
								class="form-control"
								placeholder="Enter your email address"
								name="email"
							/>
							<button type="submit" class="btn" id="subscribe-btn">
								<span class="text">Subscribe</span>
								<div class="spinner">
									<div class="bounce1"></div>
									<div class="bounce2"></div>
									<div class="bounce3"></div>
								</div>
							</button>
							<input type="hidden" name="IREFERRER" value="https%3A//www.google.com/" /><input
								type="hidden"
								name="LREFERRER"
								value="https%3A//www.google.com/"
							/><input type="hidden" name="ILANDPAGE" value="https%3A//sidespace.com.au/" /><input
								type="hidden"
								name="VISITS"
								value="5"
							/>
						</form>
					</div>
					<img
						class="modal-dismiss"
						data-dismiss="modal"
						src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/close.png"
					/>
				</div>
			</div>
		</div>
	</div>
	<div id="content" style="padding-bottom: 0px;">
		<div id="results-header" style=" ">
			<div class="inner-container">
				<div class="result-header-title">
					<h1 class="header-title">Your Saved Properties</h1>
					<div class="header-result">
						<div id="mobileFilterButton">
							<button
								id="filters-toggle"
								class="btn btn-default filters-toggle"
								onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Mobile Search Click&#39;, &#39;Refine Search Mobile&#39;);"
							>
								<i class="icon-filter"></i>

								Filters
							</button>
						</div>
						<div id="count" class="my-auto">
							Viewing <span>1 - 5</span> of 21 properties
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="results">
			<div class="inner-container">
				<div class="w-full" >
					<div id="banners-col">
						<div class="border border-gray-300">
							<div class="py-3 border"><h4 class="m-3 border-black border-b-2">Alphington</h4></div>
							<ul>
							
								<li class="py-2 px-3">
									<a
										href="https://sidespace.com.au/for-lease/327-darebin-rd-thornbury-vic-3071-nslpropertygroup-nsl_73_147"
										>327 Darebin Rd, Thornbury VIC 3071</a
									>
								</li>
								<li class="py-2 px-3">
									<a
										href="https://sidespace.com.au/for-lease/1-5-weston-street-brunswick-vic-3056-nslpropertygroup-nsl_73_10"
										>1-5 Weston Street, Brunswick VIC 3056</a
									>
								</li>
								<li class="py-2 px-3">
									<a
										href="https://sidespace.com.au/for-lease/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137"
										>Part Tenancy N, 45 Grosvenor Street, Abbotsford VIC 3067</a
									>
								</li>
							</ul>
						</div>
					</div>
					<div class="w-3/4">
						<div id="properties">
							
							<!-- Ad -->

							<div class="property">
								<div class="header" style="background-color: #000000;">
									<div class="brand">
										<img
											src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/61a93f0ad5923-nsl-property-group.png"
											class="initial loading"
											data-was-processed="true"
										/>
									</div>
								</div>
								<a
									href="https://sidespace.com.au/for-lease/327-darebin-rd-thornbury-vic-3071-nslpropertygroup-nsl_73_147"
									onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
								>
								</a>
								<div class="details full-width-image">
									<a
										href="https://sidespace.com.au/for-lease/327-darebin-rd-thornbury-vic-3071-nslpropertygroup-nsl_73_147"
										onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
									>
									</a>
									<div class="row">
										<a
											href="https://sidespace.com.au/for-lease/327-darebin-rd-thornbury-vic-3071-nslpropertygroup-nsl_73_147"
											onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
										>
										</a>
										<div class="image-col">
											<a
												href="https://sidespace.com.au/for-lease/327-darebin-rd-thornbury-vic-3071-nslpropertygroup-nsl_73_147"
												onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
											>
											</a>
											<div class="property-image-wrap">
												<a
													href="https://sidespace.com.au/for-lease/327-darebin-rd-thornbury-vic-3071-nslpropertygroup-nsl_73_147"
													onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
												>
												</a>
												<div
													id="carousel_4787"
													class="carousel slide"
													data-ride="carousel"
													data-interval="0"
													data-pause="hover"
												>
													<a
														href="https://sidespace.com.au/for-lease/327-darebin-rd-thornbury-vic-3071-nslpropertygroup-nsl_73_147"
														onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
													>
														<div class="carousel-inner" role="listbox">
															<div class="item active">
																<div class="item-container">
																	<img
																		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/Outline_2675-646334021dedb.jpg1686209501-1000x650.jpg"
																		data-original="https://d1ohh7hm3j7ub5.cloudfront.net/property-images/Outline_2675-646334021dedb.jpg1686209501-1000x650.jpg"
																		class="property-image-carousel initial loaded"
																		alt="Showrooms/Bulky Goods, Retail, Offices, Industrial/Warehouse For Lease - 327 Darebin Rd, Thornbury VIC 3071"
																		title="High Exposure Showroom, Office &amp; Warehouse"
																		data-was-processed="true"
																	/>
																</div>
															</div>
															<div class="item">
																<div class="item-container">
																	<img
																		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/preloaded_image.png"
																		data-original="https://d1ohh7hm3j7ub5.cloudfront.net/property-images/Ground5_2651-64633402cfb79.jpg1686209502-1000x650.jpg"
																		class="property-image-carousel"
																		alt="Showrooms/Bulky Goods, Retail, Offices, Industrial/Warehouse For Lease - 327 Darebin Rd, Thornbury VIC 3071"
																		title="High Exposure Showroom, Office &amp; Warehouse"
																	/>
																</div>
															</div>
															<div class="item">
																<div class="item-container">
																	<img
																		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/preloaded_image.png"
																		data-original="https://d1ohh7hm3j7ub5.cloudfront.net/property-images/Ground2_2625-6463340324a8d.jpg1686209502-1000x650.jpg"
																		class="property-image-carousel"
																		alt="Showrooms/Bulky Goods, Retail, Offices, Industrial/Warehouse For Lease - 327 Darebin Rd, Thornbury VIC 3071"
																		title="High Exposure Showroom, Office &amp; Warehouse"
																	/>
																</div>
															</div>
														</div>
													</a><a
														class="left carousel-control"
														href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic#carousel_4787"
														role="button"
														data-slide="prev"
													>
														<!-- <span class="fa fa-3x fa-angle-left"></span>
															<span class="sr-only">Previous</span> -->
														<img
															src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/carousel-prev.svg"
															class="initial loading"
															data-was-processed="true"
														/>
													</a>
													<a
														class="right carousel-control"
														href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic#carousel_4787"
														role="button"
														data-slide="next"
													>
														<!-- <span class="fa fa-3x fa-angle-right"></span>
															<span class="sr-only">Next</span> -->
														<img
															src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/carousel-next.svg"
															class="initial loading"
															data-was-processed="true"
														/>
													</a>
												</div>
											</div>
											<div class="property-type">
												<span>Showrooms/Bulky Goods</span>
												<span>Retail</span>
												<span>Offices</span>
												<span>Industrial/Warehouse</span>
											</div>
										</div>

										<div class="info-col">
											<a
												href="https://sidespace.com.au/for-lease/327-darebin-rd-thornbury-vic-3071-nslpropertygroup-nsl_73_147"
												onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
											>
												<div class="info-top">
													<!-- <div class="property-type">
																											<span>Showrooms/Bulky Goods</span>
																											<span>Retail</span>
																											<span>Offices</span>
																											<span>Industrial/Warehouse</span>
																									</div> -->
													<div class="address">327 Darebin Rd, Thornbury VIC 3071</div>
													<div class="property-title">
														High Exposure Showroom, Office &amp; Warehouse
													</div>
												</div>
											</a>
											<div class="info-bottom">
												<!-- Area -->
												<div class="property-area">
													<div>600m<sup>2</sup></div>
												</div>
												<!-- Price -->
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Ad -->

							<div class="property">
								<div class="header" style="background-color: #000000;">
									<div class="brand">
										<img
											src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/61a93f0ad5923-nsl-property-group.png"
											class="initial loading"
											data-was-processed="true"
										/>
									</div>
								</div>
								<a
									href="https://sidespace.com.au/for-lease/1-5-weston-street-brunswick-vic-3056-nslpropertygroup-nsl_73_10"
									onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
								>
								</a>
								<div class="details full-width-image">
									<a
										href="https://sidespace.com.au/for-lease/1-5-weston-street-brunswick-vic-3056-nslpropertygroup-nsl_73_10"
										onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
									>
									</a>
									<div class="row">
										<a
											href="https://sidespace.com.au/for-lease/1-5-weston-street-brunswick-vic-3056-nslpropertygroup-nsl_73_10"
											onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
										>
										</a>
										<div class="image-col">
											<a
												href="https://sidespace.com.au/for-lease/1-5-weston-street-brunswick-vic-3056-nslpropertygroup-nsl_73_10"
												onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
											>
											</a>
											<div class="property-image-wrap">
												<a
													href="https://sidespace.com.au/for-lease/1-5-weston-street-brunswick-vic-3056-nslpropertygroup-nsl_73_10"
													onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
												>
												</a>
												<div
													id="carousel_3106"
													class="carousel slide"
													data-ride="carousel"
													data-interval="0"
													data-pause="hover"
												>
													<a
														href="https://sidespace.com.au/for-lease/1-5-weston-street-brunswick-vic-3056-nslpropertygroup-nsl_73_10"
														onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
													>
														<div class="carousel-inner" role="listbox">
															<div class="item active">
																<div class="item-container">
																	<img
																		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/1-5_Weston_St_116_7565-5f09581c46835.jpg1599523607-1000x650.jpg"
																		data-original="https://d1ohh7hm3j7ub5.cloudfront.net/property-images/1-5_Weston_St_116_7565-5f09581c46835.jpg1599523607-1000x650.jpg"
																		class="property-image-carousel initial loaded"
																		alt="Industrial/Warehouse, Offices, Retail For Lease - 1-5 Weston Street, Brunswick VIC 3056"
																		title="Large Office Warehouse in Evolving Precinct - Flexible Lease Terms"
																		data-was-processed="true"
																	/>
																</div>
															</div>
															<div class="item">
																<div class="item-container">
																	<img
																		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/preloaded_image.png"
																		data-original="https://d1ohh7hm3j7ub5.cloudfront.net/property-images/1-5_Weston_St_004_7542-5f09581c7e963.jpg1599523607-1000x650.jpg"
																		class="property-image-carousel"
																		alt="Industrial/Warehouse, Offices, Retail For Lease - 1-5 Weston Street, Brunswick VIC 3056"
																		title="Large Office Warehouse in Evolving Precinct - Flexible Lease Terms"
																	/>
																</div>
															</div>
															<div class="item">
																<div class="item-container">
																	<img
																		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/preloaded_image.png"
																		data-original="https://d1ohh7hm3j7ub5.cloudfront.net/property-images/1-5_Weston_St_085_7556-5f09581c9fed2.jpg1599523608-1000x650.jpg"
																		class="property-image-carousel"
																		alt="Industrial/Warehouse, Offices, Retail For Lease - 1-5 Weston Street, Brunswick VIC 3056"
																		title="Large Office Warehouse in Evolving Precinct - Flexible Lease Terms"
																	/>
																</div>
															</div>
														</div>
													</a><a
														class="left carousel-control"
														href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic#carousel_3106"
														role="button"
														data-slide="prev"
													>
														<!-- <span class="fa fa-3x fa-angle-left"></span>
															<span class="sr-only">Previous</span> -->
														<img
															src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/carousel-prev.svg"
															class="initial loading"
															data-was-processed="true"
														/>
													</a>
													<a
														class="right carousel-control"
														href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic#carousel_3106"
														role="button"
														data-slide="next"
													>
														<!-- <span class="fa fa-3x fa-angle-right"></span>
															<span class="sr-only">Next</span> -->
														<img
															src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/carousel-next.svg"
															class="initial loading"
															data-was-processed="true"
														/>
													</a>
												</div>
											</div>
											<div class="property-type">
												<span>Industrial/Warehouse</span>
												<span>Offices</span>
												<span>Retail</span>
											</div>
										</div>

										<div class="info-col">
											<a
												href="https://sidespace.com.au/for-lease/1-5-weston-street-brunswick-vic-3056-nslpropertygroup-nsl_73_10"
												onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
											>
												<div class="info-top">
													<!-- <div class="property-type">
																											<span>Industrial/Warehouse</span>
																											<span>Offices</span>
																											<span>Retail</span>
																									</div> -->
													<div class="address">1-5 Weston Street, Brunswick VIC 3056</div>
													<div class="property-title">
														Large Office Warehouse in Evolving Precinct - Flexible Lease Terms
													</div>
												</div>
											</a>
											<div class="info-bottom">
												<!-- Area -->
												<div class="property-area">
													<div>1,965m<sup>2</sup></div>
												</div>
												<!-- Price -->
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Ad -->
							<div class="property">
								<div class="header" style="background-color: #c9c9c7;">
									<div class="brand">
										<img
											src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/632066aadb61d-tiga.png"
											class="loading"
											data-was-processed="true"
										/>
									</div>
								</div>
								<a
									href="https://sidespace.com.au/for-lease/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137"
									onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
								>
								</a>
								<div class="details full-width-image">
									<a
										href="https://sidespace.com.au/for-lease/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137"
										onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
									>
									</a>
									<div class="row">
										<a
											href="https://sidespace.com.au/for-lease/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137"
											onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
										>
										</a>
										<div class="image-col">
											<a
												href="https://sidespace.com.au/for-lease/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137"
												onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
											>
											</a>
											<div class="property-image-wrap">
												<a
													href="https://sidespace.com.au/for-lease/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137"
													onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
												>
												</a>
												<div
													id="carousel_4644"
													class="carousel slide"
													data-ride="carousel"
													data-interval="0"
													data-pause="hover"
												>
													<a
														href="https://sidespace.com.au/for-lease/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137"
														onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
													>
														<div class="carousel-inner" role="listbox">
															<div class="item active">
																<div class="item-container">
																	<img
																		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137-6322e29fcc278.jpg-1000x650.jpg"
																		data-original="https://d1ohh7hm3j7ub5.cloudfront.net/property-images/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137-6322e29fcc278.jpg-1000x650.jpg"
																		class="property-image-carousel initial loaded"
																		alt="Industrial/Warehouse, Offices For Lease - Part Tenancy N, 45 Grosvenor Street, Abbotsford VIC 3067"
																		title="Flexible Warehouse Site with Secure Loading Facilities"
																		data-was-processed="true"
																	/>
																</div>
															</div>
															<div class="item">
																<div class="item-container">
																	<img
																		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/preloaded_image.png"
																		data-original="https://d1ohh7hm3j7ub5.cloudfront.net/property-images/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137-6322e29f3f198.jpg-1000x650.jpg"
																		class="property-image-carousel"
																		alt="Industrial/Warehouse, Offices For Lease - Part Tenancy N, 45 Grosvenor Street, Abbotsford VIC 3067"
																		title="Flexible Warehouse Site with Secure Loading Facilities"
																	/>
																</div>
															</div>
															<div class="item">
																<div class="item-container">
																	<img
																		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/preloaded_image.png"
																		data-original="https://d1ohh7hm3j7ub5.cloudfront.net/property-images/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137-6322e29f616f9.jpg-1000x650.jpg"
																		class="property-image-carousel"
																		alt="Industrial/Warehouse, Offices For Lease - Part Tenancy N, 45 Grosvenor Street, Abbotsford VIC 3067"
																		title="Flexible Warehouse Site with Secure Loading Facilities"
																	/>
																</div>
															</div>
														</div>
													</a><a
														class="left carousel-control"
														href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic#carousel_4644"
														role="button"
														data-slide="prev"
													>
														<!-- <span class="fa fa-3x fa-angle-left"></span>
															<span class="sr-only">Previous</span> -->
														<img
															src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/carousel-prev.svg"
															class="initial loading"
															data-was-processed="true"
														/>
													</a>
													<a
														class="right carousel-control"
														href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic#carousel_4644"
														role="button"
														data-slide="next"
													>
														<!-- <span class="fa fa-3x fa-angle-right"></span>
															<span class="sr-only">Next</span> -->
														<img
															src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/carousel-next.svg"
															class="initial loading"
															data-was-processed="true"
														/>
													</a>
												</div>
											</div>
											<div class="property-type">
												<span>Industrial/Warehouse</span>
												<span>Offices</span>
											</div>
										</div>

										<div class="info-col">
											<a
												href="https://sidespace.com.au/for-lease/45-grosvenor-street-abbotsford-vic-3067-6322e26c25137"
												onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Search Click&#39;, &#39;Clicked Any Listing&#39;);"
											>
												<div class="info-top">
													<!-- <div class="property-type">
																											<span>Industrial/Warehouse</span>
																											<span>Offices</span>
																									</div> -->
													<div class="address">
														Part Tenancy N, 45 Grosvenor Street, Abbotsford VIC 3067
													</div>
													<div class="property-title">
														Flexible Warehouse Site with Secure Loading Facilities
													</div>
												</div>
											</a>
											<div class="info-bottom">
												<!-- Area -->
												<div class="property-area">
													<div>174 m2</div>
												</div>
												<!-- Price -->
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="pagination">
							<div class="pagination-container">
								<span class="link current">1</span>

								<a
									class="link"
									href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic?page=2"
									onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Search Click&#39;, &#39;Page Numbers&#39;);"
									>2</a
								>

								<a
									class="link"
									href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic?page=3"
									onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Search Click&#39;, &#39;Page Numbers&#39;);"
									>3</a
								>

								<a
									class="link"
									href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic?page=4"
									onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Search Click&#39;, &#39;Page Numbers&#39;);"
									>4</a
								>

								<span class="gap">...</span>

								<a
									class="link next"
									href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic?page=2"
									onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Search Click&#39;, &#39;Page Numbers&#39;);"
								>
									<span class="tablet"> Next</span>
									<i class="fa fa-angle-right" aria-hidden="true"></i></a
								>
								<div class="page-count">
									Viewing <span class="bold">1 - 5 </span> of 21 properties
								</div>
							</div>
						</div>
					</div>
					<div class="floating-buttons">
						<div>
							<button
								id="filters-toggle"
								class="btn filters-toggle"
								title="Refine Search"
								onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Mobile Search Click&#39;, &#39;Refine Search Mobile&#39;);"
								><i class="fa fa-search" aria-hidden="true"></i> Refine Search</button
							>
						</div>
						<div>
							<button
								class="btn btn-concierge"
								title="Get Started"
								onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Mobile Seeking&#39;, &#39;Sticky Concierge&#39;);"
								><i class="fa fa-question-circle" aria-hidden="true"></i> Ask Our Team</button
							>
						</div>
					</div>
				</div>
			</div>

			<div class="modal fade" id="register_modal" tabindex="-1" role="dialog" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title text-center">&nbsp;</h4>
							<div class="success text-center">Thank you! Your enquiry has been sent.</div>
							<div class="text-center">
								Would you like to create an account with these details for a quicker service?
							</div>
						</div>
						<div class="modal-body">
							<form
								id="form_register_modal"
								action="https://sidespace.com.au/register"
								method="POST"
								role="form"
								class="text-left"
							>
								<input
									type="hidden"
									name="_token"
									value="TQ9zeI51lPq2pNcXGV6inGRdE8r0rtGgzbUSxDO3"
								/>
								<input type="hidden" id="register_modal_property_globalid" name="global_id" />
								<input type="hidden" id="register_modal_message_id" name="message_id" />
								<input type="hidden" id="register_modal_message_type" name="message_type" />
								<div class="form-group">
									<label for="register_modal_name">Name</label>
									<input
										id="register_modal_name"
										class="form-control"
										name="name"
										type="text"
										value=""
									/>
								</div>
								<div class="form-group">
									<label for="register_modal_email">Email address*</label>
									<input
										id="register_modal_email"
										class="form-control"
										type="email"
										name="email"
										value=""
									/>
								</div>
								<div class="form-group">
									<label for="register_modal_phone">Phone number</label>
									<input id="register_modal_phone" type="tel" name="phone" class="form-control" />
								</div>
								<div class="form-group">
									<label for="register_modal_password">Password*</label>
									<input
										id="register_modal_password"
										type="password"
										name="password"
										class="form-control"
									/>
								</div>
								<div class="form-group text-right">
									<button type="submit" class="btn" id="btn_register_modal">
										<span class="text">Register</span>
										<div class="spinner">
											<div class="bounce1"></div>
											<div class="bounce2"></div>
											<div class="bounce3"></div>
										</div>
									</button>
								</div>
							</form>
						</div>
						<div class="modal-footer"></div>
					</div>
				</div>
			</div>

			<div class="modal fade" id="login_modal" tabindex="-1" role="dialog" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title text-center">&nbsp;</h4>
							<div class="success text-center">Thank you! Your enquiry has been sent.</div>
							<div class="text-center">Would you like to login for faster service?</div>
						</div>
						<div class="modal-body">
							<form
								id="form_login_modal"
								action="https://sidespace.com.au/login"
								method="POST"
								role="form"
								class="text-left"
							>
								<input
									type="hidden"
									name="_token"
									value="TQ9zeI51lPq2pNcXGV6inGRdE8r0rtGgzbUSxDO3"
								/>
								<input type="hidden" id="login_modal_property_globalid" name="global_id" />
								<input type="hidden" id="login_modal_message_id" name="message_id" />
								<input type="hidden" id="login_modal_message_type" name="message_type" />
								<div class="form-group">
									<label for="login_modal_email">Email address*</label>
									<input
										id="login_modal_email"
										class="form-control"
										type="email"
										name="email"
										value=""
									/>
								</div>
								<div class="form-group">
									<label for="login_modal_password">Password*</label>
									<input
										id="login_modal_password"
										type="password"
										name="password"
										class="form-control"
									/>
									<span class="text-right"
										><a href="https://sidespace.com.au/password/reset" style="color: #898989;"
											>Forgot password?</a
										></span
									>
								</div>
								<div class="form-group text-right">
									<button type="submit" class="btn" id="btn_login_modal">
										<span class="text">Login</span>
										<div class="spinner">
											<div class="bounce1"></div>
											<div class="bounce2"></div>
											<div class="bounce3"></div>
										</div>
									</button>
								</div>
							</form>
						</div>
						<div class="modal-footer"></div>
					</div>
				</div>
			</div>
			<div
				class="modal modal-wide fade"
				id="concierge_modal"
				tabindex="-1"
				role="dialog"
				aria-hidden="true"
				data-backdrop="static"
				data-keyboard="false"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title text-center"><b>Welcome to our Concierge service</b></h4>
							<div class="text-center">
								Let our advisors help find you the right commercial property
							</div>
							<div class="text-center">
								<div><i class="fa fa-clock-o"></i> Takes 2 mins</div>
							</div>
						</div>
						<div class="modal-body modal-body-concierge">
							<div id="form_header">
								<div class="inner-container">
									<div id="progress-bar-labels">
										<div data-progress-step="1" class="active completed">Property Type</div>
										<div data-progress-step="2">Location</div>
										<div data-progress-step="3">Size</div>
										<div data-progress-step="4">Budget</div>
										<div data-progress-step="5">Review &amp; Submit</div>
									</div>
									<div id="progress-bar">
										<div id="progress"></div>
									</div>
								</div>
							</div>
							<div id="form">
								<div class="inner-container">
									<!-- <div class="row"> -->
									<div class="form">
										<form
											id="concierge_modal_form"
											action="https://sidespace.com.au/request-space/save"
											method="POST"
										>
											<div id="form-container">
												<div data-step="1" id="property_type" class="active step">
													<div class="m-step">Step 1 of 5</div>
													<div class="qn">
														What are you looking for? <span class="text-danger">*</span>
													</div>
													<div class="error-msg">Please select a property type.</div>
													<div class="property-type-container">
														<label for="property-type-4" class="selection">
															<input
																type="radio"
																id="property-type-4"
																name="property_type"
																value="4"
																data-slug="offices"
															/>
															<span>Offices</span>
														</label>
														<label for="property-type-6" class="selection">
															<input
																type="radio"
																id="property-type-6"
																name="property_type"
																value="6"
																data-slug="industrial-warehouse"
															/>
															<span>Industrial/Warehouse</span>
														</label>
														<label for="property-type-5" class="selection">
															<input
																type="radio"
																id="property-type-5"
																name="property_type"
																value="5"
																data-slug="retail"
															/>
															<span>Retail</span>
														</label>
														<label for="property-type-3" class="selection">
															<input
																type="radio"
																id="property-type-3"
																name="property_type"
																value="3"
																data-slug="medical-consulting"
															/>
															<span>Medical/Consulting</span>
														</label>
														<label for="property-type-2" class="selection">
															<input
																type="radio"
																id="property-type-2"
																name="property_type"
																value="2"
																data-slug="gallery-studio"
															/>
															<span>Gallery/Studio</span>
														</label>
														<label for="property-type-0" class="selection">
															<input
																type="radio"
																id="property-type-0"
																name="property_type"
																value="0"
																data-slug="other"
															/>
															<span>Other</span>
														</label>
													</div>
													<div for="property-type-0" class="other-input" style="display: none;">
														<label for="property-type-0-text">Please specify:</label>
														<input
															type="text"
															id="property-type-0-text"
															name="property_type_text"
															class="form-control"
															placeholder="Other property type"
														/>
													</div>
												</div>

												<div data-step="2" id="location" class="step">
													<div class="m-step">Step 2 of 5</div>
													<div class="qn">Where are you looking?</div>
													<select
														name="suburbs[]"
														multiple="multiple"
														placeholder="Start typing a suburb..."
														class="form-control suburb-selectize selectized"
														tabindex="-1"
														style="display: none;"
													></select>
													<div
														class="selectize-control form-control suburb-selectize multi plugin-remove_button plugin-silent_remove"
													>
														<div class="selectize-input items not-full">
															<input
																type="text"
																autocomplete="off"
																tabindex=""
																placeholder="Start typing a suburb..."
																style="width: 144px;"
															/>
														</div>
														<div
															class="selectize-dropdown multi form-control suburb-selectize plugin-remove_button plugin-silent_remove"
															style="display: none;"
														>
															<div class="selectize-dropdown-content"></div>
														</div>
													</div>
													<div class="popular">
														<p>Popular Areas</p>
														<div
															class="area-pill no-select"
															data-id="11065"
															data-suburb="Melbourne"
															data-state="VIC"
														>
															Melbourne VIC
														</div>
														<div
															class="area-pill no-select"
															data-id="152"
															data-suburb="Sydney"
															data-state="NSW"
														>
															Sydney NSW
														</div>
														<div
															class="area-pill no-select"
															data-id="5188"
															data-suburb="Brisbane"
															data-state="QLD"
														>
															Brisbane QLD
														</div>
														<div
															class="area-pill no-select"
															data-id="14235"
															data-suburb="Perth"
															data-state="WA"
														>
															Perth WA
														</div>
														<div
															class="area-pill no-select"
															data-id="8561"
															data-suburb="Adelaide"
															data-state="SA"
														>
															Adelaide SA
														</div>
														<div
															class="area-pill no-select"
															data-id="11534"
															data-suburb="South Melbourne"
															data-state="VIC"
														>
															South Melbourne VIC
														</div>
														<div
															class="area-pill no-select"
															data-id="11305"
															data-suburb="Richmond"
															data-state="VIC"
														>
															Richmond VIC
														</div>
														<div
															class="area-pill no-select"
															data-id="11460"
															data-suburb="Dandenong"
															data-state="VIC"
														>
															Dandenong VIC
														</div>
														<div
															class="area-pill no-select"
															data-id="247"
															data-suburb="Surry Hills"
															data-state="NSW"
														>
															Surry Hills NSW
														</div>
														<div
															class="area-pill no-select"
															data-id="11072"
															data-suburb="Southbank"
															data-state="VIC"
														>
															Southbank VIC
														</div>
														<div
															class="area-pill no-select"
															data-id="11473"
															data-suburb="St Kilda"
															data-state="VIC"
														>
															St Kilda VIC
														</div>
														<div
															class="area-pill no-select"
															data-id="11383"
															data-suburb="Malvern"
															data-state="VIC"
														>
															Malvern VIC
														</div>
													</div>
												</div>

												<div data-step="3" id="size" class="inactive step">
													<div class="m-step">Step 3 of 5</div>
													<div class="qn">
														<span id="qn-01" class="active">
															How many people does the space need to fit?
														</span>
														<span id="qn-02"> How many sqm do you require? </span>
													</div>
													<div id="size-group-01" class="size-group">
														<label for="size-1-3-people" class="selection">
															<input
																type="radio"
																id="size-1-3-people"
																name="size"
																value="1 - 3 people"
															/>
															<span>1 - 3 people</span>
														</label>
														<label for="size-4-10-people" class="selection">
															<input
																type="radio"
																id="size-4-10-people"
																name="size"
																value="4 - 10 people"
															/>
															<span>4 - 10 people</span>
														</label>
														<label for="size-11-20-people" class="selection">
															<input
																type="radio"
																id="size-11-20-people"
																name="size"
																value="11 - 20 people"
															/>
															<span>11 - 20 people</span>
														</label>
														<label for="size-21-100-people" class="selection">
															<input
																type="radio"
																id="size-21-100-people"
																name="size"
																value="21 - 100 people"
															/>
															<span>21 - 100 people</span>
														</label>
														<label for="size-100-people" class="selection">
															<input
																type="radio"
																id="size-100-people"
																name="size"
																value="100+ people"
															/>
															<span>100+ people</span>
														</label>
													</div>
													<div id="size-group-02" class="size-group">
														<!-- <label for="size-sqm" class="selection"> -->
														<input
															type="text"
															id="size-sqm"
															name="size"
															class="form-control"
															placeholder="1 - 250 sqm"
														/>
														<span>&nbsp;</span>
														<!-- </label> -->
														<div>
															<div class="sqm-pill no-select" data-value="0 - 250 sqm">
																0 - 250 sqm
															</div>
															<div class="sqm-pill no-select" data-value="250 - 500 sqm">
																250 - 500 sqm
															</div>
															<div class="sqm-pill no-select" data-value="500 - 1000 sqm">
																500 - 1000 sqm
															</div>
															<div class="sqm-pill no-select" data-value="1000 - 2500 sqm">
																1000 - 2500 sqm
															</div>
															<div class="sqm-pill no-select" data-value="2500+ sqm">2500+ sqm</div>
														</div>
													</div>
												</div>

												<div data-step="4" id="budget" class="inactive step">
													<div class="m-step">Step 4 of 5</div>
													<div class="qn">Do you have a budget?</div>
													<label for="budget-yes" class="selection no-select">
														<input type="radio" id="budget-yes" name="budget" value="yes" />
														<span>Yes</span>
													</label>
													<label for="budget-no" class="selection no-select">
														<input type="radio" id="budget-no" name="budget" value="no" />
														<span>No, I'm flexible</span>
													</label>
													<label for="budget-advice" class="selection no-select">
														<input type="radio" id="budget-advice" name="budget" value="advice" />
														<span>I don't know what my budget should be</span>
													</label>
													<div id="budget-amount" style="display:none">
														<div class="qn">What is your budget?</div>
														<div class="error-msg">Please enter a valid amount.</div>
														<div style="display: flex;">
															<div class="input-box with-span">
																<span class="form-control">$</span><input
																	type="text"
																	name="budget_amount"
																	class="form-control"
																	placeholder="9000"
																/>
															</div>
															<div class="select-box">
																<select class="form-control" name="budget_unit">
																	<option value="per month">per month</option>
																	<option value="per annum">per annum</option>
																</select>
															</div>
														</div>
													</div>
												</div>

												<div data-step="5" id="review" class="inactive step">
													<div class="m-step">Step 5 of 5</div>
													<div id="contact-details">
														<div>Leave your details with us and we'll get in touch shortly.</div>
														<div class="error-msg"></div>
														<div class="form-row row">
															<div class="col-sm-2">
																<label for="name">Name<span class="text-danger">*</span></label>
															</div>
															<div class="col-sm-10">
																<input type="text" name="name" class="form-control" value="" />
															</div>
														</div>
														<div class="form-row row">
															<div class="col-sm-2">
																<label for="email">Email<span class="text-danger">*</span></label>
															</div>
															<div class="col-sm-10">
																<input type="email" name="email" class="form-control" value="" />
															</div>
														</div>
														<div class="form-row row">
															<div class="col-sm-2">
																<label for="phone">Phone<span class="text-danger">*</span></label>
															</div>
															<div class="col-sm-10">
																<input type="tel" name="phone" class="form-control" value="" />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div id="nav-btns" class="row">
												<div class="backward col-xs-4">
													<button type="button" class="nav-btn back" style="display: none;"
														>Back</button
													>
												</div>
												<div class="forward col-xs-8">
													<button type="button" class="nav-btn next"
														>Next <i class="fa fa-angle-right"></i></button
													>
													<button id="submit_btn" style="display: none;">
														<span class="text">Submit</span>
														<div class="spinner">
															<div class="bounce1"></div>
															<div class="bounce2"></div>
															<div class="bounce3"></div>
														</div>
													</button>
												</div>
											</div>
										</form>
									</div>
									<div class="call">
										<div class="team">
											<img
												src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/veronica_nonnis.png"
											/>
											<img
												src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/ritchiesean.jpg"
											/>
											<img
												src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/ameedelosreyes.jpeg"
											/>
										</div>
										<div class="content">
											<p>Prefer talking?</p>
											<p>Call our Property Concierge team</p>
										</div>
										<div class="phone-number">
											<!-- <img class="phone" src="https://sidespace.com.au/images/concierge-help.png" /> -->
											<i class="fa fa-phone"></i><a href="tel:1300690108"
												><span>1300 690 108</span></a
											>
										</div>
									</div>
									<!-- </div> -->
								</div>
							</div>
						</div>
						<div class="modal-footer"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- .content -->
		<div id="footer" class="bg-primary">
			<div class="inner-container">
				<div id="main-footer" class="mobile-container">
					<ul class="footer-left">
						<li>
							<a
								href="https://sidespace.com.au/for-lease"
								onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Footer Click&#39;, &#39;Lease&#39;);"
								>Lease</a
							>
						</li>
						<li>
							<a
								href="https://sidespace.com.au/for-sale"
								onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Footer Click&#39;, &#39;Buy&#39;);"
								>Buy</a
							>
						</li>
						<li>
							<a
								href="https://sidespace.com.au/for-lease/industrial-warehouse/alphington-vic#"
								onclick="event.preventDefault();ga(&#39;send&#39;, &#39;event&#39;, &#39;Seeking&#39;, &#39;Footer Click&#39;, &#39;Concierge&#39;);"
								data-tf-popup="d1qwynHj"
								data-tf-iframe-props="title=Concierge Service"
								data-tf-medium="snippet"
								class="btn-concierge">Concierge</a
							>
						</li>
					</ul>
					<ul class="footer-right">
						<li>
							Need help? Call us on <a
								onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Social&#39;, &#39;Footer Click&#39;, &#39;Phone&#39;);"
								><span>1300 690 108</span></a
							>
						</li>
						<li>
							<a
								href="https://sidespace.com.au/list"
								onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Homepage Click&#39;, &#39;Search Properties&#39;);"
								class="btn btn-default text-black">List with us</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="footerMobile" class="hide" style="">
			<div class="inner-container">
				<div class="mobile-container">
					<ul class="footer-right">
						<li>
							Need help? Call us on <a
								onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Social&#39;, &#39;Footer Click&#39;, &#39;Phone&#39;);"
								><span>1300 690 108</span></a
							>
						</li>
						<li>
							<a
								href="https://sidespace.com.au/list"
								onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Nav&#39;, &#39;Homepage Click&#39;, &#39;Search Properties&#39;);"
								data-tf-popup="d1qwynHj"
								data-tf-iframe-props="title=Concierge Service"
								data-tf-medium="snippet"
								class="btn btn-default text-black">List with us</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="footer-featured">
			<div class="inner-container">
				<div id="featured-content">
					<ul class="footer-left">
						<li class="featured-title">Partners &amp; Memberships</li>
						<li>
							<img
								src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/property_council_aus.svg"
								alt=""
							/>
						</li>
						<li>
							<img
								src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/juwai.svg"
								alt=""
							/>
						</li>
					</ul>
					<ul class="footer-right">
						<li>
							<a href="https://www.facebook.com/sidespace" target="_blank" class="text-black"
								><i class="fa fa-lg fa-facebook"></i></a
							>
						</li>
						<li>
							<a href="https://au.linkedin.com/company/sidespace" target="_blank" class="text-black"
								><i class="fa fa-lg fa-linkedin"></i></a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="footer-featured-mobile">
			<div class="inner-container">
				<div id="featured-content" class="mobile-container">
					<ul class="footer-left">
						<li class="featured-title">Partners &amp; Memberships</li>
						<li>
							<img
								src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/property_council_aus.svg"
								alt=""
							/>
						</li>
						<li>
							<img
								src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/juwai.svg"
								alt=""
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="footer-social-mobile">
			<div class="inner-container">
				<div id="featured-content" class="mobile-container">
					<ul class="footer-right">
						<li>
							<a href="https://www.facebook.com/sidespace" target="_blank" class="text-black"
								><i class="fa fa-lg fa-facebook"></i></a
							>
						</li>
						<li>
							<a href="https://au.linkedin.com/company/sidespace" target="_blank" class="text-black"
								><i class="fa fa-lg fa-linkedin"></i></a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="footer-url">
			<div class="inner-container">
				<div id="seo" class="pre-footer mobile-container">
					<div class="inner-container">
						<!-- dynamic footer SRP -->
						<div class="links">
							<div class="seo-group">
								<p class="heading">Quick Links</p>
								<div class="row">
									<div class="col-md-4">
										<a href="https://sidespace.com.au/for-lease/industrial-warehouse/vic"
											>Warehouse &amp; Industrial For Lease In Victoria</a
										><br />
										<a href="https://sidespace.com.au/for-lease/industrial-warehouse/nsw"
											>Warehouse &amp; Industrial For Lease In New South Wales</a
										><br />
										<a href="https://sidespace.com.au/for-lease/industrial-warehouse/qld"
											>Warehouse &amp; Industrial For Lease In Queensland</a
										><br />
										<a href="https://sidespace.com.au/for-lease/industrial-warehouse/sa"
											>Warehouse &amp; Industrial For Lease In South Australia</a
										><br />
									</div>

									<div class="col-md-4"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="footer-copyright">
			<div class="inner-container">
				<div id="sub-footer" class="mobile-container">
					<ul class="footer-left">
						<li>© 2023 sidespace.com.au. All Rights Reserved.</li>
					</ul>
				</div>
				<!-- #sub-footer -->
			</div>
		</div>
	</div>
	{#if OAuth}
		<div class="centered-div" on:click={handleDivClick}>
			<div
				class="w-full mt-1 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg"
			>
				<div>
					<a
						id="register"
						href="#"
						class="w-full inline-flex justify-center items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
						>Register now</a
					>
				</div>
				<hr class="border border-slate-300 mt-6 mb-6" />
				<!-- Email Address -->
				<div>
					<label class="block font-medium text-sm text-gray-700 dark:text-gray-300" for="email">
						Email
					</label>
					<input
						class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full"
						id="email"
						type="email"
						name="email"
						required="required"
						autofocus="autofocus"
						autocomplete="username"
					/>
					<div
						data-lastpass-icon-root="true"
						style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
					></div>
				</div>

				<!-- Password -->
				<div class="mt-4">
					<label class="block font-medium text-sm text-gray-700 dark:text-gray-300" for="password">
						Password
					</label>

					<input
						class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full"
						id="password"
						type="password"
						name="password"
						required="required"
						autocomplete="current-password"
					/>

					<div
						data-lastpass-icon-root="true"
						style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
					></div>
				</div>

				<!-- Remember Me -->
				<div class="block mt-4">
					<label for="remember_me" class="inline-flex items-center">
						<input
							id="remember_me"
							type="checkbox"
							class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
							name="remember"
						/>
						<span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
					</label>
				</div>

				<div class="flex items-center justify-end mt-4">
					<a
						class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
						href="#"
					>
						Forgot your password?
					</a>

					<button
						type="submit"
						class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ml-3"
					>
						Log in
					</button>
				</div>
				<div class="m-0 p-0 text-xs text-gray-400">
					<div
						data-url="#"
						title="Term of service"
						class="open-modal inline-block cursor-pointer"
						data-model-size="xl"
					>
						Terms of Service
					</div>
					|
					<div
						data-url="#"
						title="Privacy Policy"
						class="open-modal inline-block cursor-pointer"
						data-model-size="xl"
					>
						Privacy Policy
					</div>
				</div>
				<hr class="border border-slate-300 mt-3 mb-6" />
				<div class="mt-5 mx-8">
					<a href="#">
						<div class="border border-black rounded-sm shadow-lg m-3 flex justify-items-center">
							<div class="flex inline-flex bg-green-900">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"
									><path
										fill="#fff"
										d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"
									/><path
										fill="#e33629"
										d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"
									/><path
										fill="#f8bd00"
										d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"
									/><path
										fill="#587dbd"
										d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
									/><path
										fill="#319f43"
										d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"
									/></svg
								>
							</div>
							<div class="mx-4 text-lg font-extrabold inline-block align-baseline my-auto">
								Login with Google
							</div>
						</div>
					</a>
					<a href="#">
						<div class="border border-black rounded-sm shadow-lg m-3 flex justify-items-center">
							<div class="flex inline-flex bg-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"
									><path
										fill="#0076b2"
										d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"
									/><path
										fill="#fff"
										d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
									/></svg
								>
							</div>
							<div class="mx-4 text-lg font-extrabold inline-block align-baseline my-auto">
								Login with linkedIn
							</div>
						</div>
					</a>
					<a href="#">
						<div class="border border-black rounded-sm shadow-lg m-3 flex justify-items-center">
							<div class="flex inline-flex bg-slate-800">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"
									><rect
										width="118.35"
										height="118.35"
										x="4.83"
										y="4.83"
										fill="#3d5a98"
										rx="6.53"
										ry="6.53"
									/><path
										fill="#fff"
										d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
									/></svg
								>
							</div>
							<div class="mx-4 text-lg font-extrabold inline-block align-baseline my-auto">
								Login with Facebook
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	{/if}
	<!-- #wrapper -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<!-- Hotjar Tracking Code for http://www.sidespace.com.au -->
	<script>
		(function (h, o, t, j, a, r) {
			h.hj =
				h.hj ||
				function () {
					(h.hj.q = h.hj.q || []).push(arguments);
				};
			h._hjSettings = { hjid: 3640797, hjsv: 6 };
			a = o.getElementsByTagName('head')[0];
			r = o.createElement('script');
			r.async = 1;
			r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
			a.appendChild(r);
		})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
	</script>

	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/bootstrap.min.js"
	></script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/jasny-bootstrap.min.js"
	></script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/validate.js"
	></script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/fadeSlideShow-minified.js"
	></script>

	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->

	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<!-- script src="https://sidespace.com.au/js/dropzone.js"></script -->
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/selectize.js"
	></script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/silent-remove.js"
	></script>

	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/bugsnag-2.min.js"
		data-apikey="8adb7edfaf1c4c133a06a5a64f825ecd"
	>
	</script>

	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/api.js"
		async=""
		defer=""
	></script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/1339-84639"
		async=""
	></script>

	<script type="text/javascript">
		function stopRKey(evt) {
			var evt = evt ? evt : event ? event : null;
			var node = evt.target ? evt.target : evt.srcElement ? evt.srcElement : null;
			if (evt.keyCode == 13 && node.type == 'text') {
				return false;
			}
		}

		document.onkeypress = stopRKey;

		const setLocalStorageWithExpiry = (key, value, ttl_ms) => {
			const now = new Date();
			const item = {
				value: value,
				expiry: now.getTime() + ttl_ms
			};
			localStorage.setItem(key, JSON.stringify(item));
		};

		const getLocalStorageWithExpiry = (key) => {
			const itemStr = localStorage.getItem(key);
			if (!itemStr) {
				return null;
			}
			const item = JSON.parse(itemStr);
			const now = new Date();
			if (now.getTime() > item.expiry) {
				localStorage.removeItem(key);
				return null;
			}
			return item.value;
		};
	</script>

	<script>
		$(document).ready(function () {
			var footer = $('#footer');

			if (footer != null) {
				// $('#content').css({'padding-bottom':footer.outerHeight()-1});
				$('#content').css({ 'padding-bottom': 0 });
			}

			$(window).resize(function () {
				if (footer != null) {
					var footerHeight = footer.outerHeight() - 1;
					// $('#content').css({'padding-bottom':footerHeight});
					$('#content').css({ 'padding-bottom': 0 });
				}
			});

			// Source: http://www.quirksmode.org/js/cookies.html
			function readCookie(name) {
				var nameEQ = name + '=';
				var ca = document.cookie.split(';');
				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ') c = c.substring(1, c.length);
					if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
				}
				return null;
			}

			$('.child-propertytype').on('change', function (e) {
				let parent = $(this).data('parent');
				if ($(this).is(':checked')) {
					$(`.${parent}`).find('input').removeAttr('checked');
				}
			});

			$('#btn_register_modal').on('click', function (e) {
				e.preventDefault();

				let button = $(this);
				let form = $('#form_register_modal');
				let data = form.serialize();

				button.prop('disabled', true);
				button.find('span.text').hide();
				button.find('.spinner').show();

				form.find('span.error').remove();

				$.ajax({
					type: 'POST',
					url: form.attr('action'),
					data: form.serialize(),
					success: function (result) {
						// ga('send', 'event', 'Seeking', 'Enquiry Submit', 'Send Enquiry');
						// dataLayer.push({'event': 'enquiry-form-submitted', 'value': $('.enquiry-form input[name="email"]').val()});
						alert('You have successfully registered!');
						location.reload();
					},
					error: function (result) {
						button.prop('disabled', false);
						button.find('span.text').show();
						button.find('.spinner').hide();

						$errors = result.responseJSON?.errors || [];
						$.each($errors, function ($k, $v) {
							var $msg = '<span class="error" for="register_modal_' + $k + '">' + $v[0] + '</span>';
							form.find('label[for=register_modal_' + $k + ']').after($msg);
						});
					}
				});
			});

			$('#btn_login_modal').on('click', function (e) {
				e.preventDefault();

				let button = $(this);
				let form = $('#form_login_modal');
				let data = form.serialize();

				button.prop('disabled', true);
				button.find('span.text').hide();
				button.find('.spinner').show();

				form.find('span.error').remove();

				$.ajax({
					type: 'POST',
					url: form.attr('action'),
					data: form.serialize(),
					success: function (result) {
						// ga('send', 'event', 'Seeking', 'Enquiry Submit', 'Send Enquiry');
						// dataLayer.push({'event': 'enquiry-form-submitted', 'value': $('.enquiry-form input[name="email"]').val()});
						location.reload();
					},
					error: function (result) {
						button.prop('disabled', false);
						button.find('span.text').show();
						button.find('.spinner').hide();

						$errors = result.responseJSON?.errors || [];
						$.each($errors, function ($k, $v) {
							var $msg = '<span class="error" for="login_modal_' + $k + '">' + $v[0] + '</span>';
							form.find('label[for=login_modal_' + $k + ']').after($msg);
						});
					}
				});
			});
		});
	</script>

	<script type="text/javascript">
		(function (d, t) {
			var bh = d.createElement(t),
				s = d.getElementsByTagName(t)[0];
			bh.type = 'text/javascript';
			bh.src = '//www.bugherd.com/sidebarv2.js?apikey=nlcfjan02qtgkaosbodxag';
			s.parentNode.insertBefore(bh, s);
		})(document, 'script');
	</script>
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<!-- Facebook Pixel Code -->
	<script>
		!(function (f, b, e, v, n, t, s) {
			if (f.fbq) return;
			n = f.fbq = function () {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
			};
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
		})(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js');

		fbq('init', '1305737629515696');
		fbq('track', 'PageView');
	</script>
	<noscript
		><img
			height="1"
			width="1"
			style="display:none"
			src="https://www.facebook.com/tr?id=1305737629515696&ev=PageView&noscript=1"
		/></noscript
	>
	<!-- End Facebook Pixel Code -->

	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<!-- LinkedIn Tracking Code -->
	<script type="text/javascript">
		_linkedin_data_partner_id = '349820';
	</script>
	<script type="text/javascript">
		(function () {
			var s = document.getElementsByTagName('script')[0];
			var b = document.createElement('script');
			b.type = 'text/javascript';
			b.async = true;
			b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
			s.parentNode.insertBefore(b, s);
		})();
	</script>
	<noscript>
		<img
			height="1"
			width="1"
			style="display:none;"
			alt=""
			src="https://dc.ads.linkedin.com/collect/?pid=349820&fmt=gif"
		/>
	</noscript>

	<script>
		const isScrolledIntoView = (elem) => {
			if ($(elem).length == 0) return false;

			let docViewTop = $(window).scrollTop();
			let docViewBottom = docViewTop + $(window).height();

			let elemTop = $(elem).offset().top;
			let elemBottom = elemTop + $(elem).height();

			return elemBottom <= docViewBottom && elemTop >= docViewTop;
		};
		const Concierge = {
			elements: {
				trigger_modal: $('.btn-concierge'),
				modal: $('#concierge_modal'),
				modal_form: $('#concierge_modal_form'),
				show_more_property_type: $('#concierge_modal_form .show-more a'),
				radio_inputs: $('#concierge_modal_form input[type=radio]'),
				select_property_types: $('#concierge_modal_form input[name=property_type]'),
				property_type_text: $('#concierge_modal_form input[name=property_type_text]'),
				select_budgets: $('#concierge_modal_form input[name=budget]'),
				budget_amount: $('#concierge_modal_form input[name=budget_amount]'),
				submit_btn: $('#concierge_modal_form').find('#nav-btns #submit_btn'),
				nav_btns: $('#concierge_modal_form #nav-btns'),
				wrapper: $('#concierge_modal .modal-body'),
				suburb_select: $('#concierge_modal_form .suburb-selectize'),
				suburb_selectize: null,
				back_btns: $('#concierge_modal_form').find('#nav-btns .nav-btn.back'),
				next_btns: $('#concierge_modal_form').find('#nav-btns .nav-btn.next')
			},
			data: {
				step: 1,
				progress: 1,
				total_step: 5,
				is_form_submitted: false
			},
			checkScrollPos: function () {
				// let self = this;
				// if (window.scrollY + window.innerHeight >= self.elements.wrapper.scrollHeight) {
				//   self.elements.nav_btns.removeClass('scroll');
				// } else {
				//   self.elements.nav_btns.addClass('scroll');
				// }
			},
			initSuburbSelect: function () {
				let self = this;
				self.elements.suburb_select = self.elements.suburb_select.selectize({
					closeAfterSelect: true,
					openOnFocus: false,
					plugins: ['remove_button', 'silent_remove'],
					valueField: 'id',
					labelField: 'value',
					searchField: 'value',
					create: false,
					options: [],
					render: {
						option: function (item, escape) {
							return (
								'<div><span class="place" id="' +
								item.id +
								'">' +
								escape(item.suburb) +
								' ' +
								escape(item.state_code) +
								'</span></div>'
							);
						},
						item: function (item, escape) {
							return (
								'<div><span class="place" id="' +
								item.id +
								'">' +
								escape(item.suburb) +
								' ' +
								escape(item.state_code) +
								'</span></div>'
							);
						}
					},
					load: function (query, callback) {
						if (!query.length) return callback();
						$.ajax({
							url: 'https://sidespace.com.au/suburb/search',
							type: 'GET',
							dataType: 'json',
							data: {
								suburb: query
							},
							error: function () {
								callback();
							},
							success: function (res) {
								callback(res.suburbs);
							}
						});
					},
					onItemAdd: function (value, item) {
						$('[data-id="' + value + '"]').addClass('selected');
					},
					onItemRemove: function (value) {
						$('[data-id="' + value + '"]').removeClass('selected');
					},
					onClear: function () {
						$('div.area-pill').removeClass('selected');
					},
					onChange: function (value) {
						self.checkScrollPos();
					}
				});
				self.elements.suburb_selectize = self.elements.suburb_select[0].selectize;
				$('div.area-pill.no-select').on('click', function (e) {
					let suburbId = $(this).data('id');
					if ($(this).hasClass('selected')) {
						$('div[data-value="' + suburbId + '" ] .remove').trigger('click');
					} else {
						let suburbName = $(this).data('suburb');
						let suburbState = $(this).data('state');
						let option = {
							id: suburbId,
							suburb: suburbName,
							state_code: suburbState,
							value: suburbName + ' ' + suburbState
						};
						self.elements.suburb_selectize.addOption(option);
						self.elements.suburb_selectize.addItem(suburbId);
						$(this).addClass('selected');
					}
				});
			},
			navigateForm: function (old_step) {
				let self = this;
				if (self.data.step == self.data.total_step) {
					self.elements.next_btns.hide();
					self.elements.submit_btn.show();
				} else {
					self.elements.submit_btn.hide();
					if (self.data.step == 1) {
						self.elements.back_btns.hide();
					} else {
						self.elements.next_btns.show();
						self.elements.back_btns.show();
					}
				}

				$("div.step[data-step='" + old_step + "']").removeClass('active');
				$("div.step[data-step='" + self.data.step + "']").removeClass('inactive');
				$("div.step[data-step='" + self.data.step + "']").addClass('active');
				$("div[data-progress-step='" + old_step + "']").removeClass('active');
				$("div[data-progress-step='" + self.data.step + "']").addClass('active');

				$('#progress-bar-labels > div[data-progress-step="' + self.data.progress + '"]').addClass(
					'completed'
				);
				if (self.data.step > self.data.progress) {
					self.data.progress++;
					var bar_width = ((self.data.progress - 1) / self.data.total_step) * 100;
					$('#progress').css({ width: bar_width + '%' });
				}

				self.checkScrollPos();
			},
			isValidBudget: function () {
				let budget_regex = /^[,0-9]+(\.[0-9]{1,2})?$/;
				let amount = $('input[name=budget_amount]').val();
				$('#budget .error-msg').hide();
				if (budget_regex.test(amount)) {
					let zeros_regex = /^[0\.]+$/;
					if (zeros_regex.test(amount)) {
						$('#budget .error-msg').show();
						return false;
					}
				} else {
					$('#budget .error-msg').show();
					return false;
				}
				return true;
			},
			formatNumber: function (number) {
				let number_string = number.replace(/[^.\d]/g, '').toString();
				let split = number_string.split('.');
				let mod = split[0].length % 3;
				let dollar = split[0].substr(0, mod);
				let thousand = split[0].substr(mod).match(/\d{1,3}/gi);

				if (thousand) {
					separator = mod ? ',' : '';
					dollar += separator + thousand.join(',');
				}

				return split[1] != undefined ? dollar + '.' + split[1] : dollar;
			},
			nextStep: function () {
				let self = this;
				let old_step = self.data.step;
				if (old_step == 4) {
					if ($('input[name=budget]:checked').val() == 'yes') {
						if (!self.isValidBudget()) {
							return;
						}
					}
				}
				if (old_step == 1) {
					$('#property_type .error-msg').hide();
					if ($('input[name=property_type]:checked').length == 0) {
						$('#property_type .error-msg').show();
						return;
					}
					if (
						$('input[name=property_type]:checked').val() == 0 &&
						self.elements.property_type_text.val().trim() == ''
					) {
						$('#property_type .error-msg').show();
						return;
					}
				}
				self.data.step++;
				self.navigateForm(old_step);
			},
			backStep: function () {
				let self = this;
				let old_step = self.data.step;
				if (self.data.step > 0 && self.data.step <= self.data.total_step) {
					self.data.step--;
				}
				self.navigateForm(old_step);
			},
			isValidForm: function () {
				let self = this;
				let name_field = $('#contact-details input[name=name]').val();
				let email_field = $('#contact-details input[name=email]').val();
				let phone_field = $('#contact-details input[name=phone]').val();
				if (name_field == '' || email_field == '' || phone_field == '') {
					self.elements.submit_btn.removeAttr('disabled');
					$('#submit_btn span').show();
					$('#submit_btn .spinner').hide();
					$('#contact-details .error-msg').html('Please fill in the required details.');
					$('#contact-details .error-msg').show();
					self.checkScrollPos();
					return false;
				} else {
					// all zeros/spaces/symbols
					let phone_regex = /^[-0+() ]+$/;
					if (phone_regex.test(phone_field)) {
						self.elements.submit_btn.removeAttr('disabled');
						$('#submit-btn span').show();
						$('#submit-btn .spinner').hide();
						$('#contact-details .error-msg').html('Please enter a valid phone number.');
						$('#contact-details .error-msg').show();
						self.checkScrollPos();
						return false;
					}
					$('#contact-details .error-msg').hide();
					return true;
				}
			},
			onSubmit: function (e) {
				let self = this;
				e.preventDefault();
				if (self.data.step != self.data.total_step) {
					return false;
				}
				if (!self.isValidForm()) {
					return false;
				}
				$('#contact-details .error-msg').hide();
				$('#contact-details .error-msg').html('');
				self.elements.submit_btn.attr('disabled', true);
				$('#submit_btn span').hide();
				$('#submit_btn .spinner').show();

				let form_action = self.elements.modal_form.attr('action');
				let form_method = self.elements.modal_form.attr('method');
				let form_data = self.elements.modal_form.serialize();
				// console.log(form_data);
				$.ajax({
					method: form_method,
					url: form_action,
					data: form_data,
					success: function () {
						var thankYouViewUrl = 'https://sidespace.com.au/thankyou';
						window.location.href = thankYouViewUrl;
					}
				})
					.success(function (result) {
						self.data.is_form_submitted = true;
						self.data.progress++;
						var bar_width = ((self.data.progress - 1) / self.data.total_step) * 100;
						$('#progress').css({ width: bar_width + '%' });
						ga('send', 'event', 'Seeking', 'Request Submit', 'Submit Property Request');
						dataLayer.push({
							event: 'concierge-form-submitted',
							value: $('#contact-details input[name="email"]').val()
						});
						self.elements.modal.modal('hide');
					})
					.error(function (result) {
						self.elements.submit_btn.removeAttr('disabled');
						$('#submit_btn span').show();
						$('#submit_btn .spinner').hide();
						let error_msg = '';
						if (result.status == 422) {
							$.each(result.responseJSON.errors, function (key, value) {
								error_msg += value + '<br>';
							});
						} else {
							errors = JSON.parse(result.responseText);
							$.each(errors, function (key, value) {
								if (value != '') {
									error_msg += value + '<br>';
									return false;
								}
							});
						}
						$('#contact-details .error-msg').html(error_msg);
						$('#contact-details .error-msg').show();
						self.checkScrollPos();
					});
			},
			onClose: function () {
				var thankYouViewUrl = 'https://sidespace.com.au/thankyou';
				let self = this;
				self.elements.modal.on('hidden.bs.modal', function () {
					if (!self.data.is_form_submitted) {
						ga('send', 'event', 'Seeking', 'Concierge Click', 'Closed Popup Without Submitting');
					} else {
						window.location.href = thankYouViewUrl;
					}
					self.data.is_form_submitted = false;
				});
			},
			onClick: function () {
				let self = this;
				self.elements.trigger_modal.on('click', function (e) {
					self.elements.modal.modal('show');
				});
				self.elements.next_btns.on('click', function (e) {
					self.nextStep();
				});
				self.elements.back_btns.on('click', function (e) {
					self.backStep();
				});
				self.elements.show_more_property_type.on('click', function (e) {
					$('.more-types').show();
					$(this).closest('div').hide();
					self.checkScrollPos();
				});
				self.elements.submit_btn.on('click', function (e) {
					self.onSubmit(e);
				});
			},
			onChange: function () {
				let self = this;
				self.initSuburbSelect();
				self.elements.radio_inputs.on('change', function (e) {
					let field = $(this).attr('name');
					let current = $('#' + field + ' .selected input');
					if (current.length > 0) {
						if ($(this).val() != current.val()) {
							current.closest('label').removeClass('selected');
						}
					}
					$(this).closest('label').addClass('selected');
				});
				self.elements.select_property_types.on('change', function (e) {
					let q1 = $('#qn-01');
					let q2 = $('#qn-02');
					let size_groups = $('.size-group');
					let property_type = e.target.value;
					$('div.other-input').hide();
					if (property_type == 4 || property_type == 0) {
						q2.removeClass('active');
						q1.addClass('active');
						size_groups.removeClass('active');
						$('#size-group-01').addClass('active');
						if (property_type == 0) {
							$('div.other-input').show();
						}
					} else {
						q1.removeClass('active');
						q2.addClass('active');
						size_groups.removeClass('active');
						$('#size-group-02').addClass('active');
						/*
							if (property_type == 6 || property_type == 8 || property_type == 11) { 
								$('#size-group-02').addClass('active'); 
							} else if (property_type==1 || property_type==2 || property_type==5) { 
								$('#size-group-03').addClass('active'); 
							} else if (property_type==9 || property_type==10) { 
								$('#size-group-04').addClass('active'); 
							} else if (property_type==3) { 
								$('#size-group-05').addClass('active'); 
							}
							*/
					}

					$('#concierge_modal_form input[name=size]').each(function (i, e) {
						$(e).removeAttr('checked');
						$(e).closest('label').removeClass('selected');
					});
				});
				self.elements.select_budgets.on('change', function (e) {
					$('#budget .error-msg').hide();
					if ($(this).val() == 'yes') {
						$('#budget-amount').show();
					} else {
						$('#budget-amount').hide();
					}
					self.checkScrollPos();
				});
				self.elements.budget_amount.on('keydown', function (e) {
					if (e.key.length !== 1) {
						return;
					}
					let is_number = e.key >= '0' && e.key <= '9';
					let is_period = e.key == '.' || e.key == ',';
					if (!is_number && !is_period) {
						e.preventDefault();
					}
				});
				self.elements.budget_amount.on('keyup', function (e) {
					let dollar = self.formatNumber($(this).val());
					$(this).val(dollar);
				});
			},
			init: function () {
				let self = this;
				self.onClose();
				self.onClick();
				self.onChange();
				self.navigateForm(0);
				$(window).scroll(function () {
					self.checkScrollPos();
				});
			}
		};

		/*
			$(window).scroll(function() {
				if ($(window).scrollTop() + $(window).height() > $(document).height() - 100
					|| isScrolledIntoView('#btn_concierge_tf_1')
					|| isScrolledIntoView('#btn_concierge_tf_2')
					|| isScrolledIntoView('#btn_concierge_tf_3')
					|| isScrolledIntoView('#btn_concierge_tf_4')
					|| isScrolledIntoView('#btn_concierge_tf_5')
					|| isScrolledIntoView('#btn_concierge_tf_6')
					|| isScrolledIntoView('#btn_concierge_tf_7')
					|| isScrolledIntoView('#btn_concierge_tf_8')
				) {
					$('.sticky-concierge').addClass('invisible');
				} else {
					$('.sticky-concierge').removeClass('invisible');
				}
			});
			*/

		$(document).ready(function () {
			Concierge.init();

			$('#modal_concierge_success').on('hidden.bs.modal', function () {
				window.location.href = 'https://sidespace.com.au';
			});
		});

		$('.sqm-pill').on('click', function () {
			$('.sqm-pill.selected').removeClass('selected');
			$(this).addClass('selected');
			$('#size-sqm').val($(this).data('value'));
		});

		$('#close_modal_concierge_success').on('click', function () {
			$('#modal_concierge_success').modal('hide');
			$('#modal_concierge_success').removeClass('show');
		});
	</script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/js(2)"
	></script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/property-type-multiselect.js"
	></script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/filters_080518.js"
	></script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/lazyload.transpiled.min.js"
	></script>
	<script>
		$(document).ready(function () {
			var scrolled = false;

			$(window).scroll(function () {
				if (!scrolled) {
					setTimeout(() => {
						ga('send', 'event', 'Nav', 'Search Scroll', 'Scrolled On Search Results');
					}, 1500);
					scrolled = true;
				}
			});

			if ($('.no-match').length > 0) {
				setTimeout(() => {
					ga('send', 'event', 'Seeking', 'Search Result', 'No Suburb Matches');
				}, 1500);
			}

			if ($('.no-results').length > 0) {
				setTimeout(() => {
					ga('send', 'event', 'Seeking', 'Search Result', 'No Results');
				}, 1500);
			}

			$('.collapse-toggle > p').click(function () {
				var icon = $(this).find('i');

				if (icon.attr('class') == 'fa fa-angle-down') {
					icon.removeClass('fa-angle-down').addClass('fa-angle-up');
				} else {
					icon.removeClass('fa-angle-up').addClass('fa-angle-down');
				}
			});

			$('.char-toggle').click(function () {
				var charActive = $(this).hasClass('active');

				if (!charActive) {
					var oldActiveChar = $('.char-toggle.active');
					var oldDataChar = oldActiveChar.attr('data-char');

					oldActiveChar.removeClass('active');
					$('#' + oldDataChar).hide();

					var newDataChar = $(this).attr('data-char');
					$(this).addClass('active');
					$('#' + newDataChar).show();
				}
			});
		});

		var $select = $('#select-suburb').selectize({
			closeAfterSelect: true,
			plugins: ['remove_button'],
			valueField: 'id',
			labelField: 'value',
			searchField: 'value',
			create: false,
			options: [],
			render: {
				option: function (item, escape) {
					return (
						'<div><span class="place" id="' +
						item.id +
						'">' +
						escape(item.suburb) +
						', ' +
						escape(item.state_code) +
						'</span></div>'
					);
				},
				item: function (item, escape) {
					return (
						'<div><span class="place" id="' +
						item.id +
						'">' +
						escape(item.suburb) +
						', ' +
						escape(item.state_code) +
						'</span></div>'
					);
				}
			},
			load: function (query, callback) {
				if (!query.length) return callback();
				$.ajax({
					url: '/suburb/search',
					type: 'GET',
					dataType: 'json',
					data: {
						suburb: query
					},
					error: function () {
						callback();
					},
					success: function (res) {
						callback(res.suburbs);
					}
				});
			}
		});

		var option = {};
		var selectize = $select[0].selectize;
		option = { id: 11236, suburb: 'Alphington', state_code: 'VIC', value: 'Alphington-VIC' };
		selectize.addOption(option);
		selectize.addItem(11236);
	</script>
	<script>
		$(document).ready(function () {
			var myLazyLoad = new LazyLoad({ threshold: 0 });

			$('.filters-toggle').click(function () {
				$('#filters-col').addClass('open');
				$('#filters-col').show();
				$('#filters-col').scrollTop(0);
				$('#dark-overlay').show();
				$('html').addClass('noscroll');
				$('body').addClass('noscroll');
			});

			$('#close-filters').click(function () {
				$('#filters-col').removeClass('open');
				$('#filters-col').hide();
				$('#dark-overlay').hide();
				$('html').removeClass('noscroll');
				$('body').removeClass('noscroll');
			});

			$('#dark-overlay').click(function () {
				$(this).hide();
				$('#filters-col').removeClass('open');
				$('#filters-col').hide();
				$('html').removeClass('noscroll');
				$('body').removeClass('noscroll');
			});

			$('.custom-select').click(function (e) {
				e.stopPropagation();

				var id = $(this).parent().attr('id');

				// Check for other open selects
				var openId = $('.custom-select.open').parent().attr('id');

				if ($(this).hasClass('open')) {
					closeSelect(id);
				} else {
					closeSelect(openId);
					openSelect(id);
				}
			});

			$('.custom-select-options').click(function (e) {
				e.stopPropagation();
			});

			$('.custom-select-options div').click(function (e) {
				e.stopPropagation();

				var id = $(this).parent().parent().attr('id');
				var value = $(this).attr('data-value');
				var valueText = $(this).find('span').html();

				$('#' + id + ' .selected').html(valueText);
				$('#' + id + ' .selected').attr('data-value', value);
				closeSelect(id);
			});

			// Closing all selects when clicking outside
			$(window).click(function () {
				var openId = $('.custom-select.open').parent().attr('id');
				closeSelect(openId);
			});

			$('#property-type .custom-multiselect').click(function () {
				var openId = $('.custom-select.open').parent().attr('id');
				closeSelect(openId);
			});

			function openSelect(id) {
				$('#' + id + ' .custom-select').addClass('open');
				$('#' + id + ' .arrow').toggleClass('up');
				$('#' + id + ' .custom-select-options').toggle();
			}

			function closeSelect(id) {
				$('#' + id + ' .custom-select').removeClass('open');
				$('#' + id + ' .arrow').toggleClass('up');
				$('#' + id + ' .custom-select-options').toggle();
			}

			$(window).resize(function () {
				var windowWidth = window.innerWidth;

				if (windowWidth > 1119) {
					$('#filters-col').css({ display: 'inline-block' });
					$('#filters-col').removeClass('open');
					$('html').removeClass('noscroll');
					$('body').removeClass('noscroll');
				} else {
					if ($('#filters-col').hasClass('open')) {
						$('#filters-col').css({ display: 'block' });
					} else {
						$('#filters-col').css({ display: 'none' });
					}
				}
			});

			$('.carousel').bind('slide.bs.carousel', function (e) {
				var image = $(e.relatedTarget).find('img[data-original]');
				image.attr('src', image.data('original'));
				image.removeAttr('data-original');
				image.addClass('loaded');
			});
		});

		let boxTop = $('#properties').offset().top;
		$(window).scroll(function () {
			let stickyTopPos = 20;

			if ($(document).scrollTop() > boxTop - stickyTopPos) {
				let boxHeight = $('#conciergeRight .box').outerHeight(true);
				let footerTop = $('#footer').offset().top;

				if ($(document).scrollTop() + $('#conciergeRight .box').innerHeight() >= footerTop - 80) {
					console.log($('#banners-col').outerWidth(true));
					$('#conciergeRight').css('position', 'absolute');
					$('#conciergeRight').css('top', 'unset');
					$('#conciergeRight').css('bottom', -1 * footerTop + boxTop + 45);
				} else {
					$('#conciergeRight').css('position', 'fixed');
					$('#conciergeRight').css('width', $('#banners-col').outerWidth(true));
					$('#conciergeRight').css('top', stickyTopPos + 'px');
				}
			} else {
				console.log($('#banners-col').outerWidth(true));
				$('#conciergeRight').css('position', 'relative');
				$('#conciergeRight').css('width', 'unset');
				$('#conciergeRight').css('top', 'unset');
				$('#conciergeRight').css('bottom', 'unset');
			}
		});
	</script>
	<script
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/utm_form-1.0.3.min.js"
	></script>

	<iframe
		id="_hjSafeContext_33653231"
		title="_hjSafeContext"
		tabindex="-1"
		aria-hidden="true"
		src="./Warehouse &amp; Industrial For Lease In Alphington VIC _ sidespace_files/saved_resource.html"
		style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"
	></iframe>
	<div
		style="background-color: rgb(255, 143, 0); display: none; color: white; text-align: center; position: fixed; top: 0px; left: 0px; width: 100%; height: auto; min-width: 100%; min-height: auto; max-width: 100%; font-style: normal; font-variant: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-weight: normal; font-stretch: normal; font-size: 12px; cursor: pointer; padding: 5px;"
	>
		<span
			style="color: white; font-style: normal; font-variant: normal; font-kerning: auto; font-optical-sizing: auto; font-feature-settings: normal; font-variation-settings: normal; font-weight: normal; font-stretch: normal; font-size: 12px;"
			>You have turned off the paragraph player. You can turn it on again from the options page.</span
		><img
			src="chrome-extension://gfjopfpjmkcfgjpogepmdjmcnihfpokn/img/icons/icon-close_16.png"
			style="width: 20px; height: auto; min-width: 20px; min-height: auto; max-width: 20px; float: right; margin-right: 10px;"
		/>
	</div>
	<span
		style="border-radius: 10px !important; text-indent: 12px !important; width: auto !important; height: 20px !important; padding: 0px 8px !important; text-align: center !important; vertical-align: middle !important; font: bold 11px / 20px &quot;Helvetica Neue&quot;, Helvetica, sans-serif !important; color: rgb(255, 255, 255) !important; background: url(&quot;data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjYiIGZpbGw9IiNFNjAwMjMiPjwvY2lyY2xlPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDguNTYxNSAxLjYwNTUgMTAuNzQ4NSAzLjg2NSAxMS42MDlDMy44MSAxMS4xNDA1IDMuNzUxNSAxMC4zNjggMy44Nzc1IDkuODI2QzMuOTg2IDkuMzYgNC41NzggNi44NTcgNC41NzggNi44NTdDNC41NzggNi44NTcgNC4zOTk1IDYuNDk5NSA0LjM5OTUgNS45N0M0LjM5OTUgNS4xNCA0Ljg4MDUgNC41MiA1LjQ4IDQuNTJDNS45OSA0LjUyIDYuMjM2IDQuOTAyNSA2LjIzNiA1LjM2MUM2LjIzNiA1Ljg3MzUgNS45MDk1IDYuNjM5NSA1Ljc0MSA3LjM1QzUuNjAwNSA3Ljk0NDUgNi4wMzk1IDguNDI5NSA2LjYyNTUgOC40Mjk1QzcuNjg3IDguNDI5NSA4LjUwMzUgNy4zMSA4LjUwMzUgNS42OTRDOC41MDM1IDQuMjYzNSA3LjQ3NTUgMy4yNjQgNi4wMDggMy4yNjRDNC4zMDkgMy4yNjQgMy4zMTE1IDQuNTM4NSAzLjMxMTUgNS44NTZDMy4zMTE1IDYuMzY5NSAzLjUwOSA2LjkxOTUgMy43NTYgNy4yMTlDMy44MDQ1IDcuMjc4NSAzLjgxMiA3LjMzIDMuNzk3NSA3LjM5MDVDMy43NTIgNy41Nzk1IDMuNjUxIDcuOTg1IDMuNjMxNSA4LjA2OEMzLjYwNSA4LjE3NyAzLjU0NSA4LjIwMDUgMy40MzE1IDguMTQ3NUMyLjY4NTUgNy44MDA1IDIuMjE5NSA2LjcxIDIuMjE5NSA1LjgzNEMyLjIxOTUgMy45NDk1IDMuNTg4IDIuMjE5NSA2LjE2NTUgMi4yMTk1QzguMjM3NSAyLjIxOTUgOS44NDggMy42OTYgOS44NDggNS42NjlDOS44NDggNy43Mjc1IDguNTUwNSA5LjM4NDUgNi43NDg1IDkuMzg0NUM2LjE0MyA5LjM4NDUgNS41NzQ1IDkuMDY5NSA1LjM3OTUgOC42OThDNS4zNzk1IDguNjk4IDUuMDggOS44MzkgNS4wMDc1IDEwLjExOEM0Ljg2NjUgMTAuNjYgNC40NzU1IDExLjM0NiA0LjIzMyAxMS43MzU1QzQuNzkyIDExLjkwNzUgNS4zODUgMTIgNiAxMkM5LjMxMzUgMTIgMTIgOS4zMTM1IDEyIDZDMTIgMi42ODY1IDkuMzEzNSAwIDYgMEMyLjY4NjUgMCAwIDIuNjg2NSAwIDZaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8L3N2Zz4=&quot;) 4px 50% / 12px 12px no-repeat rgb(230, 0, 35) !important; position: absolute !important; opacity: 1 !important; z-index: 8675309 !important; display: none; cursor: pointer !important; border: none !important; -webkit-font-smoothing: antialiased !important; top: 711px; left: 597px;"
		>Save</span
	><span
		style="border-radius: 12px; width: 24px !important; height: 24px !important; background: url(&quot;data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTEiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCI+PC9jaXJjbGU+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMDgzNCA0LjU4MzMzSDEzLjMzMzRWNS43NDk5OUgxNS4wODM0QzE1LjcyNjggNS43NDk5OSAxNi4yNSA2LjI3MzI0IDE2LjI1IDYuOTE2NjZWOC42NjY2NkgxNy40MTY3VjYuOTE2NjZDMTcuNDE2NyA1LjYyOTgzIDE2LjM3MDIgNC41ODMzMyAxNS4wODM0IDQuNTgzMzNaTTE2LjI1IDE1LjA4MzNDMTYuMjUgMTUuNzI2NyAxNS43MjY4IDE2LjI1IDE1LjA4MzQgMTYuMjVIMTMuMzMzNFYxNy40MTY3SDE1LjA4MzRDMTYuMzcwMiAxNy40MTY3IDE3LjQxNjcgMTYuMzcwMiAxNy40MTY3IDE1LjA4MzNWMTMuMzMzM0gxNi4yNVYxNS4wODMzWk01Ljc1MDA0IDE1LjA4MzNWMTMuMzMzM0g0LjU4MzM3VjE1LjA4MzNDNC41ODMzNyAxNi4zNzAyIDUuNjI5ODcgMTcuNDE2NyA2LjkxNjcxIDE3LjQxNjdIOC42NjY3MVYxNi4yNUg2LjkxNjcxQzYuMjczMjkgMTYuMjUgNS43NTAwNCAxNS43MjY3IDUuNzUwMDQgMTUuMDgzM1pNNS43NTAwNCA2LjkxNjY2QzUuNzUwMDQgNi4yNzMyNCA2LjI3MzI5IDUuNzQ5OTkgNi45MTY3MSA1Ljc0OTk5SDguNjY2NzFWNC41ODMzM0g2LjkxNjcxQzUuNjI5ODcgNC41ODMzMyA0LjU4MzM3IDUuNjI5ODMgNC41ODMzNyA2LjkxNjY2VjguNjY2NjZINS43NTAwNFY2LjkxNjY2Wk05LjI1MDA0IDEwLjcwODNDOS4yNTAwNCA5LjkwNDQ5IDkuOTA0NTQgOS4yNDk5OSAxMC43MDg0IDkuMjQ5OTlDMTEuNTEyMiA5LjI0OTk5IDEyLjE2NjcgOS45MDQ0OSAxMi4xNjY3IDEwLjcwODNDMTIuMTY2NyAxMS41MTIyIDExLjUxMjIgMTIuMTY2NyAxMC43MDg0IDEyLjE2NjdDOS45MDQ1NCAxMi4xNjY3IDkuMjUwMDQgMTEuNTEyMiA5LjI1MDA0IDEwLjcwODNaTTEzLjYyNSAxNC41QzEzLjg0OSAxNC41IDE0LjA3MyAxNC40MTQ4IDE0LjI0NCAxNC4yNDM5QzE0LjU4NTIgMTMuOTAyMSAxNC41ODUyIDEzLjM0NzkgMTQuMjQ0IDEzLjAwNjFMMTMuMDcwMyAxMS44MzNDMTMuMjM0MiAxMS40OTA2IDEzLjMzMzQgMTEuMTEyNiAxMy4zMzM0IDEwLjcwODNDMTMuMzMzNCA5LjI2MTA4IDEyLjE1NTYgOC4wODMzMyAxMC43MDg0IDguMDgzMzNDOS4yNjExMiA4LjA4MzMzIDguMDgzMzcgOS4yNjEwOCA4LjA4MzM3IDEwLjcwODNDOC4wODMzNyAxMi4xNTU2IDkuMjYxMTIgMTMuMzMzMyAxMC43MDg0IDEzLjMzMzNDMTEuMTEyNiAxMy4zMzMzIDExLjQ5MDYgMTMuMjM0MiAxMS44MzMgMTMuMDcwMkwxMy4wMDYxIDE0LjI0MzlDMTMuMTc3IDE0LjQxNDggMTMuNDAxIDE0LjUgMTMuNjI1IDE0LjVaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8L3N2Zz4=&quot;) 50% 50% / 24px 24px no-repeat rgba(0, 0, 0, 0.4) !important; position: absolute !important; opacity: 1 !important; z-index: 8675309 !important; display: none; cursor: pointer !important; border: none !important; top: 711px; left: 1123px;"
	></span>
</div>

<style>
	.opr-banner-ext-header {
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.opr-banner-ext-middle {
		width: 100%;
		height: 200px;
		margin: 8px 0;
		border-radius: 8px;
		overflow: hidden;
	}

	.opr-banner-ext-center {
		position: absolute;
		z-index: 11;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: calc(100% - 30px);
		height: calc(100% - 16px);
		border-radius: 8px;
		overflow: hidden;
	}

	.opr-banner-ext-right {
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 8px;
		overflow: hidden;
	}

	.opr-banner-ext-footer {
		position: fixed;
		bottom: 16px;
		left: 50%;
		transform: translateX(-50%);
		height: 120px;
		width: 970px;
		z-index: 9999;
		border-radius: 8px;
		overflow: hidden;
	}

	.opr-banner-ext-category.opr-banner-ext-header {
		position: relative;
		height: 80px;
	}

	.opr-banner-ext-wrap {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.opr-banner-ext-img {
		background-repeat: no-repeat;
		background-size: cover;
		display: block;
		width: 100%;
		height: 100%;
		background-position: center !important;
	}

	.opr-banner-ext-close {
		position: absolute;
		width: 28px;
		height: 28px;
		top: 4px;
		right: 4px;
		z-index: 3;
		color: #828282;
		cursor: pointer;
		font-size: 28px;
		line-height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media screen and (max-width: 1230px) {
		.opr-banner-ext-center {
			width: calc(100% - 24px);
			left: 0;
			transform: translateX(24px);
		}
	}

	.centered-div {
		position: fixed; /* or 'absolute' if you don't want it to stay fixed during scroll */
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1000; /* ensures it's above other elements */

		/* Add additional styling as needed */
		width: 400px; /* or any desired width */
		height: 600px; /* or any desired height */
		background-color: white;
		border: 1px solid #ccc;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
		padding: 20px;
	}
</style>
