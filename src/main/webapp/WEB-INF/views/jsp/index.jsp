<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en" ng-app="glaubentekapp">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Custom Theme files -->
    <meta name="keywords" content="glaubentek,glaubentek BuildEco,glaubentek BuildEco Pvt. Ltd,Ranchi, Real Estate in Ranchi, glaubentek Building Construction,Building Construction, Construction Tender, Sikaria Homes,
	Guest House in Ranchi, Sikaria Guest House, Guest House,glaubentek Company " />
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <!--Google Fonts-->
    <link href='//fonts.googleapis.com/css?family=Nixie+One' rel='stylesheet' type='text/css'>
    <link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
  <!-- <title>GluabApp</title> -->
 <title>GluabApp</title>
	
	<link href="<c:url value='/static/css/bootstrap.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/bootstrap.min.css' />" rel="stylesheet" />
	<%-- <link href="<c:url value='/static/css/bootstrap-theme.min.css' />" rel="stylesheet" /> --%>
	<link href="<c:url value='/static/css/font-awesome.min.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/animate.min.css' />" rel="stylesheet" />
    <link href="<c:url value='/static/css/chocolat.css' />" rel="stylesheet" />
    <link href="<c:url value='/static/css/flexslider.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/shortcodes.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/site.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/style.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/Blog-style.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/angular-super-gallery.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/bootstrap-markdown.min.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/github.min.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/angular-markdown-editor.css' />" rel="stylesheet" />
	<%-- <link href="<c:url value='/static/css/ticker.css' />" rel="stylesheet" /> --%>
	<link href="<c:url value='/static/css/main.css' />" rel="stylesheet" />

</head>
<body>
<div></div>

<main>

        <div class="header">
                <div style="margin-top:-6px;" class="container">
                <div class="col-md-4 col-sm-4 logo">
                    <h1>GlaubenTek  BuildEco  </h1>

                </div>
                <div class="col-md-6 col-sm-6 ">
                    <ul class="setli">
                        <li style="padding-right:5px;"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> glaubentekbuildeco@gmail.com   </li>
                        <li style="padding-right:5px;"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span> +91 9798327999</li>
              </ul>
                </div>
                <div class="col-md-2 col-sm-2 details">
                    <div class="social">

                        <ul>

                            <li><a href="#" class="facebook"> </a></li>
                            <li><a href="#" class="facebook twitter"> </a></li>

                            <li><a href="#" class="facebook in"> </a></li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="top-nav">
            <div class="container">
                <div class="col-md-2" style=" float :left ; padding:0px">
                    <img style="margin-left:50px;" src="static/images/logo_image8.jpg" alt=" ">
                </div>
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" class="col-md-10 navbar-collapse collapse">

                    <ul class="nav navbar-nav wow fadeInRight animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInRight;">
                        <li class="active" ><a href="#/home">Home</a></li>
			            <li><a href="#/aboutus">About Us</a></li>
			            <li><a href="#/services">What We Do</a></li>
			            <li><a href="#/portfolio">Portofolio</a></li>
			            <li><a href="#/blog">Blog</a></li>
			            <li><a href="#/sikariaHome">SikariaHome</a></li>
			            <li><a href="#/contactus">Contact</a></li>
			            
                    </ul>
                </div>
            </div>
        </div>
       
      <div ui-view ></div>
  
  <page-footer></page-footer>
  
</main>

<script src="<c:url value='/static/lib/jquery-1.11.0.min.js' />"></script>
<script src="<c:url value='/static/lib/bootstrap.min.js' />"></script>
<script src="<c:url value='/static/lib/angular.js' />"></script>
<script src="<c:url value='/static/lib/angular-ui-router.js' />"></script>
<script src="<c:url value='/static/lib/angular-animate.js' />"></script>
<script src="<c:url value='/static/lib/angular-touch.js' />"></script>
<script src="<c:url value='/static/lib/angular-sanitize.js' />"></script>
<script src="<c:url value='/static/lib/angular-route.js' />"></script>
<script src="<c:url value='/static/lib/ui-bootstrap-tpls-1.3.2.js' />"></script>
<script src="<c:url value='/static/lib/angularjs-dropdown-multiselect.js' />"></script>
<script src="<c:url value='/static/lib/ticker.js' />"></script>
<script src="<c:url value='/static/lib/slides.js' />"></script>
<script src="<c:url value='/static/lib/screenfull.js' />"></script>

<script src="<c:url value='/static/lib/jquery.bootstrap.newsbox.js' />"></script>
<script src="<c:url value='/static/lib/jquery.bootstrap.newsbox.min.js' />"></script>
<script src="<c:url value='/static/lib/jquery.chocolat.js' />"></script>
<script src="<c:url value='/static/lib/wow.min.js' />"></script>
<script src="<c:url value='/static/lib/plugins.js' />"></script>
<script src="<c:url value='/static/lib/animsition.js' />"></script>
<script src="<c:url value='/static/lib/flexslider.js' />"></script>
<script src="<c:url value='/static/lib/main.js' />"></script>

<script src="<c:url value='/static/lib/marked.js' />"></script>
<script src="<c:url value='/static/lib/angular-marked.js' />"></script>
<script src="<c:url value='/static/lib/bootstrap-markdown.js' />"></script>
<script src="<c:url value='/static/lib/highlight.min.js' />"></script>
<script src="<c:url value='/static/lib/angular-highlightjs.min.js' />"></script>
<script src="<c:url value='/static/lib/angular-markdown-editor.js' />"></script>
<script src="<c:url value='/static/lib/angular-md.js' />"></script>

<script src="<c:url value='/static/lib/angular-super-gallery.js' />"></script>
<script src="<c:url value='/static/app/directives/dirPagination.js' />"></script>

<script src="<c:url value='/static/lib/app.js' />"></script>
<script src="<c:url value='/static/lib/pages.run.js' />"></script>
<script src="<c:url value='/static/lib/pages.module.js' />"></script>
<script src="<c:url value='/static/app/directives/pageHeader.directive.js' />"></script>
<script src="<c:url value='/static/app/directives/pageFooter.directive.js' />"></script>
<script src="<c:url value='/static/app/service/blogService.js' />"></script>
<script src="<c:url value='/static/app/service/postService.js' />"></script>
<script src="<c:url value='/static/app/service/contactUsService.js' />"></script>
<script src="<c:url value='/static/app/service/sikariaHomesService.js' />"></script>
<script src="<c:url value='/static/app/service/userService.js' />"></script>
<script src="<c:url value='/static/app/controller/blogCtrl.js' />"></script>
<script src="<c:url value='/static/app/controller/postCtrl.js' />"></script>
<script src="<c:url value='/static/app/controller/contactUsCtrl.js' />"></script>
<script src="<c:url value='/static/app/controller/SikariaHomesCtrl.js' />"></script>
<script src="<c:url value='/static/app/controller/pageHeaderCtrl.js' />"></script>
<script src="<c:url value='/static/app/controller/homeCtrl.js' />"></script>
<script src="<c:url value='/static/app/controller/userCtrl.js' />"></script>


<script>
        new WOW().init();
</script>

</body>
</html>
