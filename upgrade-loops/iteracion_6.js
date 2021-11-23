const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 41, name: "El gato felix" },
];

function Juguetes() {
  for (var toy of toys) {
    if (toy.name.includes("gato") == true) {
      toys.splice(toys.indexOf(toy), 1);
    }
  }

  while (toys.indexOf(toy) == -1 && toys.length != 0) { // ponemos este while porque queremos controlar el index -1 cuando se elimina un elemento y si el proximo tb debe ser eliminado.
    for (var toy of toys) {
      if (toy.name.includes("gato") == true) {
        toys.splice(toys.indexOf(toy), 1);
      }
    }
  }

  console.log(toys);
}

Juguetes(toys);
