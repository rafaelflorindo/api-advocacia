const express = require("express");
const sequelize = require("./dataBase");
const Servicos = require("./modelos/Servicos");

const app = express();
app.use(express.json());
const port = 3000;

sequelize.sync().then(()=>{
    console.log("Base de Dados conectado com sucesso!!!");
})

app.get("/", (req, res)=>{
    res.status(200).json(
        {
            "mensagem" :"Rota Principal"
        }
    )
})

app.post("/servico", async(req, res)=>{
    try{
        const servico = await Servicos.create(req.body);
        res.status(201).json(
            {
                servico,
                "mensagem": "Serviço cadastrado com sucesso!!!"
            }
        )
    }catch{
        res.status(500).json({
            erro: "Erro ao inserir o registro",
            detalhes: error.message
        })
    }
})

app.get("/servicos", async (req, res) => {
    try {
      const servicos = await Servicos.findAll();
  
      if (servicos.length > 0) {
        res.status(200).json(servicos);
      } else {
        res.status(200).json({
          mensagem: "Nenhum serviço encontrado",
          servicos: []
        });
      }
  
    } catch (error) {
      res.status(500).json({
        erro: "Erro ao buscar os registros",
        detalhes: error.message
      });
    }
  });

//fazer a rota para retornar um serviço
//fazer a rota para excluir um serviço
//fazer a rota para alterar um serviço

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});