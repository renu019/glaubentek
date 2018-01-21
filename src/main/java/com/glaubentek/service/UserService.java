package com.glaubentek.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.glaubentek.model.User;
import com.glaubentek.repository.UserRepository;
import com.glaubentek.utils.EncryptDecryptUtil;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    public void save(User user){
		//user.setPassword(EncryptDecryptUtil.encode(user.getPassword()));
        userRepository.save(user);
    }
    
    public void update(User user){
    	//EncryptDecryptUtil.encode(user.getPassword());
        userRepository.saveAndFlush(user);
    }

    public User getUser(String username){
        return userRepository.findByUsername(username);
    }

	public Page<User> getAllUsers(int pageNumber, int pageSize) {
		PageRequest pageRequest = new PageRequest(pageNumber, pageSize, Sort.Direction.DESC, "dateCreated");
        return userRepository.findAll(pageRequest);
	}

	public User getUserById(Long userId) {
		return userRepository.findOne(userId);
	}
	
	public boolean deleteUser(Long userId){
        User user = userRepository.findOne(userId);
        if(user == null)
            return false;
        userRepository.delete(userId);
        return true;
    }
}
