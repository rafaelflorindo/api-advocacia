const express = require("express");
const sequelize = require("./dataBase");
const Servicos = require("./modelos/Servicos");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const port = 5000;

sequelize.sync().then(() => {
    console.log("Base de Dados conectado com sucesso!!!");
})

app.get("/", (req, res) => {
    res.status(200).json(
        {
            "mensagem": "Rota Principal"
        }
    )
})

app.post("/servico", async (req, res) => {
    const { nome, descricao, imagem } = req.body;

    // if(nome.trim())

    try {
        const servico = await Servicos.create({ nome, descricao, imagem });
        res.status(201).json(
            {
                servico,
                "mensagem": "Serviço cadastrado com sucesso!!!"
            }
        )
    } catch {
        res.status(400).json({
            erro: "Erro ao inserir o registro"
        })
    }
})

app.get("/servicos", async (req, res) => {
    try {
        const servicos = await Servicos.findAll();
        if (servicos.length > 0) {
            res.status(200).json(servicos)
        } else {
            res.status(204).json({ "message": "Não há registros cadastrados!!!" })
        }
    } catch {
        res.status(500).json({
            erro: "Erro ao buscar o registro"
        })
    }
})
app.get("/servico/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)){ return res.status(400).json({"mensagem":"O id deve ser numérico!!!"}) }
    if(id < 0) { return res.status(400).json({"mensagem":"O id deve ser maior que zero!!!"}) }

    try{
        const resposta = await Servicos.findByPk(id);
    
        if (resposta.length === 0) {
            return res.status(200).json({
                "mensagem": "Serviço não encontrado"
            });
        } 
            res.status(200).json(resposta);
      
    }catch(error){
        res.status(500).json({"erro":error.message});
    }
})
app.delete("/servico/:id", async (req, res) => {
    const id = req.params.id;

    if(isNaN(id)){ res.status(400).json({"mensagem":"O id deve ser numérico!!!"}) }
    if(id < 0) {res.status(400).json({"mensagem":"O id deve ser maior que zero!!!"}) }

    const resposta = await Servicos.findByPk(id)

    if (resposta) {
        const del = await resposta.destroy()

        if (del) {
            res.status(200).json({ "mensagem": "Registro do Serviço excluído com sucesso" })
        } else {
            res.status(204).json({ "mensagem": "Registro do Serviço não encontrado." })
        }
    }


})

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});


/*

  {
    "nome": "Direito Civil e Familiar",
    "descricao": "Questões como divórcio, inventários, heranças, contratos e relações de consumo.",
    "imagem": "divorcio.png"
  },
  {
    "nome": "Direito do Consumidor",
    "descricao": "Defesa de consumidores em casos envolvendo bancos, planos de saúde, telefonia, entre outros.",
    "imagem": "#"
  },
  {
    "nome": "Direito Empresarial",
    "descricao": "Assessoria jurídica para empresas, incluindo direito tributário e contratual.",
    "imagem": "#"
  },
  {
    "nome": "Direito Trabalhista",
    "descricao": "Atuação em casos de demissões, horas extras, vínculos empregatícios e verbas rescisórias.",
    "imagem": "#"
  },
  {
    "nome": "Direito Penal",
    "descricao": "Defesa de pessoas em processos criminais.",
    "imagem": "#"
  },
  {
    "nome": "Direito Imobiliário",
    "descricao": "Questões relacionadas a imóveis, como compra, venda, locação e disputas.",
    "imagem": "#"
  },
  {
    "nome": "Direito Previdenciário",
    "descricao": "Casos relacionados a aposentadoria, pensões e benefícios do INSS.",
    "imagem": "#"
  },
  {
    "nome": "Direito Digital/Tecnologia",
    "descricao": "Questões jurídicas relacionadas à tecnologia e internet.",
    "imagem": "#"
  }

*/