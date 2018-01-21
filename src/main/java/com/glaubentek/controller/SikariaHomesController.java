package com.glaubentek.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.glaubentek.pojo.SikariaContent;
import com.glaubentek.utils.SendMailUtil;

@RestController
public class SikariaHomesController {
	@Autowired
	private SendMailUtil sendMailUtil;
	
    @PostMapping(value="/sendMailSikaria")
    public ResponseEntity<Void> publishPost(@RequestBody SikariaContent mailContent){
    	
    	String message = sendMailUtil.sendMailSikaria(mailContent);
    	
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
}
