const $descripcion = document.getElementById("descipcion");
console.log($descripcion);

console.log(document.querySelector("#descripcion"));

console.log(document.querySelectorAll("li"));

console.log(`hay ${document.querySelectorAll("li").length} elemento en la lista`);

document.querySelectorAll("li").forEach((e)=>console.log(e));

document.body.appendChild(document.createElement("p")).textContent = "En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis programas tuvieron que interactuar con los 12 jueces manteniendo una conversación mediante un computador durante cinco minutos en donde se plantean una serie de preguntas con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno  logré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano."

const $a = document.createElement("a");
$a.setAttribute("href", "#");
$a.textContent = "Enlace principal"
const $uli = document.querySelector("ul");
$uli.insertAdjacentElement("afterbegin", $a);

const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] ,
  $ul = document.createElement("ul"); 
document.write("<h3>Meses del Año ʕ•́ᴥ•̀ʔっ  </h3>");
document.body.appendChild($ul); 
meses.forEach((elemento) => { 
  const $li = document.createElement("li");
  $li.textContent = elemento; 
  $ul.appendChild($li);
});