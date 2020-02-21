package com.cadastroConvidados.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cadastroConvidados.domain.Convidado;
import com.cadastroConvidados.services.ConvidadoService;

@RestController
@RequestMapping(value="/convidados")
public class ConvidadoResource {
	
	@Autowired
	private ConvidadoService service;
	
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable Integer id) {
		Convidado obj = service.buscar(id);
		return ResponseEntity.ok().body(obj);
	}
}
