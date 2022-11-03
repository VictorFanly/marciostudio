const img = document.querySelector('.logo')
img.ondragstart = () => {
  return false;
};