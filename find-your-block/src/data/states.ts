interface StateType {
    code: string;
    label: string;
    name: string;
  }
  
export const STATES: readonly StateType[] = [
    { code: "AC", label: "Acre", name: "acre" },
    { code: "AL", label: "Alagoas", name: "alagoas" },
    { code: "AP", label: "Amapá", name: "amapa" },
    { code: "AM", label: "Amazonas", name: "amazonas" },
    { code: "BA", label: "Bahia", name: "bahia" },
    { code: "CE", label: "Ceará", name: "ceara" },
    { code: "DF", label: "Distrito Federal", name: "distrito-federal" },
    { code: "ES", label: "Espírito Santo", name: "espirito-santo" },
    { code: "GO", label: "Goiás", name: "goias" },
    { code: "MA", label: "Maranhão", name: "maranhao" },
    { code: "MT", label: "Mato Grosso", name: "mato-grosso" },
    { code: "MS", label: "Mato Grosso do Sul", name: "mato-grosso-do-sul" },
    { code: "MG", label: "Minas Gerais", name: "minas-gerais" },
    { code: "PA", label: "Pará", name: "para" },
    { code: "PB", label: "Paraíba", name: "paraiba" },
    { code: "PR", label: "Pernambuco", name: "pernambuco" },
    { code: "PI", label: "Piauí", name: "piaui" },
    { code: "RJ", label: "Rio de Janeiro", name: "rio-de-janeiro" },
    { code: "RN", label: "Rio Grande do Norte", name: "rio-grande-do-norte" },
    { code: "RS", label: "Rio Grande do Sul", name: "rio-grande-do-sul" },
    { code: "RO", label: "Rondônia", name: "rondonia" },
    { code: "RR", label: "Roraima", name: "roraima" },
    { code: "SC", label: "Santa Catarina", name: "santa-catarina" },
    { code: "SP", label: "São Paulo", name: "sao-paulo" },
    { code: "SE", label: "Sergipe", name: "sergipe" },
    { code: "TO", label: "Tocantins", name: "tocantins" },
];