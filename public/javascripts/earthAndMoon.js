earthOrbitRadius = 300,
earthOrbitAngle = 80,
earthOrbitSpeed = 0.1,

moonOrbitRadius = 24,
moonOrbitAngle = 20,
moonOrbitSpeed = 0.7;


var textureLoader = new THREE.TextureLoader();
theEarthAndMoon = new THREE.Object3D();
theEarthAndMoon.rotation.z = 12 * Math.PI / 180; //tilt of earth in radians;
theEarthAndMoon.receiveShadow = true; 


var earthGeometry = new THREE.SphereGeometry(15, 28.8, 20);
var earthMap  = textureLoader.load('../images/earthmap1k.jpg');
var earthBump = textureLoader.load('../images/earthbump1k.jpg');
var earthSpec = textureLoader.load('../images/earthspec1k.jpg');
var earthTexture =  new THREE.MeshPhongMaterial( { map: earthMap, bumpMap: earthBump, specularMap: earthMap} );
var theEarth = new THREE.Mesh(earthGeometry, earthTexture );

var cloudGeometry   = new THREE.SphereGeometry(15.5, 28.8, 14.4);
var canvasCloud = textureLoader.load('../images/earth_clouds.png');
var cloudMaterial  = new THREE.MeshPhongMaterial( {map: canvasCloud, transparent: true, depthWrite: false, opacity: .7} );
var cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);


theMoon = new THREE.Mesh(new THREE.SphereGeometry(5, 16, 15),  new THREE.MeshPhongMaterial({

    map: textureLoader.load('../images/moonmap1k.jpg'), 
   
  
}));


var aLight = new THREE.AmbientLight( 0x112233 ); // soft white light



var light = new THREE.PointLight( 0xF0F0F0, 1);
light.position.set( -100, 0, 40 );