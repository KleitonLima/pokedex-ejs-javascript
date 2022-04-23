// const express = require(`express`); - Forma obsoleta de fazer importação

import express from "express";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const port = 3232;

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});

let pokedex = [
  {
    id: 1,
    nome: "Wobbuffet ",
    tipo: "Psíquico",
    imagem: "https://1.bp.blogspot.com/-sYQjDe0MPh0/XyI3dNxPvpI/AAAAAAACbF4/9JIwGxIv_GE9AePltscsf-sB4aDtjnmZwCLcBGAsYHQ/w205-h205/poke_capture_0202_000_md_n_00000000_f_n.png",
    descricao: "Odeia luz e choque. Se atacado, ele infla seu corpo para bombear seu contra-ataque.",
    altura: "1,3",
    peso: "28,5",
    categoria: "Paciente",
    habilidade: "Marca de sombra",
  },
  {
    id: 2,
    nome: "Porygon",
    tipo: "Normal",
    imagem: "https://www.pngkit.com/png/full/62-622952_porygon-2-used-sharpen-pokemon-porygon.png",
    descricao: "Tecnologia de ponta foi usada para criar Porygon. Foi o primeiro Pokémon artificial a ser criado via programação de computador.",
    altura: "0,8",
    peso: "36,5",
    categoria: "Virtual",
    habilidade: "Vestígio e Download",
  },
  {
    id: 3,
    nome: "Pichu",
    tipo: "Elétrico",
    imagem: "https://i.pinimg.com/originals/21/ab/b7/21abb715ae7ec44d98a5ef8355807719.png",
    descricao: "Apesar de seu pequeno tamanho, pode atingir até humanos adultos. No entanto, se o fizer, também se surpreende.",
    altura: "0,3",
    peso: "2,0",
    categoria: "Ratinho",
    habilidade: "Estático",
  },
  {
    id: 4,
    nome: "Zangoose",
    tipo: "Normal",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png",
    descricao: "Memórias de lutar contra seu arquirrival Seviper estão gravadas em cada célula do corpo de Zangoose. Este Pokémon habilmente evita ataques com incrível agilidade.",
    altura: "1,3",
    peso: "40,3",
    categoria: "Furão gato",
    habilidade: "Imunidade",
  },
];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    pokedex,
  });
});

app.get("/detalhes", (req, res) => {
  res.render("detalhes.ejs");
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro.ejs");
});
