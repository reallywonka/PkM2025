export const homeContent = `
<style>
  /* Kalau pen ada yang di ubah monggo [Alif] */
  .homepage-container {
    text-align: center;
    padding: 20px 40px; 
    color: var(--bs-black);
  }

  .hero-section {
    background: linear-gradient(135deg, var(--sidebar-bg), var(--bs-white));
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 30px;
    border: 1px solid var(--border-color);
  }

  .homepage-logo {
    width: 120px; 
    height: auto;
    margin-bottom: 15px;
  }

  .hero-section h1 {
    font-size: 2.5em;
    font-weight: 700;
    margin: 10px 0;
  }

  .hero-section p.subtitle {
    font-size: 1.2em;
    color: var(--bs-black);
    opacity: 0.8;
    max-width: 600px;
    margin: 15px auto 30px;
  }

  .cta-button {
    background-color: var(--bs-black);
    color: var(--bs-white);
    padding: 15px 30px;
    font-size: 1.1em;
    font-weight: 700;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s;
  }
  
  /* Gua ngubah Dark Mode buat Tombol CTA */
  body.dark-mode .cta-button {
    background-color: var(--bs-yellow);
    color: #282a35; 
  }

  .cta-button:hover {
    transform: scale(1.05);
  }

  /* Kisi Teknologi */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 40px;
    text-align: left;
  }

  .tech-item {
    background-color: var(--bs-white);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    transition: box-shadow 0.2s ease;
  }

  .tech-item:hover {
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  }
  
  body.dark-mode .tech-item:hover {
     box-shadow: 0 4px 15px rgba(255,255,255,0.05);
  }

  .tech-item i {
    font-size: 2em;
    color: var(--bs-yellow); /* Warna kuning sebagai aksen */
  }
  
  /* [BARU] Penyesuaian Dark Mode untuk Ikon */
  body.dark-mode .tech-item i {
    color: var(--bs-black); /* Jadi teks terang di dark mode */
  }

  .tech-item h3 {
    font-size: 1.2em;
    margin-top: 10px;
    color: var(--bs-black);
  }

  .homepage-container hr {
    border: none;
    height: 1px;
    background-color: var(--border-color); /* Garis pemisah */
    margin: 40px 0;
  }

  .features {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    text-align: left;
    flex-wrap: wrap; /* Agar responsif di layar kecil */
    gap: 20px;
  }
  .feature-item {
    width: 30%;
    min-width: 250px; /* Agar tidak terlalu kecil */
  }
  .feature-item h3 {
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 5px;
  }
</style>

<div class="homepage-container">

  <div class="hero-section">
    <img src="assets/image/logo.png" alt="Logo PkM" class="homepage-logo">
    
    <h1>Ayo Belajar Ngoding</h1>
    
    <p class="subtitle">
      Kuasai teknologi web dan wujudkan idemu menjadi kenyataan.
    </p>
    
    <button class="cta-button" id="home-start-btn">
      <i class="fa-solid fa-rocket"></i> Mulai Belajar Sekarang!
    </button>
  </div>

  <h2>Apa yang Akan Dipelajari?</h2>
  
  <div class="tech-grid">
    <div class="tech-item">
      <i class="fa-brands fa-html5"></i>
      <h3>HTML</h3>
      <p>Struktur dasar dan pondasi dari semua halaman web.</p>
    </div>
    <div class="tech-item">
      <i class="fa-brands fa-css3-alt"></i>
      <h3>CSS</h3>
      <p>Cara mempercantik dan mendesain tampilan website Anda.</p>
    </div>
    <div class="tech-item">
      <i class="fa-brands fa-js"></i>
      <h3>JavaScript</h3>
      <p>Membuat website menjadi interaktif dan dinamis.</p>
    </div>
    <div class="tech-item">
      <i class="fa-solid fa-palette"></i>
      <h3>UI/UX</h3>
      <p>Prinsip desain agar website mudah dan nyaman digunakan.</p>
    </div>
  </div>

  <hr>

  <h2>Fitur Utama</h2>
  <div class="features">
    <div class="feature-item">
      <h3><i class="fa-solid fa-book-open"></i> Tutorials</h3>
      <p>
        Panduan mendalam dan langkah demi langkah untuk mempelajari
        teknologi web dari dasar.
      </p>
    </div>
    <div class="feature-item">
      <h3><i class="fa-solid fa-list-ul"></i> References</h3>
      <p>
        Contekan cepat untuk melihat referensi
        sintaks, tag, dan properti.
      </p>
    </div>
    <div class="feature-item">
      <h3><i class="fa-solid fa-pencil"></i> Excersices</h3>
      <p>
        Uji pemahaman Anda dengan latihan interaktif
        untuk mempertajam kemampuan.
      </p>
    </div>
  </div>
</div>
`;