import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/Addons.js"

const width = window.innerWidth,
      height = window.innerHeight

const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10)
camera.position.z = 1
camera.position.set(1, 1, 1)
camera.lookAt(0, 0, 0)
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
const material = new THREE.MeshNormalMaterial()

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(width, height)
renderer.setAnimationLoop(animation)
document.body.appendChild(renderer.domElement)
let controls = new OrbitControls(camera, renderer.domElement)

const size = 3
const divisions = 40
const gridHelper = new THREE.GridHelper(size, divisions)
scene.add(gridHelper)

function animation(time) {
      mesh.rotation.x = time / 2000
      mesh.rotation.y = time / 1000
      renderer.render(scene, camera)
}
