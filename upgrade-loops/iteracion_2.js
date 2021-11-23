//Iteración #2: Condicionales avanzados

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]



var aprobado = 0;
for (var key in alumns) {
    
    if (alumns[key].T1 == true){
        aprobado = aprobado + 1
    }

    if (alumns[key].T2 == true){
        aprobado = aprobado + 1
    }
     
    if (alumns[key].T3 == true){
        aprobado = aprobado + 1
    }
  
    if(aprobado >= 2){
        alumns[key]["isApproved"] = true
    }else{
        alumns[key]["isApproved"] = false
    }
    aprobado = 0;
    
    console.log(alumns);
    
}