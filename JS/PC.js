import * as THREE from 'three';
import { PV } from './PV.js';
import { PM } from './PM.js'; 

export class PC {
    constructor(camera, scene) {
        this.camera = camera; // Cámara proporcionada por WebXR
        this.scene = scene;
        this.raycaster = new THREE.Raycaster();
        this.gamepad = null; // Inicialización del gamepad
        
        // Crear un contenedor para la cámara, lo que permitirá mover la cámara dentro del contenedor
        this.cameraContainer = new THREE.Object3D();
        this.camera.position.set(0, 0, 0.0)
        this.camera.rotation.y = THREE.MathUtils.degToRad(180)
        this.cameraContainer.add(this.camera); // Añadimos la cámara al contenedor
        this.scene.add(this.cameraContainer);
        this.cameraContainer.position.set(0, 4.6, -0.5); // Añadimos el contenedor a la escena

        this.PV= new PV(scene);

        this.PM = new PM(scene);

        this.buttonPressed1 = false;
        this.buttonPressed2 = false;
        this.buttonPressed3 = false;
        this.buttonPressed4 = false;
    }

    move() {
        // Detectar si el gamepad está conectado
        const gamepads = navigator.getGamepads();
        if (gamepads) {
            this.gamepad = gamepads[0]; // Suponiendo que solo se usa un gamepad
    
            if (this.gamepad) {
                // Accedemos a los ejes de movimiento (horizontal y vertical)
                const moveAxisX = this.gamepad.axes[0]; // Eje horizontal del gamepad (izquierda/derecha)
                const moveAxisY = this.gamepad.axes[1]; // Eje vertical del gamepad (adelante/atrás)
    
                // Si cualquiera de los ejes se mueve
                if (moveAxisX !== 0 || moveAxisY !== 0) {
                    // Lanza un raycast para detectar colisiones
                    const rayOrigin = new THREE.Vector3().setFromMatrixPosition(this.camera.matrixWorld);
                    const direction = this.camera.getWorldDirection(new THREE.Vector3()).normalize();
    
                    this.raycaster.set(rayOrigin, direction);
    
                    // Detectar intersecciones
                    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
                    if (intersects.length > 0) {
                        const firstHit = intersects[0]; // Primera intersección
                        const distance = firstHit.distance;
    
                        // Verificar si el objeto intersectado tiene "cuarto" o "pasillo" en su nombre

    
                        // Si la distancia al objeto es menor a 0.25, detener el movimiento
                        if (distance < 0.25) {
                            if (firstHit.object.name && 
                                (firstHit.object.name.includes("cuarto") || firstHit.object.name.includes("pasillo") || firstHit.object.name.includes("puerta"))) {
                                console.log("Colisión con objeto que contiene 'cuarto' o 'pasillo', movimiento detenido");
                                return; // Detener movimiento si se colide con uno de esos objetos
                            }
                        }
                    }
    
                    // Si no hay colisión o la distancia es mayor a 0.25, permitir el movimiento
                    const forwardMovement = new THREE.Vector3(
                        direction.x * moveAxisY * -0.01, // Movimiento adelante/atrás
                        0,
                        direction.z * moveAxisY * -0.01
                    );
                    this.cameraContainer.position.add(forwardMovement);
                }
            }
        }
    }
    

    
    Comprobar() {
        if (this.buttonPressed === undefined) {
            this.buttonPressed = false; // Inicializa si no está definido
        }
    
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
        if (intersects.length > 0) {
            let intersectedObject = intersects[0].object;
    
            while (intersectedObject.parent) {
                if (intersectedObject.name === "FBXbotonInicio") {
                    const gamepads = navigator.getGamepads();
                    if (gamepads && gamepads[0]) {
                        const gamepad = gamepads[0];
    
                        if (gamepad.buttons[0].pressed && !this.buttonPressed) {
                            console.log("FBXbotonInicio colisionado y botón del gamepad presionado");
    
                            this.buttonPressed = true; // Marcar como presionado
    
                            if (navigator.vibrate) {
                                navigator.vibrate(200); // Vibración opcional
                            }
    
                            let Boton = "inicio";
                            this.PM.createText(Boton); // Llama a PM para lógica adicional
    
                            return;
                        }
    
                    }
                    return;
                }
                intersectedObject = intersectedObject.parent;
            }
        }
    }
    
    Comprobar1() {
        if (this.buttonPressed1 === undefined) {
            this.buttonPressed1 = false; // Inicializa si no está definido
        }
    
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
        if (intersects.length > 0) {
            let intersectedObject = intersects[0].object;
    
            while (intersectedObject.parent) {
                if (["FBXbotonIntrovertido", "FBXbotonExtrovertido"].includes(intersectedObject.name)) {
                    const gamepads = navigator.getGamepads();
                    if (gamepads && gamepads[0]) {
                        const gamepad = gamepads[0];
    
                        if (gamepad.buttons[0].pressed && !this.buttonPressed1) {
                            console.log(`${intersectedObject.name} colisionado y botón del gamepad presionado`);
    
                            this.buttonPressed1 = true; // Marcar como presionado
    
                            if (navigator.vibrate) {
                                navigator.vibrate(200); // Vibración opcional
                            }
    
                            let BotonSeleccionado = intersectedObject.name === "FBXbotonIntrovertido"
                                ? "I"
                                : "E";
    
                            this.PM.createText1(BotonSeleccionado);
    
                            return;
                        }
    

                    }
                    return;
                }
                intersectedObject = intersectedObject.parent;
            }
        }
    }

