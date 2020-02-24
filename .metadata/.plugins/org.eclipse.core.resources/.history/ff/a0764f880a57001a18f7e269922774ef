package com.cadastroConvidados;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cadastroConvidados.domain.Convidado;
import com.cadastroConvidados.domain.Dependente;
import com.cadastroConvidados.repositories.ConvidadoRepository;

@SpringBootApplication
public class CadastroConvidadosApplication implements CommandLineRunner {

	@Autowired
	private ConvidadoRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(CadastroConvidadosApplication.class, args);
	}

	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Convidado conv = new Convidado(null, "bruno",new Date(), "brunofernandes100@hotmail.com.br");

		
		Dependente dep1 = new Dependente(null, "dep1",new Date(),"dep@hotmail.com", 1, conv);
		Dependente dep2 = new Dependente(null, "dep2",new Date(),"dep@hotmail.com", 2, conv);
		Dependente dep3 = new Dependente(null, "dep3",new Date(),"dep@hotmail.com", 3, conv);

		
		conv.setDependentes(new ArrayList<Dependente>());
		conv.getDependentes().add(dep1);
		conv.getDependentes().add(dep2);
		conv.getDependentes().add(dep3);
		
		repository.save(conv);

	}

	
}
