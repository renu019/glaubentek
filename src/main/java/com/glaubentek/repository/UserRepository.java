package com.glaubentek.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glaubentek.model.User;

/**
 * User repository for CRUD operations.
 */
public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String username);
}