    Comprobar2() {
        if (this.buttonPressed2 === undefined) {
            this.buttonPressed2 = false; // Inicializa si no está definido
        }
    
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
        if (intersects.length > 0) {
            let intersectedObject = intersects[0].object;
    
            while (intersectedObject.parent) {
                if (["FBXbotonSensitivo", "FBXbotonIntucicion"].includes(intersectedObject.name)) {
                    const gamepads = navigator.getGamepads();
                    if (gamepads && gamepads[0]) {
                        const gamepad = gamepads[0];
    
                        if (gamepad.buttons[0].pressed && !this.buttonPressed2) {
                            console.log(`${intersectedObject.name} colisionado y botón del gamepad presionado`);
    
                            this.buttonPressed2 = true; // Marcar como presionado
    
                            if (navigator.vibrate) {
                                navigator.vibrate(200); // Vibración opcional
                            }
    
                            let BotonSeleccionado = intersectedObject.name === "FBXbotonSensitivo"
                                ? "SEN"
                                : "IN";
    
                            this.PM.createText2(BotonSeleccionado);
    
                            return;
                        }
    

                    }
                    return;
                }
                intersectedObject = intersectedObject.parent;
            }
        }
    }
    
    Comprobar3() {
        if (this.buttonPressed3 === undefined) {
            this.buttonPressed3 = false; // Inicializa si no está definido
        }
    
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
        if (intersects.length > 0) {
            let intersectedObject = intersects[0].object;
    
            while (intersectedObject.parent) {
                if (["FBXbotonSentido", "FBXbotonLogica"].includes(intersectedObject.name)) {
                    const gamepads = navigator.getGamepads();
                    if (gamepads && gamepads[0]) {
                        const gamepad = gamepads[0];
    
                        if (gamepad.buttons[0].pressed && !this.buttonPressed3) {
                            console.log(`${intersectedObject.name} colisionado y botón del gamepad presionado`);
    
                            this.buttonPressed3 = true; // Marcar como presionado
    
                            if (navigator.vibrate) {
                                navigator.vibrate(200); // Vibración opcional
                            }
    
                            let BotonSeleccionado = intersectedObject.name === "FBXbotonSentido"
                                ? "S"
                                : "L";
    
                            this.PM.createText3(BotonSeleccionado);
    
                            return;
                        }
    

                    }
                    return;
                }
                intersectedObject = intersectedObject.parent;
            }
        }
    }

    Comprobar4() {
        if (this.buttonPressed4 === undefined) {
            this.buttonPressed4 = false; // Inicializa si no está definido
        }
    
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
        if (intersects.length > 0) {
            let intersectedObject = intersects[0].object;
    
            while (intersectedObject.parent) {
                if (["FBXAbotonOrden1", "FBXAbotonOrden2"].includes(intersectedObject.name)) {
                    const gamepads = navigator.getGamepads();
                    if (gamepads && gamepads[0]) {
                        const gamepad = gamepads[0];
    
                        if (gamepad.buttons[0].pressed && !this.buttonPressed4) {
                            console.log(`${intersectedObject.name} colisionado y botón del gamepad presionado`);
    
                            this.buttonPressed4 = true; // Marcar como presionado
    
                            if (navigator.vibrate) {
                                navigator.vibrate(200); // Vibración opcional
                            }
    
                            let BotonSeleccionado = intersectedObject.name === "FBXAbotonOrden1"
                                ? "P"
                                : "J";
    
                            this.PM.createText4(BotonSeleccionado);
    
                            return;
                        }
    
                    }
                    return;
                }
                intersectedObject = intersectedObject.parent;
            }
        }
    }
    
    
    

    checkVisibilityBasedOnDistance() {
        const thresholdDistance = 2.5; // Ajusta la distancia según sea necesario
        const thresholdDistance1 = 7;
        this.scene.traverse((child) => {
            // Asegúrate de que el objeto tiene un nombre y verifica si es relevante
            if (child.name && child.name.startsWith('FBX')) {
                const objectWorldPosition = new THREE.Vector3();
                child.getWorldPosition(objectWorldPosition);
    
                const distance = this.cameraContainer.position.distanceTo(objectWorldPosition);
    
                // Mostrar/ocultar el objeto basado en la distancia
                child.visible = distance <= thresholdDistance;
            }

            if (child.name && child.name.startsWith('FBXA')) {
                const objectWorldPosition = new THREE.Vector3();
                child.getWorldPosition(objectWorldPosition);
    
                const distance = this.cameraContainer.position.distanceTo(objectWorldPosition);
    
                // Mostrar/ocultar el objeto basado en la distancia
                child.visible = distance <= thresholdDistance1;
            }
        });
    }
    
    
    
    
    

}
