import {BoxGeometry, MeshStandardMaterial, Mesh} from "three"


const geometry = new BoxGeometry()
const material = new MeshStandardMaterial({ color: 0xff0000 })

const mesh = new Mesh(geometry, material)

const animation = (elapsedTime) => {
    mesh.rotation.x = elapsedTime
    mesh.rotation.y = -elapsedTime  
}

const cube = {
    mesh,
    animation
}

export default cube