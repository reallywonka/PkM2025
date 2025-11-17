export const References = {
  // --- MATERI HTML
  html: {
    title: "HTML",
    lessons: [
      {
        id: "html-ref-basic",
        title: "Tag Dasar & Dokumen",
        content: `
          <h1>Referensi Tag Dasar</h1>
          <p>Tag-tag ini adalah fondasi dari setiap halaman HTML.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>Mendefinisikan bahwa dokumen ini adalah HTML5.</td></tr>
              <tr><td><code>&lt;html&gt;</code></td><td>Elemen root yang membungkus semua konten di halaman.</td></tr>
              <tr><td><code>&lt;head&gt;</code></td><td>Wadah untuk metadata (data tentang data), seperti <code>&lt;title&gt;</code>, <code>&lt;link&gt;</code> (CSS), dan <code>&lt;script&gt;</code>.</td></tr>
              <tr><td><code>&lt;title&gt;</code></td><td>Menentukan judul untuk halaman yang tampil di tab browser.</td></tr>
              <tr><td><code>&lt;body&gt;</code></td><td>Berisi semua konten yang terlihat oleh pengguna (teks, gambar, link, dll).</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-text",
        title: "Tag Teks & Judul",
        content: `
          <h1>Referensi Tag Teks</h1>
          <p>Tag yang digunakan untuk mengatur teks dan membuat hierarki konten.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code></td><td>Mendefinisikan level judul (Heading), dari 1 (paling penting) sampai 6 (paling tidak penting).</td></tr>
              <tr><td><code>&lt;p&gt;</code></td><td>Mendefinisikan sebuah paragraf.</td></tr>
              <tr><td><code>&lt;br&gt;</code></td><td>Memasukkan satu baris baru (line break). Tag ini kosong (tidak punya penutup).</td></tr>
              <tr><td><code>&lt;strong&gt;</code></td><td>Menandakan teks yang penting (importance). Tampil sebagai <strong>tebal</strong>.</td></tr>
              <tr><td><code>&lt;em&gt;</code></td><td>Menandakan teks yang ditekankan (emphasis). Tampil sebagai <em>miring</em>.</td></tr>
              <tr><td><code>&lt;span&gt;</code></td><td>Wadah inline generik untuk menata sebagian kecil teks (berguna untuk CSS).</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-list",
        title: "Tag Daftar (Lists)",
        content: `
          <h1>Referensi Tag Daftar</h1>
          <p>Tag untuk membuat daftar terurut, tidak terurut, dan deskripsi.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;ul&gt;</code></td><td>Mendefinisikan daftar tidak terurut (Unordered List), biasanya tampil sebagai bulet.</td></tr>
              <tr><td><code>&lt;ol&gt;</code></td><td>Mendefinisikan daftar terurut (Ordered List), biasanya tampil sebagai angka.</td></tr>
              <tr><td><code>&lt;li&gt;</code></td><td>Mendefinisikan item di dalam daftar (List Item), digunakan di dalam <code>&lt;ul&gt;</code> atau <code>&lt;ol&gt;</code>.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-links-images",
        title: "Link & Gambar",
        content: `
          <h1>Referensi Link & Gambar</h1>
          <p>Tag yang digunakan untuk menghubungkan halaman dan menampilkan media.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;a&gt;</code></td><td>Mendefinisikan sebuah hyperlink (Anchor).</td></tr>
              <tr><td><code>&lt;img&gt;</code></td><td>Menyematkan sebuah gambar ke dalam halaman.</td></tr>
            </tbody>
          </table>
          <h3>Atribut Umum</h3>
          <table class="ref-table">
            <thead><tr><th>Atribut</th><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>href</code></td><td><code>&lt;a&gt;</code></td><td>Menentukan URL (tujuan) dari link.</td></tr>
              <tr><td><code>src</code></td><td><code>&lt;img&gt;</code></td><td>Menentukan sumber (Source/URL) dari gambar.</td></tr>
              <tr><td><code>alt</code></td><td><code>&lt;img&gt;</code></td><td>Teks alternatif (penting untuk aksesibilitas) jika gambar gagal dimuat.</td></tr>
              <tr><td><code>target="_blank"</code></td><td><code>&lt;a&gt;</code></td><td>Membuka link di tab browser baru.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-forms",
        title: "Form (Formulir)",
        content: `
          <h1>Referensi Tag Form</h1>
          <p>Tag yang digunakan untuk mengumpulkan input dari pengguna.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;form&gt;</code></td><td>Wadah (container) yang membungkus semua elemen formulir.</td></tr>
              <tr><td><code>&lt;label&gt;</code></td><td>Mendefinisikan label untuk sebuah elemen <code>&lt;input&gt;</code> (penting untuk aksesibilitas).</td></tr>
              <tr><td><code>&lt;input&gt;</code></td><td>Elemen input utama. Tipenya diatur oleh atribut <code>type</code>.</td></tr>
              <tr><td><code>&lt;textarea&gt;</code></td><td>Area input teks multi-baris (untuk pesan, komentar, dll).</td></tr>
              <tr><td><code>&lt;select&gt;</code></td><td>Membuat menu dropdown (daftar pilihan).</td></tr>
              <tr><td><code>&lt;option&gt;</code></td><td>Mendefinisikan sebuah pilihan di dalam <code>&lt;select&gt;</code>.</td></tr>
              <tr><td><code>&lt;button&gt;</code></td><td>Mendefinisikan sebuah tombol yang dapat diklik.</td></tr>
            </tbody>
          </table>
          <h3>Atribut <code>type</code> yang Umum untuk <code>&lt;input&gt;</code></h3>
          <table class="ref-table">
            <thead><tr><th>Type</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>type="text"</code></td><td>Kotak input teks satu baris (default).</td></tr>
              <tr><td><code>type="password"</code></td><td>Kotak input teks yang menyembunyikan karakter (untuk kata sandi).</td></tr>
              <tr><td><code>type="radio"</code></td><td>Tombol radio (memilih satu dari banyak opsi).</td></tr>
              <tr><td><code>type="checkbox"</code></td><td>Kotak centang (memilih nol atau lebih dari banyak opsi).</td></tr>
              <tr><td><code>type="submit"</code></td><td>Sebuah tombol yang mengirimkan (submit) formulir.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-semantic",
        title: "HTML Semantik",
        content: `
          <h1>Referensi HTML Semantik</h1>
          <p>Elemen semantik adalah elemen HTML yang memiliki makna jelas, baik bagi browser maupun bagi pengembang. Elemen ini membantu struktur, aksesibilitas, dan SEO.</p>
          <p>Alih-alih menggunakan <code>&lt;div&gt;</code> untuk segala hal, gunakanlah elemen yang sesuai dengan kontennya.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi Makna</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;header&gt;</code></td><td>Mendefinisikan bagian kepala (header) untuk dokumen atau sebuah bagian (section). Biasanya berisi logo, navigasi, dan judul.</td></tr>
              <tr><td><code>&lt;nav&gt;</code></td><td>Mendefinisikan wadah (container) khusus untuk tautan navigasi utama.</td></tr>
              <tr><td><code>&lt;main&gt;</code></td><td>Mendefinisikan konten utama dan unik dari sebuah dokumen. Hanya boleh ada satu <code>&lt;main&gt;</code> per halaman.</td></tr>
              <tr><td><code>&lt;section&gt;</code></td><td>Mendefinisikan sebuah bagian (section) dalam dokumen yang memiliki tema atau pengelompokan logis.</td></tr>
              <tr><td><code>&lt;article&gt;</code></td><td>Mendefinisikan konten mandiri yang lengkap dan dapat didistribusikan secara independen (misal: postingan blog, artikel berita).</td></tr>
              <tr><td><code>&lt;aside&gt;</code></td><td>Mendefinisikan konten yang tidak terkait langsung dengan konten utama di sekitarnya (misal: sidebar, kotak info, iklan).</td></tr>
              <tr><td><code>&lt;footer&gt;</code></td><td>Mendefinisikan bagian kaki (footer) untuk dokumen atau sebuah bagian. Biasanya berisi info hak cipta, kontak, atau tautan terkait.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-media",
        title: "Audio & Video",
        content: `
          <h1>Referensi Tag Media</h1>
          <p>Tag yang digunakan untuk menyematkan konten media seperti audio dan video.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;audio&gt;</code></td><td>Menyematkan konten suara (audio).</td></tr>
              <tr><td><code>&lt;video&gt;</code></td><td>Menyematkan konten video.</td></tr>
              <tr><td><code>&lt;source&gt;</code></td><td>Digunakan di dalam <code>&lt;audio&gt;</code> atau <code>&lt;video&gt;</code> untuk menentukan beberapa format file media alternatif.</td></tr>
            </tbody>
          </table>
          <h3>Atribut Umum</h3>
          <table class="ref-table">
            <thead><tr><th>Atribut</th><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>controls</code></td><td><code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code></td><td>Menampilkan kontrol pemutar standar (play, pause, volume).</td></tr>
              <tr><td><code>autoplay</code></td><td><code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code></td><td>Memulai pemutaran media secara otomatis. (Sering diblokir oleh browser modern).</td></tr>
              <tr><td><code>muted</code></td><td><code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code></td><td>Membisukan audio. Sering diperlukan agar <code>autoplay</code> berfungsi.</td></tr>
              <tr><td><code>loop</code></td><td><code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code></td><td>Menyebabkan media diputar ulang secara otomatis setelah selesai.</td></tr>
              <tr><td><code>src</code></td><td><code>&lt;source&gt;</code></td><td>URL dari file media.</td></tr>
              <tr><td><code>type</code></td><td><code>&lt;source&gt;</code></td><td>Menentukan tipe MIME dari file media (misal: <code>video/mp4</code> atau <code>audio/mpeg</code>).</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-head-advanced",
        title: "Tag <head>",
        content: `
          <h1>Referensi Tag <code>&lt;head&gt;</code> Lanjutan</h1>
          <p>Selain <code>&lt;title&gt;</code> dan <code>&lt;meta&gt;</code> dasar, <code>&lt;head&gt;</code> adalah tempat untuk menautkan ikon situs (favicon) dan metadata untuk media sosial (Open Graph).</p>
          
          <h3>Favicon (Ikon Situs)</h3>
          <p>Favicon adalah ikon kecil yang muncul di tab browser, bookmark, dan hasil pencarian. Ini adalah bagian penting dari identitas brand Anda.</p>
          <pre>
&lt;!-- Cara modern paling sederhana (taruh favicon.ico di root) --&gt;
&lt;link rel="icon" href="/favicon.ico" sizes="any"&gt;

&lt;!-- Atau tautkan PNG --&gt;
&lt;link rel="icon" href="/icon.png" type="image/png"&gt;

&lt;!-- Apple Touch Icon (untuk saat di-bookmark di iPhone) --&gt;
&lt;link rel="apple-touch-icon" href="/apple-touch-icon.png"&gt;
          </pre>

          <h3>Meta Tag Open Graph (Untuk Media Sosial)</h3>
          <p>Pernahkah Anda membagikan link di WhatsApp atau Twitter dan melihat pratinjau (preview) cantik dengan judul, deskripsi, dan gambar? Itu diatur oleh meta tag <strong>Open Graph (OG)</strong>.</p>
          <pre>
&lt;!-- OG: Tipe konten --&gt;
&lt;meta property="og:type" content="website"&gt;

&lt;!-- OG: Judul yang akan tampil (lebih baik dari &lt;title&gt;) --&gt;
&lt;meta property="og:title" content="7 IN 1 Pemrograman Web Untuk Pemula"&gt;

&lt;!-- OG: Deskripsi singkat --&gt;
&lt;meta property="og:description" content="Belajar HTML, CSS, dan JavaScript dari dasar."&gt;

&lt;!-- OG: Gambar thumbnail (sangat penting!) --&gt;
&lt;meta property="og:image" content="https://www.url-situs-anda.com/gambar-preview.jpg"&gt;

&lt;!-- OG: URL dari halaman ini --&gt;
&lt;meta property="og:url" content="https://www.url-situs-anda.com/halaman-ini.html"&gt;
          </pre>
        `,
      },
      {
        id: "html-ref-input-types",
        title: "Tipe Input HTML5",
        content: `
          <h1>Referensi Tipe <code>&lt;input&gt;</code> HTML5</h1>
          <p>Selain <code>"text"</code> dan <code>"password"</code>, HTML5 memperkenalkan banyak tipe input baru yang menyediakan fungsionalitas dan validasi bawaan dari browser, terutama di perangkat seluler.</p>
          <table class="ref-table">
            <thead><tr><th>Atribut <code>type</code></th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>type="email"</code></td><td>Memvalidasi bahwa input harus berisi alamat email yang valid.</td></tr>
              <tr><td><code>type="number"</code></td><td>Memunculkan input angka (seringkali dengan panah atas/bawah) dan keyboard numerik di HP.</td></tr>
              <tr><td><code>type="date"</code></td><td>Memunculkan pemilih tanggal (datepicker) bawaan browser.</td></tr>
              <tr><td><code>type="color"</code></td><td>Memunculkan pemilih warna (color picker) bawaan browser.</td></tr>
              <tr><td><code>type="range"</code></td><td>Membuat slider (penggeser) untuk memilih nilai dalam rentang tertentu.</td></tr>
              <tr><td><code>type="tel"</code></td><td>Memunculkan keyboard telepon di perangkat seluler (tidak memvalidasi).</td></tr>
              <tr><td><code>type="search"</code></td><td>Secara fungsional mirip dengan <code>text</code>, tetapi secara visual sering menyertakan tombol 'X' untuk menghapus.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-table-span",
        title: "Atribut Tabel (Colspan & Rowspan)",
        content: `
          <h1>Referensi Atribut Tabel (<code>colspan</code> & <code>rowspan</code>)</h1>
          <p>Atribut ini digunakan di dalam tag <code>&lt;th&gt;</code> atau <code>&lt;td&gt;</code> untuk "menggabungkan" beberapa sel menjadi satu.</p>
          <table class="ref-table">
            <thead><tr><th>Atribut</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>colspan="N"</code></td><td>Menggabungkan sel secara <strong>horizontal</strong> (kolom). Sel akan mengambil ruang sebanyak N kolom.</td></tr>
              <tr><td><code>rowspan="N"</code></td><td>Menggabungkan sel secara <strong>vertikal</strong> (baris). Sel akan mengambil ruang sebanyak N baris.</td></tr>
            </tbody>
          </table>
          <h3>Contoh <code>colspan</code></h3>
          <pre>
&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th colspan="2"&gt;Nama Lengkap&lt;/th&gt; &lt;!-- Menggabung 2 kolom --&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Budi&lt;/td&gt;
    &lt;td&gt;Santoso&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
          </pre>
          <h3>Contoh <code>rowspan</code></h3>
          <pre>
&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;Nama&lt;/th&gt;
    &lt;td&gt;Budi&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th rowspan="2"&gt;Telepon&lt;/th&gt; &lt;!-- Menggabung 2 baris --&gt;
    &lt;td&gt;0812345&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;0876543&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
          </pre>
        `,
      },
      {
        id: "html-ref-data-attr",
        title: "Atribut data-*",
        content: `
          <h1>Referensi Atribut <code>data-*</code> (Data Attributes)</h1>
          <p>Atribut <code>data-*</code> adalah atribut global khusus yang memungkinkan Anda menyimpan informasi atau data kustom langsung pada elemen HTML.</p>
          <p>Sintaksnya selalu diawali dengan <code>data-</code>, diikuti oleh nama yang Anda inginkan (misal: <code>data-id</code>, <code>data-nama-user</code>).</p>
          <p>Atribut ini sangat berguna untuk "mengaitkan" data dari JavaScript ke elemen HTML tanpa harus membuat ID atau class yang rumit.</p>
          
          <h3>Contoh di HTML</h3>
          <pre>
&lt;ul&gt;
  &lt;li data-id="101" data-kategori="buah"&gt;Apel&lt;/li&gt;
  &lt;li data-id="102" data-kategori="sayur"&gt;Bayam&lt;/li&gt;
&lt;/ul&gt;
          </pre>

          <h3>Cara Mengakses di CSS</h3>
          <p>Anda dapat menata elemen berdasarkan atribut data menggunakan selektor atribut standar.</p>
          <pre>
/* Memilih semua elemen dengan data-kategori 'buah' */
[data-kategori="buah"] {
  color: red;
}
          </pre>

          <h3>Cara Mengakses di JavaScript</h3>
          <p>Cara termudah adalah menggunakan properti <code>.dataset</code>.</p>
          <pre>
let item = document.querySelector('li[data-id="101"]');

console.log(item.dataset.id);       // Output: "101"
console.log(item.dataset.kategori); // Output: "buah"
          </pre>
        `,
      },
      {
        id: "html-ref-iframe-attr",
        title: "Atribut <iframe> Lanjutan",
        content: `
          <h1>Referensi Atribut <code>&lt;iframe&gt;</code> Lanjutan</h1>
          <p>Selain <code>src</code> dan <code>title</code>, ada atribut modern yang sangat penting untuk keamanan dan performa <code>&lt;iframe&gt;</code>.</p>
          <table class="ref-table">
            <thead><tr><th>Atribut</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>loading="lazy"</code></td><td><strong>(Performa)</strong> Mencegah iframe (misal: video YouTube) dimuat oleh browser sampai pengguna melakukan scroll mendekati iframe tersebut. Ini sangat mempercepat waktu muat halaman.</td></tr>
              <tr><td><code>sandbox</code></td><td><strong>(Keamanan)</strong> Menerapkan serangkaian batasan keamanan pada konten di dalam iframe. Ini mencegah konten di dalam iframe melakukan hal-hal berbahaya (seperti menjalankan skrip, mengirim formulir, atau membuka pop-up).</td></tr>
              <tr><td><code>allowfullscreen</code></td><td>Secara eksplisit mengizinkan konten di dalam iframe (seperti video) untuk masuk ke mode layar penuh.</td></tr>
            </tbody>
          </table>
          <h3>Contoh <code>sandbox</code></h3>
          <p>Nilai atribut <code>sandbox</code> sering dikosongkan untuk menerapkan *semua* batasan, atau diisi dengan pengecualian yang diizinkan.</p>
          <pre>
&lt;iframe src="..." title="..." sandbox&gt;&lt;/iframe&gt;

&lt;iframe src="..." title="..." sandbox="allow-scripts"&gt;&lt;/iframe&gt;
          </pre>
        `,
      },
    ],
  },

  // --- MATERI CSS ---
  css: {
    title: "CSS",
    lessons: [
      {
        id: "css-ref-selectors",
        title: "Selektor Dasar",
        content: `
          <h1>Referensi Selektor Dasar</h1>
          <p>Selektor adalah pola yang digunakan untuk memilih elemen HTML yang ingin Anda gayai.</p>
          <table class="ref-table">
            <thead><tr><th>Selektor</th><th>Contoh</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td>Selektor Tipe/Tag</td><td><code>p { ... }</code></td><td>Memilih semua elemen <code>&lt;p&gt;</code>.</td></tr>
              <tr><td>Selektor Class</td><td><code>.info-box { ... }</code></td><td>Memilih semua elemen dengan <code>class="info-box"</code>.</td></tr>
              <tr><td>Selektor ID</td><td><code>#sidebar { ... }</code></td><td>Memilih satu elemen dengan <code>id="sidebar"</code>. ID harus unik.</td></tr>
              <tr><td>Selektor Universal</td><td><code>* { ... }</code></td><td>Memilih SEMUA elemen di halaman. (Gunakan dengan hati-hati).</td></tr>
              <tr><td>Grouping</td><td><code>h1, h2, h3 { ... }</code></td><td>Memilih semua elemen <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, DAN <code>&lt;h3&gt;</code>.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-ref-boxmodel",
        title: "Box Model",
        content: `
          <h1>Referensi Box Model</h1>
          <p>Semua elemen HTML adalah "kotak". Box Model adalah properti yang membangun kotak tersebut.</p>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>margin</code></td><td>Ruang transparan di <strong>luar</strong> border. Mendorong elemen lain menjauh.</td></tr>
              <tr><td><code>border</code></td><td>Garis yang mengelilingi padding dan konten.</td></tr>
              <tr><td><code>padding</code></td><td>Ruang transparan di <strong>dalam</strong> border, di sekitar konten.</td></tr>
              <tr><td><code>width</code> / <code>height</code></td><td>Mengatur lebar dan tinggi dari area <strong>konten</strong>.</td></tr>
            </tbody>
          </table>
          <div class="tip-box">
            <h3>box-sizing: border-box</h3>
            <p>Secara default, <code>width</code> hanya mengatur konten. Jika Anda menambahkan <code>padding</code> atau <code>border</code>, lebar total elemen akan bertambah.</p>
            <p>Gunakan <code>box-sizing: border-box;</code> agar <code>width</code> yang Anda atur adalah lebar TOTAL (termasuk padding dan border), yang jauh lebih intuitif.</p>
          </div>
        `,
      },
      {
        id: "css-ref-common-props",
        title: "Properti Umum",
        content: `
          <h1>Referensi Properti Umum</h1>
          <p>Beberapa properti CSS yang paling sering digunakan.</p>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th><th>Contoh Nilai</th></tr></thead>
            <tbody>
              <tr><td><code>color</code></td><td>Mengatur warna teks.</td><td><code>red</code>, <code>#FF0000</code>, <code>rgb(255,0,0)</code></td></tr>
              <tr><td><code>background-color</code></td><td>Mengatur warna latar belakang elemen.</td><td><code>lightblue</code>, <code>#F0F8FF</code></td></tr>
              <tr><td><code>font-size</code></td><td>Mengatur ukuran font.</td><td><code>16px</code>, <code>1.2em</code>, <code>120%</code></td></tr>
              <tr><td><code>font-family</code></td><td>Mengatur jenis font.</td><td><code>Arial, sans-serif</code></td></tr>
              <tr><td><code>font-weight</code></td><td>Mengatur ketebalan font.</td><td><code>normal</code>, <code>bold</code>, <code>700</code></td></tr>
              <tr><td><code>text-align</code></td><td>Mengatur perataan teks horizontal.</td><td><code>left</code>, <code>center</code>, <code>right</code></td></tr>
              <tr><td><code>display</code></td><td>Mengatur bagaimana elemen ditampilkan.</td><td><code>block</code>, <code>inline</code>, <code>flex</code>, <code>grid</code>, <code>none</code></td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-ref-flexbox",
        title: "Flexbox",
        content: `
          <h1>Referensi Flexbox</h1>
          <p>Flexbox adalah model tata letak (layout) satu dimensi untuk mengatur elemen dalam baris atau kolom.</p>
          <p>Untuk mengaktifkan, atur <code>display: flex;</code> pada elemen kontainer (induk).</p>
          <h3>Properti pada Kontainer (Induk)</h3>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>display: flex;</code></td><td>Mengaktifkan konteks flexbox untuk elemen anak.</td></tr>
              <tr><td><code>flex-direction</code></td><td>Mendefinisikan arah sumbu utama (<code>row</code>, <code>column</code>, <code>row-reverse</code>, <code>column-reverse</code>).</td></tr>
              <tr><td><code>justify-content</code></td><td>Mengatur perataan elemen di sepanjang sumbu utama (horizontal jika <code>row</code>).</td></tr>
              <tr><td><code>align-items</code></td><td>Mengatur perataan elemen di sepanjang sumbu silang (vertikal jika <code>row</code>).</td></tr>
              <tr><td><code>gap</code></td><td>Memberi jarak (spasi) antar elemen anak.</td></tr>
            </tbody>
          </table>
          <h3>Properti pada Elemen Anak (Item)</h3>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>flex-grow</code></td><td>Mengatur seberapa besar elemen bisa "tumbuh" (mengisi sisa ruang).</td></tr>
              <tr><td><code>flex-shrink</code></td><td>Mengatur seberapa besar elemen bisa "menyusut" jika ruang tidak cukup.</td></tr>
              <tr><td><code>flex-basis</code></td><td>Mengatur ukuran awal elemen sebelum sisa ruang didistribusikan.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-ref-positioning",
        title: "Positioning",
        content: `
          <h1>Referensi Positioning</h1>
          <p>Properti <code>position</code> menentukan metode penempatan (positioning) untuk sebuah elemen.</p>
          <table class="ref-table">
            <thead><tr><th>Nilai</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>static</code></td><td>Default. Elemen mengikuti alur normal dokumen. Properti <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> tidak berpengaruh.</td></tr>
              <tr><td><code>relative</code></td><td>Elemen diposisikan relatif terhadap posisi normalnya. Menggunakan <code>top</code>, <code>left</code>, dll. akan menggesernya dari titik tersebut tanpa memengaruhi elemen lain.</td></tr>
              <tr><td><code>absolute</code></td><td>Elemen diposisikan relatif terhadap leluhur (ancestor) terdekatnya yang memiliki posisi (selain <code>static</code>). Jika tidak ada, ia akan relatif terhadap <code>&lt;body&gt;</code>.</td></tr>
              <tr><td><code>fixed</code></td><td>Elemen diposisikan relatif terhadap viewport (jendela browser). Elemen akan tetap di tempat yang sama bahkan saat halaman di-scroll.</td></tr>
              <tr><td><code>sticky</code></td><td>Gabungan antara <code>relative</code> dan <code>fixed</code>. Elemen akan "menempel" (menjadi <code>fixed</code>) saat scroll mencapai posisi tertentu.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-ref-grid",
        title: "Grid Layout",
        content: `
          <h1>Referensi CSS Grid</h1>
          <p>CSS Grid adalah model tata letak (layout) dua dimensi (baris dan kolom). Ini adalah sistem yang sangat kuat untuk membuat layout halaman yang kompleks.</p>
          <p>Untuk mengaktifkan, atur <code>display: grid;</code> pada elemen kontainer (induk).</p>
          <h3>Properti pada Kontainer (Induk)</h3>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>display: grid;</code></td><td>Mengaktifkan konteks grid untuk elemen anak.</td></tr>
              <tr><td><code>grid-template-columns</code></td><td>Mendefinisikan jumlah dan ukuran kolom (misal: <code>1fr 1fr 200px</code>).</td></tr>
              <tr><td><code>grid-template-rows</code></td><td>Mendefinisikan jumlah dan ukuran baris.</td></tr>
              <tr><td><code>gap</code></td><td>Jarak (spasi) antar sel grid (misal: <code>10px</code>).</td></tr>
              <tr><td><code>justify-items</code></td><td>Mengatur perataan item secara horizontal di dalam sel mereka.</td></tr>
              <tr><td><code>align-items</code></td><td>Mengatur perataan item secara vertikal di dalam sel mereka.</td></tr>
            </tbody>
          </table>
          <h3>Properti pada Elemen Anak (Item)</h3>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>grid-column</code></td><td>Menentukan di kolom mana item harus ditempatkan (misal: <code>1 / 3</code>).</td></tr>
              <tr><td><code>grid-row</code></td><td>Menentukan di baris mana item harus ditempatkan.</td></tr>
              <tr><td><code>justify-self</code></td><td>Mengatur perataan horizontal satu item spesifik di dalam selnya.</td></tr>
              <tr><td><code>align-self</code></td><td>Mengatur perataan vertikal satu item spesifik di dalam selnya.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-ref-pseudo",
        title: "Pseudo-class & Pseudo-element",
        content: `
          <h1>Referensi Pseudo-class & Pseudo-element</h1>
          <p>Ini adalah kata kunci yang ditambahkan ke selektor untuk menata elemen dalam keadaan tertentu atau menata bagian tertentu dari elemen.</p>
          <h3>Pseudo-class (Status/Keadaan)</h3>
          <p>Ditulis dengan satu titik dua (<code>:</code>). Menata elemen berdasarkan statusnya.</p>
          <table class="ref-table">
            <thead><tr><th>Selektor</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>:hover</code></td><td>Saat kursor mouse berada di atas elemen.</td></tr>
              <tr><td><code>:active</code></td><td>Saat elemen sedang diklik atau diaktifkan.</td></tr>
              <tr><td><code>:focus</code></td><td>Saat elemen sedang dalam fokus (misal: input formulir yang sedang diketik).</td></tr>
              <tr><td><code>:nth-child(n)</code></td><td>Memilih elemen anak ke-n (misal: <code>:nth-child(odd)</code> untuk baris ganjil).</td></tr>
            </tbody>
          </table>
          <h3>Pseudo-element (Bagian dari Elemen)</h3>
          <p>Ditulis dengan dua titik dua (<code>::</code>). Menata bagian spesifik dari sebuah elemen.</p>
          <table class="ref-table">
            <thead><tr><th>Selektor</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>::before</code></td><td>Membuat elemen semu <strong>sebelum</strong> konten asli dari elemen yang dipilih.</td></tr>
              <tr><td><code>::after</code></td><td>Membuat elemen semu <strong>setelah</strong> konten asli dari elemen yang dipilih.</td></tr>
              <tr><td><code>::first-letter</code></td><td>Menata huruf pertama dari sebuah paragraf.</td></tr>
              <tr><td><code>::placeholder</code></td><td>Menata teks placeholder di dalam elemen <code>&lt;input&gt;</code> atau <code>&lt;textarea&gt;</code>.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-ref-transitions",
        title: "Transisi & Animasi",
        content: `
          <h1>Referensi Transisi & Animasi</h1>
          <p>CSS memungkinkan Anda menganimasikan perubahan properti secara mulus (smooth).</p>
          
          <h3>Transisi (<code>transition</code>)</h3>
          <p>Transisi digunakan untuk menganimasikan perubahan properti saat terjadi perubahan status (misalnya saat <code>:hover</code>).</p>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>transition-property</code></td><td>Properti CSS yang ingin dianimasikan (misal: <code>background-color</code>, <code>width</code>, <code>all</code>).</td></tr>
              <tr><td><code>transition-duration</code></td><td>Durasi total animasi (misal: <code>0.3s</code> atau <code>300ms</code>).</td></tr>
              <tr><td><code>transition-timing-function</code></td><td>Kurva kecepatan animasi (misal: <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>).</td></tr>
              <tr><td><code>transition-delay</code></td><td>Waktu tunda sebelum animasi dimulai.</td></tr>
            </tbody>
          </table>
          <pre>
/* Shorthand (Cara Cepat) */
.tombol {
  background-color: blue;
  transition: background-color 0.4s ease;
}

.tombol:hover {
  background-color: red; /* <-- Perubahan ini akan dianimasikan */
}
          </pre>

          <h3>Animasi (<code>@keyframes</code>)</h3>
          <p><code>@keyframes</code> digunakan untuk animasi yang lebih kompleks yang berjalan sendiri, tanpa perlu <code>:hover</code>.</p>
          <pre>
/* 1. Definisikan animasinya */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 2. Terapkan ke elemen */
.box-muncul {
  animation-name: fadeIn;
  animation-duration: 2s;
}
          </pre>
        `,
      },
      {
        id: "css-ref-specificity",
        title: "Hierarki & Specificity",
        content: `
          <h1>Referensi Hierarki CSS (Specificity)</h1>
          <p>Apa yang terjadi jika dua aturan CSS menargetkan elemen yang sama? <strong>Specificity (Kekhususan)</strong> adalah "skor" yang dihitung oleh browser untuk menentukan aturan mana yang akan menang (diterapkan).</p>
          <p>Aturan dengan skor tertinggi akan selalu menang.</p>
          
          <h3>Hierarki Skor (dari Tertinggi ke Terendah)</h3>
          <table class="ref-table">
            <thead><tr><th>Tipe Selektor</th><th>Skor (Contoh)</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>1. Style Inline</strong></td><td>(Skor: 1,0,0,0)</td><td><code>&lt;p style="color: red;"&gt;</code></td></tr>
              <tr><td><strong>2. ID</strong></td><td>(Skor: 0,1,0,0)</td><td><code>#judul { ... }</code></td></tr>
              <tr><td><strong>3. Class, Pseudo-class, Atribut</strong></td><td>(Skor: 0,0,1,0)</td><td><code>.tombol</code>, <code>:hover</code>, <code>[type="text"]</code></td></tr>
              <tr><td><strong>4. Elemen (Tag), Pseudo-element</strong></td><td>(Skor: 0,0,0,1)</td><td><code>p { ... }</code>, <code>::before</code></td></tr>
            </tbody>
          </table>
          
          <div class="tip-box">
            <h3>Contoh Perhitungan</h3>
            <ul>
              <li><code>p.info</code> (1 tag, 1 class) = Skor 0,0,1,1</li>
              <li><code>#sidebar a</code> (1 ID, 1 tag) = Skor 0,1,0,1</li>
            </ul>
            <p><code>#sidebar a</code> akan <strong>menang</strong> melawan <code>p.info</code> karena memiliki skor ID yang lebih tinggi.</p>
            <p><strong>Pengecualian:</strong> <code>!important</code> akan mengalahkan semua aturan di atas, tetapi penggunaannya sangat tidak disarankan karena merusak hierarki.</p>
          </div>
        `,
      },
      {
        id: "css-ref-text-styling",
        title: "Properti Teks Lanjutan",
        content: `
          <h1>Referensi Properti Teks Lanjutan</h1>
          <p>Properti-properti ini memberikan kontrol lebih rinci terhadap tampilan teks di luar <code>font-size</code> dan <code>color</code>.</p>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th><th>Contoh Nilai</th></tr></thead>
            <tbody>
              <tr><td><code>line-height</code></td><td>Mengatur jarak vertikal (spasi) antar baris teks. Sangat penting untuk keterbacaan.</td><td><code>1.6</code>, <code>150%</code>, <code>24px</code></td></tr>
              <tr><td><code>letter-spacing</code></td><td>Mengatur spasi antar karakter (huruf).</td><td><code>0.5px</code>, <code>-1px</code></td></tr>
              <tr><td><code>word-spacing</code></td><td>Mengatur spasi antar kata.</td><td><code>4px</code></td></tr>
              <tr><td><code>text-transform</code></td><td>Mengubah kapitalisasi teks secara otomatis.</td><td><code>uppercase</code>, <code>lowercase</code>, <code>capitalize</code></td></tr>
              <tr><td><code>text-decoration</code></td><td>Menambah atau menghapus dekorasi garis pada teks.</td><td><code>none</code> (biasa untuk link), <code>underline</code>, <code>line-through</code></td></tr>
              <tr><td><code>white-space</code></td><td>Mengontrol bagaimana spasi dan jeda baris (line break) di dalam elemen ditangani.</td><td><code>nowrap</code> (mencegah teks turun baris)</td></tr>
              <tr><td><code>text-overflow</code></td><td>Menentukan bagaimana teks yang "meluap" (overflow) dari kotaknya ditampilkan.</td><td><code>ellipsis</code> (menampilkan "...").</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-ref-combinators",
        title: "Selektor Kombinasi (Combinators)",
        content: `
          <h1>Referensi Selektor Kombinasi (Combinators)</h1>
          <p>Kombinasi adalah karakter khusus dalam CSS yang digunakan untuk memilih elemen berdasarkan hubungannya dengan elemen lain.</p>
          <table class="ref-table">
            <thead><tr><th>Simbol</th><th>Nama</th><th>Contoh</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td>(spasi)</td><td><strong>Descendant (Keturunan)</strong></td><td><code>div p</code></td><td>Memilih semua <code>&lt;p&gt;</code> yang berada <strong>di dalam</strong> <code>&lt;div&gt;</code>, tidak peduli seberapa dalam.</td></tr>
              <tr><td><code>&gt;</code></td><td><strong>Child (Anak Langsung)</strong></td><td><code>div > p</code></td><td>Memilih <code>&lt;p&gt;</code> yang merupakan <strong>anak langsung</strong> dari <code>&lt;div&gt;</code>.</td></tr>
              <tr><td><code>+</code></td><td><strong>Adjacent Sibling (Saudara Dekat)</strong></td><td><code>h1 + p</code></td><td>Memilih <code>&lt;p&gt;</code> yang berada <strong>tepat setelah</strong> <code>&lt;h1&gt;</code> (harus bersaudara/sejajar).</td></tr>
              <tr><td><code>~</code></td><td><strong>General Sibling (Saudara Umum)</strong></td><td><code>h1 ~ p</code></td><td>Memilih <strong>semua</strong> <code>&lt;p&gt;</code> yang datang <strong>setelah</strong> <code>&lt;h1&gt;</code> (harus bersaudara/sejajar).</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-ref-background-adv",
        title: "Properti Background Lanjutan",
        content: `
          <h1>Referensi Properti <code>background</code> Lanjutan</h1>
          <p>Properti <code>background</code> sangat kuat. Selain <code>background-color</code>, Anda dapat mengontrol gambar, gradien, dan lainnya.</p>
          
          <h3>Shorthand (Cara Cepat)</h3>
          <p>Anda dapat menggabungkan banyak properti <code>background</code> dalam satu baris, dengan urutan:</p>
          <p><code>[color] [image] [repeat] [position] / [size]</code></p>
          <pre>
.hero {
  /* Warna #333, 
    gambar 'hero.jpg', 
    tidak diulang, 
    posisi tengah, 
    dan menutupi seluruh area
  */
  background: #333 url('hero.jpg') no-repeat center / cover;
}
          </pre>

          <h3>Linear Gradient (Gradien Garis)</h3>
          <p>Anda dapat menggunakan <code>background-image</code> untuk membuat gradien warna, bukan hanya gambar.</p>
          <pre>
/* Gradien dari atas (biru) ke bawah (putih) */
.grad-1 {
  background-image: linear-gradient(to bottom, blue, white);
}

/* Gradien 45 derajat dari merah ke kuning */
.grad-2 {
  background-image: linear-gradient(45deg, red, yellow);
}

/* Gradien dengan tiga warna */
.grad-3 {
  background-image: linear-gradient(to right, red, yellow, green);
}
          </pre>
        `,
      },
    ],
  },

  // --- MATERI JAVASCRIPT ---
  javascript: {
    title: "JavaScript",
    lessons: [
      {
        id: "js-ref-datatypes",
        title: "Tipe Data Primitif",
        content: `
          <h1>Referensi Tipe Data Primitif</h1>
          <p>Tipe data adalah nilai dasar yang bisa disimpan oleh JavaScript.</p>
          <table class="ref-table">
            <thead><tr><th>Tipe Data</th><th>Deskripsi</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><code>String</code></td><td>Teks (Kumpulan karakter). Harus dibungkus tanda kutip.</td><td><code>"Halo"</code>, <code>'Budi'</code>, <code>\`123\`</code></td></tr>
              <tr><td><code>Number</code></td><td>Angka, baik integer maupun desimal.</td><td><code>100</code>, <code>3.14</code>, <code>-5</code></td></tr>
              <tr><td><code>Boolean</code></td><td>Nilai logika benar atau salah.</td><td><code>true</code>, <code>false</code></td></tr>
              <tr><td><code>undefined</code></td><td>Variabel yang sudah dideklarasi tapi belum diberi nilai.</td><td><code>let nama;</code></td></tr>
              <tr><td><code>null</code></td><td>Mewakili "tidak ada nilai" atau "kosong" secara sengaja.</td><td><code>let data = null;</code></td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "js-ref-operators",
        title: "Operator",
        content: `
          <h1>Referensi Operator</h1>
          <p>Simbol yang digunakan untuk melakukan operasi pada nilai dan variabel.</p>
          <h3>Operator Aritmatika</h3>
          <table class="ref-table">
            <thead><tr><th>Operator</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>+</code></td><td>Penjumlahan (atau penggabungan String)</td></tr>
              <tr><td><code>-</code></td><td>Pengurangan</td></tr>
              <tr><td><code>*</code></td><td>Perkalian</td></tr>
              <tr><td><code>/</code></td><td>Pembagian</td></tr>
              <tr><td><code>%</code></td><td>Modulus (Sisa bagi)</td></tr>
            </tbody>
          </table>
          <h3>Operator Perbandingan (Penting)</h3>
          <table class="ref-table">
            <thead><tr><th>Operator</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>==</code></td><td>Sama dengan (nilainya). <code>5 == "5"</code> (true)</td></tr>
              <tr><td><code>===</code></td><td>Sama dengan (nilai DAN tipenya). <code>5 === "5"</code> (false). <strong>Selalu utamakan ini.</strong></td></tr>
              <tr><td><code>!=</code></td><td>Tidak sama dengan (nilainya).</td></tr>
              <tr><td><code>!==</code></td><td>Tidak sama dengan (nilai ATAU tipenya). <strong>Selalu utamakan ini.</strong></td></tr>
              <tr><td><code>></code> / <code><</code></td><td>Lebih besar / Lebih kecil dari</td></tr>
              <tr><td><code>>=</code> / <code><=</code></td><td>Lebih besar atau sama dengan / Lebih kecil atau sama dengan</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "js-ref-dom",
        title: "DOM Selection",
        content: `
          <h1>Referensi Seleksi DOM</h1>
          <p>Cara JavaScript "menemukan" elemen HTML di halaman untuk dimanipulasi.</p>
          <table class="ref-table">
            <thead><tr><th>Metode</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>document.getElementById('id-saya')</code></td><td>Cara tercepat untuk menemukan 1 elemen berdasarkan <code>id</code> uniknya.</td></tr>
              <tr><td><code>document.querySelector('selector')</code></td><td>Metode modern dan fleksibel. Menemukan <strong>elemen pertama</strong> yang cocok dengan selektor CSS.</td></tr>
              <tr><td><code>document.querySelectorAll('selector')</code></td><td>Menemukan <strong>SEMUA</strong> elemen yang cocok dengan selektor CSS. Mengembalikan daftar (NodeList).</td></tr>
            </tbody>
          </table>
          <h3>Contoh <code>querySelector</code></h3>
          <pre>
// Menemukan elemen berdasarkan ID
let judul = document.querySelector("#judul-utama");

// Menemukan elemen pertama berdasarkan Class
let item = document.querySelector(".item-menu");

// Menemukan elemen pertama berdasarkan Tag
let paragraf = document.querySelector("p");
          </pre>
        `,
      },
      {
        id: "js-ref-vars-funcs",
        title: "Variabel & Fungsi",
        content: `
          <h1>Referensi Variabel & Fungsi</h1>
          <p>Blok bangunan dasar untuk menyimpan data dan menjalankan logika.</p>
          <h3>Deklarasi Variabel</h3>
          <table class="ref-table">
            <thead><tr><th>Kata Kunci</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>let</code></td><td>Mendeklarasikan variabel yang nilainya dapat diubah (block-scoped). Ini adalah cara modern yang disarankan.</td></tr>
              <tr><td><code>const</code></td><td>Mendeklarasikan variabel konstan yang nilainya <strong>tidak dapat</strong> diubah setelah ditetapkan (block-scoped).</td></tr>
              <tr><td><code>var</code></td><td>Cara lama mendeklarasikan variabel (function-scoped). Sebaiknya dihindari dalam kode modern.</td></tr>
            </tbody>
          </table>
          <h3>Deklarasi Fungsi</h3>
          <table class="ref-table">
            <thead><tr><th>Sintaks</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>function nama(p) { ... }</code></td><td>Deklarasi fungsi standar (Function Declaration).</td></tr>
              <tr><td><code>let nama = function(p) { ... }</code></td><td>Ekspresi fungsi (Function Expression).</td></tr>
              <tr><td><code>let nama = (p) => { ... }</code></td><td>Fungsi panah (Arrow Function). Sintaks modern yang lebih ringkas.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "js-ref-logic",
        title: "Logika Kondisi & Perulangan",
        content: `
          <h1>Referensi Logika & Perulangan</h1>
          <p>Mengontrol alur program Anda.</p>
          <h3>Kondisional (Percabangan)</h3>
          <table class="ref-table">
            <thead><tr><th>Sintaks</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>if (kondisi) { ... }</code></td><td>Menjalankan blok kode jika kondisi bernilai <code>true</code>.</td></tr>
              <tr><td><code>if (kondisi) { ... } else { ... }</code></td><td>Menjalankan blok <code>if</code> jika <code>true</code>, atau blok <code>else</code> jika <code>false</code>.</td></tr>
              <tr><td><code>if ... else if ... else</code></td><td>Rangkaian untuk memeriksa beberapa kondisi secara berurutan.</td></tr>
            </tbody>
          </table>
          <h3>Perulangan (Loops)</h3>
          <table class="ref-table">
            <thead><tr><th>Sintaks</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>for (let i=0; i < N; i++) { ... }</code></td><td>Perulangan <code>for</code> standar. Paling umum digunakan jika Anda tahu jumlah pasti perulangan.</td></tr>
              <tr><td><code>while (kondisi) { ... }</code></td><td>Menjalankan blok kode berulang kali <strong>selama</strong> kondisi bernilai <code>true</code>.</td></tr>
              <tr><td><code>array.forEach(item => { ... })</code></td><td>Metode array modern untuk menjalankan fungsi pada setiap item di dalam array.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "js-ref-array-methods",
        title: "Metode Array",
        content: `
          <h1>Referensi Metode Array</h1>
          <p>Fungsi-fungsi bawaan yang sangat berguna untuk memanipulasi array.</p>
          <table class="ref-table">
            <thead><tr><th>Metode</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>.forEach(item => { ... })</code></td><td>Menjalankan sebuah fungsi untuk setiap elemen di dalam array.</td></tr>
              <tr><td><code>.map(item => { ... })</code></td><td>Membuat array baru dengan menjalankan fungsi pada setiap elemen dan mengembalikan hasilnya.</td></tr>
              <tr><td><code>.filter(item => { ... })</code></td><td>Membuat array baru yang berisi elemen-elemen yang lolos (<code>true</code>) dari kondisi fungsi.</td></tr>
              <tr><td><code>.find(item => { ... })</code></td><td>Mengembalikan elemen <strong>pertama</strong> di dalam array yang lolos dari kondisi fungsi.</td></tr>
              <tr><td><code>.push(item)</code></td><td>Menambahkan satu atau lebih elemen ke <strong>akhir</strong> array.</td></tr>
              <tr><td><code>.pop()</code></td><td>Menghapus elemen <strong>terakhir</strong> dari array.</td></tr>
              <tr><td><code>.includes(item)</code></td><td>Mengembalikan <code>true</code> jika array berisi elemen yang dicari, dan <code>false</code> jika tidak.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "js-ref-events",
        title: "Events",
        content: `
          <h1>Referensi Penanganan Event</h1>
          <p>Event adalah tindakan atau kejadian (seperti klik mouse, penekanan tombol, atau halaman selesai dimuat) yang dapat dideteksi oleh JavaScript.</p>
          <h3>Cara Modern: <code>addEventListener</code></h3>
          <p>Ini adalah cara yang disarankan untuk menangani event, memisahkan logika JavaScript dari HTML.</p>
          <pre>
// 1. Dapatkan elemennya
let tombol = document.getElementById("tombol-saya");

// 2. Buat fungsi (handler)
function saatDiklik() {
  console.log("Tombol telah diklik!");
}

// 3. Pasang 'pendengar' (listener)
tombol.addEventListener("click", saatDiklik);
          </pre>
          <h3>Event yang Umum Digunakan</h3>
          <table class="ref-table">
            <thead><tr><th>Nama Event</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>'click'</code></td><td>Terjadi saat pengguna mengklik elemen.</td></tr>
              <tr><td><code>'submit'</code></td><td>Terjadi saat sebuah <code>&lt;form&gt;</code> dikirim (submit).</td></tr>
              <tr><td><code>'change'</code></td><td>Terjadi saat nilai dari elemen formulir (<code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>) berubah.</td></tr>
              <tr><td><code>'keydown'</code></td><td>Terjadi saat pengguna menekan sebuah tombol di keyboard.</td></tr>
              <tr><td><code>'mouseover'</code></td><td>Terjadi saat kursor mouse bergerak ke atas elemen.</td></tr>
              <tr><td><code>'DOMContentLoaded'</code></td><td>Terjadi saat dokumen HTML selesai dimuat (tanpa menunggu gambar).</td></tr>
            </tbody>
          </table>
          <div class="tip-box">
            <h3>Mencegah Perilaku Default (<code>event.preventDefault()</code>)</h3>
            <p>Di dalam fungsi handler, Anda bisa memanggil <code>event.preventDefault()</code> untuk menghentikan perilaku bawaan browser. Ini sangat umum digunakan pada event <code>'submit'</code> formulir untuk mencegah halaman me-refresh.</p>
          </div>
        `,
      },
      {
        id: "js-ref-async-fetch",
        title: "Async/Await & Fetch API",
        content: `
          <h1>Referensi Async/Await & Fetch API</h1>
          <p>JavaScript modern sangat bergantung pada operasi Asinkron (Asynchronous), terutama untuk mengambil data dari server atau API.</p>
          
          <h3><code>fetch()</code></h3>
          <p><code>fetch()</code> adalah fungsi bawaan browser modern untuk membuat permintaan jaringan (HTTP request) dan mengambil data (seperti JSON) dari sebuah URL.</p>
          
          <h3><code>async / await</code></h3>
          <p><code>async</code> dan <code>await</code> adalah sintaks modern untuk menangani kode asinkron (seperti <code>fetch</code>) agar terlihat seperti kode sinkron biasa, membuatnya jauh lebih mudah dibaca daripada <code>.then()</code>.</p>
          <ul>
            <li><code><strong>async</strong></code>: Ditulis sebelum sebuah fungsi (<code>async function ...</code>) untuk menandakan bahwa fungsi tersebut mengandung operasi asinkron.</li>
            <li><code><strong>await</strong></code>: Hanya dapat digunakan di dalam <code>async function</code>. Ini "menjeda" eksekusi fungsi sampai operasi (Promise) selesai dan mengembalikan hasilnya.</li>
          </ul>

          <h3>Contoh Umum: Mengambil Data dari API</h3>
          <pre>
// 1. Definisikan URL API
const API_URL = 'https://api.example.com/data/1';

// 2. Buat sebuah 'async function'
async function ambilData() {
  try {
    // 3. 'await' fetch() untuk mengambil data
    const response = await fetch(API_URL);
    
    // 4. Periksa jika request gagal (misal: error 404)
    if (!response.ok) {
      throw new Error('Gagal mengambil data!');
    }

    // 5. 'await' konversi response menjadi JSON
    const data = await response.json();
    
    // 6. Gunakan datanya
    console.log(data);

  } catch (error) {
    // 7. Tangani jika terjadi kesalahan
    console.error('Terjadi kesalahan:', error);
  }
}

// 8. Panggil fungsinya
ambilData();
          </pre>
        `,
      },
      {
        id: "js-ref-string-methods",
        title: "Metode String",
        content: `
          <h1>Referensi Metode String</h1>
          <p>Metode bawaan yang sangat sering digunakan untuk memanipulasi atau mendapatkan informasi dari teks (string).</p>
          <table class="ref-table">
            <thead><tr><th>Metode</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>.length</code></td><td>(Properti) Mengembalikan jumlah karakter dalam string.</td></tr>
              <tr><td><code>.toUpperCase()</code></td><td>Mengubah string menjadi HURUF BESAR SEMUA.</td></tr>
              <tr><td><code>.toLowerCase()</code></td><td>Mengubah string menjadi huruf kecil semua.</td></tr>
              <tr><td><code>.includes('teks')</code></td><td>Mengembalikan <code>true</code> jika string berisi 'teks' yang dicari.</td></tr>
              <tr><td><code>.trim()</code></td><td>Menghapus spasi (whitespace) dari awal dan akhir string. Sangat penting untuk input form.</td></tr>
              <tr><td><code>.slice(awal, akhir)</code></td><td>Mengekstrak (memotong) bagian dari string dan mengembalikannya sebagai string baru.</td></tr>
              <tr><td><code>.replace('lama', 'baru')</code></td><td>Mencari nilai 'lama' dan menggantinya dengan nilai 'baru'. (Hanya mengganti temuan pertama).</td></tr>
            </tbody>
          </table>
          <pre>
let sapa = "  Halo Dunia!  ";
console.log(sapa.length);     // Output: 15
console.log(sapa.trim());       // Output: "Halo Dunia!"
console.log(sapa.toLowerCase());// Output: "  halo dunia!  "
console.log(sapa.slice(2, 6));  // Output: "Halo"
          </pre>
        `,
      },
      {
        id: "js-ref-object-methods",
        title: "Metode Objek",
        content: `
          <h1>Referensi Metode Objek</h1>
          <p>Metode statis bawaan pada <code>Object</code> yang sangat berguna untuk bekerja dengan data objek.</p>
          <table class="ref-table">
            <thead><tr><th>Metode</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>Object.keys(obj)</code></td><td>Mengembalikan sebuah <strong>array</strong> yang berisi semua nama <strong>kunci (key)</strong> dari objek.</td></tr>
              <tr><td><code>Object.values(obj)</code></td><td>Mengembalikan sebuah <strong>array</strong> yang berisi semua nilai <strong>(value)</strong> dari objek.</td></tr>
              <tr><td><code>Object.entries(obj)</code></td><td>Mengembalikan sebuah <strong>array</strong> yang berisi array pasangan <strong>[kunci, nilai]</strong>. Sangat berguna untuk melakukan perulangan (looping) pada objek.</td></tr>
            </tbody>
          </table>
          <pre>
const pengguna = {
  nama: "Budi",
  umur: 30,
  pekerjaan: "Developer"
};

// 1. Object.keys()
const kunci = Object.keys(pengguna);
// Output: ["nama", "umur", "pekerjaan"]

// 2. Object.values()
const nilai = Object.values(pengguna);
// Output: ["Budi", 30, "Developer"]

// 3. Object.entries() (sering dipakai dengan .forEach)
Object.entries(pengguna).forEach(([kunci, nilai]) => {
  console.log(kunci + ": " + nilai);
});
// Output:
// nama: Budi
// umur: 30
// pekerjaan: Developer
          </pre>
        `,
      },
      {
        id: "js-ref-web-storage",
        title: "Web Storage (LocalStorage)",
        content: `
          <h1>Referensi Web Storage (<code>localStorage</code>)</h1>
          <p>Web Storage (<code>localStorage</code>) memungkinkan situs web menyimpan data (dalam bentuk string) di dalam browser pengguna secara permanen (bahkan setelah browser ditutup).</p>
          <p>Ini sangat ideal untuk mengingat preferensi pengguna, seperti pilihan Mode Gelap (Dark Mode) atau status login sederhana.</p>
          
          <table class="ref-table">
            <thead><tr><th>Metode</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>localStorage.setItem(kunci, nilai)</code></td><td>Menyimpan data. <code>kunci</code> dan <code>nilai</code> harus berupa string.</td></tr>
              <tr><td><code>localStorage.getItem(kunci)</code></td><td>Mengambil data berdasarkan <code>kunci</code>-nya. Mengembalikan <code>null</code> jika tidak ada.</td></tr>
              <tr><td><code>localStorage.removeItem(kunci)</code></td><td>Menghapus satu item data berdasarkan <code>kunci</code>-nya.</td></tr>
              <tr><td><code>localStorage.clear()</code></td><td>Menghapus <strong>semua</strong> data yang disimpan oleh situs tersebut.</td></tr>
            </tbody>
          </table>

          <pre>
// 1. Menyimpan data
localStorage.setItem('tema', 'dark');

// 2. Mengambil data saat pengguna kembali
let temaPilihan = localStorage.getItem('tema'); // "dark"

// 3. Menghapus data
localStorage.removeItem('tema');
          </pre>
          <div class="tip-box">
            <p><strong>Catatan:</strong> <code>localStorage</code> hanya menyimpan string. Jika Anda ingin menyimpan objek atau array, Anda harus mengubahnya menjadi string JSON menggunakan <code>JSON.stringify()</code> saat menyimpan, dan <code>JSON.parse()</code> saat mengambil.</p>
          </div>
        `,
      },
      {
        id: "js-ref-dom-manipulation-adv",
        title: "Manipulasi DOM (Membuat Elemen)",
        content: `
          <h1>Referensi Manipulasi DOM (Membuat & Menghapus)</h1>
          <p>Selain mengubah elemen yang ada (<code>.innerHTML</code>), JavaScript dapat membuat elemen HTML baru dari awal dan menambahkannya ke halaman.</p>
          
          <table class="ref-table">
            <thead><tr><th>Metode</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>document.createElement('tagName')</code></td><td>Membuat elemen HTML baru di dalam memori (misal: <code>'p'</code>, <code>'div'</code>).</td></tr>
              <tr><td><code>element.textContent = '...'</code></td><td>Mengatur konten teks dari sebuah elemen (cara aman, tidak memproses HTML).</td></tr>
              <tr><td><code>element.setAttribute('attr', 'value')</code></td><td>Mengatur atribut pada elemen (misal: <code>'class'</code>, <code>'id'</code>).</td></tr>
              <tr><td><code>parent.appendChild(child)</code></td><td>Menambahkan elemen <code>child</code> (anak) sebagai anak terakhir di dalam <code>parent</code> (induk).</td></tr>
              <tr><td><code>element.remove()</code></td><td>Menghapus elemen dari DOM.</td></tr>
            </tbody>
          </table>

          <pre>
// --- CONTOH: MEMBUAT LIST ITEM BARU ---

// 1. Dapatkan elemen induk
let menu = document.getElementById('menu-list');

// 2. Buat elemen baru
let itemBaru = document.createElement('li');

// 3. Atur konten dan atributnya
itemBaru.textContent = 'Item Baru';
itemBaru.setAttribute('class', 'item');

// 4. Tambahkan elemen baru ke dalam induk
menu.appendChild(itemBaru);

// --- CONTOH: MENGHAPUS ELEMEN ---
let itemLama = document.getElementById('item-1');
itemLama.remove();
          </pre>
        `,
      },
    ],
  },

  // --- MATERI UI/UX ---
  design: {
    title: "Design UI/UX",
    lessons: [
      {
        id: "design-ref-heuristics",
        title: "10 Usability Heuristics",
        content: `
          <h1>Referensi: 10 Usability Heuristics (Jakob Nielsen)</h1>
          <p>Ini adalah 10 "hukum" atau prinsip umum yang digunakan untuk mengevaluasi apakah sebuah desain (UX) mudah digunakan atau tidak.</p>
          <ol class="ref-list">
            <li><strong>Visibility of system status:</strong> Sistem harus selalu memberi tahu pengguna apa yang sedang terjadi (misal: loading bar, pesan "Berhasil terkirim").</li>
            <li><strong>Match between system and the real world:</strong> Desain harus menggunakan bahasa dan konsep yang familiar bagi pengguna (misal: ikon "keranjang belanja").</li>
            <li><strong>User control and freedom:</strong> Pengguna harus bisa "undo" atau "cancel" (membatalkan) aksi yang tidak sengaja (misal: tombol "Kembali", "Undo").</li>
            <li><strong>Consistency and standards:</strong> Jangan buat pengguna bingung. Gunakan pola dan elemen yang konsisten di seluruh aplikasi Anda.</li>
            <li><strong>Error prevention:</strong> Desain yang baik mencegah kesalahan terjadi (misal: menonaktifkan tombol "Kirim" jika formulir belum diisi).</li>
            <li><strong>Recognition rather than recall:</strong> Pengguna tidak perlu mengingat-ingat. Buat opsi terlihat jelas (misal: tampilkan menu, jangan sembunyikan).</li>
            <li><strong>Flexibility and efficiency of use:</strong> Berikan "jalan pintas" (shortcut) untuk pengguna ahli tanpa membingungkan pengguna baru.</li>
            <li><strong>Aesthetic and minimalist design:</strong> Tampilan (UI) tidak boleh berisi informasi yang tidak relevan atau jarang dibutuhkan. "Less is more".</li>
            <li><strong>Help users recognize, diagnose, and recover from errors:</strong> Pesan error harus jelas (human-readable), menjelaskan masalahnya, dan menyarankan solusi.</li>
            <li><strong>Help and documentation:</strong> Sediakan bantuan atau dokumentasi yang mudah dicari jika pengguna membutuhkannya.</li>
          </ol>
        `,
      },
      {
        id: "design-ref-elements",
        title: "Komponen UI Umum",
        content: `
          <h1>Referensi Komponen UI Umum</h1>
          <p>Blok bangunan visual (UI) yang digunakan untuk menyusun aplikasi.</p>
          <table class="ref-table">
            <thead><tr><th>Komponen</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Button</strong></td><td>Elemen yang dapat diklik untuk melakukan aksi (misal: Kirim, Batal, Simpan).</td></tr>
              <tr><td><strong>Input Field</strong></td><td>Kotak teks tempat pengguna dapat mengetik informasi (nama, email, password).</td></tr>
              <tr><td><strong>Dropdown (Select)</strong></td><td>Memberikan daftar opsi yang bisa dipilih pengguna. Hemat tempat.</td></tr>
              <tr><td><strong>Checkbox</strong></td><td>Memperbolehkan pengguna memilih 0 atau lebih opsi dari sebuah daftar (misal: Hobi).</td></tr>
              <tr><td><strong>Radio Button</strong></td><td>Memaksa pengguna memilih <strong>hanya 1</strong> opsi dari sebuah daftar (misal: Jenis Kelamin).</td></tr>
              <tr><td><strong>Toggle</strong></td><td>Tombol geser (On/Off) untuk mengubah satu pengaturan.</td></tr>
              <tr><td><strong>Modal</strong></td><td>Jendela pop-up yang muncul di atas konten utama, memaksa pengguna fokus pada satu tugas (misal: Konfirmasi Hapus).</td></tr>
              <tr><td><strong>Tooltip</strong></td><td>Pesan kecil yang muncul saat pengguna meng-hover elemen, memberikan info tambahan.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "design-ref-crap",
        title: "Prinsip Desain (CRAP)",
        content: `
          <h1>Referensi Prinsip Desain Visual (CRAP)</h1>
          <p>Empat prinsip dasar untuk membantu membuat desain yang bersih, teratur, dan profesional.</p>
          <table class="ref-table">
            <thead><tr><th>Prinsip</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><strong>C</strong>ontrast (Kontras)</td><td>Membuat elemen yang berbeda terlihat benar-benar berbeda (misal: warna, ukuran font, ketebalan). Tujuannya adalah untuk menciptakan fokus dan hierarki.</td></tr>
              <tr><td><strong>R</strong>epetition (Repetisi)</td><td>Menggunakan kembali elemen desain yang sama secara konsisten di seluruh antarmuka (misal: gaya tombol, palet warna, jenis font). Tujuannya adalah untuk menciptakan kesatuan.</td></tr>
              <tr><td><strong>A</strong>lignment (Perataan)</td><td>Menempatkan setiap elemen secara sengaja; tidak ada yang ditempatkan secara acak. Tujuannya adalah untuk menciptakan tampilan yang teratur, bersih, dan terhubung.</td></tr>
              <tr><td><strong>P</strong>roximity (Kedekatan)</td><td>Mengelompokkan elemen-elemen yang terkait secara visual menjadi satu. Tujuannya adalah untuk mengatur informasi dan mengurangi kekacauan (clutter).</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "design-ref-color",
        title: "Teori Warna (UI)",
        content: `
          <h1>Referensi Teori Warna (UI)</h1>
          <p>Warna adalah salah satu alat paling kuat dalam desain UI untuk membangkitkan emosi, menarik perhatian, dan mengkomunikasikan status.</p>
          <h3>Terminologi Dasar</h3>
          <table class="ref-table">
            <thead><tr><th>Istilah</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Hue</strong> (Rona)</td><td>Ini adalah warna murni itu sendiri (misal: merah, hijau, biru).</td></tr>
              <tr><td><strong>Saturation</strong> (Saturasi)</td><td>Intensitas atau kemurnian warna. Saturasi tinggi terlihat jelas dan cerah, saturasi rendah terlihat pudar atau keabu-abuan.</td></tr>
              <tr><td><strong>Value / Brightness</strong> (Nilai / Kecerahan)</td><td>Tingkat gelap atau terangnya sebuah warna.</td></tr>
            </tbody>
          </table>
          <h3>Aturan 60-30-10</h3>
          <p>Ini adalah panduan klasik untuk menciptakan palet warna yang seimbang:</p>
          <ul>
            <li><strong>60% (Warna Primer):</strong> Warna dominan Anda, sering digunakan untuk latar belakang atau area besar.</li>
            <li><strong>30% (Warna Sekunder):</strong> Warna pendukung yang kontras dengan warna primer, digunakan untuk menyorot elemen sekunder (seperti kartu, sub-judul).</li>
            <li><strong>10% (Warna Aksen):</strong> Warna yang paling cerah dan menonjol. Digunakan hemat untuk elemen yang paling penting (tombol CTA, notifikasi).</li>
          </ul>
        `,
      },
      {
        id: "design-ref-typography",
        title: "Tipografi (UI)",
        content: `
          <h1>Referensi Tipografi (UI)</h1>
          <p>Tipografi adalah seni mengatur huruf agar teks mudah dibaca (legible) dan menarik secara visual. Di UI, keterbacaan (readability) adalah kuncinya.</p>
          <h3>Jenis Font Dasar</h3>
          <table class="ref-table">
            <thead><tr><th>Jenis Font</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Serif</strong></td><td>Memiliki "kaki" atau guratan kecil di ujung huruf (misal: Times New Roman, Georgia). Memberi kesan tradisional, formal, dan elegan.</td></tr>
              <tr><td><strong>Sans-Serif</strong></td><td>Tidak memiliki "kaki" (misal: Arial, Roboto, Helvetica). Memberi kesan modern, bersih, dan minimalis. Paling umum untuk teks di layar.</td></tr>
            </tbody>
          </table>
          <h3>Konsep Keterbacaan (Readability)</h3>
          <table class="ref-table">
            <thead><tr><th>Konsep</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Hierarki</strong></td><td>Menggunakan ukuran font (<code>font-size</code>) dan ketebalan (<code>font-weight</code>) yang berbeda untuk membedakan judul, sub-judul, dan paragraf.</td></tr>
              <tr><td><strong>Line Height (Tinggi Baris)</strong></td><td>Jarak vertikal antar baris teks. Aturan umumnya adalah 1.4x hingga 1.6x dari ukuran font untuk keterbacaan yang baik.</td></tr>
              <tr><td><strong>Line Length (Panjang Baris)</strong></td><td>Jumlah karakter per baris. Teks yang terlalu lebar sulit dibaca. Usahakan 45-75 karakter per baris untuk paragraf.</td></tr>
            </tbody>
          </table>
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
      {
        id: "design-ref-journey-map",
        title: "User Journey Map",
        content: `
          <h1>Referensi User Journey Map (Peta Perjalanan Pengguna)</h1>
          <p><strong>User Journey Map</strong> adalah visualisasi dari pengalaman yang dilalui pengguna dari waktu ke waktu saat berinteraksi dengan produk atau layanan Anda untuk mencapai tujuan tertentu.</p>
          <p>Berbeda dengan <strong>User Flow</strong> yang fokus pada "langkah dan layar", Journey Map fokus pada <strong>"pengalaman dan emosi"</strong> pengguna.</p>
          
          <h3>Kolom Umum dalam Journey Map</h3>
          <p>Peta perjalanan biasanya disajikan dalam bentuk tabel atau diagram dengan beberapa komponen utama:</p>
          <table class="ref-table">
            <thead><tr><th>Komponen</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Fase (Phases)</strong></td><td>Tahapan utama dari perjalanan (misal: Kesadaran -> Pertimbangan -> Pembelian -> Penggunaan -> Loyalitas).</td></tr>
              <tr><td><strong>Aksi (Actions)</strong></td><td>Apa yang dilakukan pengguna di setiap fase? (Misal: "Mencari di Google", "Membaca review", "Klik tombol 'Beli'").</td></tr>
              <tr><td><strong>Pikiran (Thoughts)</strong></td><td>Apa yang dipikirkan pengguna di setiap aksi? (Misal: "Apakah ini aman?", "Harganya mahal", "Kok lama sekali loadingnya?").</td></tr>
              <tr><td><strong>Emosi (Emotions)</strong></td><td>Bagaimana perasaan pengguna? (Biasanya digambarkan sebagai garis: Senang 😊, Netral 😐, Frustrasi 😠).</td></tr>
              <tr><td><strong>Titik Sakit (Pain Points)</strong></td><td>Di mana pengguna mengalami masalah atau frustrasi? Ini adalah area di mana Anda harus fokus memperbaiki.</td></tr>
              <tr><td><strong>Peluang (Opportunities)</strong></td><td>Ide-ide yang muncul untuk meningkatkan pengalaman di titik sakit tersebut.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "design-ref-laws-of-ux",
        title: "Hukum Desain UX (Laws of UX)",
        content: `
          <h1>Referensi Hukum Desain UX (Laws of UX)</h1>
          <p>"Laws of UX" adalah kumpulan prinsip atau "hukum" psikologis yang memengaruhi cara pengguna memandang dan berinteraksi dengan antarmuka digital.</p>
          
          <table class="ref-table">
            <thead><tr><th>Hukum</th><th>Deskripsi Singkat</th></tr></thead>
            <tbody>
              <tr><td><strong>Hukum Fitts (Fitts's Law)</strong></td><td>Waktu yang dibutuhkan untuk mengklik sebuah target (misal: tombol) adalah fungsi dari <strong>jarak</strong> ke target dan <strong>ukuran</strong> target. <br><strong>Inti:</strong> Buat tombol penting (seperti "Beli") menjadi besar dan mudah dijangkau.</td></tr>
              <tr><td><strong>Hukum Hick (Hick's Law)</strong></td><td>Semakin banyak pilihan yang diberikan kepada pengguna, semakin lama waktu yang mereka butuhkan untuk mengambil keputusan. <br><strong>Inti:</strong> Hindari membanjiri pengguna dengan terlalu banyak pilihan sekaligus. Sederhanakan!</td></tr>
              <tr><td><strong>Hukum Miller (Miller's Law)</strong></td><td>Rata-rata manusia hanya dapat menyimpan sekitar <strong>7 (plus/minus 2)</strong> item dalam memori kerja mereka. <br><strong>Inti:</strong> Kelompokkan informasi menjadi potongan-potongan kecil (chunking). (Contoh: Nomor telepon 0812-3456-789 lebih mudah diingat daripada 08123456789).</td></tr>
              <tr><td><strong>Efek Jakob (Jakob's Law)</strong></td><td>Pengguna menghabiskan sebagian besar waktu mereka di situs web <strong>lain</strong>. Ini berarti mereka mengharapkan situs Anda berfungsi sama seperti situs lain yang sudah mereka kenal. <br><strong>Inti:</strong> Jangan ciptakan pola desain yang aneh. Ikuti konvensi (misal: logo di kiri atas, keranjang belanja di kanan atas).</td></tr>
              <tr><td><strong>Efek Estetika-Kegunaan</strong></td><td>Pengguna sering kali mempersepsikan desain yang <strong>terlihat indah</strong> sebagai desain yang <strong>lebih mudah digunakan</strong>, bahkan jika sebenarnya tidak. <br><strong>Inti:</strong> Tampilan visual (UI) yang baik membangun kepercayaan dan membuat pengguna lebih sabar terhadap masalah kegunaan (UX) yang kecil.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "design-ref-dark-mode",
        title: "Prinsip Desain Dark Mode",
        content: `
          <h1>Referensi Prinsip Desain Dark Mode (Mode Gelap)</h1>
          <p>Mode gelap (dark mode) adalah antarmuka yang menggunakan latar belakang gelap (hitam atau abu-abu tua) dengan teks terang. Ini bukan sekadar membalik warna, tetapi membutuhkan pertimbangan desain yang cermat.</p>
          <table class="ref-table">
            <thead><tr><th>Prinsip</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Jangan Gunakan Hitam Murni</strong></td><td>Hindari menggunakan <code>#000000</code> (hitam pekat) sebagai latar belakang utama. Gunakan abu-abu sangat tua (misal: <code>#121212</code>). Hitam pekat dapat menyebabkan bayangan (smearing) di beberapa layar dan membuat kontras terlalu tajam.</td></tr>
              <tr><td><strong>Turunkan Kecerahan Warna Aksen</strong></td><td>Warna yang terlihat bagus di latar putih (misal: biru cerah) akan terlihat terlalu "menyala" dan mengganggu di latar gelap. Gunakan versi warna yang lebih pudar (desaturated) atau lebih gelap di mode gelap.</td></tr>
              <tr><td><strong>Jangan Gunakan Putih Murni untuk Teks</strong></td><td>Sama seperti latar hitam, teks <code>#FFFFFF</code> (putih pekat) di latar gelap dapat "mekar" (halation) dan menyilaukan mata. Gunakan warna putih pudar (misal: <code>#E6E6E6</code> atau <code>opacity: 87%</code>) untuk teks utama.</td></tr>
              <tr><td><strong>Gunakan Elevasi (Ketinggian)</strong></td><td>Di mode terang, kita menggunakan bayangan (shadow) untuk menunjukkan kedalaman. Di mode gelap, bayangan tidak terlihat. Sebagai gantinya, buat permukaan yang "lebih tinggi" (seperti pop-up) menjadi sedikit <strong>lebih terang</strong> daripada latar belakang.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "design-ref-fidelities",
        title: "Fidelitas Desain (Fidelity)",
        content: `
          <h1>Referensi Fidelitas Desain (Fidelity)</h1>
          <p>Fidelitas (Fidelity) mengacu pada seberapa detail atau "nyata" sebuah desain (wireframe atau prototipe) terlihat dan berfungsi. Desain biasanya berevolusi dari Lo-Fi ke Hi-Fi.</p>
          
          <table class="ref-table">
            <thead><tr><th>Tipe</th><th>Deskripsi</th><th>Tujuan</th></tr></thead>
            <tbody>
              <tr><td><strong>Low-Fidelity (Lo-Fi)</strong></td><td>Sketsa dasar, seringkali hitam-putih, digambar tangan atau menggunakan kotak-kotak sederhana. Fokus murni pada struktur, tata letak, dan alur.</td><td>Validasi alur (flow) dengan cepat, murah, dan tanpa terikat pada visual. "Apakah alurnya masuk akal?"</td></tr>
              <tr><td><strong>Mid-Fidelity (Mid-Fi)</strong></td><td>Wireframe digital (menggunakan komputer), masih hitam-putih, tetapi menggunakan komponen UI yang lebih rapi dan teks yang sebenarnya.</td><td>Menguji tata letak yang lebih presisi dan penempatan konten.</td></tr>
              <tr><td><strong>High-Fidelity (Hi-Fi)</strong></td><td>Desain "pixel-perfect". Ini adalah <strong>Mockup</strong> (statis) atau <strong>Prototipe</strong> (interaktif) yang mencakup warna, font, gambar, dan spasi yang sesungguhnya.</td><td>Validasi tampilan dan nuansa (look and feel) serta uji ketergunaan (usability test) dengan pengguna. "Apakah desainnya menarik dan mudah digunakan?"</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "design-ref-heuristic-evaluation",
        title: "Evaluasi Heuristik",
        content: `
          <h1>Referensi Evaluasi Heuristik (Heuristic Evaluation)</h1>
          <p>Evaluasi Heuristik adalah sebuah <strong>metode inspeksi (inspection)</strong> di mana sekelompok pakar (desainer UI/UX atau ahli kegunaan) meninjau antarmuka Anda dan menilainya berdasarkan 10 Prinsip Heuristik Kegunaan dari Jakob Nielsen.</p>
          
          <h3>Perbedaan Kunci: Heuristic Evaluation vs. Usability Testing</h3>
          <table class="ref-table">
            <thead><tr><th>Aspek</th><th>Heuristic Evaluation (Evaluasi Pakar)</th><th>Usability Testing (Uji Pengguna)</th></tr></thead>
            <tbody>
              <tr><td><strong>Siapa yang Melakukan?</strong></td><td>Pakar Desain (Misal: 3-5 desainer).</td><td>Pengguna Nyata (Misal: 5-8 orang dari target audiens).</td></tr>
              <tr><td><strong>Apa Tujuannya?</strong></td><td>Menemukan masalah kegunaan yang "jelas" dan pelanggaran terhadap prinsip-prinsip desain yang sudah mapan.</td><td>Menemukan bagaimana pengguna <strong>berperilaku</strong> dan di mana mereka <strong>bingung</strong> saat mencoba menyelesaikan tugas.</td></tr>
              <tr><td><strong>Kapan Dilakukan?</strong></td><td>Kapan saja, seringkali di awal (pada wireframe) untuk menangkap masalah besar dengan cepat.</td><td>Secara berulang, tetapi sangat penting saat prototipe interaktif (Hi-Fi) sudah siap.</td></tr>
            </tbody>
          </table>
        `,
      },
    ],
  },
};
