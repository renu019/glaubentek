package com.glaubentek.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.glaubentek.pojo.MailContent;
import com.glaubentek.repository.SendMailUtil;

@RestController
public class ContactUsController {

	@Autowired
	private SendMailUtil sendMailUtil;
	
    @PostMapping(value="/sendMail")
    public ResponseEntity<Void> publishPost(@RequestBody MailContent mailContent){
    	
    	String message = sendMailUtil.sendMail(mailContent);
    	
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
	
}
