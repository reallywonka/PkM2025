// Data khusus untuk materi CSS
export const css = {
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
}</pre>
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
}</pre>
        `,
    },
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
&lt;/html&gt;</pre>
          
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
&lt;/head&gt;</pre>

          <h3>3. Inline CSS</h3>
          <p>Gaya inline digunakan untuk menerapkan gaya unik ke satu elemen. Cara ini <strong>tidak direkomendasikan</strong> karena mencampurkan konten (HTML) dan presentasi (CSS).</p>
          <pre>
&lt;h1 style="color:blue; text-align:center;"&gt;
  Ini adalah heading biru.
&lt;/h1&gt;</pre>
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
} </pre>
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
}</pre>

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
}</pre>
          
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
}</pre>
          <p>Kita juga bisa menambahkan nilai <strong>Alpha</strong> (transparansi) menggunakan <code>rgba()</code>. Nilai alpha berkisar dari 0.0 (transparan penuh) hingga 1.0 (solid).</p>
          <pre>
/* Merah dengan 50% transparansi */
div {
  background-color: rgba(255, 0, 0, 0.5);
}</pre>
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
}</pre>

          <h3><code>background-image</code></h3>
          <p>Properti ini digunakan untuk mengatur gambar sebagai latar belakang. Gunakan <code>url()</code> untuk menunjuk ke lokasi gambar.</p>
          <pre>
body {
  background-image: url("images/pattern.png");
}</pre>

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
}</pre>
          
          <h3><code>background-position</code></h3>
          <p>Digunakan untuk mengatur posisi awal gambar latar belakang. Nilai umumnya adalah <code>left</code>, <code>right</code>, <code>center</code>, <code>top</code>, <code>bottom</code>, atau kombinasi keduanya (misal: <code>center top</code>).</p>
          <pre>
body {
  background-image: url("images/logo.png");
  background-repeat: no-repeat;
  background-position: center top;
}</pre>
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
}</pre>
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
}</pre>

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
}</pre>
        `,
    },
    {
      id: "css-layout-position",
      title: "CSS Layout: Position",
      content: `
      <h1>CSS Layout: Properti <code>position</code></h1>
      <p>Properti <code>position</code> adalah salah satu properti paling mendasar dalam tata letak CSS. Properti ini menentukan bagaimana sebuah elemen diposisikan di dalam halaman.</p>
      <p>Ada lima nilai utama untuk <code>position</code>:</p>
      
      <h3>1. <code>static</code></h3>
      <p>Ini adalah nilai default. Elemen akan mengalir di halaman secara normal. Mengatur <code>top</code>, <code>right</code>, <code>bottom</code>, atau <code>left</code> <strong>tidak akan berpengaruh</strong>.</p>
      
      <h3>2. <code>relative</code></h3>
      <p>Elemen diposisikan relatif terhadap posisi normalnya. Anda bisa "menggeser" elemen menggunakan <code>top</code>, <code>right</code>, dll. Ruang asli yang seharusnya ditempati elemen tersebut tetap dijaga (tidak diisi elemen lain).</p>
      
      <h3>3. <code>absolute</code></h3>
      <p>Elemen "dikeluarkan" dari alur normal halaman. Elemen ini diposisikan relatif terhadap <strong>leluhur (ancestor) terdekat yang memiliki posisi</strong> (selain <code>static</code>). Jika tidak ada, ia akan diposisikan relatif terhadap <code>&lt;body&gt;</code>.</p>
      
      <h3>4. <code>fixed</code></h3>
      <p>Elemen "dikeluarkan" dari alur normal halaman dan diposisikan relatif terhadap <strong>viewport (jendela browser)</strong>. Elemen ini akan tetap di tempat yang sama bahkan ketika halaman di-scroll. Contoh umum adalah header navigasi yang "menempel" di atas.</p>
      
      <h3>5. <code>sticky</code></h3>
      <p>Elemen ini bertindak seperti <code>relative</code> sampai ia mencapai titik tertentu saat di-scroll, kemudian ia akan "menempel" (bertindak seperti <code>fixed</code>). Ini sangat populer untuk judul sidebar atau header.</p>
      
      <div class="info-box">
        <h3>Properti <code>z-index</code></h3>
        <p>Ketika elemen saling tumpang tindih (misalnya saat menggunakan <code>position: absolute</code>), <code>z-index</code> menentukan urutan tumpukannya. Elemen dengan <code>z-index</code> lebih tinggi akan tampil di atas elemen dengan <code>z-index</code> lebih rendah.</p>
      </div>
    `,
    },
    {
      id: "css-layout-flexbox",
      title: "CSS Layout: Flexbox",
      content: `
      <h1>CSS Layout: Pengenalan Flexbox</h1>
      <p>Flexbox (Flexible Box Model) adalah model tata letak satu dimensi (1D) yang merevolusi cara kita mengatur elemen dalam baris atau kolom.</p>
      <p>Untuk menggunakan Flexbox, Anda hanya perlu menambahkan <code>display: flex;</code> pada elemen pembungkus (kontainer).</p>
      <pre>
.container {
  display: flex;
}</pre>
      <p>Semua anak langsung (direct children) dari <code>.container</code> akan otomatis menjadi "flex items".</p>
      
      <h3>Properti Penting pada Kontainer (Induk)</h3>
      <p>Ini adalah properti yang Anda atur pada elemen induk (<code>.container</code>) untuk mengontrol semua anaknya:</p>
      <ul>
        <li><strong><code>flex-direction</code></strong>: Menentukan arah sumbu utama.
          <ul>
            <li><code>row</code>: (Default) Item diatur berjajar secara horizontal.</li>
            <li><code>column</code>: Item diatur bertumpuk secara vertikal.</li>
          </ul>
        </li>
        <li><strong><code>justify-content</code></strong>: Mengatur perataan item di sepanjang <strong>sumbu utama</strong> (horizontal jika <code>row</code>).
          <ul>
            <li><code>flex-start</code>: (Default) Rapat kiri.</li>
            <li><code>flex-end</code>: Rapat kanan.</li>
            <li><code>center</code>: Rata tengah.</li>
            <li><code>space-between</code>: Jarak merata di antara item (item pertama di tepi kiri, item terakhir di tepi kanan).</li>
            <li><code>space-around</code>: Jarak merata di sekitar setiap item (termasuk setengah jarak di tepi).</li>
          </ul>
        </li>
        <li><strong><code>align-items</code></strong>: Mengatur perataan item di sepanjang <strong>sumbu silang</strong> (vertikal jika <code>row</code>).
          <ul>
            <li><code>flex-start</code>: Rapat atas.</li>
            <li><code>flex-end</code>: Rapat bawah.</li>
            <li><code>center</code>: Rata tengah vertikal.</li>
            <li><code>stretch</code>: (Default) Membuat semua item memiliki tinggi yang sama.</li>
          </ul>
        </li>
        <li><strong><code>gap</code></strong>: Properti modern yang memberi jarak (spasi) antar item. (ContH: <code>gap: 10px;</code>).</li>
      </ul>
      
      <div class="tip-box">
        <h3>Kapan Menggunakan Flexbox vs. Grid?</h3>
        <p><strong>Flexbox</strong> adalah pilihan terbaik untuk tata letak <strong>satu dimensi</strong> (mengatur elemen dalam satu baris ATAU satu kolom).<br>
        <strong>Grid</strong> adalah pilihan terbaik untuk tata letak <strong>dua dimensi</strong> (mengatur elemen dalam baris DAN kolom secara bersamaan, seperti papan catur).</p>
      </div>
    `,
    },
    {
      id: "css-units",
      title: "CSS Units (Satuan)",
      content: `
          <h1>CSS Units (Satuan Pengukuran)</h1>
          <p>Saat Anda menentukan ukuran (seperti <code>font-size</code>, <code>width</code>, atau <code>margin</code>), Anda perlu memberi tahu CSS "satuan" apa yang harus digunakan. Satuan ini terbagi menjadi dua kategori utama: <strong>Absolut</strong> dan <strong>Relatif</strong>.</p>
          
          <h3>Satuan Absolut (Absolute Units)</h3>
          <p>Satuan absolut adalah satuan dengan ukuran tetap yang tidak berubah, tidak peduli apa pun yang terjadi pada elemen lain.</p>
          <ul>
            <li><code><strong>px</strong></code> (Pixels): Ini adalah satuan absolut yang paling umum. <code>1px</code> adalah satu titik di layar. <code>px</code> sangat bagus untuk properti yang Anda ingin ukurannya tetap, seperti <code>border</code> atau <code>box-shadow</code>.</li>
          </ul>
          <pre>
.box {
  border: 5px solid black; /* 'px' bagus untuk border */
  width: 200px;
}
          </pre>

          <h3>Satuan Relatif (Relative Units)</h3>
          <p>Satuan relatif memiliki ukuran yang fleksibel. Ukurannya "relatif" atau bergantung pada ukuran elemen lain. Satuan ini adalah kunci untuk membuat desain yang responsif.</p>
          
          <ul>
            <li><code><strong>%</strong></code> (Persen): Relatif terhadap ukuran elemen <strong>induk (parent)</strong>. Sangat umum digunakan untuk <code>width</code> dalam membuat layout.</li>
            <li><code><strong>em</strong></code>: Relatif terhadap <code>font-size</code> dari <strong>elemen itu sendiri</strong>. Jika <code>font-size: 16px</code>, maka <code>2em</code> adalah <code>32px</code>.</li>
            <li><code><strong>rem</strong></code> (Root EM): <strong>Satuan modern yang paling disarankan untuk ukuran font dan spasi.</strong> <code>rem</code> relatif terhadap <code>font-size</code> dari elemen <strong>root (<code>&lt;html&gt;</code>)</strong>.</li>
          </ul>

          <div class="tip-box">
            <h3>Mengapa <code>rem</code> lebih baik dari <code>px</code> untuk Font?</h3>
            <p>Jika Anda mengatur <code>font-size</code> dalam <code>px</code>, ukurannya akan tetap. Tetapi jika Anda menggunakan <code>rem</code>, Anda mengizinkan pengguna untuk mengubah ukuran font dasar di browser mereka (untuk aksesibilitas). Dengan <code>rem</code>, seluruh tata letak (spasi, judul) Anda akan ikut membesar secara proporsional, menghasilkan desain yang jauh lebih mudah diakses.</p>
            <pre>
/* Standar modern yang baik */
html {
  font-size: 16px; /* 1rem = 16px */
}
h1 {
  font-size: 2rem; /* Hasil: 32px */
}
p {
  font-size: 1rem; /* Hasil: 16px */
  margin-bottom: 1.5rem; /* Hasil: 24px */
}
            </pre>
          </div>

          <ul>
            <li><code><strong>vw</strong></code> (Viewport Width): <code>1vw</code> adalah 1% dari lebar jendela browser.</li>
            <li><code><strong>vh</strong></code> (Viewport Height): <code>1vh</code> adalah 1% dari tinggi jendela browser.</li>
          </ul>
          <p><code>vw</code> dan <code>vh</code> sangat berguna untuk membuat elemen yang ukurannya pas di layar, seperti "hero section" di halaman depan.</p>
        `,
    },
  ],
};
