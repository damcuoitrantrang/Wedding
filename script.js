
// Optional: Click to expand image
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%;">`;

    modal.addEventListener('click', () => document.body.removeChild(modal));
    document.body.appendChild(modal);
  });
});

//Scrolldown
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add("visible");
    }
  });
});


let currentGroup = 0;

document.querySelectorAll('.gallery-wrap').forEach(galleryWrap => {
  const gallery = galleryWrap.querySelector('.gallery');
  const images = gallery.querySelectorAll('img');
  const imagesPerView = 3;

  function updateGallery() {
    const imgWidth = images[0].clientWidth + 10;
    const offset = currentGroup * imgWidth * imagesPerView;
    gallery.style.transform = `translateX(-${offset}px)`;
  }

  galleryWrap.querySelector('.next').addEventListener('click', () => {
    if ((currentGroup + 1) * imagesPerView < images.length) {
      currentGroup++;
      updateGallery();
    }
  });

  galleryWrap.querySelector('.prev').addEventListener('click', () => {
    if (currentGroup > 0) {
      currentGroup--;
      updateGallery();
    }
  });

  window.addEventListener('resize', updateGallery);
});


//Popup
function closeSplash(person) {
  console.log("Chosen:", person); // optional use
  const splash = document.getElementById("splash-popup");
  splash.style.transition = "opacity 0.5s ease";
  splash.style.opacity = "0";
  setTimeout(() => splash.style.display = "none", 500);
}

// Heart Animation background
const heartContainer = document.querySelector('.love-background');
const heartEmojis = ['💖','💗','💘','💝','💕','💞','💓','💟','❤️','❣️'];

for (let i = 0; i < 30; i++) {
  const heart = document.createElement('span');
  heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  const size = Math.random() * 1.5 + 1;
  const left = Math.random() * 100;
  const delay = Math.random() * 5;
  const duration = 6 + Math.random() * 4;

  heart.style.left = `${left}vw`;
  heart.style.fontSize = `${size}rem`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.animationDuration = `${duration}s`;

  heartContainer.appendChild(heart);
}


// Scroll Animation
// Animation Style
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.reveal, .fade-left, .fade-right, .zoom-in, .rotate-in, .bounce-in')
  .forEach(elem => observer.observe(elem));

//  Toggle Info : click chú rể và cô dâu
function toggleInfo(personDiv) {
  personDiv.classList.toggle('show-info');
}


//QRCODE
// popup.classList.add("show"); // when open
// popup.classList.remove("show"); // when close

document.addEventListener("DOMContentLoaded", function () {
  const openGift = document.getElementById("openGift");
  const closeGift = document.getElementById("closeGift");
  const popup = document.getElementById("giftPopup");

  if (openGift && closeGift && popup) {
    openGift.addEventListener("click", () => {
      popup.classList.add("show");
    });

    closeGift.addEventListener("click", () => {
      popup.classList.remove("show");
    });
  }
      // Close popup when clicking outside the popup content
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
});




// music button
document.addEventListener('DOMContentLoaded', function () {
  const music = document.getElementById('background-music');
  const toggleBtn = document.getElementById('music-toggle');

  // Chờ người dùng tương tác lần đầu để phát nhạc
  function startMusic() {
    music.play().then(() => {
      toggleBtn.classList.add('playing');
    }).catch(err => {
      console.log('Trình duyệt không cho tự động phát nhạc:', err);
    });
    document.removeEventListener('click', startMusic);
  }
  document.addEventListener('click', startMusic);

  // Bấm nút để bật/tắt
  toggleBtn.addEventListener('click', function () {
    if (music.paused) {
      music.play();
      toggleBtn.classList.add('playing');
    } else {
      music.pause();
      toggleBtn.classList.remove('playing');
    }
  });
});



