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
		    			<div class="col-xs-12 col-sm-4">
		    				<p>MARK LANKESTER<br/>
							Chief Executive Officer<br/>
							<span>1(868)-299-5900</span><br/>
							mark-lankester@ccl-tt.com</p>
		    			</div>
		    			<div class="col-xs-12 col-sm-4">
		    				<p>STEVE MOHAMMED<br/>
							General Manager<br/>
							<span>1(868)-682-7537</span><br/>
							steve.mohammed@ccl-tt.com</p>
		    			</div>
		    			<div class="col-xs-12 col-sm-4">
		    				<p>STACY-LYNN BICKRAM<br/>
							Human Resource Manager<br/>
							<span>1(868)-678-4465</span><br/>
							hse@ccl-tt.com</p>
		    			</div>

		    			<div class="col-xs-12 col-sm-4">
		    				<p>REZA RAHAMAN<br/>
							HSSE/QC Manager<br/>
							<span>1(868)-678-4465</span><br/>
							hse@ccl-tt.com</p>
		    			</div>
		    			<div class="col-xs-12 col-sm-4">
		    				<p>SUSAN JOSEPH<br/>
							Executive Assistant<br/>
							admin@ccl-tt.com</p>
		    			</div>
		    			<div class="col-xs-12 col-sm-4">
		    				<p>DAVID SOOKRAM<br/>
							Executive Assistant<br/>
							admin@ccl-tt.com</p>
		    			</div>

		    			<div class="col-xs-12 col-sm-4">
		    				<p>KEVIN SCOTT<br/>
							Operations Team Lead<br/>
							<span>1(868)-704-7652</span><br/>
							kevin.scott@ccl-tt.com</p>
		    			</div>
		    			<div class="col-xs-12 col-sm-4">
		    				<p>TENISHA LOWTHER<br/>
							Finance Manager<br/>
							<span>1(868)-790-1017</span><br/>
							tenisha.lowther@ccl-tt.com</p>
		    			</div>
		    			<div class="col-xs-12 col-sm-4">
		    				<p>CANDICE TAYLOR<br/>
							Service Coordinator<br/>
							<span>1(868)-687-2481</span><br/>
							service@ccl-tt.com</p>
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
    const offices = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace(".json", "").replace("./", "")}`
    }));
    return { offices };
  }
};
</script>
