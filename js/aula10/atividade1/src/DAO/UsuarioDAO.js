import db from '../infra/db.js'

class UsuarioDAO {
    static listar() {
        const query = 'SELECT * FROM USUARIOS';
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows)
            });
        });
    }

    static inserir(usuario) {
        const query = 'INSERT INTO USUARIOS (nome, email, senha) VALUES (?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.run(query, [usuario.nome, usuario.email, usuario.senha], (err) => {
                if (err) {
                    reject({
                        mensagem: 'Erro ao inserir o usuário',
                        erro: err
                    })
                }

                resolve({ mensagem: 'Usuário criado com sucesso' })
            });
        });
    }

    static buscarPorEmail(email) {
        const query = 'SELECT * FROM USUARIOS WHERE email = ?';
        return new Promise((resolve, reject) => {
            db.get(query, [email], (err, row) => {
                if (err) {
                    reject(false);
                }

                resolve(row)
            });
        });
    }

    static deletar(email) {
        const query = 'DELETE FROM USUARIOS WHERE email = ?';
        return new Promise((resolve, reject) => {
            db.run(query, [email], (err) => {
                if (err) {
                    reject({
                        mensagem: 'Erro ao deletar o usuário',
                        erro: err
                    })
                }

                resolve({ mensagem: 'Usuário deletado com sucesso' })
            });
        });
    }

    static atualizar(email, usuario) {
        const query = 'UPDATE USUARIOS SET nome = ?, email = ?, senha = ? WHERE email = ?';
        return new Promise((resolve, reject) => {
            db.run(query, [usuario.nome, usuario.email, usuario.senha, email], (err) => {
                if (err) {
                    reject({
                        mensagem: 'Erro ao atualizar o usuário',
                        erro: err
                    })
                }

                resolve({ mensagem: 'Usuário atualizado com sucesso' })
            });
        });
    }
}

export default UsuarioDAO;