function setText() {
  const textElm = document.getElementById("text");

  if (!textElm) return false;

  textElm.innerHTML = "I'm BATMAN!!!";
}

export function init() {
  setText();
}
