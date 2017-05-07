var nModal = Vue.component('n-Modal',{
                template: '<div id="modal1" class="modal"> \
                            <div class="modal-content">\
                                <h4>Nombre del componente</h4>\
                                <table>\
                                    <thead>\
                                        <tr>\
                                            <th>Tipo</th>\
                                            <th>Cuarto</th>\
                                            <th colspan="2">Estado</th>\
                                        </tr>\
                                    </thead>\
                                    <tbody>\
                                        <tr>\
                                            <td>Puerta</td>\
                                            <td>Sala</td>\
                                            <td><i class="material-icons light-green-text text-lighten-3">lock_outline</i></td>\
                                            <td>Cerrada</td>\
                                        </tr>\
                                    </tbody>\
                                </table>\
                            </div>\
                            <div class="modal-footer">\
                                <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat">Cerrar</a>\
                            </div>\
                        </div>',
            });

new Vue({
    el:'#app',

    mounted:function(){
        if( annyang ){                
            commands = {
                'Sala :action puerta principal': this.puertaPrincipal,

                'Sala :action aire': this.aire,

                'Sala :action luz': this.luz,
            };
            annyang.addCommands(commands);
            annyang.setLanguage('es');
            annyang.start();
        }else{
            alert("Ocurrió un error, intente recargar la página.");
        }
    }, 

    data:{

        classDoor:{
            'red-text': true,
            'text-darken-3': true,
            'material-icons': true
        },

        classLight:{
            'red-text': true,
            'text-darken-3': true,
            'material-icons': true
        },

        classAC:{
            'grey-text':true,
            'text-lighten-1':true,
            'material-icons':true
        },

        classModal:{
            classModal: true,
            'black-text':true,
            'material-icons': true,
            'viewData': true,
            'modal-trigger': true
        },
    },

    methods:{
        // initListen: 

        puertaPrincipal: function(action){
            action = action.toLowerCase();

            if( action == "abrir"){
                this.classDoor = {
                    'green-text':true,
                    'text-darken-1':true,  
                    'material-icons':true
                }

                alert("La puerta se abrio.");

            }else if(action == "cerrar"){
                this.classDoor = {
                    'red-text': true,
                    'text-darken-3': true,
                    'material-icons': true
                }        
                alert("La puerta se cerro.");

            }else{
                alert("no se reconocio el comando");
            }

        },

        aire: function(action){
            action = action.toLowerCase();

             if(action == "encender"){
                this.classAC = {
                    'blue-text':true,
                    'text-lighten-1':true,
                    'material-icons':true
                }
                alert("El AC se encendio");

            }else if( action == "apagar"){
                this.classAC = {
                    'grey-text':true,
                    'text-lighten-1':true,
                    'material-icons':true
                }          
                alert("El AC se apago");

            }
            else{
                alert("no se reconocio el comando");

            }
        },

        luz: function(action){
            action = action.toLowerCase();

            if(action == "encender"){
                this.classLight = {
                    'green-text':true,
                    'text-darken-1':true,  
                    'material-icons':true
                }
                alert("La luz se encendio.");
            }else if(action == "apagar"){
                this.classLight = {
                    'red-text': true,
                    'text-darken-3': true,
                    'material-icons': true
                }
                alert("La luz se apago");
            }else{
                alert("no se reconocio el comando");
            }
        }

    },

    components: {
        nModal:nModal
    },


});
