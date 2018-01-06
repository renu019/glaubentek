package com.glaubentek.model;


import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Comment {

    @Id
    @GeneratedValue
    private Long Id;

    private String text;

    @ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "post_id", nullable = false)
    @JsonIgnore
    private Post post;

    @ManyToOne
    private User creator;

    public Comment() {
    }

    public Comment(String text, Post post, User creator) {
        this.text = text;
        this.post = post;
        this.creator = creator;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }
}
