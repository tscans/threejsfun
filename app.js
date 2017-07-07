//renderer
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'),antialias: true});
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//new camera
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
var scene = new THREE.Scene();

//add lighting
var light = new THREE.AmbientLight(0xffffff,0.5);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff,0.5);
scene.add(light2);

//creating mesh
var geometry = new THREE.CubeGeometry(100,100,100);
var material = new THREE.MeshLambertMaterial({color: 0xff00ff});
var mesh = new THREE.Mesh(geometry,material);
mesh.position.set(0,0,-1000);

scene.add(mesh);


//animation loop
requestAnimationFrame(render);
function render(){
	mesh.rotation.x += 0.1;
	mesh.rotation.y += 0.1;
	renderer.render(scene,camera);
	requestAnimationFrame(render);
}
