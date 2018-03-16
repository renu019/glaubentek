package com.glaubentek.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glaubentek.model.Comment;
import com.glaubentek.model.Post;
import com.glaubentek.model.Tag;
import com.glaubentek.model.User;
import com.glaubentek.pojo.CommentPojo;
import com.glaubentek.pojo.MonthAndCount;
import com.glaubentek.pojo.TagAndCount;
import com.glaubentek.service.CommentService;
import com.glaubentek.service.PostService;
import com.glaubentek.service.TagService;
import com.glaubentek.service.UserService;

@RestController
public class BlogController {

	private final Logger logger = LoggerFactory.getLogger(BlogController.class);
	
    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @Autowired
    private CommentService commentService;
    
    @Autowired
    private TagService tagService;

    @RequestMapping(value="/{text:[a-z-]+}.{number:[\\\\d]+}")
    public String doSome(@PathVariable String text, @PathVariable String number) {
		return number;
    	
    }
    
    @GetMapping(value="/allPosts/{pageNo}")
    public Page<Post> getAllPosts(@PathVariable("pageNo") int pageNo){
    	logger.info("BlogController :: getAllPosts pageNo  ::  "+pageNo);
        return postService.getAllPosts(pageNo - 1, 7);
    }

    @GetMapping(value="/the_post/{id}")
    public Post getPostById(@PathVariable Long id){
    	logger.info("BlogController :: getPostById id  ::  "+id);
        return postService.getPost(id);
    }
    
    
    @GetMapping(value="/postByMonth")
    public List<MonthAndCount> getPostByMonth() {
    	logger.info("BlogController :: getPostByMonth  ::  ");
    	List<Object[]> monthlyPosts = postService.findPostByMonth();
    	List<MonthAndCount> monthlyList = new ArrayList<MonthAndCount>();
    	for(Object[] obj : monthlyPosts) {
    		MonthAndCount monthAndCount = new MonthAndCount();
    		monthAndCount.setMonth((Date) obj[0]);
    		monthAndCount.setPostCount((long) obj[1]);
    		monthlyList.add(monthAndCount);
    	}
    	
        return monthlyList;
    }
    
    @GetMapping(value="/recentPosts")
    public List<Post> getRecentPosts(){
    	
        return postService.getRecentPosts();
    }

    @PostMapping(value="/post")
    public ResponseEntity<Void> publishPost(@RequestBody Post post){
    	logger.info("BlogController :: publishPost  ::  ");
        //CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(post.getDateCreated() == null)
            post.setDateCreated(new Date());
        //post.setCreator(userService.getUser(userDetails.getUsername()));
        //post.setCreator(userService.getUser("admin"));
        //System.out.println("User Name  ::  "+SecurityContextHolder.getContext().getAuthentication().getName());
        post.setCreator(userService.getUser(SecurityContextHolder.getContext().getAuthentication().getName()));
        
        if(post.getFullText() != null) {
        	post.setShortText(post.getFullText().substring(0, 250));
        }
        
       
        postService.insert(post);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
    
    @PutMapping(value="/post")
    public ResponseEntity<Void> updatePost(@RequestBody Post post){
    	logger.info("BlogController :: updatePost  ::  ");
        if(post.getDateCreated() == null)
            post.setDateCreated(new Date());
        //post.setCreator(userService.getUser(userDetails.getUsername()));
       // System.out.println("User Name  ::  "+SecurityContextHolder.getContext().getAuthentication().getName());
        post.setCreator(userService.getUser(SecurityContextHolder.getContext().getAuthentication().getName()));
        
        if(post.getFullText() != null) {
        	post.setShortText(post.getFullText().substring(0, 250));
        }
       
        postService.updatePost(post);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
    
    

    @GetMapping(value="/posts/{username}")
    public List<Post> postsByUser(@PathVariable String username){
    	logger.info("BlogController :: postsByUser  ::  ");
        return postService.findByUser(userService.getUser(username));
    }

    @DeleteMapping(value = "/deletePost/{postId}")
    public ResponseEntity<Void> deletePost(@PathVariable Long postId){
    	//System.out.println("postId  ::  "+postId);
    	logger.info("BlogController :: deletePost  ::  ");
        postService.deletePost(postId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/comment/{id}")
    public boolean deleteComment(@PathVariable Long id){
    	
        return commentService.deletePost(id);
    }


    @GetMapping(value = "/comments/{postId}")
    public List<Comment> getComments(@PathVariable Long postId){
        return commentService.getComments(postId);
    }

    @PostMapping(value = "/post/postComment")
    public boolean postComment(@RequestBody CommentPojo comment){
        Post post = postService.find(comment.getPostId());
        //CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User creator = userService.getUser("admin");
        if(post == null || creator == null)
            return false;

        commentService.comment(new Comment(comment.getText(),post,creator));
        return true;
    }
    
    @GetMapping(value = "/tags")
    public List<Tag> getTags(){
    	
    	List<Tag> tagList = new ArrayList<Tag>();
    	List<String> strList = new ArrayList<String>();
    	strList = tagService.getTags();
    	for(String str : strList) {
    		Tag tag = new Tag();
    		tag.setName(str);
    		tagList.add(tag);
    	}
        return tagList;
    }
    
    @GetMapping(value="/tagAndCount")
    public List<TagAndCount> getTagAndCount() {
    	logger.info("BlogController :: getTagAndCount  ::  ");
    	List<Object[]> tagCount = postService.findTagsAndCount();
    			
    	List<TagAndCount> tagCountList = new ArrayList<TagAndCount>();
    	for(Object[] obj : tagCount) {
    		TagAndCount tagAndCount = new TagAndCount();
    		tagAndCount.setName((String) obj[0]);
    		tagAndCount.setCount((long) obj[1]);
    		tagCountList.add(tagAndCount);
    	}
    	
        return tagCountList;
    }

}
