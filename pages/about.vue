<template>
<div>
    <section class="static-banner about-banner">

    </section>

    <section class="main-area">
    		<div class="fixed-wrapper">
    			<div class="container-fluid">
    				<section class="about-main">
	    				<h2>Incorporated since 1966</h2> 
						<p v-html="getHTML(about.top)"></p>
						
		    			<div class="row">
			    			<div class="col-xs-12 col-sm-6" v-html="getHTML(about.topLeftDesc)">
			    			</div>
			    			<div class="col-xs-12 col-sm-6" v-html="getHTML(about.topRightDesc)">
			    			</div>
		    			</div>
		    		</section>
	    		</div>
    		</div>

    		<!-- <section class="location">
	<figure>
		<img src="images/location-banner.jpg" alt="Location" title="Location" class="img-responsive">
	</figure>
	<div class="fixed-wrapper">
		<div class="container-fluid">
			<h2>Our Locations</h2>
			<div class="row">
    			<div class="col-xs-12 col-sm-6">
    				<p>HEAD OFFICE <br/><br/>124 Eastern Main Road,<br/> Port of Spain, Trinidad<br/> Tel: 624-2665 </p>
    				<img src="images/head-office.jpg" alt="Head Office" title="Head Office" class="img-responsive">
    			</div>
    			<div class="col-xs-12 col-sm-6">
    				<p>BRANCH OFFICE <br/><br/>44-46 Milford Road<br/> Canaan, Tobago<br/> Tel 631-2665</p>
    				<img src="images/branch-office.jpg" alt="Branch Office" title="Branch Office" class="img-responsive">
    			</div>
			</div>
		</div>
	</div> -->
</section>

<section class="location">
	<div class="banner-section" style="background-image:url('images/location-banner.jpg')"></div>
	<!--<figure>
		<img src="" alt="Location" title="Location" class="img-responsive">
	</figure>-->
	<div class="fixed-wrapper">
		<div class="container-fluid">
			<h2>Our Locations</h2>
			<div class="row" v-for="office in contact.offices" :key="office.map">
				<div class="col-xs-12 col-sm-6">
					<p>{{office.title}}</p>
						<p>{{office.address}}</p>
						<p>{{office.address2}}</p>
						<p>Office: {{office.office}}</p>
						<p>Fax: {{office.fax}}</p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<iframe :src="office.map" width="100%" height="180" frameborder="0" style="border:0" allowfullscreen></iframe>
				</div>
			</div>
		</div>
	</div>
</section>

    		<section class="air-condition">
    			<div class="banner-section" style="background-image:url('images/air-banner.jpg')"></div>
    			<div class="fixed-wrapper">
    				<div class="container-fluid">
		    			<h2>Air-Conditioning</h2>
						<p class="big" v-html="getHTML(about.acTop)"></p>
						<p class="big1">We also provide HVAC accessories for industrial, commercial and residential applications.</p>
		    			<div class="row">
			    			<div class="col-xs-12">
			    				<div class="logos logo1">
			    					<img src="/images/content-logo1.jpg" class="img-responsive" title="LG">
			    					<p>We were one of the first to provide VRF Systems to the local market.</p>
			    				</div>
			    				<div class="logos logo2">
			    					<img src="/images/content-logo2.jpg" class="img-responsive" title="York">
			    					<p>For over 15 years we have been proudly providing York Commercial equipments and Chill water systems.</p>
			    				</div>
			    				<div class="logos logo3">
			    					<img src="/images/content-logo3.jpg" class="img-responsive" title="Durkee Sox">
			    				</div>
			    				<div class="logos logo4">
			    					<img src="/images/content-logo4.jpg" class="img-responsive" title="Stulz">
			    				</div>
			    				<div class="logos logo5">
			    					<img src="images/content-logo5.jpg" class="img-responsive" title="Specific Systems">
			    				</div>
			    				<div class="logos logo6">
			    					<img src="images/content-logo6.jpg" class="img-responsive" title="Bioclimate Air Systems">
			    				</div>
			    				
			    			</div>
		    			</div>
		    			<div class="row">
							<div class="col-xs-12 col-sm-6" v-html="getHTML(about.acLeftDesc)"></div>
							<div class="col-xs-12 col-sm-6" v-html="getHTML(about.acRightDesc)"></div>
		    			</div>
	    			</div>
	    		</div>
    		</section>

    		<section class="health-safety">
	<div class="banner-section" style="background-image:url('images/health-banner.jpg')"></div>
	<!--<figure>
		<img src="images/health-banner.jpg" alt="Health and Safety" title="Health and Safety" class="img-responsive">
	</figure>-->
	<div class="fixed-wrapper">
		<div class="container-fluid">
			<h2>Health and Safety</h2>
			<p>THE CCL HSE POLICY STATEMENT – Health, Safety and Environment</p>
			<div class="row">
				<div class="col-xs-12 col-sm-6" v-html="getHTML(about.healthLeftDesc)"></div>
				<div class="col-xs-12 col-sm-6">
					<p v-html="getHTML(about.healthRightDesc)"></p>
					<p class="stow-logo"><strong>CCL is STOW Certified</strong><img src="images/content-logo7.jpg" class="img-responsive" title="LG"></p>
				</div>
			</div>
		</div>
	</div>
</section>
    		
	    	
	    	<section class="service-directory">
	<div class="banner-section" style="background-image:url('images/directory-banner.jpg')"></div>
	<!--<figure>
		<img src="images/directory-banner.jpg" alt="Service Directory" title="Service Directory" class="img-responsive">
	</figure>-->
	<div class="fixed-wrapper">
		<div class="container-fluid">
			<h2>Service Directory</h2>
			<p v-html="getHTML(about.serviceDirectoryHeading)"></p>
			<div class="row">
    			<div class="col-xs-12 col-sm-4">
    				<ul>
    					<li>COMMERCIAL</li>
						<li v-for="commerical in about.commerical" :key="commerical.item">{{commerical.item}}</li>
    				</ul>
    			</div>
    			<div class="col-xs-12 col-sm-4">
    				<ul>
    					<li>INDUSTRIAL</li>
						<li v-for="industrial in about.industrial" :key="industrial.item">{{industrial.item}}</li>
    				</ul>
    			</div>
    			<div class="col-xs-12 col-sm-4">
    				<ul>
    					<li>OTHER
						<li v-for="other in about.other" :key="other.item">{{other.item}}</li>
    				</ul>
    			</div>
			</div>
		</div>
	</div>
</section>
</div>	    
</template>
<script>
export default {
  data() {
	var about = require("js-yaml-loader!~/content/about.yml");
	var contact = require("js-yaml-loader!~/content/contact.yml");
    return { about, contact };
  },
  methods: {
    getHTML: function(code) {
      var showdown = require("showdown");
      var converter = new showdown.Converter();
      return converter.makeHtml(code);
    }
  }
};
</script>
