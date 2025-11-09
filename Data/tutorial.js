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
    ],
  },
};