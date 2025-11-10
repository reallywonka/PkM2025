/*
  Struktur data ini diubah total.
  Alih-alih 'menu' dengan link eksternal, kita buat 'topics'.
  Setiap 'topic' (misal: 'html') memiliki 'title' dan 'lessons'.
  Setiap 'lesson' memiliki 'id', 'title' (untuk sidebar), dan 'content' (HTML untuk materi).
*/

export const tutorials = {
  html: {
    title: "HTML",
    lessons: [
      {
        id: "html-intro",
        title: "HTML Pendahuluan",
        content: `
          <h1>HTML Pendahuluan</h1>
          <p>HTML adalah singkatan dari HyperText Markup Language.</p>
          <p>HTML adalah bahasa markup standar untuk membuat halaman Web.</p>
          <p>HTML menggambarkan struktur halaman Web menggunakan markup.</p>
          
          <h3>Contoh Dokumen HTML Sederhana</h3>
          <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Judul Halaman&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;Heading Pertama Saya&lt;/h1&gt;
&lt;p&gt;Paragraf pertama saya.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
          </pre>
          <p><strong>Penjelasan Contoh:</strong></p>
          <ul>
            <li>Deklarasi <code>&lt;!DOCTYPE html&gt;</code> mendefinisikan dokumen ini sebagai HTML5.</li>
            <li>Elemen <code>&lt;html&gt;</code> adalah elemen root dari halaman HTML.</li>
            <li>Elemen <code>&lt;head&gt;</code> berisi informasi meta tentang dokumen.</li>
            <li>Elemen <code>&lt;title&gt;</code> menentukan judul untuk dokumen.</li>
            <li>Elemen <code>&lt;body&gt;</code> berisi konten halaman yang terlihat.</li>
            <li>Elemen <code>&lt;h1&gt;</code> mendefinisikan heading besar.</li>
            <li>Elemen <code>&lt;p&gt;</code> mendefinisikan paragraf.</li>
          </ul>
        `,
      },
      {
        id: "html-elements",
        title: "HTML Elemen",
        content: `
          <h1>HTML Elemen</h1>
          <p>Elemen HTML adalah segalanya mulai dari tag awal hingga tag akhir:</p>
          <pre>
&lt;namatag&gt;Konten ada di sini...&lt;/namatag&gt;
          </pre>
          <p>Beberapa elemen HTML tidak memiliki konten (seperti elemen <code>&lt;br&gt;</code>). Elemen-elemen ini disebut elemen kosong. Elemen kosong tidak memiliki tag akhir!</p>
          
          <h3>Elemen Bersarang (Nested Elements)</h3>
          <p>Elemen HTML dapat disarangkan (ini berarti elemen dapat berisi elemen lain).</p>
          <p>Semua dokumen HTML terdiri dari elemen HTML bersarang.</p>
          <pre>
&lt;body&gt;
  &lt;h1&gt;Heading Pertama Saya&lt;/h1&gt;
  &lt;p&gt;Paragraf pertama saya.&lt;/p&gt;
&lt;/body&gt;
          </pre>
        `,
      },
      {
        id: "html-attributes",
        title: "HTML Atribut",
        content: `
          <h1>HTML Atribut</h1>
          <p>Atribut menyediakan informasi tambahan tentang elemen HTML.</p>
          <ul>
            <li>Semua elemen HTML dapat memiliki <strong>atribut</strong>.</li>
            <li>Atribut menyediakan <strong>informasi tambahan</strong> tentang elemen.</li>
            <li>Atribut selalu ditentukan di <strong>tag awal</strong>.</li>
            <li>Atribut biasanya datang dalam pasangan nama/nilai seperti: <strong>nama="nilai"</strong>.</li>
          </ul>

          <h3>Atribut <code>href</code></h3>
          <p>Tag <code>&lt;a&gt;</code> (anchor) mendefinisikan hyperlink. Atribut <code>href</code> menentukan URL halaman yang akan dituju oleh link tersebut:</p>
          <pre>
&lt;a href="https://www.w3schools.com"&gt;Ini adalah link&lt;/a&gt;
          </pre>
        `,
      },
      {
        id: "html-headings",
        title: "HTML Heading",
        content: `
          <h1>HTML Heading</h1>
          <p>Heading HTML adalah judul atau subjudul yang ingin kamu tampilkan di halaman web.</p>
          <p>Heading HTML didefinisikan dengan tag <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code>.</p>
          <pre>
&lt;h1&gt;Ini adalah heading 1 (paling besar)&lt;/h1&gt;
&lt;h2&gt;Ini adalah heading 2&lt;/h2&gt;
&lt;h3&gt;Ini adalah heading 3&lt;/h3&gt;
&lt;h4&gt;Ini adalah heading 4&lt;/h4&gt;
&lt;h5&gt;Ini adalah heading 5&lt;/h5&gt;
&lt;h6&gt;Ini adalah heading 6 (paling kecil)&lt;/h6&gt;
          </pre>
          <p><strong>Penting:</strong> Gunakan heading hanya untuk judul. Jangan gunakan heading untuk membuat teks menjadi BESAR atau tebal.</p>
        `,
      },
      // [BARU] Materi tambahan HTML
      {
        id: "html-paragraphs",
        title: "HTML Paragraf",
        content: `
          <h1>HTML Paragraf</h1>
          <p>Paragraf HTML didefinisikan dengan tag <code>&lt;p&gt;</code>.</p>
          <p>Paragraf selalu dimulai di baris baru, dan browser secara otomatis menambahkan beberapa spasi (margin) sebelum dan sesudah paragraf.</p>
          <pre>
&lt;p&gt;Ini adalah paragraf pertama.&lt;/p&gt;
&lt;p&gt;Ini adalah paragraf kedua.&lt;/p&gt;
          </pre>
          <p>Anda tidak dapat memastikan bagaimana HTML akan ditampilkan. Layar besar atau kecil, dan jendela yang diubah ukurannya akan membuat hasil yang berbeda. Dengan HTML, Anda tidak dapat mengubah tampilan output dengan menambahkan spasi ekstra atau baris ekstra dalam kode HTML Anda.</p>
        `,
      },
      {
        id: "html-links",
        title: "HTML Links",
        content: `
          <h1>HTML Links (Tautan)</h1>
          <p>Tautan HTML (hyperlink) digunakan untuk menghubungkan satu halaman ke halaman lain. Elemen <code>&lt;a&gt;</code> (anchor) adalah elemennya.</p>
          <p>Atribut yang paling penting adalah <code>href</code>, yang menunjukkan tujuan tautan.</p>
          <pre>
&lt;a href="httpsa://www.google.com"&gt;Kunjungi Google&lt;/a&gt;
          </pre>
          <p>Secara default, tautan akan muncul sebagai berikut di browser:</p>
          <ul>
            <li>Tautan yang belum dikunjungi digarisbawahi dan berwarna biru.</li>
            <li>Tautan yang sudah dikunjungi digarisbawahi dan berwarna ungu.</li>
            <li>Tautan aktif digarisbawahi dan berwarna merah.</li>
          </ul>
        `,
      },
      {
        id: "html-images",
        title: "HTML Gambar",
        content: `
          <h1>HTML Gambar</h1>
          <p>Gambar dapat meningkatkan desain dan tampilan halaman web. Elemen <code>&lt;img&gt;</code> digunakan untuk menyisipkan gambar.</p>
          <p>Tag <code>&lt;img&gt;</code> adalah tag kosong, yang berarti hanya berisi atribut dan tidak memiliki tag penutup.</p>
          <p>Atribut <code>src</code> (source) menentukan jalur (URL) ke gambar. Atribut <code>alt</code> (alternatif) menyediakan teks alternatif untuk gambar jika tidak dapat ditampilkan.</p>
          <pre>
&lt;img src="gambar_mobil.jpg" alt="Mobil balap merah"&gt;
          </pre>
          <p>Anda juga bisa menentukan lebar dan tinggi gambar dengan atribut <code>width</code> dan <code>height</code>.</p>
          <pre>
&lt;img src="gambar_mobil.jpg" alt="Mobil balap merah" width="500" height="300"&gt;
          </pre>
        `,
      },
      {
        id: "html-lists",
        title: "HTML Lists",
        content: `
          <h1>HTML Lists (Daftar)</h1>
          <p>HTML menyediakan dua jenis daftar utama: daftar tidak terurut (unordered) dan daftar terurut (ordered).</p>
          
          <h3>Unordered List (Daftar Tidak Terurut)</h3>
          <p>Daftar tidak terurut dimulai dengan tag <code>&lt;ul&gt;</code>. Setiap item daftar dimulai dengan tag <code>&lt;li&gt;</code> (list item).</p>
          <p>Secara default, item daftar akan ditandai dengan bulet (lingkaran hitam kecil).</p>
          <pre>
&lt;ul&gt;
  &lt;li&gt;Kopi&lt;/li&gt;
  &lt;li&gt;Teh&lt;/li&gt;
  &lt;li&gt;Susu&lt;/li&gt;
&lt;/ul&gt;
          </pre>
          
          <h3>Ordered List (Daftar Terurut)</h3>
          <p>Daftar terurut dimulai dengan tag <code>&lt;ol&gt;</code>. Setiap item daftar juga dimulai dengan tag <code>&lt;li&gt;</code>.</p>
          <p>Secara default, item daftar akan ditandai dengan angka.</p>
          <pre>
&lt;ol&gt;
  &lt;li&gt;Bangun tidur&lt;/li&gt;
  &lt;li&gt;Mandi&lt;/li&gt;
  &lt;li&gt;Sarapan&lt;/li&gt;
&lt;/ol&gt;
          </pre>
        `,
      },
      {
        id: "html-tables",
        title: "HTML Tabel",
        content: `
          <h1>HTML Tabel</h1>
          <p>Tabel HTML digunakan untuk menampilkan data dalam bentuk baris dan kolom.</p>
          <ul>
            <li>Tabel HTML didefinisikan dengan tag <code>&lt;table&gt;</code>.</li>
            <li>Setiap baris tabel didefinisikan dengan tag <code>&lt;tr&gt;</code> (table row).</li>
            <li>Setiap header tabel didefinisikan dengan tag <code>&lt;th&gt;</code> (table header). Teks di dalamnya otomatis tebal dan terpusat.</li>
            <li>Setiap sel data/konten didefinisikan dengan tag <code>&lt;td&gt;</code> (table data).</li>
          </ul>

          <h3>Contoh Tabel Sederhana</h3>
          <pre>
&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;Nama Depan&lt;/th&gt;
    &lt;th&gt;Nama Belakang&lt;/th&gt;
    &lt;th&gt;Usia&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Budi&lt;/td&gt;
    &lt;td&gt;Santoso&lt;/td&gt;
    &lt;td&gt;30&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Ani&lt;/td&gt;
    &lt;td&gt;Wijaya&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
          </pre>
          <p><strong>Catatan:</strong> Atribut <code>border="1"</code> digunakan untuk menampilkan garis pada tabel. Saat ini, cara yang lebih modern adalah menggunakan CSS.</p>
        `,
      },
      {
        id: "html-block-inline",
        title: "HTML Block & Inline",
        content: `
          <h1>HTML Elemen Block vs Inline</h1>
          <p>Setiap elemen HTML memiliki tampilan default, yang utamanya adalah <strong>block</strong> atau <strong>inline</strong>.</p>
          
          <h3>Elemen Block-level</h3>
          <p>Elemen block-level selalu dimulai di baris baru dan mengambil lebar penuh yang tersedia (membentang ke kiri dan kanan sejauh mungkin).</p>
          <p>Contoh elemen block-level:</p>
          <ul>
            <li><code>&lt;div&gt;</code> (wadah utama)</li>
            <li><code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code></li>
            <li><code>&lt;p&gt;</code></li>
            <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></li>
            <li><code>&lt;table&gt;</code></li>
          </ul>
          
          <h3>Elemen Inline-level</h3>
          <p>Elemen inline-level tidak dimulai di baris baru dan hanya mengambil lebar sebanyak yang diperlukan.</p>
          <p>Contoh elemen inline-level:</p>
          <ul>
            <li><code>&lt;span&gt;</code> (wadah inline)</li>
            <li><code>&lt;a&gt;</code> (link)</li>
            <li><code>&lt;img&gt;</code> (gambar)</li>
            <li><code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;strong&gt;</code></li>
          </ul>

          <p>Tag <code>&lt;div&gt;</code> sering digunakan sebagai wadah (container) untuk elemen-elemen lain untuk kemudian ditata dengan CSS, sedangkan <code>&lt;span&gt;</code> digunakan untuk menampung sebagian kecil teks di dalam baris.</p>
        `,
      },
      {
        id: "html-forms",
        title: "HTML Forms",
        content: `
          <h1>HTML Forms (Formulir)</h1>
          <p>Formulir HTML digunakan untuk mengumpulkan input dari pengguna. Input pengguna ini paling sering dikirim ke server untuk diproses.</p>
          <p>Formulir didefinisikan dengan tag <code>&lt;form&gt;</code>.</p>
          
          <h3>Elemen <code>&lt;input&gt;</code></h3>
          <p>Elemen <code>&lt;input&gt;</code> adalah elemen formulir yang paling penting. Tampilannya bervariasi tergantung atribut <code>type</code>.</p>

          <h3>Elemen <code>&lt;label&gt;</code></h3>
          <p>Tag <code>&lt;label&gt;</code> mendefinisikan label untuk elemen input. Ini penting untuk aksesibilitas; pengguna pembaca layar akan membacakan label saat fokus pada input.</p>

          <pre>
&lt;form action="/proses-data.php" method="POST"&gt;
  
  &lt;!-- Input Teks --&gt;
  &lt;label for="nama"&gt;Nama Lengkap:&lt;/label&gt;&lt;br&gt;
  &lt;input type="text" id="nama" name="nama_user"&gt;&lt;br&gt;&lt;br&gt;
  
  &lt;!-- Input Radio Button --&gt;
  &lt;p&gt;Jenis Kelamin:&lt;/p&gt;
  &lt;input type="radio" id="pria" name="jenis_kelamin" value="Pria"&gt;
  &lt;label for="pria"&gt;Pria&lt;/label&gt;&lt;br&gt;
  &lt;input type="radio" id="wanita" name="jenis_kelamin" value="Wanita"&gt;
  &lt;label for="wanita"&gt;Wanita&lt;/label&gt;&lt;br&gt;&lt;br&gt;
  
  &lt;!-- Input Checkbox --&gt;
  &lt;input type="checkbox" id="setuju" name="setuju" value="Ya"&gt;
  &lt;label for="setuju"&gt; Saya setuju dengan syarat dan ketentuan.&lt;/label&gt;&lt;br&gt;&lt;br&gt;
  
  &lt;!-- Tombol Submit --&gt;
  &lt;input type="submit" value="Kirim"&gt;
  
&lt;/form&gt;
          </pre>
        `,
      },
      {
        id: "html-semantic",
        title: "HTML Semantik",
        content: `
          <h1>HTML Semantik</h1>
          <p>Elemen semantik adalah elemen HTML yang memiliki <strong>makna</strong> atau arti yang jelas bagi browser dan pengembang.</p>
          <p>Contoh elemen <strong>non-semantik</strong>: <code>&lt;div&gt;</code> dan <code>&lt;span&gt;</code>. Keduanya tidak memberi tahu apa-apa tentang konten di dalamnya.</p>
          <p>Contoh elemen <strong>semantik</strong>: <code>&lt;form&gt;</code>, <code>&lt;table&gt;</code>, dan <code>&lt;article&gt;</code>. Keduanya dengan jelas mendefinisikan kontennya.</p>
          
          <h3>Elemen Layout Semantik (HTML5)</h3>
          <p>HTML5 memperkenalkan elemen-elemen baru untuk struktur layout halaman yang lebih bermakna:</p>
          <ul>
            <li><code>&lt;header&gt;</code>: Mendefinisikan header untuk dokumen atau bagian (biasanya berisi logo, navigasi).</li>
            <li><code>&lt;nav&gt;</code>: Mendefinisikan wadah untuk link navigasi utama.</li>
            <li><code>&lt;main&gt;</code>: Menentukan konten utama dan unik dari dokumen.</li>
            <li><code>&lt;section&gt;</code>: Mendefinisikan bagian (section) dalam dokumen.</li>
            <li><code>&lt;article&gt;</code>: Mendefinisikan konten mandiri (seperti posting blog atau berita).</li>
            <li><code>&lt;aside&gt;</code>: Mendefinisikan konten di samping (seperti sidebar).</li>
            <li><code>&lt;footer&gt;</code>: Mendefinisikan footer untuk dokumen atau bagian (biasanya berisi info hak cipta, kontak).</li>
          </ul>
          
          <p>Menggunakan elemen semantik membantu mesin pencari (SEO) dan pembaca layar (aksesibilitas) untuk memahami struktur halaman web Anda.</p>
        `,
      },
    ],
  },

  css: {
    title: "CSS",
    lessons: [
      {
        id: "css-intro",
        title: "CSS Pendahuluan",
        content: `
          <h1>CSS Pendahuluan</h1>
          <p>CSS adalah singkatan dari Cascading Style Sheets.</p>
          <p>CSS digunakan untuk memformat tata letak halaman web.</p>
          <p>Dengan CSS, kamu bisa mengontrol warna, font, ukuran teks, jarak antar elemen, dan banyak lagi!</p>
          <p>Bayangkan HTML sebagai kerangka (tulang) mobil, dan CSS sebagai cat, velg, dan desain interiornya.</p>
        `,
      },
      {
        id: "css-syntax",
        title: "CSS Sintaks",
        content: `
          <h1>CSS Sintaks</h1>
          <p>Sebuah aturan CSS terdiri dari sebuah selektor dan sebuah blok deklarasi.</p>
          <pre>
selektor {
  properti: nilai;
}
          </pre>
          <ul>
            <li><strong>Selektor</strong> menunjuk ke elemen HTML yang ingin kamu gayai (Contoh: <code>h1</code>, <code>p</code>, <code>.nama-class</code>).</li>
            <li><strong>Blok deklarasi</strong> berisi satu atau lebih deklarasi yang dipisahkan oleh titik koma.</li>
            <li>Setiap deklarasi mencakup <strong>nama properti</strong> CSS dan sebuah <strong>nilai</strong>, dipisahkan oleh titik dua.</li>
          </ul>
          <h3>Contoh:</h3>
          <pre>
/* Memilih semua elemen <p> dan membuatnya merah */
p {
  color: red;
  font-size: 16px;
}
          </pre>
        `,
      },
      // [BARU] Materi tambahan CSS
      {
        id: "css-howto",
        title: "Cara Menambahkan CSS",
        content: `
          <h1>3 Cara Menambahkan CSS ke HTML</h1>
          <p>Ada tiga cara untuk menyisipkan CSS ke dalam dokumen HTML:</p>
          
          <h3>1. External CSS (Cara Terbaik)</h3>
          <p>Dengan file CSS eksternal, Anda dapat mengubah tampilan seluruh situs web hanya dengan mengubah satu file!</p>
          <p>Setiap halaman HTML harus menyertakan referensi ke file stylesheet eksternal di dalam elemen <code>&lt;head&gt;</code>.</p>
          <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  ...
&lt;/body&gt;
&lt;/html&gt;
          </pre>
          
          <h3>2. Internal CSS</h3>
          <p>Stylesheet internal dapat digunakan jika satu halaman HTML memiliki gaya yang unik.</p>
          <p>Gaya internal didefinisikan di dalam elemen <code>&lt;style&gt;</code>, di dalam <code>&lt;head&gt;</code>.</p>
          <pre>
&lt;head&gt;
  &lt;style&gt;
    body {
      background-color: linen;
    }
    h1 {
      color: maroon;
    }
  &lt;/style&gt;
&lt;/head&gt;
          </pre>

          <h3>3. Inline CSS</h3>
          <p>Gaya inline digunakan untuk menerapkan gaya unik ke satu elemen. Cara ini <strong>tidak direkomendasikan</strong> karena mencampurkan konten (HTML) dan presentasi (CSS).</p>
          <pre>
&lt;h1 style="color:blue; text-align:center;"&gt;
  Ini adalah heading biru.
&lt;/h1&gt;
          </pre>
        `,
      },
      {
        id: "css-selectors",
        title: "CSS Selektor",
        content: `
          <h1>CSS Selektor</h1>
          <p>Selektor CSS digunakan untuk "menemukan" atau memilih elemen HTML yang ingin Anda gayai.</p>
          <p>Kita dapat membagi selektor CSS menjadi lima kategori:</p>
          <ul>
            <li><strong>Selektor Sederhana</strong> (memilih elemen berdasarkan nama, id, class)</li>
            <li><strong>Selektor Kombinasi</strong> (memilih elemen berdasarkan hubungan spesifik di antara mereka)</li>
            <li><strong>Selektor Pseudo-class</strong> (memilih elemen berdasarkan state tertentu, misal: <code>:hover</code>)</li>
            <li><strong>Selektor Pseudo-element</strong> (memilih dan menggayakan bagian dari elemen, misal: <code>::before</code>)</li>
            <li><strong>Selektor Atribut</strong> (memilih elemen berdasarkan atribut atau nilai atribut)</li>
          </ul>

          <h3>Selektor Paling Umum</h3>
          <pre>
/* 1. Selektor Elemen (Tag) */
/* Memilih semua elemen <p> */
p {
  text-align: center;
}

/* 2. Selektor ID */
/* Memilih elemen dengan id="intro" */
#intro {
  font-size: 20px;
}

/* 3. Selektor Class */
/* Memilih semua elemen dengan class="highlight" */
.highlight {
  background-color: yellow;
}
          </pre>
        `,
      },
      {
        id: "css-colors",
        title: "CSS Colors",
        content: `
          <h1>CSS Colors (Warna)</h1>
          <p>Warna sangat penting dalam CSS. Kita bisa mengatur warna teks, warna latar belakang, warna border, dan lainnya.</p>
          <p>Ada beberapa cara untuk mendefinisikan warna di CSS:</p>
          
          <h3>1. Nama Warna (Color Names)</h3>
          <p>Cara termudah adalah menggunakan nama warna yang telah ditentukan dalam bahasa Inggris. Ada lebih dari 140 nama warna standar.</p>
          <pre>
body {
  background-color: lightblue;
}
h1 {
  color: tomato;
}
p {
  color: navy;
}
          </pre>

          <h3>2. HEX (Hexadecimal)</h3>
          <p>Ini adalah cara paling umum. Nilai HEX adalah representasi RGB (Red, Green, Blue) yang diawali dengan tanda pagar <code>#</code>.</p>
          <p>Formatnya adalah <code>#RRGGBB</code>, di mana RR (merah), GG (hijau), dan BB (biru) adalah nilai heksadesimal antara 00 dan FF.</p>
          <pre>
/* #FF0000 (Merah Penuh) */
h1 {
  color: #FF0000;
}
/* #000000 (Hitam) */
p {
  color: #000000;
}
/* #FFFFFF (Putih) */
body {
  background-color: #FFFFFF;
}
          </pre>
          
          <h3>3. RGB (Red, Green, Blue)</h3>
          <p>Cara ini mendefinisikan warna menggunakan fungsi <code>rgb()</code> dengan nilai intensitas Merah, Hijau, dan Biru, masing-masing dari 0 hingga 255.</p>
          <pre>
/* rgb(255, 0, 0) (Merah Penuh) */
h1 {
  color: rgb(255, 0, 0);
}
/* rgb(0, 0, 0) (Hitam) */
p {
  color: rgb(0, 0, 0);
}
          </pre>
          <p>Kita juga bisa menambahkan nilai <strong>Alpha</strong> (transparansi) menggunakan <code>rgba()</code>. Nilai alpha berkisar dari 0.0 (transparan penuh) hingga 1.0 (solid).</p>
          <pre>
/* Merah dengan 50% transparansi */
div {
  background-color: rgba(255, 0, 0, 0.5);
}
          </pre>
        `,
      },
      {
        id: "css-backgrounds",
        title: "CSS Backgrounds",
        content: `
          <h1>CSS Backgrounds (Latar Belakang)</h1>
          <p>Properti CSS background digunakan untuk mengatur efek latar belakang pada elemen.</p>
          
          <h3><code>background-color</code></h3>
          <p>Properti ini sudah kita bahas di materi Warna. Ini mengatur warna latar belakang solid.</p>
          <pre>
body {
  background-color: #f1f1f1;
}
          </pre>

          <h3><code>background-image</code></h3>
          <p>Properti ini digunakan untuk mengatur gambar sebagai latar belakang. Gunakan <code>url()</code> untuk menunjuk ke lokasi gambar.</p>
          <pre>
body {
  background-image: url("images/pattern.png");
}
          </pre>

          <h3><code>background-repeat</code></h3>
          <p>Secara default, gambar latar akan diulang (repeat) secara horizontal dan vertikal. Properti ini mengontrol perilaku tersebut.</p>
          <ul>
            <li><code>repeat</code>: (Default) Diulang ke semua arah.</li>
            <li><code>no-repeat</code>: Gambar hanya ditampilkan sekali.</li>
            <li><code>repeat-x</code>: Gambar diulang hanya secara horizontal.</li>
            <li><code>repeat-y</code>: Gambar diulang hanya secara vertikal.</li>
          </ul>
          <pre>
body {
  background-image: url("images/logo.png");
  background-repeat: no-repeat;
}
          </pre>
          
          <h3><code>background-position</code></h3>
          <p>Digunakan untuk mengatur posisi awal gambar latar belakang. Nilai umumnya adalah <code>left</code>, <code>right</code>, <code>center</code>, <code>top</code>, <code>bottom</code>, atau kombinasi keduanya (misal: <code>center top</code>).</p>
          <pre>
body {
  background-image: url("images/logo.png");
  background-repeat: no-repeat;
  background-position: center top;
}
          </pre>
        `,
      },
      {
        id: "css-boxmodel",
        title: "CSS Box Model",
        content: `
          <h1>CSS Box Model</h1>
          <p>Di CSS, semua elemen HTML dapat dianggap sebagai "kotak". Konsep Box Model ini sangat penting karena ini adalah cara CSS mengatur tata letak dan ukuran elemen.</p>
          <p>Box Model terdiri dari empat lapisan:</p>
          <ol>
            <li><strong>Content</strong>: Konten sebenarnya dari kotak, di mana teks dan gambar muncul.</li>
            <li><strong>Padding</strong>: Ruang transparan di sekitar konten (di dalam border).</li>
            <li><strong>Border</strong>: Garis yang mengelilingi padding dan konten.</li>
            <li><strong>Margin</strong>: Ruang transparan di luar border, yang mendorong elemen lain menjauh.</li>
          </ol>
          <p>Bayangkan sebuah foto berbingkai:</p>
          <ul>
            <li><strong>Foto</strong> adalah <strong>Content</strong>.</li>
            <li><strong>Karton putih</strong> antara foto dan bingkai adalah <strong>Padding</strong>.</li>
            <li><strong>Bingkai kayu</strong> itu sendiri adalah <strong>Border</strong>.</li>
            <li><strong>Jarak</strong> antara bingkai itu dengan bingkai foto lain di dinding adalah <strong>Margin</strong>.</li>
          </ul>

          <h3>Contoh Properti Box Model</h3>
          <pre>
div.box-saya {
  /* 1. Ukuran Content */
  width: 300px;
  height: 200px;
  
  /* 2. Padding (ruang di dalam border) */
  padding: 20px;
  
  /* 3. Border (garis) */
  border: 5px solid black;
  
  /* 4. Margin (ruang di luar border) */
  margin: 15px;
  
  background-color: lightblue;
}
          </pre>
          <p><strong>Penting:</strong> Saat Anda mengatur <code>width</code> dan <code>height</code>, itu hanya berlaku untuk area <strong>Content</strong>. Ukuran total elemen di layar sebenarnya adalah <strong>Content + Padding + Border</strong>.</p>
        `,
      },
      {
        id: "css-text-fonts",
        title: "CSS Text & Fonts",
        content: `
          <h1>CSS Text & Fonts</h1>
          <p>CSS memiliki banyak properti untuk menata teks dan font.</p>
          
          <h3>Properti Font</h3>
          <ul>
            <li><code>font-family</code>: Mengatur jenis font (tipografi) yang digunakan. Selalu sediakan font cadangan (fallback).</li>
            <li><code>font-size</code>: Mengatur ukuran teks (misal: <code>16px</code>, <code>1.2em</code>).</li>
            <li><code>font-weight</code>: Mengatur ketebalan teks (misal: <code>normal</code>, <code>bold</code>, atau angka <code>400</code>, <code>700</code>).</li>
            <li><code>font-style</code>: Mengatur gaya teks (misal: <code>normal</code>, <code>italic</code>).</li>
          </ul>
          <pre>
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

h1 {
  font-family: "Georgia", Times, serif;
  font-size: 32px;
  font-weight: bold;
}

p.miring {
  font-style: italic;
}
          </pre>

          <h3>Properti Teks</h3>
          <ul>
            <li><code>color</code>: Mengatur warna teks (telah dibahas).</li>
            <li><code>text-align</code>: Mengatur perataan teks horizontal (<code>left</code>, <code>right</code>, <code>center</code>, <code>justify</code>).</li>
            <li><code>text-decoration</code>: Menambahkan atau menghapus dekorasi teks (<code>none</code>, <code>underline</code>, <code>line-through</code>).</li>
            <li><code>line-height</code>: Mengatur jarak antar baris teks (spasi).</li>
          </ul>
          <pre>
h1 {
  text-align: center;
}

p {
  line-height: 1.6; /* 1.6x lebih besar dari ukuran font */
}

a {
  text-decoration: none; /* Menghapus garis bawah dari link */
}
          </pre>
        `,
      },

      /*
        ^^^^^ BATAS MATERI BARU - JS ^^^^^
      */
    ],
  },
  javascript: {
    title: "JavaScript",
    lessons: [
      {
        id: "js-intro",
        title: "JS Pendahuluan",
        content: `
          <h1>JavaScript Pendahuluan</h1>
          <p>JavaScript adalah bahasa pemrograman paling populer di dunia.</p>
          <p>JavaScript adalah bahasa pemrograman untuk Web.</p>
          <p>JavaScript dapat memperbarui dan mengubah baik HTML maupun CSS.</p>
          <p>Jika HTML adalah kerangka mobil dan CSS adalah catnya, maka JavaScript adalah <strong>mesin</strong>, <strong>lampu</strong>, dan <strong>klakson</strong>. Ia membuat website "hidup" dan interaktif.</p>
        `,
      },
      // [BARU] Materi tambahan JavaScript
      {
        id: "js-output",
        title: "JS Output (Keluaran)",
        content: `
          <h1>JavaScript Output</h1>
          <p>JavaScript dapat "menampilkan" data dengan cara yang berbeda:</p>
          
          <h3>1. Menulis ke Elemen HTML (<code>innerHTML</code>)</h3>
          <p>Untuk mengakses elemen HTML, JavaScript dapat menggunakan metode <code>document.getElementById(id)</code>.</p>
          <p>Atribut <code>innerHTML</code> mendefinisikan konten HTML:</p>
          <pre>
// HTML: &lt;p id="demo"&gt;&lt;/p&gt;
// JS:
document.getElementById("demo").innerHTML = "Halo JavaScript!";
          </pre>
          
          <h3>2. Menulis ke Konsol Browser (<code>console.log</code>)</h3>
          <p>Untuk tujuan debugging, Anda dapat menggunakan metode <code>console.log()</code> untuk menampilkan data di konsol browser.</p>
          <p>Tekan F12 di browser Anda untuk membuka konsol.</p>
          <pre>
let a = 5;
let b = 10;
let c = a + b;
console.log(c); // Akan menampilkan 15 di konsol
          </pre>
          
          <h3>3. Menulis ke Peringatan (<code>alert</code>)</h3>
          <p>Anda dapat menggunakan kotak peringatan (alert) untuk menampilkan data:</p>
          <pre>
alert("Selamat datang di website kami!");
          </pre>
        `,
      },
      {
        id: "js-variables",
        title: "JS Variabel",
        content: `
          <h1>JavaScript Variabel</h1>
          <p>Variabel adalah "wadah" untuk menyimpan nilai data.</p>
          <p>Dalam JavaScript, ada tiga cara untuk mendeklarasikan variabel:</p>
          <ul>
            <li><code>var</code> (Cara lama, sebaiknya dihindari)</li>
            <li><code>let</code> (Untuk nilai yang bisa berubah)</li>
            <li><code>const</code> (Untuk nilai yang konstan/tidak akan berubah)</li>
          </ul>

          <h3>Contoh <code>let</code></h3>
          <p>Gunakan <code>let</code> jika Anda tahu nilai variabel mungkin perlu diubah nanti.</p>
          <pre>
let umur = 17;
umur = 18; // Nilai bisa diubah
console.log(umur); // Output: 18
          </pre>

          <h3>Contoh <code>const</code></h3>
          <p>Gunakan <code>const</code> jika nilai variabel tidak akan pernah berubah. Ini mencegah perubahan yang tidak disengaja.</p>
          <pre>
const tanggalLahir = "1 Januari 2005";
// tanggalLahir = "2 Februari 2006"; // Ini akan menyebabkan error!
console.log(tanggalLahir); // Output: 1 Januari 2005
          </pre>
          
          <h3>Penamaan Variabel</h3>
          <p>Nama variabel di JavaScript (dan kebanyakan bahasa lain) biasanya menggunakan <strong>camelCase</strong>.</p>
          <pre>
let namaSaya = "Budi"; // Benar (camelCase)
let hobi_saya = "Memancing"; // (snake_case, umum di Python tapi jarang di JS)
let NamaSaya = "Ani"; // (PascalCase, biasanya untuk Class)
          </pre>
        `,
      },
      {
        id: "js-events",
        title: "JS Events (Kejadian)",
        content: `
          <h1>JavaScript Events</h1>
          <p>HTML events adalah "kejadian" yang terjadi pada elemen HTML. JavaScript dapat <strong>bereaksi</strong> terhadap kejadian ini.</p>
          <p>Event bisa berupa sesuatu yang dilakukan browser (seperti halaman selesai dimuat) atau sesuatu yang dilakukan pengguna (seperti mengklik tombol).</p>
          
          <h3>Contoh Event <code>onclick</code></h3>
          <p>Ini adalah cara paling umum untuk menjalankan kode JavaScript. Atribut <code>onclick</code> ditambahkan ke elemen HTML.</p>
          
          <p><strong>Contoh di HTML:</strong></p>
          <pre>
&lt;button onclick="tampilkanPesan()"&gt;Klik Saya!&lt;/button&gt;
          </pre>
          
          <p><strong>Contoh di JavaScript:</strong></p>
          <pre>
// Fungsi ini akan dipanggil saat tombol diklik
function tampilkanPesan() {
  alert("Anda baru saja mengklik tombol!");
}
          </pre>
          
          <h3>Contoh Event Lainnya:</h3>
          <ul>
            <li><code>onchange</code>: Saat nilai elemen input diubah.</li>
            <li><code>onmouseover</code>: Saat mouse digerakkan ke atas elemen.</li>
            <li><code>onmouseout</code>: Saat mouse digerakkan keluar dari elemen.</li>
            <li><code>onload</code>: Saat halaman selesai dimuat.</li>
          </ul>
        `,
      },
      {
        id: "js-dom-manipulation",
        title: "JS DOM Manipulation",
        content: `
          <h1>JS DOM Manipulation</h1>
          <p>JavaScript dapat memanipulasi <strong>DOM (Document Object Model)</strong>. DOM adalah representasi pohon dari semua elemen di halaman HTML Anda.</p>
          <p>Dengan memanipulasi DOM, Anda dapat mengubah konten HTML, mengubah atribut, dan bahkan mengubah style CSS secara dinamis.</p>

          <h3>Menemukan Elemen HTML</h3>
          <p>Anda sudah belajar <code>document.getElementById(id)</code>. Ada cara lain:</p>
          <ul>
            <li><code>document.getElementsByTagName(namaTag)</code>: Menemukan elemen berdasarkan tag (misal: 'p').</li>
            <li><code>document.getElementsByClassName(namaClass)</code>: Menemukan elemen berdasarkan class.</li>
            <li><code>document.querySelector(selectorCSS)</code>: Menemukan elemen <strong>pertama</strong> yang cocok dengan selector CSS (misal: '#intro', '.box').</li>
            <li><code>document.querySelectorAll(selectorCSS)</code>: Menemukan <strong>semua</strong> elemen yang cocok.</li>
          </ul>

          <h3>Mengubah Elemen</h3>
          <p>Setelah elemen ditemukan, Anda bisa mengubahnya:</p>
          <pre>
// Menemukan elemen
let judul = document.getElementById("judul-utama");

// 1. Mengubah konten (sudah dipelajari)
judul.innerHTML = "Judul Baru yang Keren!";

// 2. Mengubah atribut HTML
// Misal: <img id="gambar" src="gambar-lama.jpg">
let gambar = document.getElementById("gambar");
gambar.src = "gambar-baru.jpg";

// 3. Mengubah style CSS
// Properti CSS diubah menjadi camelCase (misal: background-color -> backgroundColor)
judul.style.color = "blue";
judul.style.fontSize = "24px";
judul.style.backgroundColor = "#f1f1f1";
          </pre>
        `,
      },
      {
        id: "js-functions",
        title: "JS Functions",
        content: `
          <h1>JS Functions (Fungsi)</h1>
          <p>Fungsi adalah blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi akan dieksekusi (dijalankan) ketika "dipanggil".</p>
          <p>Keuntungan utama menggunakan fungsi adalah <strong>reusability</strong> (dapat digunakan kembali). Anda menulis kode sekali, dan menggunakannya berkali-kali.</p>
          
          <h3>Mendefinisikan Fungsi</h3>
          <p>Sebuah fungsi didefinisikan dengan kata kunci <code>function</code>, diikuti dengan nama, lalu tanda kurung <code>()</code>.</p>
          <pre>
// Mendefinisikan fungsi
function sapaPengguna() {
  alert("Halo, selamat datang!");
}

// Memanggil fungsi (agar berjalan)
sapaPengguna();
sapaPengguna(); // Bisa dipanggil lagi
          </pre>

          <h3>Fungsi dengan Parameter</h3>
          <p>Anda dapat mengirim nilai (disebut <strong>parameter</strong> atau argumen) ke dalam fungsi. Ini membuat fungsi lebih dinamis.</p>
          <pre>
// 'nama' adalah parameter
function sapaNama(nama) {
  console.log("Halo, " + nama + "! Apa kabar?");
}

// Memanggil fungsi dengan nilai parameter
sapaNama("Budi"); // Output: Halo, Budi! Apa kabar?
sapaNama("Ani");  // Output: Halo, Ani! Apa kabar?
          </pre>
          
          <h3>Fungsi yang Mengembalikan Nilai (<code>return</code>)</h3>
          <p>Fungsi juga dapat mengembalikan nilai kembali ke kode yang memanggilnya menggunakan kata kunci <code>return</code>.</p>
          <pre>
// Fungsi ini menjumlahkan dua angka dan mengembalikannya
function tambah(angka1, angka2) {
  return angka1 + angka2;
}

// Menyimpan hasil fungsi ke dalam variabel
let hasilPenjumlahan = tambah(5, 3);

console.log(hasilPenjumlahan); // Output: 8
console.log(tambah(10, 10));  // Output: 20
          </pre>
        `,
      },
      {
        id: "js-operators",
        title: "JS Operators",
        content: `
          <h1>JavaScript Operators</h1>
          <p>Operators adalah simbol khusus yang digunakan untuk melakukan operasi pada nilai (variabel).</p>

          <h3>1. Arithmetic Operators (Aritmatika)</h3>
          <p>Digunakan untuk melakukan operasi matematika dasar.</p>
          <ul>
            <li><code>+</code> (Penjumlahan)</li>
            <li><code>-</code> (Pengurangan)</li>
            <li><code>*</code> (Perkalian)</li>
            <li><code>/</code> (Pembagian)</li>
            <li><code>%</code> (Modulus/Sisa bagi)</li>
          </ul>
          <pre>
let x = 10;
let y = 3;
console.log(x + y); // Output: 13
console.log(x * y); // Output: 30
console.log(x % y); // Output: 1 (Karena 10 dibagi 3 sisa 1)
          </pre>
          
          <h3>2. Assignment Operators (Penugasan)</h3>
          <p>Digunakan untuk memberikan nilai ke variabel.</p>
          <ul>
            <li><code>=</code> (Sama dengan)</li>
            <li><code>+=</code> (Tambah lalu isi, misal: <code>x += y</code> sama dengan <code>x = x + y</code>)</li>
            <li><code>-=</code> (Kurang lalu isi)</li>
          </ul>
          <pre>
let umur = 20;
umur += 1; // Sekarang umur menjadi 21
console.log(umur);
          </pre>
          
          <h3>3. Comparison Operators (Perbandingan)</h3>
          <p>Digunakan dalam logika untuk membandingkan dua nilai. Hasilnya selalu <strong>boolean</strong> (<code>true</code> atau <code>false</code>).</p>
          <ul>
            <li><code>==</code> (Sama dengan nilainya)</li>
            <li><code>===</code> (Sama dengan nilai DAN tipe datanya) - <strong>(Lebih disarankan)</strong></li>
            <li><code>!=</code> (Tidak sama dengan nilainya)</li>
            <li><code>!==</code> (Tidak sama dengan nilai ATAU tipe datanya) - <strong>(Lebih disarankan)</strong></li>
            <li><code>></code> (Lebih besar dari)</li>
            <li><code><</code> (Lebih kecil dari)</li>
            <li><code>>=</code> (Lebih besar atau sama dengan)</li>
            <li><code><=</code> (Lebih kecil atau sama dengan)</li>
          </ul>
          <pre>
let nilai = 100;
console.log(nilai > 90);   // Output: true
console.log(nilai === 100); // Output: true
console.log(nilai === "100"); // Output: false (karena tipe data beda, angka vs teks)
console.log(nilai == "100");  // Output: true (karena nilai dianggap sama)
          </pre>
        `,
      },
      {
        id: "js-conditionals",
        title: "JS Conditionals (if/else)",
        content: `
          <h1>JS Conditionals (Logika Kondisional)</h1>
          <p>Kondisional digunakan untuk melakukan tindakan berbeda berdasarkan kondisi yang berbeda.</p>
          
          <h3>Pernyataan <code>if</code></h3>
          <p>Gunakan <code>if</code> untuk menjalankan blok kode jika kondisi tertentu bernilai <code>true</code>.</p>
          <pre>
let jam = 10;

if (jam < 12) {
  console.log("Selamat pagi!");
}
// Output: Selamat pagi!
          </pre>

          <h3>Pernyataan <code>if...else</code></h3>
          <p>Gunakan <code>else</code> untuk menjalankan blok kode alternatif jika kondisi pertama bernilai <code>false</code>.</p>
          <pre>
let nilaiUjian = 70;

if (nilaiUjian >= 75) {
  console.log("Anda Lulus!");
} else {
  console.log("Anda Gagal (Remedial).");
}
// Output: Anda Gagal (Remedial).
          </pre>
          
          <h3>Pernyataan <code>if...else if...else</code></h3>
          <p>Gunakan <code>else if</code> untuk menentukan kondisi baru jika kondisi pertama salah.</p>
          <pre>
let nilaiHuruf = "A";

if (nilaiHuruf === "A") {
  console.log("Luar biasa!");
} else if (nilaiHuruf === "B") {
  console.log("Bagus!");
} else if (nilaiHuruf === "C") {
  console.log("Cukup.");
} else {
  console.log("Perlu belajar lagi.");
}
// Output: Luar biasa!
          </pre>
        `,
      },
    ],
  },
  // [BARU] Bagian baru untuk UI/UX
  design: {
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
  },
};
