package com.cadastroConvidados.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastroConvidados.domain.Dependente;
import com.cadastroConvidados.repositories.DependenteRepository;
import com.cadastroConvidados.services.exceptions.ObjectNotFoundException;

@Service
public class DependenteService {
	
	@Autowired
	private DependenteRepository repo;
	
	public Dependente find(Integer id) {
		Optional<Dependente> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto n�o encontrado! Id: " + id + ", Tipo: " + Dependente.class.getName()));
	}
}
