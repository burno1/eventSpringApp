package com.cadastroConvidados.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastroConvidados.domain.Convidado;
import com.cadastroConvidados.repositories.ConvidadoRepository;
import com.cadastroConvidados.services.exceptions.ObjectNotFoundException;

@Service
public class ConvidadoService {
	@Autowired
	private ConvidadoRepository repo;
	
	
	
	public Convidado find(Integer id) {
		Optional<Convidado> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto n�o encontrado! Id: " + id + ", Tipo: " + Convidado.class.getName()));
	}
	
	public Convidado insert(Convidado obj) {
		obj.setId(null);
		return repo.save(obj);
	}
	
	public Convidado update(Convidado obj) {
		find(obj.getId());
		
		return repo.save(obj);
	}
}
