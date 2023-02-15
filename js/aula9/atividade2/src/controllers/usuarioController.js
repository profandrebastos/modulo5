import usuarioDAO from '../DAO/usuariosDAO.js'

class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/usuario', usuarioController.listar)
        app.post('/usuario', usuarioController.inserir)
        app.get('/usuario/email/:email', usuarioController.buscarPorEmail)
        app.delete('/usuario/email/:email', usuarioController.deletar)
        app.put('/usuario/email/:email', usuarioController.atualizar)
    }

    static listar(req, res){
        const usuarios = usuarioDAO.listar()
        // Devolve a lista de usuarios
        res.send(usuarios)
    }

    static inserir(req, res){
        // Cria um novo usuario
        const usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }
        // Adiciona o usuario na lista de usuarios
        usuarioDAO.inserir(usuario)
        // Devolve o usuario criado
        res.send({mensagem: 'Usuário criado com sucesso'})
    }

    static buscarPorEmail(req, res){
        // Busca o email na lista de usuarios
        const usuario = usuarioDAO.buscarPorEmail(req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, devolve o usuario
        res.send(usuario)
    }

    static deletar(req, res){
        // Busca o email na lista de usuarios
        const usuario = usuarioDAO.buscarPorEmail(req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, deleta o usuario
        usuarioDAO.deletar(req.params.email)
        // Devolve o usuario deletado
        res.send({mensagem: 'Usuário removido com sucesso'})
    }

    static atualizar(req, res){
        // Busca o email na lista de usuarios
        const usuario = usuarioDAO.buscarPorEmail(req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, atualiza o usuario
        usuario.nome = (req.body.nome || usuario.nome)
        usuario.email = (req.body.email || usuario.email)
        usuario.senha = (req.body.senha || usuario.senha)
        usuarioDAO.atualizar(req.params.email, usuario)
        // Devolve o usuario atualizado
        res.send({mensagem: 'Usuário alterado com sucesso'})
    }
}

export default usuarioController