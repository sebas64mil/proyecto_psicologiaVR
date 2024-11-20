import * as THREE from 'three';

export class Extras {
    constructor(scene) {
        this.scene = scene; // Recibe la escena como argumento
        
    }

    crearSituaciones(){
        const textureLoader = new THREE.TextureLoader();

        const textureintroduccion = textureLoader.load('Textures/Letreros_textures/Introduccion.jpg');

        const geometry_situaciones = new THREE.PlaneGeometry( 0.5, 0.4 );
        


        const material_opcion1 = new THREE.MeshBasicMaterial( {
            
            map:textureintroduccion, side: THREE.DoubleSide
        
        } );
        
        
        
        
        
        const opcion1 = new THREE.Mesh( geometry_situaciones, material_opcion1 );
        opcion1.position.set(-0.55,6.3,0)
        opcion1.rotation.y=THREE.MathUtils.degToRad(90);
        console.log("Comprobar");
        

        this.scene.add( opcion1 );
    }
}