var app = new Vue({
    el:'#app',
    data:{
        cantidad:0,
        arrayDatos:[{nombre:'camisa',precio:70000},{nombre:'pantalon',precio:50000}],
        arrayProductos:{},
        arrayRegistros:[]
    },
    methods: {

        mensaje:function(msj){
            swal.fire({
                position: 'center',
                icon: 'success',
                title: msj,
                showConfirmButton: false,
                timer:2000
            })
        },
        validar:function(){
            var total = 0;
            total = this.cantidad * this.arrayProductos.precio;
            this.mensaje(this.cantidad + ' '+this.arrayProductos.nombre + ' por: '+total)
            this.arrayRegistros.push({nombre: this.arrayProductos.nombre , precio:this.arrayProductos.precio,cantidad:this.cantidad, total:total})
        }
    },
})