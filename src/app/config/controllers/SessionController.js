import Usuario from '../models/Usuario';

class SessionController {
    async store(req,res){
        const {email,password} = req.body;

        let Usuario = await Usuario.findOne({ where: { email } }).catch(((err) => {
            return res.status(401).json({mensagem: "Requisição inválida!"});
        }));
console.log(Usuario);
        if(! usuario){
            return res.status(401).json({mensagem: "Email inválida!"});
        }

        if(! await usuario.checkPassword(password)){
            return res.status(401).json({mensagem: "senha inválida!"});
        }
        return res.json(usuario);
    }
    
}

export default new SessionController();