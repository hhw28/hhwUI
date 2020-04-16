export default function scrollBarWidth() {
  const div = document.createElement("div");

  div.style.position = "absolute";
  div.style.top = div.style.left = "-99999px"; //把div放到屏幕之外，防止影响用户
  div.style.width = div.style.height = "100px";
  div.style.overflow = "scroll";

  document.body.appendChild(div);

  const width = div.offsetHeight - div.clientWidth;

  document.body.removeChild(div);

  return width;
}
