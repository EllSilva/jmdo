import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "home",
            activo: false,
        }
    },

    methods: {
 
        mostrarMenu() {  
            this.activo = !this.activo; 
        },

      
      
    },
    template: await get_template('./assets/js/components/menu/home')
}