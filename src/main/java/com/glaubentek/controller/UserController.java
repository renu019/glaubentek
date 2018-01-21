package com.glaubentek.controller;

import java.util.Collection;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.glaubentek.model.User;
import com.glaubentek.service.UserService;

@RestController
public class UserController {

	@Autowired
    private UserService userService;

	@GetMapping(value="/allUsers/{pageNo}")
    public Page<User> getAllPosts(@PathVariable("pageNo") int pageNo){
        return userService.getAllUsers(pageNo - 1, 10);
    }
	
	@GetMapping(value="/user/{id}")
    public User getUserById(@PathVariable Long id){
		User user = userService.getUserById(id);
		//EncryptDecryptUtil.decode(user.getPassword());
        return user;
    }
	
	@PostMapping(value="/createUser")
    public ResponseEntity<Void> createUser(@RequestBody User user){
		System.out.println("user  ::  "+user);
        if(user.getDateCreated() == null)
            user.setDateCreated(new Date());
        userService.save(user);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
	
    @GetMapping(value ="/getUsername")
    public String getUsername(){
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
    
    @GetMapping(value ="/userRole")
    public User getUserRole(){
    	
    	Collection<? extends GrantedAuthority> authorityList = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
    	String userRole = "";
    	for(GrantedAuthority grantedAuthority : authorityList) {
    		System.out.println("grantedAuthority  ::  "+grantedAuthority);
    		userRole = grantedAuthority.toString();
    	}
    	User user = new User();
    	user.setRole(userRole);
        return user;
    }

    @DeleteMapping(value = "/deleteUser/{userId}")
    public ResponseEntity<Void> deletePost(@PathVariable Long userId){
    	System.out.println("userId  ::  "+userId);
    	userService.deleteUser(userId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
