package com.glaubentek.service;


import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.glaubentek.model.User;
import com.glaubentek.repository.UserRepository;

@Service("customUserDetailsService")
@Transactional
public class UserAuthenticationServiceImpl implements UserDetailsService {
	private final Logger logger = LoggerFactory.getLogger(PostService.class);
	@Autowired
    private UserRepository userRepository;
	
	//private UserAuthenticationDaoImpl userAuthenticationDao = new UserAuthenticationDaoImpl();
	
	@Override
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException {
		logger.info("PostService :: loadUserByUsername  ::  "+username);
		//System.out.println("userName  ::  "+username);
		User user = userRepository.findByUsername(username);
		GrantedAuthority authority = new SimpleGrantedAuthority(user.getRole());
		logger.info("PostService :: loadUserByUsername  ::  "+user.getRole());
		//System.out.println("userInfo.getRole() :: "+user.getRole());
		UserDetails userDetails = (UserDetails)new org.springframework.security.core.userdetails.User(user.getUsername(), 
				user.getPassword(), Arrays.asList(authority));
		logger.info("PostService :: loadUserByUsername  ::  "+userDetails.getUsername());
		//System.out.println("userDetails.getAuthorities() "+userDetails.getAuthorities()+" "+userDetails.getUsername());
		return userDetails;
	}
} 
