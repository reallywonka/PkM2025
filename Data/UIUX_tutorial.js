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
  ],
};