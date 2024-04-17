// Definición del objeto coche
let coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2022,
    
    // Método para cambiar la marca
    cambiarMarca: function(nuevaMarca) {
        this.marca = nuevaMarca;
    },
    
    // Método para cambiar el modelo
    cambiarModelo: function(nuevoModelo) {
        this.modelo = nuevoModelo;
    },
    
    // Método para cambiar el año
    cambiarAño: function(nuevoAño) {
        this.año = nuevoAño;
    },
    
    // Método para mostrar información detallada del coche
    informacionDetallada: function() {
        console.log(`Información del Coche:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.año}`);
    }
};

// Mostrar información detallada del coche antes de realizar cambios
coche.informacionDetallada();

// Cambiar la marca del coche
coche.cambiarMarca('Honda');

// Cambiar el modelo del coche
coche.cambiarModelo('Civic');

// Cambiar el año del coche
coche.cambiarAño(2023);

// Mostrar información detallada del coche después de los cambios
coche.informacionDetallada();
