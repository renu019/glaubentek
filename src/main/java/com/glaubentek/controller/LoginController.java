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
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String pageEntry(Model model) {
		System.out.println("inside pageEntry");
		return "index";
	}
	
	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public String adminEntry(Model model) {
		System.out.println("inside adminEntry");
		return "adminIndex";
	}
	
	/*@RequestMapping(value = "/", method = RequestMethod.GET)
	public String globalEntry(Model model) {
		System.out.println("inside globalEntry");
		return "index";
	}*/

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String formLogin(Model model, @RequestParam(value = "error",required = false) String error, @RequestParam(value = "logout",required = false) String logout) {
		System.out.println("inside login  ::  ");

		if (error != null) {
			System.out.println("login error  ::  "+error);
			model.addAttribute("error", "Invalid Credentials provided");
		}

		if (logout != null) {
			System.out.println("login error  ::  "+logout);
			model.addAttribute("logoutMsg", "Logged out Successfully");
		}

		return "login";
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String formLogout(Model model) {
		System.out.println("inside logout  ::  ");

		/*if (logout != null) {
			System.out.println("login error  ::  "+logout);
			model.addAttribute("logoutMsg", "Logged out Successfully");
		}*/

		return "login";
	}
	
}
