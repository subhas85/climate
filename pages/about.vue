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
			    			<div class="col-xs-12 col-sm-6">
								<p v-html="getHTML(about.topLeftDesc)"></p>
			    			</div>
			    			<div class="col-xs-12 col-sm-6">
								<p v-html="getHTML(about.topRightDesc)"></p>
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
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<p>HEAD OFFICE</p>
					<p>124 Eastern Main Road, </p>
					<p>Port of Spain, Trinidad</p>
					<p>Office: 1-868-624-COOL (2665)</p>
					<p>Fax: 1-868-625-8207</p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.116661163356!2d-61.48568528520039!3d10.648044192408733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c36078eb2e110f1%3A0x9bb45961dcc9136e!2sClimate+Control+Limited!5e0!3m2!1sen!2sca!4v1454693683666" width="100%" height="180" frameborder="0" style="border:0" allowfullscreen></iframe>
					
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<p>BRANCH OFFICE</p>
					<p>44-46 Milford Road, Canaan</p>
					<p>Tobago</p>
					<p>Office: 1-868-631-COOL (2665)</p>
					<p>Fax: 1-868-631-0392</p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4236590822957!2d-60.813850285195876!3d11.156234792064486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c49b2330a64edc7%3A0x4d4c4c80b2e02f56!2sTobago+Technology+Centre%2C+Milford+Rd%2C+Canaan%2C+Trinidad+and+Tobago!5e0!3m2!1sen!2sca!4v1454754306076" width="100%" height="180" frameborder="0" style="border:0" allowfullscreen></iframe>
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
    return { about };
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
