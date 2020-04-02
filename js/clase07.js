 /*  Crear los siguientes botones

        ** Un boton para agregar un nuevo dato a un json
        ** Un boton que modifique algun dato del json


        Buen estilo CSS / Debe ser del tema que ustedes deseen 
        
         */

        //Listeners
        let btn = document.getElementById('btn');
        // Crear JSON apenas cargue la pagina
        document.addEventListener('DOMContentLoaded', function(){
            jsonUsuario = {
                "fname":"",
                "lname":"",
                "age":"",
                "movie":"",
                "otros":[]


            };
            
            otrasOpciones =[];
        });
        // listener boton submit
        btn.addEventListener('click', function(e){
            e.preventDefault();
            let dato = document.getElementById('dato').value;
            let option = document.getElementById('option');
            let optionSelected = option.options[option.selectedIndex].value;
            let optionAux= option.options[option.selectedIndex].label;
            let instrucciones =document.getElementById('labTexto');
            
            

            if(optionSelected==='+'){

                newJSONKey(dato);
                document.getElementById('formulario').reset();

            }else{
                
                agregarJSONData(dato,optionSelected,optionAux);
                document.getElementById('formulario').reset();
                actualizarDatos();
            }

            

            
        
        

        });

        function newJSONKey(key){
            let select= document.getElementById('option');
            let option = document.createElement('option');
            
            option.setAttribute('value','otro');
            option.setAttribute('label',key);


            select.insertBefore(option,document.getElementById('option').options[4]);



        }


        function agregarJSONData(data,id,dataAux){
            let jsonAux={};
            switch (id) {
                case 'fname':
                    jsonUsuario.fname=data;
                    console.log(jsonUsuario);
                    break;
                case 'lname':
                    jsonUsuario.lname=data;
                    console.log(jsonUsuario);
                
                    break;
                case 'age':
                    jsonUsuario.age=data;
                    console.log(jsonUsuario);
            
                    break;
                case 'movie':
                    jsonUsuario.movie=data;
                    console.log(jsonUsuario);
                
                    break;
                case 'otro':
                    let vectorRep= jsonUsuario.otros;
                    let repetido=false;
                    jsonAux.id=dataAux;
                    jsonAux.dato=data;
                    console.log('aux',jsonAux)
                    if(vectorRep.length>0){
                        for (let i = 0; i < vectorRep.length; i++) {
                            if(vectorRep[i].id===dataAux){
                                 vectorRep[i].dato=data;
                                 repetido=true;
                                 console.log('repetido')
                                 break;
                            }
                             
                         }
                         if(repetido===false){
                            console.log('No repetido')
                            jsonUsuario.otros.push(jsonAux);


                         }

                    }else {
                        console.log('primera vez')
                        jsonUsuario.otros.push(jsonAux);
                        
                    }

                    
                    

                    //otrasOpciones.push(jsonAux);

                    //jsonUsuario.otros=otrasOpciones;
                    
                    

                    console.log('vector',jsonUsuario.otros);
                    

                default:
                    break;
            }
            
            
        }
        function actualizarDatos(){
            let texto = document.getElementById('resultado');
            let otros = jsonUsuario.otros;
            console.log(jsonUsuario);
            texto.innerHTML=`
                <span> Nombre: ${jsonUsuario.fname} </span> <br>
                <span> Apellido: ${jsonUsuario.lname} </span> <br>
                <span> Nombre: ${jsonUsuario.age} </span> <br>
                <span> Nombre: ${jsonUsuario.movie} </span> <br>
                <h4> Datos Adicionales </h4>
                    
            
            
            `;
             otros.forEach(function(js){
                texto.innerHTML+=`
                        ${js.id} : ${js.dato}    <br>
                `

            }); 

        }



         