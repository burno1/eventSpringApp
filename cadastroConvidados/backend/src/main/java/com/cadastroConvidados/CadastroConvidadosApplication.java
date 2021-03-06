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
public class CadastroConvidadosApplication{

	
    public static void main(String[] args) {
		SpringApplication.run(CadastroConvidadosApplication.class, args);
	}

	
}
