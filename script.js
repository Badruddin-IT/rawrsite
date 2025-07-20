
function openLetter() {
  document.body.classList.remove("start-page");
  window.location.href = "letter.html";
}

window.onload = () => {
  if (document.body.classList.contains("letter-page")) {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleImage = new Image();
    particleImage.src = "assets/particle.png";

    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = 20 + Math.random() * 20;
        this.speed = 1 + Math.random() * 2;
        this.opacity = 1;
      }

      update() {
        this.y -= this.speed;
        this.opacity -= 0.005;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(particleImage, this.x, this.y, this.size, this.size);
        ctx.globalAlpha = 1;
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < 100) {
        particles.push(new Particle());
      }

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.opacity <= 0) {
          particles.splice(i, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    particleImage.onload = animate;
  }
};
