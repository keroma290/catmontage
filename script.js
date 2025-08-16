// face_list.json を読み込んで顔の選択肢を追加する
fetch('face_list.json')
  .then(response => response.json())
  .then(faceList => {
    const faceSelect = document.getElementById('faceSelect');
    faceList.forEach((face, index) => {
      if (face.startsWith('face')) { // "face" で始まるものだけ追加
        const option = document.createElement('option');
        option.value = face;
        option.textContent = face;
        faceSelect.appendChild(option);
      }
    });
  })
  .catch(error => {
    console.error('顔リストの読み込みに失敗しました:', error);
  });
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
