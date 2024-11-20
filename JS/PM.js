import * as THREE from 'three';

export class PM {
    constructor(scene) {
        this.scene = scene;  // Escena a la que se le añadirá el plano
    }

    createText(Boton) {

        const textureLoader = new THREE.TextureLoader();

        if (Boton === "inicio") {
            // Crear un plano en lugar de texto
            const texture_Contiue1 = textureLoader.load('Textures/Letreros_textures/Continuar.jpg');

            const geometry = new THREE.PlaneGeometry(0.5, 0.5); // Tamaño del plano (ajústalo según lo que necesites)
            const material = new THREE.MeshBasicMaterial({ 
                map: texture_Contiue1, 
                side: THREE.DoubleSide }); // Material del plano, en este caso un color sólido

            const plane = new THREE.Mesh(geometry, material);
            plane.name = 'FBXbotonInicio'; // Nombre del objeto para la detección de raycast

            // Posicionar el plano en la escena
            plane.position.set(0, 6.3, 0); // Ajusta la posición como sea necesario
            this.scene.add(plane);
        }
    }
}
