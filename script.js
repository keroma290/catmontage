function updateCat() {
  const canvas = document.getElementById('catCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const selectedFace = document.getElementById('faceSelect').value;
  const selectedEyes = document.getElementById('eyesSelect').value;
  const selectedMouth = document.getElementById('mouthSelect').value;

  const parts = [
    selectedFace,
    selectedEyes,
    selectedMouth,
    'whiskers1'
  ];

  Promise.all(
    parts.map(name => {
      return new Promise(resolve => {
        const img = new Image();
        img.src = `images/${name}.png`;
        img.onload = () => resolve(img);
      });
    })
  ).then(images => {
    images.forEach(img => {
      ctx.drawImage(img, 0, 0);
    });
  });
}

window.onload = updateCat;
