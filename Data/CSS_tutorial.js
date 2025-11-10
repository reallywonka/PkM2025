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
  ],
};