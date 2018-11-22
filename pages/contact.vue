<template>
<div>
    <section class="static-banner contact-banner">
		<div class="banner-text">
			<h1>Contact</h1>
		</div>
    </section>

    <section class="main-area">
    	<div class="container-fluid">
    		<div class="fixed-wrapper">
	    		<section class="contact-ccl"> 
	    			<h2>GENERAL CONTACT</h2>
	    			<div class="row">
		    			<div class="col-xs-12">
		    				<p>EMAIL</p>
							<p v-html="getHTML(contact.email)"></p>
		    			</div>
	    			</div>
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
	    		</section>

	    		<section class="direct-contact">
	    			<h2>DIRECT CONTACT</h2>
	    			<div class="row">
		    			<div class="col-xs-12 col-sm-4" v-for="contact in contact.contacts" :key="contact.name">
		    				<p>{{contact.name}}<br/>
							{{contact.position}}<br/>
							<span>{{contact.phone}}</span><br/>
							{{contact.email}}</p>
		    			</div>
	    			</div>
	    		</section>
	    	</div>
    	</div>
    </section>
    </div>

	 
</template>

<script>
export default {
  data() {
    var contact = require("js-yaml-loader!~/content/contact.yml");
    return { contact };
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

