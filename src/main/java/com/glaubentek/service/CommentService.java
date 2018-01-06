package com.glaubentek.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glaubentek.model.Comment;
import com.glaubentek.repository.CommentRepository;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getComments(Long postId) {
        return commentRepository.findByPostId(postId);
    }

    public void comment(Comment comment) {
        commentRepository.save(comment);
    }

    public boolean deletePost(Long id) {
        commentRepository.delete(id);
        return true;
    }
}
