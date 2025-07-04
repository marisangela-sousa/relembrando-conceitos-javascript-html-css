const estudantes = [
{ nome: "Ana"
, nota: 8.5, turma: "A" },
{ nome: "Bruno"
, nota: 4.0, turma: "B" },
{ nome: "Carlos"
, nota: 6.0, turma: "A" },
{ nome: "Daniela"
, nota: 9.2, turma: "C" },
{ nome: "Eduardo"
, nota: 5.5, turma: "B" },
{ nome: "Fernanda"
, nota: 7.0, turma: "C" },
{ nome: "Gabriel"
, nota: 6.8, turma: "A" },
{ nome: "Helena"
, nota: 9.0, turma: "B" },
{ nome: "Igor"
, nota: 3.5, turma: "C" },
{ nome: "Juliana"
, nota: 7.5, turma: "A" },
{ nome: "Kleber"
, nota: 5.0, turma: "B" },
{ nome: "Larissa"
, nota: 8.0, turma: "C" },
{ nome: "Marcelo"
, nota: 6.2, turma: "A" },
{ nome: "Nathalia"
, nota: 4.8, turma: "B" },
{ nome: "Otávio"
, nota: 7.9, turma: "C" }
];

const aprovados = estudantes.filter(estudantes => estudantes.nota > 7);
console.log(aprovados);

const comPendencia = estudantes.filter(estudantes => estudantes.nota < 7);
console.log(comPendencia);

const mediaAlunosAprovados = aprovados.reduce((acumulador, aprovados) => {
    return acumulador + aprovados.nota / 6;
}, 0)
console.log(mediaAlunosAprovados)

const mediaAlunosComPendencias = comPendencia.reduce((acumulador, comPendencia) => {
    return acumulador + comPendencia.nota / 8;
}, 0)

console.log(mediaAlunosComPendencias);