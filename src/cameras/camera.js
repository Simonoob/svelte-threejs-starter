import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100)

let cameraControls= null

export const cameraAnimation = (canvas) => {
    if(canvas && !cameraControls) {
        cameraControls = new OrbitControls(camera, canvas)
        cameraControls.enableDamping = true
    }
    cameraControls && cameraControls.update()
}

camera.position.z = 3

const resizeCamera = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
}
window.addEventListener('resize', resizeCamera)


