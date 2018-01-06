package com.glaubentek.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.glaubentek.model.Post;
import com.glaubentek.model.User;
import com.glaubentek.pojo.MonthAndCount;
import com.glaubentek.repository.PostRepository;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Page<Post> getAllPosts(int pageNumber, int pageSize){
    	PageRequest pageRequest = new PageRequest(pageNumber, pageSize, Sort.Direction.DESC, "dateCreated");
        return postRepository.findAll(pageRequest);
    }
    
    public Page<Post> findByTags(List<String> tags, int pageNumber, int pageSize) {
        tags = tags.stream().map(String::toLowerCase).collect(Collectors.toList());

        PageRequest pageRequest = new PageRequest(pageNumber, pageSize, Sort.Direction.DESC, "dateCreated");
        
    	return postRepository.findByTags(tags, (long) tags.size(), pageRequest);
    }
    
    public List<Object[]> findPostByMonth() {
		return postRepository.findPostByMonth();
	}
    

	public List<Post> getRecentPosts() {
		return postRepository.findTop5ByOrderByIdDesc();
	}
    
    public void insert(Post post) {
        postRepository.saveAndFlush(post);
    }

    public List<Post> findByUser(User user){
        return postRepository.findByCreatorId(user.getId());
    }

    public boolean deletePost(Long postId){
        Post thePost = postRepository.findOne(postId);
        if(thePost == null)
            return false;
        postRepository.delete(postId);
        return true;
    }

    public Post getPost(Long id) {
        return postRepository.findOne(id);
    }

    public Post find(Long postId) {
        return postRepository.findOne(postId);
    }

	public Post updatePost(Post post) {
		return postRepository.saveAndFlush(post);
		
	}


}
