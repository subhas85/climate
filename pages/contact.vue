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
							<p>climate@ccl-tt.com</p>
		    			</div>
	    			</div>
	    			<div class="row" v-for="office in offices" :key="office.map">
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
		    			<div class="col-xs-12 col-sm-4" v-for="contact in contacts" :key="contact.name">
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
    // Using webpacks context to gather all files from a folder
    const context = require.context("~/content/offices/", false, /\.json$/);
	const context2 = require.context("~/content/contacts/", false, /\.json$/);
    const offices = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace(".json", "").replace("./", "")}`
    }));
	const contacts = context2.keys().map(key => ({
      ...context2(key),
      _path: `/blog/${key.replace(".json", "").replace("./", "")}`
    }));
    return { offices,contacts };
  }
};
</script>
