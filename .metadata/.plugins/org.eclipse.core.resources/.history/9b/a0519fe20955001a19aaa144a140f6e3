package com.cadastroConvidados.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cadastroConvidados.domain.Dependente;
import com.cadastroConvidados.services.DependenteService;

@RestController
@RequestMapping(value="/dependentes")
public class DependenteResource {
	
	@Autowired
	private DependenteService service;
	
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<Dependente> find(@PathVariable Integer id) {
		Dependente obj = service.find(id);
		return ResponseEntity.ok().body(obj);
	}
}
