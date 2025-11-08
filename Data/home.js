/*
  File ini berisi konten HTML untuk halaman beranda (homepage).
*/
export const homeContent = `
<style>
  /* Style khusus untuk halaman beranda */
  .homepage-container {
    text-align: center;
    padding-top: 20px;
    /* Ambil warna teks dari variabel agar mendukung dark mode */
    color: var(--bs-black); 
  }
  .homepage-logo {
    width: 150px;
    height: auto;
    margin-bottom: 20px;
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
    /* Ambil warna garis dari variabel */
    border-bottom: 2px solid var(--bs-yellow);
    padding-bottom: 5px;
  }
  .homepage-container hr {
    border: none;
    height: 1px;
    background-color: var(--border-color); /* Garis pemisah */
    margin: 30px 0;
  }
</style>

<div class="homepage-container">
  <img src="assets/image/logo.png" alt="Logo PkM" class="homepage-logo">
  
  <h1>Selamat Datang di Website Pembelajaran PkM</h1>
  <p style="font-size: 1.1em;">
    Sumber belajar pemrograman gratis yang didedikasikan sebagai bagian dari
    Pengabdian kepada Masyarakat (PkM).
  </p>

  <hr>

  <h2>Bagaimana Cara Memulai?</h2>
  <p>
    Cukup klik tombol <strong>"Tutorials"</strong>, <strong>"References"</strong>, atau <strong>"Excersices"</strong>
    di menu header untuk menjelajahi semua materi yang kami tawarkan.
  </p>

  <div class="features">
    <div class="feature-item">
      <h3><i class="fa-solid fa-book-open"></i> Tutorials</h3>
      <p>
        Panduan mendalam dan langkah demi langkah untuk mempelajari
        teknologi web dari dasar, seperti HTML, CSS, dan JavaScript.
      </p>
    </div>
    <div class="feature-item">
      <h3><i class="fa-solid fa-list-ul"></i> References</h3>
      <p>
        Butuh contekan cepat? Gunakan bagian ini untuk melihat referensi
        sintaks, tag, dan properti untuk berbagai bahasa.
      </p>
    </div>
    <div class="feature-item">
      <h3><i class="fa-solid fa-pencil"></i> Excersices</h3>
      <p>
        Uji pemahaman Anda! Kerjakan latihan interaktif untuk
        mempertajam kemampuan coding Anda.
      </p>
    </div>
  </div>
</div>
`;
