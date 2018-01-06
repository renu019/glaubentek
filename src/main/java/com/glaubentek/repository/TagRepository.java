package com.glaubentek.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.glaubentek.model.Comment;
import com.glaubentek.model.Tag;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
	
	@Query(value = "select distinct t.name from Tag t")
	List<String> findByDistictName();
	
	@Query("select t.name, count(t) from Tag t group by t.name")
    List<Object[]> findTagsAndCount();
	
}
