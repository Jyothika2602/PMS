package com.pms.pms;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Pms {
 
	@Id
	private int id;
	private String username;
	private String password;
	public String getUsername() {
		return username;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Pms(int id, String username, String password) {
		super();
		this.id=id;
		this.username = username;
		this.password = password;
	}
	public Pms() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Pms [id=" +id + ", username=" + username + ", password=" + password + "]";
	}
	
	
}
