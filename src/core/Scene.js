import * as THREE from 'three';
import { CHUNK_SIZE, RENDER_DISTANCE } from '!constants';

export default () => {
  const scene = new THREE.Scene();

  scene.fog = new THREE.Fog(0x87cefa, 0, (CHUNK_SIZE * RENDER_DISTANCE * 2) - CHUNK_SIZE * 2);
  scene.add(new THREE.AxesHelper(15));

  return scene;
};