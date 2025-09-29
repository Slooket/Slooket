const avatarGrid = document.getElementById('avatarGrid');

// Replace with your actual avatar filenames
const avatars = [
  'cat.png',
  'dragon.png',
  'toast.png',
  'alien.png',
  'ghost.png',
  'robot.png',
  'banana.png',
  'wizard.png'
];

avatars.forEach(name => {
  const img = document.createElement('img');
  img.src = `avatars/${name}`;
  avatarGrid.appendChild(img);
});
