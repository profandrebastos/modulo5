import UsuarioDAO from '../DAO/UsuarioDAO.js';
import Usuario from '../models/Usuario.js';

class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/usuario', usuarioController.listar)
        app.post('/usuario', usuarioController.inserir)
        app.get('/usuario/email/:email', usuarioController.buscarPorEmail)
        app.delete('/usuario/email/:email', usuarioController.deletar)
        app.put('/usuario/email/:email', usuarioController.atualizar)
    }

    static async listar(req, res){
        const usuarios = await UsuarioDAO.listar()
        // Devolve a lista de usuarios
        res.send(usuarios)
    }

    static async inserir(req, res){
        // Cria um novo usuario
        const usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }
        // Adiciona o usuario no BD
        const result = await UsuarioDAO.inserir(usuario)                        
        // Verifica se o usuario foi inserido
        if(result.erro){
            res.status(500).send(result)
        }

        res.send(result)
    }

    static async buscarPorEmail(req, res){
        // Busca o email na lista de usuarios
        const usuario = await UsuarioDAO.buscarPorEmail(req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, devolve o usuario
        res.send(usuario)
    }

    static async deletar(req, res){
        // Tenta deletar o usuario
        const usuario = await UsuarioDAO.deletar(req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if(usuario.erro){
            res.status(500).send('Erro ao deletar o usuário')
        }

        res.send({mensagem: 'Usuário removido com sucesso'})
    }

    static async atualizar(req, res){
        // Preparar o usuario
        const usuario = new Usuario(req.body.nome, req.body.email, req.body.senha)
        // Tenta atualizar o usuario
        const result = await UsuarioDAO.atualizar(req.params.email, usuario)
        // Se o usuario não for encontrado, devolve um erro
        if(result.erro){
            res.status(500).send('Erro ao atualizar o usuário')
        }

        res.send({mensagem: 'Usuário alterado com sucesso'})
    }
}

export default usuarioController