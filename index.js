// const express = require(`express`); - Forma obsoleta de fazer importação

import express from "express";
import { url } from "inspector";
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
    numero: "202",
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
    numero: "137",
    nome: "Porygon",
    tipo: "Normal",
    imagem: "",
    descricao: "Tecnologia de ponta foi usada para criar Porygon. Foi o primeiro Pokémon artificial a ser criado via programação de computador.",
    altura: "0,8",
    peso: "36,5",
    categoria: "Virtual",
    habilidade: "Vestígio e Download",
  },
  {
    numero: "172",
    nome: "Pichu",
    tipo: "Elétrico",
    imagem: "",
    descricao: "Apesar de seu pequeno tamanho, pode atingir até humanos adultos. No entanto, se o fizer, também se surpreende.",
    altura: "0,3",
    peso: "2,0",
    categoria: "Ratinho",
    habilidade: "Estático",
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
