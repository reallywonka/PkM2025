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
    ],
  },
};
