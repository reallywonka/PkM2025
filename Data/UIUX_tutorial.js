// Data khusus untuk materi Design UI/UX
export const design = {
  title: "Design UI/UX",
  lessons: [
    {
      id: "design-intro",
      title: "Apa itu UI/UX?",
      content: `
          <h1>Apa itu Desain UI/UX?</h1>
          <p>Saat membuat website, koding (HTML, CSS, JS) hanyalah setengah dari pekerjaan. Setengah lainnya adalah <strong>desain</strong>: bagaimana tampilannya dan bagaimana rasanya saat digunakan.</p>
          <p>Di sinilah istilah UI dan UX muncul.</p>
          
          <h3>UI (User Interface)</h3>
          <p><strong>UI</strong> atau <strong>Antarmuka Pengguna</strong> adalah bagian visual dari website. Ini adalah apa yang Anda SIR. Ini mencakup:</p>
          <ul>
            <li>Tata letak (layout) halaman.</li>
            <li>Warna yang digunakan (palet warna).</li>
            <li>Bentuk tombol-tombol.</li>
            <li>Jenis huruf (tipografi) yang Anda baca.</li>
            <li>Gambar dan ikon.</li>
          </ul>
          <p><strong>Tujuan UI:</strong> Membuat website terlihat <strong>cantik</strong>, <strong>profesional</strong>, dan <strong>konsisten</strong>.</p>
          
          <h3>UX (User Experience)</h3>
          <p><strong>UX</strong> atau <strong>Pengalaman Pengguna</strong> adalah bagaimana perasaan pengguna saat menggunakan website Anda. Ini adalah pengalaman "rasa"-nya.</p>
          <ul>
            <li>Apakah website ini <strong>mudah digunakan</strong>?</li>
            <li>Apakah pengguna bisa menemukan informasi yang mereka cari dengan cepat?</li>
            <li>Apakah alurnya logis (misal: proses checkout di toko online)?</li>
            <li>Apakah pengguna merasa <strong>nyaman</strong> atau malah <strong>frustrasi</strong>?</li>
          </ul>
          <p><strong>Tujuan UX:</strong> Membuat website menjadi <strong>efisien</strong>, <strong>mudah dipahami</strong>, dan <strong>menyenangkan</strong> untuk digunakan.</p>
        `,
    },
    {
      id: "design-ui-vs-ux",
      title: "UI vs UX: Analogi",
      content: `
          <h1>Perbedaan UI vs UX (Analogi)</h1>
          <p>Cara terbaik memahami perbedaan UI dan UX adalah dengan analogi.</p>
          
          <h3>Analogi Botol Saus</h3>
          <p>Bayangkan sebuah botol saus tomat.</p>
          <ul>
            <li><strong>Desain UI</strong> adalah bentuk botol yang keren, label yang dicetak dengan warna cerah dan logo yang menarik. Ini semua tentang <strong>penampilan</strong>.</li>
            <li><strong>Desain UX</strong> adalah keputusan untuk membuat botol itu terbuat dari plastik yang bisa diremas (bukan kaca yang keras) dan meletakkan tutupnya di bagian bawah. Ini semua tentang <strong>kemudahan penggunaan</strong> (agar saus mudah keluar).</li>
          </ul>
          <p>Botol saus kaca yang kuno mungkin terlihat (UI) bagus, tetapi pengalaman menggunakannya (UX) buruk karena sausnya sulit keluar.</p>
          
          <h3>Analogi Rumah</h3>
          <ul>
            <li><strong>UI</strong> adalah warna cat, jenis sofa, model lampu, dan hiasan dinding.</li>
            <li><strong>UX</strong> adalah denah rumah. Apakah letak kamar mandi dekat dengan kamar tidur? Apakah dapur mudah diakses dari ruang makan?</li>
          </ul>
          <p><strong>Kesimpulan:</strong> UI adalah bagian dari UX. Anda tidak bisa memiliki UX yang baik tanpa UI yang baik, dan sebaliknya.</p>
        `,
    },
    {
      id: "design-principles",
      title: "Prinsip Desain Dasar",
      content: `
          <h1>Prinsip Desain Dasar (CRAP)</h1>
          <p>Ada empat prinsip dasar desain visual yang sangat membantu membuat UI terlihat profesional. Mereka sering disingkat CRAP (Contrast, Repetition, Alignment, Proximity).</p>
          
          <h3>1. Contrast (Kontras)</h3>
          <p>Kontras adalah tentang membuat elemen yang berbeda terlihat benar-benar berbeda. Ini adalah cara paling efektif untuk menarik perhatian.</p>
          <ul>
            <li>Kontras warna (misal: tombol kuning di latar belakang hitam).</li>
            <li>Kontras ukuran (judul besar, teks paragraf kecil).</li>
            <li>Kontras font (font tebal untuk judul, font tipis untuk subjudul).</li>
          </ul>
          <p><strong>Tujuan:</strong> Menghindari elemen yang "mirip tapi tidak sama" dan menciptakan fokus visual.</p>

          <h3>2. Repetition (Pengulangan)</h3>
          <p>Pengulangan berarti menggunakan kembali elemen desain yang sama di seluruh website Anda.</p>
          <ul>
            <li>Menggunakan palet warna yang sama di semua halaman.</li>
            <li>Semua judul <code>&lt;h1&gt;</code> memiliki ukuran dan font yang sama.</li>
            <li>Semua tombol memiliki bentuk dan gaya yang sama.</li>
          </ul>
          <p><strong>Tujuan:</strong> Menciptakan konsistensi dan tampilan yang profesional.</p>

          <h3>3. Alignment (Perataan)</h3>
          <p>Perataan adalah tentang menempatkan elemen secara sengaja, tidak sembarangan. Setiap elemen harus memiliki hubungan visual dengan elemen lain di halaman.</p>
          <ul>
            <li>Rata kiri (paling umum untuk teks).</li>
            <li>Rata tengah (untuk judul atau blok teks pendek).</li>
            <li>Semua elemen dalam satu bagian harus lurus (rata kiri, kanan, atau tengah).</li>
          </ul>
          <p><strong>Tujuan:</strong> Menciptakan tampilan yang rapi, teratur, dan bersih.</p>

          <h3>4. Proximity (Kedekatan)</h3>
          <p>Proximity berarti mengelompokkan elemen-elemen yang berhubungan menjadi satu. Elemen yang tidak berhubungan harus dipisahkan.</p>
          <ul>
            <li>Judul artikel harus lebih dekat ke paragraf pertama artikel tersebut daripada ke paragraf terakhir dari artikel sebelumnya.</li>
            <li>Gambar harus dekat dengan teks yang menjelaskannya.</li>
          </ul>
          <p><strong>Tujuan:</strong> Mengatur informasi dan mengurangi kekacauan visual.</p>
        `,
    },
    {
      id: "design-colors",
      title: "UI - Teori Warna",
      content: `
          <h1>UI Desain: Teori Warna</h1>
          <p>Warna bukan hanya dekorasi; warna adalah alat komunikasi yang kuat dalam UI. Warna dapat membangkitkan emosi, menarik perhatian, dan memandu mata pengguna.</p>

          <h3>Aturan 60-30-10</h3>
          <p>Ini adalah aturan klasik desain interior yang sangat berguna untuk UI. Aturan ini membantu menciptakan palet warna yang seimbang:</p>
          <ul>
            <li><strong>60% (Warna Primer):</strong> Warna dominan Anda, sering digunakan untuk latar belakang atau area besar.</li>
            <li><strong>30% (Warna Sekunder):</strong> Warna yang kontras dengan warna primer, digunakan untuk menyorot elemen sekunder (seperti kartu, sub-header).</li>
            <li><strong>10% (Warna Aksen):</strong> Warna yang paling cerah dan paling menonjol. Gunakan sedikit saja untuk elemen yang paling penting (seperti tombol Call-to-Action/CTA, link aktif).</li>
          </ul>
          <pre>
/* Contoh Sederhana di CSS */
body {
  background-color: #f0f4f8; /* 60% - Primer (Putih kebiruan) */
}
.card {
  background-color: #ffffff; /* 30% - Sekunder (Putih bersih) */
}
.tombol-beli {
  background-color: #007bff; /* 10% - Aksen (Biru cerah) */
}
          </pre>
          
          <h3>Psikologi Warna Singkat</h3>
          <p>Warna yang berbeda memberikan pesan yang berbeda:</p>
          <ul>
            <li><strong>Merah:</strong> Bahaya, peringatan, penting, gairah. (Contoh: Notifikasi error, tombol 'Hapus').</li>
            <li><strong>Biru:</strong> Kepercayaan, keamanan, profesional, tenang. (Contoh: Perusahaan teknologi, bank, link).</li>
            <li><strong>Hijau:</strong> Sukses, alam, positif, pertumbuhan. (Contoh: Pesan 'Berhasil', tombol 'Simpan').</li>
            <li><strong>Kuning:</strong> Peringatan, optimisme, perhatian. (Contoh: Pesan 'Warning' ringan).</li>
          </ul>
        `,
    },
    {
      id: "design-typography",
      title: "UI - Tipografi",
      content: `
          <h1>UI Desain: Tipografi</h1>
          <p>Tipografi adalah seni dan teknik mengatur huruf agar teks mudah dibaca dan menarik secara visual. Di UI, tipografi sama pentingnya dengan warna.</p>

          <h3>Serif vs. Sans-Serif</h3>
          <p>Ini adalah dua kategori font utama:</p>
          <ul>
            <li><strong>Serif:</strong> Memiliki "kaki" atau guratan kecil di ujung huruf (Contoh: Times New Roman, Georgia). Memberi kesan tradisional, formal, dan elegan. Sangat mudah dibaca untuk teks cetak (buku, koran).</li>
            <li><strong>Sans-Serif:</strong> Tidak memiliki "kaki" (Contoh: Arial, Roboto, Helvetica). Memberi kesan modern, bersih, dan minimalis. Paling umum digunakan untuk layar digital (web, aplikasi) karena lebih jelas dalam ukuran kecil.</li>
          </ul>

          <h3>Hierarki Tipografi</h3>
          <p>Gunakan ukuran, ketebalan (font-weight), dan warna untuk menciptakan hierarki visual. Ini membantu pengguna memindai (scan) halaman dengan cepat.</p>
          <p>Pengguna harus bisa membedakan dengan jelas mana judul utama (<code>&lt;h1&gt;</code>), mana subjudul (<code>&lt;h2&gt;</code>), dan mana teks paragraf (<code>&lt;p&gt;</code>).</p>
          
          <h3>Tips Keterbacaan (Readability)</h3>
          <ul>
            <li><strong>Ukuran Font:</strong> Untuk paragraf di web, jangan gunakan ukuran lebih kecil dari <code>16px</code>.</li>
            <li><strong>Line Height (Spasi Baris):</strong> Beri ruang bernapas antar baris. Aturan yang baik adalah 1.4x hingga 1.6x dari ukuran font.</li>
            <li><strong>Line Length (Panjang Baris):</strong> Teks yang terlalu lebar sulit dibaca. Usahakan 45-75 karakter per baris.</li>
            <li><strong>Batasi Font:</strong> Jangan gunakan lebih dari 2-3 jenis font berbeda dalam satu website.</li>
          </ul>
        `,
    },
    {
      id: "design-accessibility",
      title: "UX - Aksesibilitas (a11y)",
      content: `
          <h1>UX Desain: Aksesibilitas (a11y)</h1>
          <p>Aksesibilitas (sering disingkat <strong>a11y</strong> - ada 11 huruf antara 'a' dan 'y') adalah praktik merancang produk agar dapat digunakan oleh semua orang, <strong>termasuk orang-orang dengan disabilitas</strong>.</</p>
          <p>Ini bukan fitur tambahan; ini adalah bagian inti dari UX yang baik. Website yang aksesibel juga lebih baik untuk SEO dan lebih mudah digunakan oleh semua orang.</p>

          <h3>1. Kontras Warna</h3>
          <p>Pastikan ada kontras yang cukup antara warna teks dan warna latar belakangnya. Orang dengan gangguan penglihatan (seperti rabun warna atau mata tua) akan kesulitan membaca teks dengan kontras rendah.</p>
          <div class="warning-box">
            <p><strong>Contoh Buruk:</strong> Teks abu-abu muda di atas latar belakang putih.</p>
          </div>
          <div class="info-box">
            <p><strong>Contoh Baik:</strong> Teks hitam di atas latar belakang putih.</p>
          </div>
          <p>Gunakan alat pemeriksa kontras online untuk memastikan rasio Anda memenuhi standar (WCAG).</p>
          
          <h3>2. Teks Alternatif (Alt Text)</h3>
          <p>Seperti yang dipelajari di HTML, selalu sediakan atribut <code>alt</code> yang deskriptif untuk setiap gambar. Pengguna tunanetra menggunakan <strong>screen reader</strong> (pembaca layar) yang akan membacakan teks alt ini.</p>
          <pre>
&lt;!-- Buruk --&gt;
&lt;img src="anjing.jpg" alt="gambar"&gt;

&lt;!-- Baik --&gt;
&lt;img src="anjing.jpg" alt="Seekor anjing Golden Retriever berlari di taman"&gt;
          </pre>

          <h3>3. Gunakan HTML Semantik</h3>
          <p>Pembaca layar juga menggunakan struktur HTML untuk bernavigasi. Gunakan elemen HTML sesuai maknanya, jangan hanya mengandalkan <code>&lt;div&gt;</code>.</p>
          <ul>
            <li>Gunakan <code>&lt;button&gt;</code> untuk elemen yang bisa diklik, bukan <code>&lt;div onclick="..."&gt;</code>.</li>
            <li>Gunakan <code>&lt;nav&gt;</code> untuk navigasi utama.</li>
            <li>Gunakan <code>&lt;main&gt;</code> untuk konten utama.</li>
          </ul>
        `,
    },
    {
      id: "design-process-ucd",
      title: "Proses Desain (UCD)",
      content: `
      <h1>Proses Desain: User-Centered Design (UCD)</h1>
      <p>Desain UI/UX yang hebat tidak dibuat secara acak. Desainer profesional mengikuti sebuah proses yang disebut <strong>User-Centered Design (UCD)</strong> atau Desain yang Berpusat pada Pengguna.</p>
      <p>UCD adalah filosofi yang menempatkan <strong>kebutuhan pengguna</strong> sebagai pusat dari setiap keputusan desain. Salah satu kerangka kerja (framework) UCD yang paling populer adalah <strong>Design Thinking</strong>, yang umumnya memiliki lima fase:</p>
      
      <ol>
        <li><strong>Empathize (Empati)</strong>
          <p>Fase di mana Anda berusaha memahami pengguna Anda secara mendalam. Tujuannya bukan untuk berasumsi, tetapi untuk benar-benar mengerti masalah, kebutuhan, dan motivasi mereka.
          <br><strong>Aktivitas:</strong> Wawancara pengguna, survei, observasi, membuat "User Persona".</p>
        </li>
      
        <li><strong>Define (Definisi)</strong>
          <p>Setelah mengumpulkan wawasan dari fase empati, Anda menganalisis dan mensintesis temuan tersebut untuk mendefinisikan masalah inti (core problem) yang akan Anda selesaikan.
          <br><strong>Aktivitas:</strong> Membuat "Problem Statement" (pernyataan masalah), "User Journey Map".</p>
        </li>
      
        <li><strong>Ideate (Ideasi)</strong>
          <p>Ini adalah fase curah pendapat (brainstorming). Anda menghasilkan sebanyak mungkin ide atau solusi untuk masalah yang telah didefinisikan. Kuantitas lebih penting daripada kualitas di tahap ini.
          <br><strong>Aktivitas:</strong> "Crazy 8s", membuat "User Flow" (alur pengguna), "Sitemap" (peta situs).</p>
        </li>
      
        <li><strong>Prototype (Purwarupa)</strong>
          <p>Anda memilih ide-ide terbaik dan mulai membangun versi "draf" dari solusi Anda. Ini bisa berupa apa saja, dari sketsa kertas hingga simulasi digital yang dapat diklik. Tujuannya adalah membuat sesuatu yang nyata untuk diuji.
          <br><strong>Aktivitas:</strong> Membuat Wireframe, Mockup, dan Prototipe Interaktif.</p>
        </li>
      
        <li><strong>Test (Uji)</strong>
          <p>Anda menguji purwarupa Anda dengan pengguna sungguhan untuk mendapatkan umpan balik. Fase ini sangat penting untuk menemukan kekurangan dalam desain Anda sebelum menghabiskan waktu dan uang untuk pengembangan (coding).
          <br><strong>Aktivitas:</strong> "Usability Testing" (Uji Ketergunaan).</p>
        </li>
      </ol><br>
      <div class="info-box">
        <h3>Bukan Proses yang Lurus</h3>
        <p>Penting untuk diingat bahwa proses ini bersifat <strong>iteratif</strong> (berulang), bukan linear. Hasil dari fase Uji (Test) sering kali membawa Anda kembali ke fase Ideasi (Ideate) atau bahkan Define (Definisi) untuk memperbaiki solusi Anda.</p>
      </div>
    `,
    },
    {
      id: "design-wireframe-prototype",
      title: "Wireframe vs Prototype",
      content: `
      <h1>Artefak Desain: Wireframe, Mockup, & Prototype</h1>
      <p>Sebelum menulis kode, desainer membuat "draf" visual untuk mengkomunikasikan ide mereka. Tiga istilah yang paling sering digunakan adalah Wireframe, Mockup, dan Prototype. Penting untuk mengetahui perbedaannya.</p>
      
      <h3>1. Wireframe (Sketsa Kasar)</h3>
      <p>Wireframe adalah sketsa berfidelitas rendah (low-fidelity) yang berfungsi sebagai "cetak biru" (blueprint) dari sebuah halaman. Wireframe tidak peduli dengan estetika (warna, font, atau gambar).</p>
      <ul>
        <li><strong>Fokus Utama:</strong> Struktur, tata letak (layout), penempatan konten, dan fungsionalitas dasar.</li>
        <li><strong>Analogi:</strong> Denah arsitektur sebuah rumah.</li>
        <li><strong>Tujuan:</strong> Mengatur informasi dan menyepakati alur dasar dengan cepat dan murah.</li>
      </ul>
      
      <h3>2. Mockup (Desain Visual)</h3>
      <p>Mockup adalah desain berfidelitas tinggi (high-fidelity) yang bersifat statis. Ini adalah gambaran tentang bagaimana produk akhir akan <strong>terlihat</strong> secara visual.</p>
      <ul>
        <li><strong>Fokus Utama:</strong> Desain UI. Ini mencakup palet warna, tipografi, ikon, gambar, dan spasi (whitespace).</li>
        <li><strong>Analogi:</strong> "Render 3D" fotorealistik dari rumah yang sudah jadi.</li>
        <li><strong>Tujuan:</strong> Memvisualisasikan tampilan dan nuansa (look and feel) akhir produk.</li>
      </ul>
      
      <h3>3. Prototype (Purwarupa Interaktif)</h3>
      <p>Prototype adalah simulasi berfidelitas tinggi (high-fidelity) dari produk akhir. Ini adalah gabungan dari Mockup (visual) dengan <strong>interaktivitas</strong>.</p>
      <p>Pengguna dapat mengklik tombol, melihat transisi halaman, dan berinteraksi dengan komponen seolah-olah itu adalah produk jadi.</p>
      <ul>
        <li><strong>Fokus Utama:</strong> Desain UX. Ini mensimulasikan alur pengguna (user flow) dan pengalaman pengguna.</li>
        <li><strong>Analogi:</strong> "Maket rumah" interaktif di mana Anda bisa membuka pintu dan menyalakan lampu.</li>
        <li><strong>Tujuan:</strong> Menguji ketergunaan (usability) dan alur desain dengan pengguna nyata sebelum diserahkan ke developer.</li>
      </ul>
    `,
    },
    {
      id: "design-ref-user-flow",
      title: "User Flow (Alur Pengguna)",
      content: `
          <h1>Referensi User Flow (Alur Pengguna)</h1>
          <p>User Flow adalah diagram visual (diagram alir) yang memetakan langkah-langkah yang diambil pengguna untuk menyelesaikan sebuah tugas spesifik di dalam aplikasi Anda.</p>
          <p>Ini dibuat pada fase <strong>Ideate (Ideasi)</strong>, sebelum membuat wireframe mendetail. Tujuannya adalah untuk memikirkan "alur" sebelum memikirkan "layar".</p>
          
          <h3>Komponen Dasar User Flow</h3>
          <table class="ref-table">
            <thead><tr><th>Bentuk</th><th>Nama</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Persegi Panjang (Kotak)</strong></td><td>Layar / Halaman</td><td>Mewakili satu layar atau halaman yang dilihat pengguna (misal: "Halaman Beranda", "Halaman Login").</td></tr>
              <tr><td><strong>Belah Ketupat (Diamond)</strong></td><td>Keputusan / Cabang</td><td>Mewakili titik di mana pengguna harus membuat pilihan (misal: "Sudah Punya Akun?", "Login Berhasil?").</td></tr>
              <tr><td><strong>Oval / Kapsul</strong></td><td>Titik Mulai / Selesai</td><td>Menandakan awal atau akhir dari sebuah alur (misal: "Mulai", "Selesai", "Keluar").</td></tr>
              <tr><td><strong>Panah</strong></td><td>Aksi / Arah</td><td>Menghubungkan bentuk-bentuk dan menunjukkan arah pergerakan pengguna.</td></tr>
            </tbody>
          </table>

          <div class="tip-box">
            <h3>Perbedaan Sitemap vs. User Flow</h3>
            <p><strong>Sitemap (Peta Situs)</strong> adalah tentang <strong>struktur informasi</strong> (hierarki halaman). Ini seperti daftar isi buku.</p>
            <p><strong>User Flow</strong> adalah tentang <strong>pergerakan dan aksi</strong> (langkah-langkah). Ini seperti satu bab spesifik yang menunjukkan cara melakukan sesuatu.</p>
          </div>
        `,
    },
    {
      id: "design-ref-accessibility-wcag",
      title: "Checklist Aksesibilitas (WCAG)",
      content: `
          <h1>Referensi Checklist Aksesibilitas (WCAG)</h1>
          <p>Aksesibilitas (a11y) memastikan produk Anda dapat digunakan oleh semua orang, termasuk penyandang disabilitas. Standar utamanya disebut <strong>WCAG</strong> (Web Content Accessibility Guidelines).</p>
          <p>Berikut adalah beberapa poin referensi cepat yang paling umum (dikenal sebagai <strong>POUR</strong>):</p>
          
          <h3>1. Perceivable (Dapat Dipersepsi)</h3>
          <p>Informasi harus dapat disajikan kepada pengguna dengan cara yang dapat mereka pahami.</p>
          <ul>
            <li><strong>Alt Text:</strong> Berikan teks alternatif (<code>alt</code>) yang deskriptif untuk semua gambar penting.</li>
            <li><strong>Kontras Warna:</strong> Pastikan rasio kontras antara teks dan latar belakang mencukupi (minimal 4.5:1 untuk teks normal).</li>
            <li><strong>Transkrip:</strong> Sediakan transkrip atau teks (captions) untuk konten audio dan video.</li>
          </ul>

          <h3>2. Operable (Dapat Dioperasikan)</h3>
          <p>Antarmuka (UI) harus dapat dioperasikan. Pengguna harus bisa menavigasi.</p>
          <ul>
            <li><strong>Navigasi Keyboard:</strong> Pastikan semua fungsionalitas (link, tombol, form) dapat diakses dan dioperasikan hanya dengan menggunakan keyboard (tombol Tab).</li>
            <li><strong>Target Klik:</strong> Pastikan tombol dan link memiliki area klik yang cukup besar (minimal 44x44px).</li>
            <li><strong>Jangan Andalkan Waktu:</strong> Beri pengguna cukup waktu untuk membaca dan menggunakan konten.</li>
          </ul>

          <h3>3. Understandable (Dapat Dipahami)</h3>
          <p>Informasi dan operasi UI harus mudah dipahami.</p>
          <ul>
            <li><strong>Label yang Jelas:</strong> Semua input formulir harus memiliki <code>&lt;label&gt;</code> yang jelas.</li>
            <li><strong>Pesan Error:</strong> Pesan kesalahan harus jelas, spesifik, dan memberi tahu cara memperbaikinya.</li>
            <li><strong>Konsistensi:</strong> Gunakan navigasi dan penamaan yang konsisten di seluruh situs.</li>
          </ul>

          <h3>4. Robust (Kuat)</h3>
          <p>Konten harus cukup kuat untuk dapat ditafsirkan secara andal oleh berbagai macam teknologi bantu (seperti screen reader).</p>
          <ul>
            <li><strong>HTML Semantik:</strong> Gunakan tag HTML sesuai maknanya (<code>&lt;nav&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;main&gt;</code>), jangan hanya mengandalkan <code>&lt;div&gt;</code>.</li>
          </ul>
        `,
    },
  ],
};
