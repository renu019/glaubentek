<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en" ng-app="glaubentekapp">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Custom Theme files -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="Indolence Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template,
	Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <!--Google Fonts-->
    <link href='//fonts.googleapis.com/css?family=Nixie+One' rel='stylesheet' type='text/css'>
    <link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
  <title>GluabApp</title>

	
	<link href="<c:url value='/static/css/bootstrap.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/bootstrap.min.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/bootstrap-theme.min.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/font-awesome.min.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/animate.min.css' />" rel="stylesheet" />
    <link href="<c:url value='/static/css/chocolat.css' />" rel="stylesheet" />
    <link href="<c:url value='/static/css/flexslider.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/shortcodes.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/site.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/style.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/Blog-style.css' />" rel="stylesheet" />

</head>
<body>
<div></div>

<main>

  <page-header></page-header>

      <div ui-view ></div>
  
  <page-footer></page-footer>
  
</main>

<script src="<c:url value='/static/lib/angular.js' />"></script>
<script src="<c:url value='/static/lib/angular-ui-router.js' />"></script>

<script src="<c:url value='/static/lib/jquery-1.11.0.min.js' />"></script>
<script src="<c:url value='/static/lib/bootstrap.min.js' />"></script>
<script src="<c:url value='/static/lib/jquery.bootstrap.newsbox.js' />"></script>
<script src="<c:url value='/static/lib/jquery.bootstrap.newsbox.min.js' />"></script>
<script src="<c:url value='/static/lib/jquery.chocolat.js' />"></script>
<script src="<c:url value='/static/lib/wow.min.js' />"></script>
<script src="<c:url value='/static/lib/plugins.js' />"></script>
<script src="<c:url value='/static/lib/animsition.js' />"></script>
<script src="<c:url value='/static/lib/flexslider.js' />"></script>
<script src="<c:url value='/static/lib/main.js' />"></script>
<script src="<c:url value='/static/lib/angularjs-dropdown-multiselect.js' />"></script>
<script src="<c:url value='/static/app/directives/dirPagination.js' />"></script>

<%-- <script src="<c:url value='/static/lib/wow.min.js' />"></script> --%>
<%-- <script src="<c:url value='/static/lib/main.js' />"></script> --%>

<script src="<c:url value='/static/lib/app.js' />"></script>
<script src="<c:url value='/static/lib/pages.module.js' />"></script>
<script src="<c:url value='/static/app/service/blogService.js' />"></script>
<script src="<c:url value='/static/app/service/postService.js' />"></script>
<script src="<c:url value='/static/app/service/contactUsService.js' />"></script>
<script src="<c:url value='/static/app/controller/blogCtrl.js' />"></script>
<script src="<c:url value='/static/app/controller/postCtrl.js' />"></script>
<script src="<c:url value='/static/app/controller/contactUsCtrl.js' />"></script>

<script src="<c:url value='/static/app/directives/pageHeader.directive.js' />"></script>
<script src="<c:url value='/static/app/directives/pageFooter.directive.js' />"></script>

<script>
        new WOW().init();
</script>

<script type="text/javascript">
    $(function () {
        $(".demo").bootstrapNews({
            newsPerPage: 4,
            navigation: true,
            autoplay: true,
            direction: 'up', // up or down
            animationSpeed: 'normal',
            newsTickerInterval: 4000, //4 secs
            pauseOnHover: true,
            onStop: null,
            onPause: null,
            onReset: null,
            onPrev: null,
            onNext: null,
            onToDo: null
        });
    });
    </script>

</body>
</html>
