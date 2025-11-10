// Data khusus untuk materi HTML
export const html = {
  title: "HTML",
  lessons: [
    {
      id: "html-intro",
      title: "HTML Pendahuluan",
      content: `
          <h1>HTML Pendahuluan</h1>
          <p>HTML (Hyper Text Markup Language) adalah sebuah bahasa markup yang digunakan untuk membuat sebuah halaman web dan menampilkan berbagai informasi di dalam sebuah browser Internet. HTML menggambarkan struktur halaman web menggunakan markup.</p>
          
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
&lt;/html&gt;</pre>
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
          <pre>&lt;namatag&gt;Konten ada di sini...&lt;/namatag&gt;</pre>

          <p>Beberapa elemen HTML tidak memiliki konten (seperti elemen <code>&lt;br&gt;</code>). Elemen-elemen ini disebut elemen kosong. Elemen kosong tidak memiliki tag akhir!</p>
          <h3>Elemen Bersarang (Nested Elements)</h3>
          <p>Elemen HTML dapat disarangkan (ini berarti elemen dapat berisi elemen lain).</p>
          <p>Semua dokumen HTML terdiri dari elemen HTML bersarang.</p>
          <pre>
&lt;body&gt;
  &lt;h1&gt;Heading Pertama Saya&lt;/h1&gt;
  &lt;p&gt;Paragraf pertama saya.&lt;/p&gt;
&lt;/body&gt;</pre>
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
&lt;a href="https://www.w3schools.com"&gt;Ini adalah link&lt;/a&gt;</pre>
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
};