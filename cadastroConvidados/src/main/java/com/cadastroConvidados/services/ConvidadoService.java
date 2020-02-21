package com.cadastroConvidados.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastroConvidados.domain.Convidado;
import com.cadastroConvidados.repositories.ConvidadoRepository;

@Service
public class ConvidadoService {
	@Autowired
	private ConvidadoRepository repo;
	
	
	
	public Convidado buscar(Integer id) {
		Optional<Convidado>obj = repo.findById(id);
		return obj.orElse(null);	
	}
}
