package com.glaubentek.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glaubentek.model.Comment;
import com.glaubentek.model.Tag;
import com.glaubentek.repository.CommentRepository;
import com.glaubentek.repository.TagRepository;

@Service
public class TagService {

    @Autowired
    private TagRepository tagRepository;
    
    public List<String> getTags() {
        return tagRepository.findByDistictName();
    }
    
    public List<Object[]> findTagsAndCount() {
    	return tagRepository.findTagsAndCount();
    }

}
