import {cameraAnimation} from './cameras/camera'
import cube from './components/cube'
import pointLight from './lights/pointLight'
import ambientLight from './lights/ambientLight'

export const scene = ({scene}) => {
    scene.add(cube.mesh)
    
    scene.add(pointLight, ambientLight)
}

export const animateScene = ({elapsedTime, canvas}) => {
  cameraAnimation(canvas)
  cube.animation(elapsedTime)
}