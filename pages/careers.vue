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
	    			<h2>About Climate Control LTD.</h2>
	    			<p><strong>Climate Control Limited (CCL)</strong> was established in 1966. Traditionally, the company has been an air conditioning firm, representing major A/C international brands. The company’s range of services include equipment sales and rentals, parts and installations with the relative service and preventative maintenance. </p>
	    			<div class="row">
		    			<div class="col-xs-12 col-sm-6">
		    				<p>Over its many years of operations Climate Control has been a major provider of trained personnel to the air conditioning industry in the country. The present staff at Climate Control Limited is no exception. There are over 100 years of combined expertise among the technical personnel at the company, which is applied to everyday routine business as well as special applications such as Natural Gas Cooling. </p>
		    			</div>
		    			<div class="col-xs-12 col-sm-6">
		    				<p>The senior management of the company has many years’ experience in the management, contracting and service industry as well as a wealth of knowledge of other varied industries and applications. This provides the where-with-all to derive the best solutions to common as well as uncommon engineering problems.</p>
		    			</div>
	    			</div>
	    		</section>

	    		<section class="employee-benifits">
	    			<h2>CCL EMPLOYEE BENEFITS</h2>
	    			<ul>
	    				<li>A competitive total compensation package</li>
						<li>A comprehensive benefits and retirement savings program</li>
						<li>Continuous in house technical assessments in both practical HVAC applications and theory</li>
						<li>Local and international training opportunities</li>
						<li>Opportunities to work at any of our branches in Port-of-Spain or Tobago</li>
						<li>Internal coaching programs lead by some of the country’s most skilled ‘A’ Class technicians</li>
						<li>A team environment that provides an enriching and engaging work experience</li>
	    			</ul>
	    		</section>
	    	</div>
	    	
    		<section class="vacancy">
    		<div class="fixed-wrapper">
    			<h2>current vacancies</h2>
    			<div class="vacancy-list-item" v-for="post in postings" :key="post.title">
    				<h3>{{post.title}}</h3>
    				<div class="desc">
    					<ul>
    						<li class="date">Updated: {{post.updated}}</li>
    						<li>{{post.type}}</li>
    						<li><span>Weekly Hours: </span>{{post.hours}}</li>
    						<li><span>Location: </span>{{post.location}}</li>
    					</ul>
    				</div>
    				<div class="teaser">
    					<p>{{post.desc}}</p>
    				</div>
    				<div class="details">
    					<h4>Knowledge Skills and Abilities:</h4>
						{{post.knowledge}}
    					<h4>Minimum Job Requirements:</h4>
    					{{post.requirements}}
    					<h4>Duties & Responsibilities:</h4>
    					{{post.duties}}
    					<div class="vacany-footer">
    						<div class="share">
		    					<img src="images/job-share.jpg" title="Share" alt="Share">
		    				</div>
		    				<div class="apply">
		    					<a href="" title="Apply Now">Apply Now</a>
		    				</div>
    					</div>
    					
    				</div>
    				
    				<div class="shadow-bottom">
    					<div class="show-hide">
	    					<a href="javascript:void(0);" class="show-job">
	    						READ MORE
	    						<i class="fa fa-angle-down"></i>
	    					</a>
	    					<a href="javascript:void(0);" class="hide-job">
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
    // Using webpacks context to gather all files from a folder
    const context = require.context("~/content/career/postings/", false, /\.json$/); 
    const postings = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace(".json", "").replace("./", "")}`
    })); 
    return { postings };
  }
};
</script>

