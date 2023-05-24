const ajax = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
  $lista = document.getElementById("lista"), //variable que hace referencia al nodo ol del HTML id="lista"
  $fragmento = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

//Asignación de los eventos que se vayan a manipular en la petición
ajax.addEventListener("readystatechange", (e) => {
  if (ajax.readyState !== 4) return;

  if (ajax.status >= 200 && ajax.status < 300) {
    //Si la respuesta es satisfactoria
    let json = JSON.parse(ajax.responseText); //Convierte la respuesta Ajax en un objeto

    json.forEach(object => {
      console.log(object.name, object.username, object.email);
      const $li = document.createElement("li"); //Crea el elemento li
      $li.innerHTML = `${object.name} ${object.username} ${object.email}`; //Le asigna los valores del objeto al elemento li
      $fragmento.appendChild($li); //Agrega el elemento li al framento para luego insertarlo en el HTML

  });

    for (const key in json) {
      //recorre el objeto
      //console.log(`Llave: ${key}, Valor: ${json[key]}`);
    }
    $lista.appendChild($fragmento); //Cuando termina de recorrer el objeto agrega los elementos li guardados en el fragmento al elemento lista
  } else {
    //Si la respuesta no es satisfactoria manda un mensaje de error
    let message = ajax.statusText || "Ocurrió un error";
    $lista.innerHTML = `Error ${ajax.status}: ${message}`;
  }

  console.log("-------------------respuesta---------------------");
  console.log(ajax.responseText);
  console.log("-------------------URL---------------------");
  console.log(`La URL de la peticion es: ${ajax.responseURL}`);
  console.log("-------------------ESTADO PETICION---------------------");
  console.log(`El estado de la peticion es: ${ajax.readyState}`);
  switch (ajax.readyState) {
    case 1:
      console.log("cargando peticion");
      break;
    case 2:
      console.log("peticion cargada");
      break;
    case 3:
      console.log("responseText tiene datos parciales");
      break;
    case 4:
      console.log("¡completado!");
      break;
  }

  console.log("-------------------ESTADO http---------------------");
  console.log(`Estado de respuesta HTTP: ${ajax.status}`);

  if (ajax.status === 200) {
    console.log("respuesta correcta");
  } else if (ajax.status === 404) {
    console.log("no encontrado.");
  } else if (ajax.status === 505) {
    console.log("error interno del servidor");
  } else {
    console.log("error desconocido");
  }
});

/*Abre la petición con el método GET.*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
/*envia la peticioN*/
ajax.send();
