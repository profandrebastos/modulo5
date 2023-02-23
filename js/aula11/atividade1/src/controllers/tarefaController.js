// Importa o bd.js para poder usar o banco de dados simulado
//import { bdTarefas } from "../bd.js"

class tarefaController {
    static rotas(app){
        // Rota para o recurso tarefa
        app.get('/tarefa', tarefaController.listar)
        app.post('/tarefa', tarefaController.inserir)
        app.get('/tarefa/titulo/:titulo', tarefaController.buscarPorTitulo)
        app.delete('/tarefa/titulo/:titulo', tarefaController.deletar)
        app.put('/tarefa/titulo/:titulo', tarefaController.atualizar)
    }

    static listar(req, res){
        const tarefas = bdTarefas
        // Devolve a lista de tarefas
        res.send(tarefas)
    }

    static buscarPorTitulo(req, res){
        // Busca o titulo na lista de tarefas
        const tarefa = bdTarefas.find(tarefa => tarefa.titulo === req.params.titulo)
        // Se a tarefa não for encontrada, devolve um erro
        if(!tarefa){
            res.status(404).send('Tarefa não encontrada')
        }
        // Se a tarefa for encontrada, devolve a tarefa
        res.send(tarefa)
    }

    static inserir(req, res){
        // Verifica se já existe uma tarefa com o mesmo titulo
        const tarefaExistente = bdTarefas.find(tarefa => tarefa.titulo === req.body.titulo)
        // Se a tarefa já existir, devolve um erro
        if(tarefaExistente){
            res.status(400).send('Já existe uma tarefa com esse titulo')
        }

        // Cria uma nova tarefa
        const tarefa = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            status: req.body.status,
            data: req.body.data
        }
        // Adiciona a tarefa na lista de tarefas
        bdTarefas.push(tarefa)
        // Devolve a tarefa criada
        res.send({mensagem: 'Tarefa criada com sucesso'})
    }

    static deletar(req, res){
        // Busca o titulo na lista de tarefas
        const tarefa = bdTarefas.find(tarefa => tarefa.titulo === req.params.titulo)
        // Se a tarefa não for encontrada, devolve um erro
        if(!tarefa){
            res.status(404).send('Tarefa não encontrada')
        }
        // Se a tarefa for encontrada, deleta a tarefa
        const index = bdTarefas.indexOf(tarefa)
        bdTarefas.splice(index, 1)
        // Devolve a tarefa deletada
        res.send({mensagem: 'Tarefa removida com sucesso'})
    }

    static atualizar(req, res){
        // Busca a tarefa na lista de tarefas
        const tarefa = bdTarefas.find(tarefa => tarefa.titulo === req.params.titulo)
        // Se a tarefa não for encontrada, devolve um erro
        if(!tarefa){
            res.status(404).send('Tarefa não encontrada')
        }
        // Se a tarefa for encontrada, atualiza a tarefa
        tarefa.titulo = (req.body.titulo || tarefa.titulo)
        tarefa.descricao = (req.body.descricao || tarefa.descricao)
        tarefa.status = (req.body.status || tarefa.status)
        tarefa.data = (req.body.data || tarefa.data)
        // Devolve a tarefa atualizada
        res.send({mensagem: 'Tarefa alterada com sucesso'})
    }
}

export default tarefaController