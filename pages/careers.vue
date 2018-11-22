<template>
<div>
          <section class="static-banner career-banner">
		<div class="banner-text">
			<h1>Careers</h1>
		</div>
    </section>
    <section class="main-area">
    	<div class="container-fluid">

    		<div class="fixed-wrapper">
	    		<section class="about-ccl">
						<h2>{{career.title}}</h2>
						<p v-html="getHTML(career.top)"></p>
	    			
	    			<div class="row">
		    			<div class="col-xs-12 col-sm-6" v-html="getHTML(career.topLeft)">
		    			</div>
		    			<div class="col-xs-12 col-sm-6" v-html="getHTML(career.topRight)">
		    			</div>
	    			</div>
	    		</section>

	    		<section class="employee-benifits">
	    			<h2>CCL EMPLOYEE BENEFITS</h2>
	    			<div v-html="getHTML(career.benefits)"></div>
	    		</section>
	    	</div>
	    	
    		<section class="vacancy">
    		<div class="fixed-wrapper">
    			<h2>current vacancies</h2>
    			<div class="vacancy-list-item" v-for="(post,index) in career.postings" :key="post.title">
    				<h3>{{post.title}}</h3>
    				<div class="desc">
    					<ul>
    						<li class="date">Updated: {{post.updated}}</li>
    						<li>{{post.type}}</li>
    						<li><span>Weekly Hours: </span>{{post.hours}}</li>
    						<li><span>Location: </span>{{post.location}}</li>
    					</ul>
    				</div>
    				<div class="teaser" v-html="getHTML(post.desc)"></div>
    				<div class="details" v-show="currentPosting == index || career.postings.length === 1">
    					<h4>Knowledge Skills and Abilities:</h4>
							<p v-html="getHTML(post.knowledge)"></p>

    					<h4>Minimum Job Requirements:</h4>
							<p v-html="getHTML(post.requirements)"></p>

    					<h4>Duties & Responsibilities:</h4>
							<p v-html="getHTML(post.duties)"></p>

    					<div class="vacany-footer">
    						<!--
							<div class="share">
		    					<img src="images/job-share.jpg" title="Share" alt="Share">
		    				</div>
							-->
		    				<div class="apply">
		    					<a href="" title="Apply Now">Apply Now</a>
		    				</div>
    					</div>
    					
    				</div>
    				
    				<div class="shadow-bottom" v-show="career.postings.length > 1">
    					<div class="show-hide" >
	    					<a href="javascript:void(0);" class="show-job" v-on:click="currentPosting = index" v-show="currentPosting != index">
	    						READ MORE
	    						<i class="fa fa-angle-down"></i>
	    					</a>
	    					<a href="javascript:void(0);" class="hide-job" v-show="currentPosting == index" v-on:click="currentPosting = -1">
	    						<i class="fa fa-angle-up"></i>
	    						SHOW LESS
	    					</a>
	    				</div>
    				</div>
    			</div>
    		</div>
    		</section>
	    	
    	</div>
    </section>
    </div>
</template>

<script>
export default {
  data() {
    var career = require("js-yaml-loader!~/content/career.yml");
    return { currentPosting: 0, career };
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

