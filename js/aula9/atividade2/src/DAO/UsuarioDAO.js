import { bdUsuarios } from "../bd.js"

class UsuarioDAO {
    static listar(){
        return bdUsuarios
    }

    static inserir(usuario){
        bdUsuarios.push(usuario)
    }

    static buscarPorEmail(email){
        return bdUsuarios.find(usuario => usuario.email === email)
    }

    static deletar(email){
        const usuario = bdUsuarios.find(usuario => usuario.email === email)
        const index = bdUsuarios.indexOf(usuario)
        bdUsuarios.splice(index, 1)
    }

    static atualizar(email, usuario){
        const usuarioAtual = bdUsuarios.find(usuario => usuario.email === email)
        const index = bdUsuarios.indexOf(usuarioAtual)
        bdUsuarios[index] = usuario
    }
}

export default UsuarioDAO