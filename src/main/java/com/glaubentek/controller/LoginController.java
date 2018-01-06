package com.glaubentek.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

	private final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String pageEntry(Model model) {
		logger.debug("inside pageEntry");
		return "index";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String formLogin(Model model, @RequestParam(value = "error",required = false) String error, @RequestParam(value = "logout",required = false) String logout) {
		logger.debug("inside login  ::  ");

		if (error != null) {
			logger.debug("login error  ::  "+error);
			model.addAttribute("error", "Invalid Credentials provided");
		}

		if (logout != null) {
			logger.debug("login error  ::  "+logout);
			model.addAttribute("logoutMsg", "Logged out Successfully");
		}

		return "login";
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String formLogout(Model model) {
		logger.debug("inside logout  ::  ");

		/*if (logout != null) {
			logger.debug("login error  ::  "+logout);
			model.addAttribute("logoutMsg", "Logged out Successfully");
		}*/

		return "login";
	}
	
}
