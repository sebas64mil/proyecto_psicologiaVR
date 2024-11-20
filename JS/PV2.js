import * as THREE from 'three';

export class Extras {
    constructor(scene) {
        this.scene = scene; // Recibe la escena como argumento
        
    }

    crearSituaciones(){
        const textureLoader = new THREE.TextureLoader();

        const textureintroduccion = textureLoader.load('Textures/Letreros_textures/Introduccion.jpg');
        const textureextrovertido = textureLoader.load('Textures/Letreros_textures/S1-E.jpg');
        const textureIntrovertido = textureLoader.load('Textures/Letreros_textures/S1-I.jpg');

        const geometry_situaciones = new THREE.PlaneGeometry( 0.5, 0.4 );
        


        const material_intorducccion = new THREE.MeshBasicMaterial( {
            
            map:textureintroduccion, side: THREE.DoubleSide
        
        } );
        
        const material_extrovertido = new THREE.MeshBasicMaterial( {
            
            map:textureextrovertido, side: THREE.DoubleSide
        
        } );

        const material_introvertido = new THREE.MeshBasicMaterial( {
            
            map:textureIntrovertido, side: THREE.DoubleSide
        
        } );
        
        
        
        
        const introduccion = new THREE.Mesh( geometry_situaciones, material_intorducccion );
        introduccion.position.set(-0.55,6.3,0)
        introduccion.rotation.y=THREE.MathUtils.degToRad(90);
        console.log("Comprobar");

        const extrovertido = new THREE.Mesh( geometry_situaciones, material_extrovertido );
        extrovertido.position.set(0.55,6.3,2)
        extrovertido.rotation.y=THREE.MathUtils.degToRad(90);

        const Introvertido = new THREE.Mesh( geometry_situaciones, material_introvertido );
        Introvertido.position.set(0.55,6.3,2.8)
        Introvertido.rotation.y=THREE.MathUtils.degToRad(90);

        this.scene.add( introduccion );
        this.scene.add(extrovertido);
        this.scene.add(Introvertido);
    }
}