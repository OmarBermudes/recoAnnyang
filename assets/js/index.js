var itemModal = {  
                itemModal:{
                    name: '',
                    room: '',
                    icon: '',
                    status: ''
                }
            };

var classModal={
                'black-text':true,
                'material-icons': true,
                'viewData': true,
                'modal-trigger': true
            };

var mixMethods = {

    methods:{
        fillModal: function(event){
            // console.log(itemModal.itemModal.name);
            itemModal.itemModal = this.item;
            $("#nModal").modal('open');
        },
        
        puertaPrincipal: function(action){
            action = action.toLowerCase();

            if( action == "abrir"){
                this.classDoor = {
                    'green-text':true,
                    'text-darken-1':true,  
                    'material-icons':true
                }
                this.item = {
                    name: 'Puerta',
                    room: 'Sala',
                    icon: 'lock_outline',
                    status: 'Abierta',
                    class: this.classDoor

                }
                console.log(this.item);

                alert("La puerta se abrio.");

            }else if(action == "cerrar"){
                this.classDoor = {
                    'red-text': true,
                    'text-darken-3': true,
                    'material-icons': true
                }
                this.item = {
                    name: 'Puerta',
                    room: 'Sala',
                    icon: 'lock_outline',
                    status: 'Cerrada',
                    class: this.classDoor

                }        
                alert("La puerta se cerro.");

            }else{
                alert("no se reconocio el comando");
            }

        },

        aire: function(action){
            action = action.toLowerCase();

             if(action == " "){
                this.classAC = {
                    'blue-text':true,
                    'text-lighten-1':true,
                    'material-icons':true
                }
                this.item = {
                    name: 'Aire Acondicionado',
                    room: 'Sala',
                    icon: ' invert_colors ',
                    status: 'Encendido',
                    class: this.classAC

                }
                alert("El AC se encendio");

            }else if( action == "apagar"){
                this.classAC = {
                    'grey-text':true,
                    'text-lighten-1':true,
                    'material-icons':true
                }
                this.item = {
                    name: 'Aire Acondicionado',
                    room: 'Sala',
                    icon: ' invert_colors ',
                    status: 'Apagado',
                    class: this.classAC

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
                this.item = {
                    name: 'Luz',
                    room: 'Sala',
                    icon: '  settings_power ',
                    status: 'Encendida',
                    class: this.classLight
                }
                alert("La luz se encendio.");
            }else if(action == "apagar"){
                this.classLight = {
                    'red-text': true,
                    'text-darken-3': true,
                    'material-icons': true
                }
                this.item = {
                    name: 'Luz',
                    room: 'Sala',
                    icon: '  settings_power ',
                    status: 'Apagada',
                    class: this.classLight
                }
                alert("La luz se apago");
            }else{
                alert("no se reconocio el comando");
            }
        }

    }

};

var nModal = Vue.component('n-Modal',{
                template: '<div id="nModal" class="modal nyroModal"> \
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
                                            <td>{{ itemModal.name }}</td>\
                                            <td>{{ itemModal.room }}</td>\
                                            <td><a href="javascript:void(0);"><i :class="itemModal.class">{{ itemModal.icon }}</i></a></td>\
                                            <td>{{ itemModal.status }}</td>\
                                        </tr>\
                                    </tbody>\
                                </table>\
                            </div>\
                            <div class="modal-footer">\
                                <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat">Cerrar</a>\
                            </div>\
                        </div>',
                
                data : function(){
                    return itemModal
                },

});

var itemDoor = Vue.component('item-door',{
    mounted:function(){
        if( annyang ){                
            commands = {
                ':action puerta': this.puertaPrincipal,
            };
            annyang.addCommands(commands);
            annyang.setLanguage('es');
            annyang.start();
        }else{
            alert("Ocurrió un error, intente recargar la página.");
        }
    }, 

    template: '<li class="collection-item">\
                    <div> {{ item.name }} \
                        <div class="secondary-content">\
                            <a href="javascript:void(0);"><i :class="classDoor "> {{ item.icon }} </i></a>\
                            <a @click="fillModal($event)" href="javascript:void(0);"><i :class="classModal">visibility</i></a>\
                        </div>\
                    </div>\
                </li>',

    data: function(){

        let elements = {
            item:{
                name: 'Puerta',
                room: 'Sala',
                icon: 'lock_outline',
                status: 'Cerrada'
            },

            classDoor:{
                'red-text': true,
                'text-darken-3': true,
                'material-icons': true
            },

            classModal,
        };

        elements.item.class = elements.classDoor;
        return elements;


    },

    mixins:[mixMethods],

    // methods:{
        
    // }

});

var itemAir = Vue.component('item-air',{
    mounted:function(){
        if( annyang ){                
            commands = {
                'Sala :action aire': this.aire,
            };
            annyang.addCommands(commands);
            annyang.setLanguage('es');
            annyang.start();
        }else{
            alert("Ocurrió un error, intente recargar la página.");
        }
    },

    template: '<li class="collection-item">\
                    <div> {{ item.name }} \
                        <div class="secondary-content">\
                            <a href="javascript:void(0);"><i :class="classAC"> {{  item.icon }} </i></a>\
                            <a @click="fillModal($event)" href="javascript:void(0);"><i :class="classModal">visibility</i></a>\
                        </div>\
                    </div>\
                </li>',

    data: function(){
        let elements = {
            item:{
                name: 'Aire Acondicionado',
                room: 'Sala',
                // class: 'classAC',
                icon: 'invert_colors',
                status: 'Apagado'
            },

            classAC:{
                'grey-text':true,
                'text-lighten-1':true,
                'material-icons':true
            },

            classModal,
        }

        elements.item.class = elements.classAC;
        return elements;
    },

    mixins:[mixMethods],

});

var itemLigth = Vue.component('item-ligth',{
    mounted:function(){
        if( annyang ){                
            commands = {
                'Sala :action luz': this.luz,
            };
            annyang.addCommands(commands);
            annyang.setLanguage('es');
            annyang.start();
        }else{
            alert("Ocurrió un error, intente recargar la página.");
        }
    },

    template: '<li class="collection-item">\
                    <div> {{ item.name }} \
                        <div class="secondary-content">\
                            <a href="javascript:void(0);"><i :class="classLight"> {{ item.icon }}</i></a>\
                            <a @click="fillModal($event)" href="javascript:void(0);"><i :class="classModal">visibility</i></a>\
                        </div>\
                    </div>\
                </li>',

    data: function(){
        let elements = {
            item:{
                name: 'Luz',
                room: 'Sala',
                icon: 'settings_power',
                class: 'classLight',
                status: 'Apagado'
            },

            classLight:{
                'red-text': true,
                'text-darken-3': true,
                'material-icons': true
            },

            classModal,
        }

        elements.item.class = elements.classLight;

        return elements;
    },

    mixins:[mixMethods],
});

new Vue({
    el:'#app',

    components: {
        nModal:     nModal,
        itemAir:    itemAir,
        itemDoor:   itemDoor,
        itemLigth:  itemLigth,
    },

});
