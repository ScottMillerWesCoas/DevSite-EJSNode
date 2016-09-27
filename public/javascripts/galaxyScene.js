var renderer, scene, camera;
    theEarthAndMoon,
    


init();
animate();

function onWindowResize() {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize( window.innerWidth, window.innerHeight );
   render();
}

window.addEventListener( 'resize', onWindowResize, false );

function init() {


  // renderer - the space in which all the objects and the camera appears, this is 
  // re-rendered ~60x/second
  renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, alpha: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  $('#containerG').append( renderer.domElement );
//#containerG is the div in galaxy.html that the whole 3D scene is attached to

  // scene - contains all the planets, etc. 
  scene = new THREE.Scene();

  //camera
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 100;
  //camera.position.z = 35;
  camera.position.y = 0;

  camera.lookAt(new THREE.Vector3(0,0,0));
   //camera stays fixed on the position occupied by the sun, can be modified with code on line 138 to follow a planet's orbit
  //Camera cannot follow objects (which include planets with their own moons), hence following Mars instead of Earth.
  //Scott thinks it's prettier, but lost in a 2-1 vote.  


  scene.add(theEarthAndMoon);
  theEarthAndMoon.add(theEarth);
  theEarthAndMoon.add(cloudMesh);
  theEarthAndMoon.add(theMoon);

  scene.add( light );
  scene.add( aLight );
  

}

function animate() {

  requestAnimationFrame( animate ); //<-- superior to setInterval because animate stops on inactive tabs, so lighter and more battery friendly

  render();

}

function render() {


  var moonRadians = moonOrbitAngle * Math.PI / 180;


  theEarthAndMoon.rotation.y -= .003;
  theEarthAndMoon.rotation.z -= .00005;

  cloudMesh.rotation.y -= .001; 


  //run the Moon's orbit around the Earth
  moonOrbitAngle += moonOrbitSpeed;

  theMoon.position.y = Math.cos(moonRadians) * moonOrbitRadius;
  theMoon.position.z = Math.sin(moonRadians) * moonOrbitRadius;
  theMoon.rotation.y -= .002; 

  // render
  renderer.render( scene, camera );

}
