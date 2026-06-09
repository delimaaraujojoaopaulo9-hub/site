/* ── Background 3D scene ── */
(function () {
  var canvas = document.getElementById('canvas-bg');
  if (!canvas || typeof THREE === 'undefined') return;

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 40;

  /* Starfield */
  var starGeo = new THREE.BufferGeometry();
  var starCount = 4000;
  var positions = new Float32Array(starCount * 3);
  for (var i = 0; i < starCount * 3; i++) positions[i] = (Math.random() - 0.5) * 600;
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.4, transparent: true, opacity: 0.7 })));

  /* Rings */
  var rings = [];
  var ringColors = [0x00d4ff, 0xb400ff, 0xff006e];
  for (var j = 0; j < 6; j++) {
    var ring = new THREE.Mesh(
      new THREE.TorusGeometry(6 + j * 3, 0.08, 16, 80),
      new THREE.MeshBasicMaterial({ color: ringColors[j % 3], transparent: true, opacity: 0.15 + j * 0.03 })
    );
    ring.position.set((Math.random() - 0.5) * 60, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 20 - 30);
    ring.rotation.x = Math.random() * Math.PI;
    ring.rotation.y = Math.random() * Math.PI;
    scene.add(ring);
    rings.push(ring);
  }

  /* Icosahedra */
  var icos = [];
  for (var k = 0; k < 8; k++) {
    var mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2 + Math.random() * 1.5, 0),
      new THREE.MeshBasicMaterial({ color: ringColors[k % 3], wireframe: true, transparent: true, opacity: 0.15 })
    );
    mesh.position.set((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 30 - 20);
    scene.add(mesh);
    icos.push({ mesh: mesh, speed: 0.002 + Math.random() * 0.003 });
  }

  var mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', function (e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('resize', function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  function animate() {
    requestAnimationFrame(animate);
    rings.forEach(function (r, idx) {
      r.rotation.x += 0.001 * (idx % 2 === 0 ? 1 : -1);
      r.rotation.z += 0.002 * (idx % 2 === 0 ? -1 : 1);
    });
    icos.forEach(function (o) {
      o.mesh.rotation.x += o.speed;
      o.mesh.rotation.y += o.speed * 1.3;
    });
    camera.position.x += (mouseX * 4 - camera.position.x) * 0.04;
    camera.position.y += (-mouseY * 3 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  animate();
})();

/* ── Hero orb ── */
(function () {
  var canvas = document.getElementById('model-viewer');
  if (!canvas || typeof THREE === 'undefined') return;

  var w = canvas.offsetWidth || 460;
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, w);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 6;

  var sphere = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2, 3),
    new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.25 })
  );
  scene.add(sphere);

  var inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.4, 2),
    new THREE.MeshBasicMaterial({ color: 0xb400ff, transparent: true, opacity: 0.35 })
  );
  scene.add(inner);

  var coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
  var core = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), coreMat);
  scene.add(core);

  var ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.6, 0.06, 16, 100),
    new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.6 })
  );
  ring.rotation.x = Math.PI / 2.2;
  scene.add(ring);

  var pGeo = new THREE.BufferGeometry();
  var pPos = new Float32Array(300 * 3);
  for (var i = 0; i < 300; i++) {
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(2 * Math.random() - 1);
    var r = 2.2 + (Math.random() - 0.5) * 0.8;
    pPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pPos[i * 3 + 2] = r * Math.cos(phi);
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xff006e, size: 0.05, transparent: true, opacity: 0.8 })));

  var t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.008;
    sphere.rotation.y = t * 0.5;
    sphere.rotation.x = t * 0.2;
    inner.rotation.y = -t * 0.7;
    inner.rotation.z = t * 0.3;
    ring.rotation.z = t * 0.4;
    coreMat.opacity = 0.7 + 0.2 * Math.sin(t * 2);
    renderer.render(scene, camera);
  }
  animate();
})();

/* ── Scroll reveal ── */
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

/* ── Counter animation ── */
var counterObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (!e.isIntersecting) return;
    var el = e.target;
    var target = +el.dataset.target;
    var step = target / 60;
    var current = 0;
    var timer = setInterval(function () {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString('pt-BR');
      if (current >= target) clearInterval(timer);
    }, 25);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(function (el) { counterObserver.observe(el); });
