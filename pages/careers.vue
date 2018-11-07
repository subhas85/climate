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
    						<li><span>Location: </span>TOBAGO AND POS</li>
    					</ul>
    				</div>
    				<div class="teaser">
    					<p>The Operations Administrators will assist the Operations Coordinators with maintaining required efficiencies for the effective functioning of the Operations Department across the organization. The ideal candidate must be have superior organizational skills, a proactive mindset and a goal oriented focus. The Operations Department is the central hub of the organization and team members must be willing to contribute to revenue generation, internal and external customer service excellence and the overall growth of the department.</p>
    				</div>
    				<div class="details">
    					<h4>Knowledge Skills and Abilities:</h4>
    					<ul>
    						<li>General knowledge of the company’s products and services</li>
    						<li>Demonstrated time-management skills (multi-task, set priorities and meet strict deadlines)</li>
    						<li>Sound organisational, communication and interpersonal skills</li>
    						<li>Ability to work independently and in a team-oriented environment</li>
    						<li>Ability to problem solve using an array of analytical skills, logic and reasoning to identify and communicate solutions to any issues or problems encountered</li>
    					</ul>
    					<h4>Minimum Job Requirements:</h4>
    					<ul>
    						<li>Diploma in Business Administration or equivalent combination of experience and training</li>
    						<li>A minimum of five (5) years experience in a similar or related capacity</li>
    						
    					</ul>
    					<h4>Duties & Responsibilities:</h4>
    					<ul>
    						<li>Ensures all requests for quotations (i.e. repairs, change out, service etc) are prepared and delivered to the customer in a timely manner</li>
    						<li>Liaises regularly with the purchasing/parts department to ensure that the required parts are kept in stock at all times and that non-stock items are sourced in a timely manner</li>
    						<li>Assists with the preparation all tender bids and pre-qualification documents; ensures all related documents are provide and deadlines met</li>
    						<li>Provides and/or oversees support activities for the department such as answering telephones, review and control of incoming and outgoing correspondence and follow up but not limited to operational commitments to the departments customers.</li>
    						<li>Schedules, coordinates and follows up on issues related to meetings etc. for the Service Manager as required</li>
    						<li>Prepares and maintains the official minutes and notices of all meetings</li>
							<li>Ensures that follow-up meetings are scheduled to ensure all related documents are provided e.g. quotes, tenders etc</li>
    						<li>Prepares special and/or one-time reports, summaries and/or replies to inquiries by selecting relevant data from a variety of sources</li>
    						<li>Assists with the coordination/dispatching of all service jobs inclusive of contracts and one-offs in the absence of the Service Coordinator to ensure the timely commencement and completion of same</li>
    						<li>Analyzes completed job tickets to ensure all necessary information is recorded</li>
							<li>Follows up on customer requests/complaints as stated on the completed job tickets or through incoming calls</li>
    						<li>Researches information, compiles statistics, gathers and computes various data.</li>
    						<li>Ensures good customer relationships by attempting to immediately resolve any relative problem that may arise</li>
    						<li>Serves as a central point of liaison with other service personnel, departments and external clients in the execution of a variety of service related matters</li>
							<li>Performs a range of diverse administrative activities.</li>
    						<li>Prepares reports, summaries or replied to inquires through the selection of relevant data from a variety of sources within and outside of the department’s operations.</li>
    						<li>Utilizes knowledge and understanding of underlying operational issues to create, compose and edit technical and/or administrative correspondence and documentation</li>
    						<li>Develops and maintains a proper filling system to secure important documents, to ensure easy retrieval of documents and maintain an up-to-date listing of all files and their locations</li>
    					</ul>
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

