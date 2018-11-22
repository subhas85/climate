<template>
<div>
<header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <div class="logo">
            <a href="/" title="Climate Control Ltd"><img class="img-responsive" src="/images/logo.png" alt="Climate Control Ltd" title="Climate Control Ltd"></a>
          </div>

          <div class="menu">
            <a href="javascript:void(0)">
              <i class="fa fa-bars"></i>Show Menu
            </a>
          </div>
        </div>
        <!--
        <div class="col-xs-12 col-sm-6">
          <ul class="header-menu">
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-shopping-cart"></i><span>Cart</span><i class="fa fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)"><span>TTD</span><i class="fa fa-chevron-down"></i></a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-user"></i><span>Guest</span><i class="fa fa-chevron-down"></i>
              </a>
            </li>
          </ul>
        </div>
        -->
      </div>
    </div>
  </header>
  <nav class="nav-closed">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <div class="logo">
            <img class="img-responsive" src="/images/logo-nav.png" alt="Climate Control Ltd" title="Climate Control Ltd">
          </div>

          <div class="menu">
            <a href="javascript:void(0)">
              <i class="fa fa-close"></i>Close menu
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-5 col-md-4">
          <ul class="menu-list">
            <li><a href="" title="">Home</a></li>
            <!--<li><a href="" title="">Catalogue</a></li>-->
            <!--<li><a href="" title="">Recent Projects</a></li>-->
            <!--<li><a href="" title="">Rentals</a></li>-->
            <!--<li><a href="" title="">Engineering</a></li>-->
            <!--<li><a href="" title="" class="active">Support Downloads</a></li>-->
            <li><a href="/about" title="">About Us</a></li>
            <li><a href="/careers" title="">Careers</a></li>
            <li><a href="/contact" title="">Contact Us</a></li>
            <!--<li><a href="faq" title="">FAQ</a></li>-->
          </ul>
        </div>
        <div class="col-xs-12 col-sm-7 col-md-8">
          <div class="menu-details">
              <div v-for="office in contact.offices" :key="office.map">
                      <h3>{{office.title}}</h3>
                      <p><i class="fa fa-map-marker"></i>&nbsp; {{office.address}}, {{office.address2}}</p>
              <p><i class="fa fa-phone"></i>&nbsp; Office: {{office.office}}</p>
              <p><i class="fa fa-fax"></i>&nbsp; Fax: {{office.fax}}</p>
              </div>
                    
          </div>
        </div>
      </div>
    </div>
  </nav>
  <main>
  <nuxt/>
  </main>
  <footer>
	<div class="container-fluid">
		<div class="scroll-top">
			<a href="javascript:void(0)">
				<i class="fa fa-arrow-up"></i>
			</a>
		</div>
    <!--
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<div class="footer-menu">
					<ul>
						<li>DEPARTMENTS</li>
						<li><a href="javascript:void(0)" title="Commercial Products">Commercial Products</a></li>
						<li><a href="javascript:void(0)" title="Industrial Products">Industrial Products</a></li>
						<li><a href="javascript:void(0)" title="Residential Products">Residential Products</a></li>
						<li><a href="javascript:void(0)" title="Rental Products">Rental Products</a></li>
					</ul>
					<ul>
						<li>CUSTOMER SERVICE</li>
						<li><a href="javascript:void(0)" title="Support Downloads">Support Downloads</a></li>
						<li><a href="javascript:void(0)" title="Order Status">Order Status</a></li>
						<li><a href="javascript:void(0)" title="Payment History">Payment History</a></li>
						<li><a href="javascript:void(0)" title="Manage My Account">Manage My Account</a></li>
						<li><a href="javascript:void(0)" title="Frequently Aseked Questions">Frequently Aseked Questions</a></li>
						<li><a href="javascript:void(0)" title="Contact Us">Contact Us</a></li>
					</ul>
					<ul>
						<li>COMPANY INFO</li>
						<li><a href="javascript:void(0)" title="About Us">About Us</a></li>
						<li><a href="javascript:void(0)" title="Careers">Careers</a></li>
						<li><a href="javascript:void(0)" title="Return Policy">Return Policy</a></li>
						<li><a href="javascript:void(0)" title="Privacy Policy">Privacy Policy</a></li>
						<li><a href="javascript:void(0)" title="Site Map">Site Map</a></li>
						<li><a href="javascript:void(0)" title="Contact Us">Contact Us</a></li>
					</ul>
				</div>
			</div>
			<div class="col-sm-12 col-md-6">
				<div class="row">
					<div class="col-sm-6">
						<div class="subscribe">
							<h6>Stay Updated</h6>
							<p>Be the first to find out about our special offers. You’ll also receive coupons from time to time.</p>
							<form>
								<input type="text" name="newsletter" placeholder="jane@email.com">
								<input type="submit" value="Subscribe" name="subscribe">
							</form>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="teaser">
							<div class="teaser-inner">
								<i class="fa fa-check"></i>
								<p>We’ll match any of our competitor’s price even up to <b>30 days after your purchase!</b></p>
								<a href="" title="Learn More">Learn More <i class="fa fa-angle-right"></i></a>
							</div>
						</div>
						<div class="teaser-2 visible-xs visible-sm visible-md">
							<p>In Business since <b>1966</b></p>
						</div>
					</div>
				</div>
			</div>
		</div>
    -->

		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-9 footer-items">
        <!--
				<div class="comodo-seal">
					<p>100%<br/> Secure<br/> Shopping</p>
					<img src="/images/comodo-footer.png" alt="Comodo Secure" title="Comodo Secure">
				</div>

				<div class="payment">
					<p>Accepted payment methods</p>
					<img src="/images/footer-payment.png" alt="Accepted Payment Methods" title="Accepted Payment Methods">
				</div>
        -->

				<div class="copyright">
					<p>Copyright © Climate Control Ltd. All rights reserved.</p>
				</div>
			</div>
      
			<div class="col-sm-12 col-md-3 visible-lg">
				<div class="teaser-2">
					<p>In Business since <b>1966</b></p>
				</div>
			</div>
		</div>
	</div>
</footer>
<script type="text/javascript" src="/js/jquery-2.2.0.min.js"></script>
   <script type="text/javascript" src="/js/modernizr.custom.js"></script>
   <script type="text/javascript" src="/js/bootstrap.min.js"></script>
   <script type="text/javascript" src="/js/jquery.bootstrap.wizard.min.js"></script>
   <script type="text/javascript" src="/js/classie.js"></script>
   <script type="text/javascript" src="/js/select2.min.js"></script>
   <script type="text/javascript" src="/js/pages.min.js"></script>
  <script type="text/javascript" src="/js/script.js"></script>
</div>
</template>

<style>
</style>


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

