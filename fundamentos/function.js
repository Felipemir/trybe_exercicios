function cliente(clientes){
    if( typeof clientes === "string"){
        clientesTrybeBank.push(clientes);
        return 'cliente adicionado';
    }else{
        return "invalido";
    }
}

let clientesTrybeBank = ['Ada', 'John', 'Gus']

console.log(cliente('felipe'),clientesTrybeBank);