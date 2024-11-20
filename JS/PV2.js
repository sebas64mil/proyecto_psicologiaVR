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
        const textureIntuicion = textureLoader.load('Textures/Letreros_textures/S2-INT.jpg');
        const textureSensitivo = textureLoader.load('Textures/Letreros_textures/S2-SEN.jpg');
        const textureLogica = textureLoader.load('Textures/Letreros_textures/S3-L.jpg');
        const textureSentido = textureLoader.load('Textures/Letreros_textures/S3-S.jpg');
        const texturePercepcion = textureLoader.load('Textures/Letreros_textures/S4-P.jpg');
        const textureJuicio = textureLoader.load('Textures/Letreros_textures/S4-J.jpg');

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

        const material_intuicion = new THREE.MeshBasicMaterial( {
            
            map:textureIntuicion, side: THREE.DoubleSide
        
        } );

        
        const material_sensitivo = new THREE.MeshBasicMaterial( {
            
            map:textureSensitivo, side: THREE.DoubleSide
        
        } );

        const material_logica = new THREE.MeshBasicMaterial( {
            
            map:textureLogica, side: THREE.DoubleSide
        
        } );

        const material_sentido = new THREE.MeshBasicMaterial( {
            
            map:textureSentido, side: THREE.DoubleSide
        
        } );

        const material_percepcion = new THREE.MeshBasicMaterial( {
            
            map:texturePercepcion, side: THREE.DoubleSide
        
        } );

        const material_Juicio = new THREE.MeshBasicMaterial( {
            
            map:textureJuicio, side: THREE.DoubleSide
        
        } );
        
        
        
        
        const introduccion = new THREE.Mesh( geometry_situaciones, material_intorducccion );
        introduccion.position.set(-0.55,6.3,0)
        introduccion.rotation.y=THREE.MathUtils.degToRad(90);
        console.log("Comprobar");

        const extrovertido = new THREE.Mesh( geometry_situaciones, material_extrovertido );
        extrovertido.position.set(0.55,6.3,2)
        extrovertido.rotation.y=THREE.MathUtils.degToRad(-90);

        const Introvertido = new THREE.Mesh( geometry_situaciones, material_introvertido );
        Introvertido.position.set(0.55,6.3,2.8)
        Introvertido.rotation.y=THREE.MathUtils.degToRad(-90);

        const Intuicion = new THREE.Mesh( geometry_situaciones, material_intuicion );
        Intuicion.position.set(-0.55,6.3,5.2)
        Intuicion.rotation.y=THREE.MathUtils.degToRad(90);

        const Sensitivo = new THREE.Mesh( geometry_situaciones, material_sensitivo );
        Sensitivo.position.set(-0.55,6.3,4.4)
        Sensitivo.rotation.y=THREE.MathUtils.degToRad(90);

        const Logica = new THREE.Mesh( geometry_situaciones, material_logica );
        Logica.position.set(0.55,6.3,7.6)
        Logica.rotation.y=THREE.MathUtils.degToRad(-90);

        const Sentido = new THREE.Mesh( geometry_situaciones, material_sentido );
        Sentido.position.set(0.55,6.3,6.8)
        Sentido.rotation.y=THREE.MathUtils.degToRad(-90);

        const percepcion = new THREE.Mesh( geometry_situaciones, material_percepcion );
        percepcion.position.set(0.55,6.3,10)
        percepcion.rotation.y=THREE.MathUtils.degToRad(-90);

        const juicion = new THREE.Mesh( geometry_situaciones, material_Juicio );
        juicion.position.set(-0.55,6.3,10)
        juicion.rotation.y=THREE.MathUtils.degToRad(90);

        introduccion.name = "FBXintro";
        extrovertido.name = "FBXextrovertido";
        Introvertido.name = "FBXintrovertido";
        Intuicion.name = "FBXintuicion";
        Sensitivo.name = "FBXsensitivo";
        Logica.name = "FBXlogica";
        Sentido.name = "FBXsentido";
        juicion.name = "FBXAjuicio";
        percepcion.name = "FBXApercepcion";



        this.scene.add( introduccion );
        this.scene.add(extrovertido);
        this.scene.add(Introvertido);
        this.scene.add(Intuicion);
        this.scene.add(Sensitivo);
        this.scene.add(Logica);
        this.scene.add(Sentido);
        this.scene.add(juicion);
        this.scene.add(percepcion);
    }

    puertas(){
        const textureLoader = new THREE.TextureLoader();
        const texturepuerta = textureLoader.load('Textures/Textura_Puerta_doble.jpg');

        const geometry_puertas = new THREE.PlaneGeometry( 0.4, 0.4 );

        const material_puerta = new THREE.MeshBasicMaterial( {
            
            map:texturepuerta, side: THREE.DoubleSide
        
        } );

        
        const puertasInicio = new THREE.Mesh( geometry_puertas, material_puerta );
        puertasInicio.position.set(0,6.2,-0.76)
        this.scene.add(puertasInicio);

        const puertasAsala2 = new THREE.Mesh( geometry_puertas, material_puerta );
        puertasAsala2.position.set(0,6.2,1.6);
        puertasAsala2.name="PuertaSala2"
        
        
        this.scene.add(puertasAsala2);

        const puertasAsala3 = new THREE.Mesh( geometry_puertas, material_puerta );
        puertasAsala3.position.set(0,6.2,4.05);
        puertasAsala3.name="PuertaSala3"
        this.scene.add(puertasAsala4);


        
        const puertasAsala4 = new THREE.Mesh( geometry_puertas, material_puerta );
        puertasAsala4.position.set(0,6.2,6.4);
        puertasAsala4.name="PuertaSala4"
        this.scene.add(puertasAsala4);


        
        const puertasAsala5 = new THREE.Mesh( geometry_puertas, material_puerta );
        puertasAsala5.position.set(0,6.2,8.8);
        puertasAsala5.name="PuertaSala5"
        this.scene.add(puertasAsala5);
        
        const puertasfinal = new THREE.Mesh( geometry_puertas, material_puerta );
        puertasfinal.position.set(0,6.2,11.28);
        this.scene.add(puertasfinal);
    }
}