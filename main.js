onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const text = "Chúc toàn thể nhân viên nữ (phòng tổ chức hành chính with love) có một ngày 20/10 tràn đầy niềm vui, yêu thương và hạnh phúc❤️.";
  const greeting = document.getElementById("greeting");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      greeting.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 20);
    }
  }

  typeEffect();
};
