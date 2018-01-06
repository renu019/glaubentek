package com.glaubentek.model;

import javax.persistence.*;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.Date;
import java.util.List;

@Entity
public class Post {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    
    @Column(name="short_text")
    private String shortText;
    
    @Lob
    @Column(columnDefinition="TEXT", name="full_text")
    private String fullText;
    
    private Date dateCreated;

    @ManyToOne
    private User creator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "post", cascade = CascadeType.ALL)
	//@Fetch(value = FetchMode.SUBSELECT)
	private List<Comment> comments;
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "post", cascade = CascadeType.ALL)
	//@Fetch(value = FetchMode.SUBSELECT)
	private List<Tag> tags;

    public Post() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getShortText() {
		return shortText;
	}

	public void setShortText(String shortText) {
		this.shortText = shortText;
	}

	public String getFullText() {
		return fullText;
	}

	public void setFullText(String fullText) {
		this.fullText = fullText;
	}

	public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}
}
