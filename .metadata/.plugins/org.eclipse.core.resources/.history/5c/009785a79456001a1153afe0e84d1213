package com.cadastroConvidados.domain.enums;

public enum TipoDependente {
	

	CONJUGE(1, "cônjuge"), 
	FILHO(2, "Filho(a)"),
	SECRETARIO(3, "Secretário(a)");
	
	private int cod;
	private String descricao;
			
	private TipoDependente(int cod, String descricao) {
		this.cod = cod;
		this.descricao = descricao;
	}

	public int getCod() {
		return cod;
	}

	public String getDescricao() {
		return descricao;
	}
	
	public static TipoDependente toEnum(Integer cod) {
		if ( cod == null) {
			return null;
		}
		
		for (TipoDependente x : TipoDependente.values()) {
			if (cod.equals(x.getCod())) {
				return x;
			}
		}
		
		throw new IllegalArgumentException("Id Invalido: "+ cod);
	}
	
}
