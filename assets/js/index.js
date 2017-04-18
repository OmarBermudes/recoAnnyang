new Vue({
    el:'#app',

    data:{
        // active: false,
        off : true,
        on : false,

    },

    methods:{
      
        listen: function(){
            var that = this;
            if( annyang ){                
                commands = {
                    'Activar todos': this.activar,
                    'Desactivar todos': this.desactivar,

                };
                annyang.addCommands(commands);
                annyang.setLanguage('es');
                annyang.start();
            }
        },

        activar: function(){
            this.off = false;
            this.on = true;

            annyang.abort();
        },

        desactivar: function(){
            this.off = true;
            this.on = false;
            
            annyang.abort();
        },

    }

});
