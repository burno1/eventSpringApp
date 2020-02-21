package com.cadastroConvidados.dto;

import java.io.Serializable;
import java.util.Date;

import com.cadastroConvidados.domain.Convidado;

public class ConvidadoDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String email;
	private String nome;
	private Date dataNasc;
	
	
	
	public ConvidadoDTO(Convidado obj) {
		id = obj.getId();
		email = obj.getEmail();
		nome = obj.getNome();
		dataNasc = obj.getDataNasc();
				
	}
	
	public ConvidadoDTO() {
		super();
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Date getDataNasc() {
		return dataNasc;
	}
	public void setDataNasc(Date dataNasc) {
		this.dataNasc = dataNasc;
	}
	
	
	
	
	
	
}
