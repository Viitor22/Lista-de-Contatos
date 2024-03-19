class Contato {
    id: number
    nome: string
    numero: string
    email: string
    grupo: string

    constructor(id: number, nome: string, numero: string, email: string, grupo: string){
        this.id = id
        this.nome = nome
        this.numero = numero
        this.email = email
        this.grupo = grupo
    }

}

export default Contato