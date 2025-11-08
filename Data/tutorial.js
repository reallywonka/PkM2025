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
      /*
        VVVVV INI DIA MATERI BARU YANG KAMU TAMBAHKAN VVVVV
      */
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


      /*
        ^^^^^ BATAS MATERI BARU - CSS ^^^^^
      */
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
            <li><strong>Selektor</strong> menunjuk ke elemen HTML yang ingin kamu gayai.</li>
            <li><strong>Blok deklarasi</strong> berisi satu atau lebih deklarasi yang dipisahkan oleh titik koma.</li>
            <li>Setiap deklarasi mencakup <strong>nama properti</strong> CSS dan sebuah <strong>nilai</strong>, dipisahkan oleh titik dua.</li>
          </ul>
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
        `,
      },
    ],
  },
};