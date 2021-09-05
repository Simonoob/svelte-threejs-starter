import * as THREE from 'three'
import { scene as addToScene, animateScene } from './scene'
import {camera} from './cameras/camera'

export let canvas
let renderer

const scene = new THREE.Scene()
//!
addToScene({scene})

const clock = new THREE.Clock()

const animateFrame = () => {
  const elapsedTime = clock.getElapsedTime() 

  //!
  animateScene({elapsedTime, scene, canvas})

  renderer.render(scene, camera)
  requestAnimationFrame(animateFrame)
}


const resizeWindow = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
}

export const createScene = (domCanvas) => {
  canvas = domCanvas
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
  resizeWindow()
  animateFrame()
}

window.addEventListener('resize', resizeWindow)
