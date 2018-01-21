<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>GlaubApp</title>

<link href="<c:url value='/static/css/bootstrap.min.css' />" rel="stylesheet" />
<link href="<c:url value='/static/css/login/style.css' />" rel="stylesheet" />
<link href="<c:url value='/static/css/login/font-awesome.css' />" rel="stylesheet" />

</head>
<body>
	<!--/login-->

	<div class="error_page">
		<!--/login-top-->

		<div class="error-top">
			<h2 class="inner-tittle page">GlaubApp</h2>
			<div class="login">
				<h3 class="inner-tittle t-inner">Login</h3>
				<form action="login" method="post">
					<div class="input-container" style="color: #ed2553">
					  <c:if test="${error != null}">
						${fn:escapeXml(error)}
					  </c:if>
					  </div>
					  <div class="input-container" style="color: #20a043">
					  <c:if test="${logoutMsg != null}">
						${fn:escapeXml(logoutMsg)}
					  </c:if>
					  </div>
					<input type="text" class="text" placeholder="User Name" name="username" required>
					<input type="password" placeholder="Password" name="password" required>
					<div class="submit">
						<input type="submit" value="Login">
					</div>
					<input type="hidden" name="${fn:escapeXml(_csrf.parameterName)}" value="${fn:escapeXml(_csrf.token)}"/>
					<div class="clearfix"></div>

					<div class="new">
						<div class="clearfix"></div>
					</div>
				</form>
			</div>


		</div>


		<!--//login-top-->
	</div>

	<!--//login-->
	<!--footer section start-->
	<div class="footer">
		<!-- <div class="error-btn">
			<a class="read fourth" href="index.html">Return to Home</a>
		</div>
		<p>
			&copy 2016 Augment . All Rights Reserved | Design by <a
				href="https://w3layouts.com/" target="_blank">W3layouts.</a>
		</p> -->
	</div>
	<!--footer section end-->
	<!--/404-->
</body>

</html>