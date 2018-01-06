package com.glaubentek.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Tag {
	
	@Id
    @GeneratedValue
    private Long Id;
	
	@Column(name="name")
    private String name;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "post_id", nullable = false)
    @JsonIgnore
    private Post post;
	
	public Tag() {
		super();
	}
	
    public Tag(Long id, String name, Post post) {
		super();
		Id = id;
		this.setName(name);
		this.post = post;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
