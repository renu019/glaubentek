package com.glaubentek.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.glaubentek.model.Post;
import com.glaubentek.pojo.MonthAndCount;

@Repository
public interface PostRepository extends JpaRepository<Post,Long>{

    List<Post> findByCreatorId(Long id);
    
    /*@Query("SELECT p FROM Post p WHERE :tagCount = (SELECT COUNT(DISTINCT t.id) FROM Post p2 JOIN p2.tags t WHERE LOWER(t.name) in (:tags) and p = p2)")
    Page<Post> findByTags(@Param("tags") Collection<String> tags, @Param("tagCount") Long tagCount, Pageable pageable);*/
    
    @Query("select p.dateCreated as month, count(p) as postCount from Post p group by month(p.dateCreated)")
    List<Object[]> findPostByMonth();
    
	List<Post> findTop5ByOrderByIdDesc();
	
	@Query("select p.category, count(p) from Post p group by p.category")
    List<Object[]> findTagsAndCount();

}
