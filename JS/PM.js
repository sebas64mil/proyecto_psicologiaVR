import * as THREE from 'three';

export class PM {
    constructor(scene) {
        this.scene = scene;  // Escena a la que se le añadirá el plano
    }

    createText(Boton) {
        const textureLoader = new THREE.TextureLoader();
    
        if (Boton === "inicio") {
            const texture_Contiue1 = textureLoader.load('Textures/Letreros_textures/Continuar.jpg');
    
            const geometry = new THREE.PlaneGeometry(0.5, 0.5);
            const material = new THREE.MeshBasicMaterial({ 
                map: texture_Contiue1, 
                side: THREE.DoubleSide 
            });
    
            const plane = new THREE.Mesh(geometry, material);
            plane.name = 'FBXbotonInicio';
            plane.position.set(0, 6.3, 0);
            plane.rotation.y= THREE.MathUtils.degToRad(180)
            this.scene.add(plane);
    
            // Eliminar el objeto "PuertaSala2"
            this.scene.traverse((child) => {
                if (child.name === "FBXPuertaSala2") {
                    child.position.y = +5;
                    console.log("PuertaSala2 eliminada");
                }
            });
        }
    }

    createTextExtrovertido(Boton) {
        const textureLoader = new THREE.TextureLoader();
    
        if (Boton === "E") {
            const texture_Contiue1 = textureLoader.load('Textures/Letreros_textures/Continuar.jpg');
    
            const geometry = new THREE.PlaneGeometry(0.5, 0.5);
            const material = new THREE.MeshBasicMaterial({ 
                map: texture_Contiue1, 
                side: THREE.DoubleSide 
            });
    
            const plane = new THREE.Mesh(geometry, material);
            plane.name = 'FBXbotonExtro';
            plane.position.set(0,6.3,2.45);
            plane.rotation.y= THREE.MathUtils.degToRad(180)
            this.scene.add(plane);
    
            // Eliminar el objeto "PuertaSala2"
            this.scene.traverse((child) => {
                if (child.name === "FBXPuertaSala3") {
                    child.position.y = +5;
                    console.log("PuertaSala2 eliminada");
                }
            });
        }
    }

    createTextIntrovertido(Boton) {
        const textureLoader = new THREE.TextureLoader();
    
        if (Boton === "I") {
            const texture_Contiue1 = textureLoader.load('Textures/Letreros_textures/Continuar.jpg');
    
            const geometry = new THREE.PlaneGeometry(0.5, 0.5);
            const material = new THREE.MeshBasicMaterial({ 
                map: texture_Contiue1, 
                side: THREE.DoubleSide 
            });
    
            const plane = new THREE.Mesh(geometry, material);
            plane.name = 'FBXbotonintro';
            plane.position.set(0,6.3,2.45);
            plane.rotation.y= THREE.MathUtils.degToRad(180)
            this.scene.add(plane);
    
            // Eliminar el objeto "PuertaSala2"
            this.scene.traverse((child) => {
                if (child.name === "FBXPuertaSala3") {
                    child.position.y = +5;
                    console.log("PuertaSala2 eliminada");
                }
            });
        }
    }
    
}
