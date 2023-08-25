import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "home",
            activo: false, 
            activo1: true,
            activo2: false,
            activo3: false,
            activo4: false,
            activo5: false,
        }
    },

    methods: {
 
        mostrarMenu() {  
            this.activo = !this.activo; 
        },
      
 
        homeMenu() { 
                this.activo5 = false,
                this.activo4 = false,
                this.activo3 = false,
                this.activo2 = false,
                this.activo1 = true
        },

        sobreMenu() {
            this.activo5 = false,
            this.activo4 = false,
            this.activo3 = false,
            this.activo2 = true,
            this.activo1 = false
        },

        servicoMenu() {
            this.activo5 = false,
            this.activo4 = false,
            this.activo3 = true,
            this.activo2 = false,
            this.activo1 = false
        },

        galeriaMenu() {
            this.activo5 = false,
            this.activo4 = true,
            this.activo3 = false,
            this.activo2 = false,
            this.activo1 = false
        },

        contactoMenu() {
            this.activo5 = true,
            this.activo4 = false,
            this.activo3 = false,
            this.activo2 = false,
            this.activo1 = false
        },

         
      
    },
    template: await get_template('./assets/js/components/menu/home')
}