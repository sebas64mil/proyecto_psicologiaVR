import * as THREE from 'three';

export class PM {
    constructor(scene) {
        this.scene = scene;
        this.possibilities = {
            ESFJ: "Extrovertido, Sensitivo, Sentido, Juicio",
            ESFP: "Extrovertido, Sensitivo, Sentido, Percepción",
            ENFJ: "Extrovertido, Intuición, Sentido, Juicio",
            ENFP: "Extrovertido, Intuición, Sentido, Percepción",
            ESTJ: "Extrovertido, Sensitivo, Lógica, Juicio",
            ESTP: "Extrovertido, Sensitivo, Lógica, Percepción",
            ENTJ: "Extrovertido, Intuición, Lógica, Juicio",
            ENTP: "Extrovertido, Intuición, Lógica, Percepción",
            ISFJ: "Introvertido, Sensitivo, Sentido, Juicio",
            ISFP: "Introvertido, Sensitivo, Sentido, Percepción",
            INFP: "Introvertido, Intuición, Sentido, Percepción",
            INTJ: "Introvertido, Intuición, Lógica, Juicio",
            INTP: "Introvertido, Intuición, Lógica, Percepción",
            ISTJ: "Introvertido, Sensitivo, Lógica, Juicio",
            ISTP: "Introvertido, Sensitivo, Lógica, Percepción",
        };

        this.texturePaths = {
            ESFJ: 'Textures/Letreros_textures/ESFJ.jpg',
            ESFP: 'Textures/Letreros_textures/ESFP.jpg',
            ENFJ: 'Textures/Letreros_textures/ENFJ.jpg',
            ENFP: 'Textures/Letreros_textures/ENFP.jpg',
            ESTJ: 'Textures/Letreros_textures/ESTJ.jpg',
            ESTP: 'Textures/Letreros_textures/ESTP.jpg',
            ENTJ: 'Textures/Letreros_textures/ENTJ.jpg',
            ENTP: 'Textures/Letreros_textures/ENTP.jpg',
            ISFJ: 'Textures/Letreros_textures/ISFJ.jpg',
            ISFP: 'Textures/Letreros_textures/ISFP.jpg',
            INFP: 'Textures/Letreros_textures/INFP.jpg',
            INTJ: 'Textures/Letreros_textures/INTJ.jpg',
            INTP: 'Textures/Letreros_textures/INTP.jpg',
            ISTJ: 'Textures/Letreros_textures/ISTJ.jpg',
            ISTP: 'Textures/Letreros_textures/ISTP.jpg',
        };
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
            plane.rotation.y = THREE.MathUtils.degToRad(180)
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

    createText1(Boton) {
        const textureLoader = new THREE.TextureLoader();
        const texturePath = 'Textures/Letreros_textures/Continuar.jpg';
        const texture = textureLoader.load(texturePath);
    
        const geometry = new THREE.PlaneGeometry(0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        });
    
        const plane = new THREE.Mesh(geometry, material);
        plane.name = `FBX${Boton}`;
        plane.position.set(0, 6.3, 2.45);
        plane.rotation.y = THREE.MathUtils.degToRad(180);
        this.scene.add(plane);
    
        // Desplaza la puerta
        this.scene.traverse((child) => {
            if (child.name === "FBXPuertaSala3") {
                child.position.y += 5;
                console.log(`PuertaSala3 desplazada por el botón ${Boton}`);
            }
        });
    
        console.log(`Plano creado: ${plane.name}`);
        return plane.name; // Devolver el nombre del plano
    }
    
    createText2(Boton) {
        const textureLoader = new THREE.TextureLoader();
        const texturePath = 'Textures/Letreros_textures/Continuar.jpg';
        const texture = textureLoader.load(texturePath);
    
        const geometry = new THREE.PlaneGeometry(0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        });
    
        const plane = new THREE.Mesh(geometry, material);
        plane.name = `FBX${Boton}`;
        plane.position.set(0, 6.3, 4.8);
        plane.rotation.y = THREE.MathUtils.degToRad(180);
        this.scene.add(plane);
    
        // Desplaza la puerta
        this.scene.traverse((child) => {
            if (child.name === "FBXPuertaSala4") {
                child.position.y += 5;
                console.log(`PuertaSala4 desplazada por el botón ${Boton}`);
            }
        });
    
        console.log(`Plano creado: ${plane.name}`);
        return plane.name; // Devolver el nombre del plano
    }
    
    createText3(Boton) {
        const textureLoader = new THREE.TextureLoader();
        const texturePath = 'Textures/Letreros_textures/Continuar.jpg';
        const texture = textureLoader.load(texturePath);
    
        const geometry = new THREE.PlaneGeometry(0.5, 0.0);
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        });
    
        const plane = new THREE.Mesh(geometry, material);
        plane.name = `FBX${Boton}`;
        plane.position.set(0, 6.3, 7.17);
        plane.rotation.y = THREE.MathUtils.degToRad(180);
        this.scene.add(plane);
    
        // Desplaza la puerta
        this.scene.traverse((child) => {
            if (child.name === "FBXAPuertaSala5") {
                child.position.y += 5;
                console.log(`PuertaSala5 desplazada por el botón ${Boton}`);
            }
        });
    
        console.log(`Plano creado: ${plane.name}`);
        return plane.name; // Devolver el nombre del plano
    }
    
    createText4(Boton) {
        const textureLoader = new THREE.TextureLoader();
        const texturePath = 'Textures/Letreros_textures/FELICIDADES.jpg';
        const texture = textureLoader.load(texturePath);
    
        const geometry = new THREE.PlaneGeometry(0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        });
    
        const plane = new THREE.Mesh(geometry, material);
        plane.name = `FBXA${Boton}`;
        plane.position.set(0, 6.3, 11);
        plane.rotation.y = THREE.MathUtils.degToRad(180);
        this.scene.add(plane);
    
        console.log(`Plano creado: ${plane.name}`);
        return plane.name; // Devolver el nombre del plano
    }

    verifyPersonality(plane1, plane2, plane3, plane4) {
        const step1 = plane1.name.replace("FBX", ""); // Extraer el valor de plane1
        const step2 = plane2.name.replace("FBX", ""); // Extraer el valor de plane2
        const step3 = plane3.name.replace("FBX", ""); // Extraer el valor de plane3
        const step4 = plane4.name.replace("FBX", ""); // Extraer el valor de plane4
    
        const personality = `${step1}${step2}${step3}${step4}`;
    
        if (this.possibilities[personality]) {
            console.log(`La personalidad es ${personality}: ${this.possibilities[personality]}`);
            return this.texturePaths[personality];
        } else {
            console.log("Personalidad no encontrada.");
            return null;
        }
    }

    // Nuevo método para crear el plano con la textura proporcionada
    createPersonalityPlane(texturePath) {
        if (!texturePath) {
            console.log("No se ha proporcionado una dirección de textura válida.");
            return;
        }

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(texturePath);

        const geometry = new THREE.PlaneGeometry(5, 5); // Tamaño del plano
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        });

        const plane = new THREE.Mesh(geometry, material);
        this.scene.add(plane);
        plane.position.set(0, 3, -5); // Posición del plano (puedes ajustarla según necesites)
        plane.rotation.x = Math.PI / 2; // Rotación para que el plano se vea correctamente

        console.log(`Plano de personalidad creado con la textura: ${texturePath}`);
        return plane;
    }
}
