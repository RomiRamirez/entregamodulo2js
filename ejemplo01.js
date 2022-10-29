const alumnos=[
{
    nombre: 'Juan Gomez',nota:7
},
{
    nombre: 'Pedro Rodriguez',nota:4
},
{
    nombre: 'Roxana Garcia',nota:8
},
{
    nombre: 'Luciano Lopez',nota:5
},
{
    nombre: 'Fernanda Gimenez',nota:6
},
{
    nombre: 'Florencia Martinez',nota:10
},
{
    nombre: 'Raul Sanchez',nota:7
},
{
    nombre: 'Sandra Figueroa',nota:8
}
]

const chicos = alumnos.filter(
     alumno => alumno.nota >=7
)


console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(`<p>alumno: ${chicos[i].nombre} su nota es ${chicos[i].nota}</p>  ` ) 
}