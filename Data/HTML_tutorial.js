// Data khusus untuk materi HTML
export const html = {
  title: "HTML",
  lessons: [
    {
      id: "html-intro",
      title: "HTML Pendahuluan",
      content: `
          <h1>Pendahuluan</h1>
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
          </ul><br>

          <h3>Hello World!</h3>
          <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Belajar HTML&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;Hello World!&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
        `,
    },
    {
      id: "tools",
      title: "Persiapan Tools",
      content: `
          <p>Sebelum mulai "ngoding", ada dua software wajib yang harus disiapkan:</p>

          <h3>1. Web Browser</h3>
          <p>Browser bertugas menerjemahkan kode HTML menjadi tampilan visual yang bisa dilihat manusia. Sebagai web developer, kita disarankan menggunakan browser yang memiliki fitur <em>Developer Tools</em> yang baik.</p>
          <ul>
              <li><strong>Google Chrome</strong> (Sangat Disarankan)</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
          </ul>

          <h3>2. Text Editor</h3>
          <p>Tempat menulis kode. Jangan gunakan <em>Microsoft Word</em> atau <em>Notepad biasa</em> karena tidak memiliki fitur pewarnaan kode (syntax highlighting) yang membantu kita melihat kesalahan.</p>
          <ul>
              <li><strong>Visual Studio Code (VS Code)</strong>: Editor paling populer, gratis, dan canggih.</li>
              <li><strong>Sublime Text</strong>: Sangat ringan dan cepat.</li>
              <li><strong>Notepad++</strong>: Alternatif ringan untuk Windows.</li>
              <li>Lainnya.</li>
          </ul>

          <div class="note">
              <strong>Tips File:</strong> Selalu simpan file kerjamu dalam satu folder khusus. Beri nama file utama dengan <code>index.html</code> agar otomatis dikenali browser sebagai halaman depan.
          </div>
        `,
    },
    {
      id: "html-document-structure",
      title: "Struktur Dasar Dokumen HTML",
      content: `
          <h1>Struktur Dasar Dokumen HTML</h1>
          <p>HTML setidaknya memiliki struktur dasar yang terdiri dari:</p>

          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>Ini <strong>bukan</strong> tag HTML. Ini adalah deklarasi yang memberi tahu browser "Dokumen ini adalah halaman HTML5". Ini harus selalu menjadi baris pertama.</td></tr>
              <tr><td><code>&lt;html&gt;</code></td><td>Tag "root" atau "akar" yang membungkus semua elemen lain di halaman. Atribut <code>lang="id"</code> adalah praktik terbaik untuk memberi tahu browser bahwa bahasa halaman ini adalah Indonesia.</td></tr>
              <tr><td><code>&lt;head&gt;</code></td><td>Berisi "otak" halaman atau metadata. Konten di sini (seperti <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code> CSS) tidak terlihat di halaman, tetapi penting untuk browser dan mesin pencari.</td></tr>
              <tr><td><code>&lt;body&gt;</code></td><td>Berisi "tubuh" halaman. <strong>Semua konten yang Anda lihat</strong> di browser—seperti heading, paragraf, gambar, dan link—harus ditempatkan di dalam tag ini.</td></tr>
            </tbody>
          </table>

          <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Judul Halaman Anda&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Semua Konten --&gt;
  &lt;/body&gt;
&lt;/html&gt; </pre>
        `,
    },
    {
      id: "html-tags",
      title: "HTML Tag",
      content: `
          <h1>Tag Elemen Dokumen</h1>
          <p>Tag digunakan untuk menyatakan elemen dalam suatu dokumen HTML. Tag dinyatakan dengan menggunakan tanda <b><</b> sebagai pembuka, dan diikuti dengan nama elemen, lalu ditutup dengan tanda <b>></b> sebagai penutup. Tag HTML digunakan untuk menyatakan suatu elemen dokumen akan dituliskan secara berpasangan, ada tag pembuka dan tag penutup.</p>

          <p>Penulisan tag HTML pembuka:</p>
          <pre>&lt;namaelemen&gt;</pre>
          
          <p>Penulisan tag HTML penutup:</p>
          <pre>&lt;/namaelemen&gt;</pre>

          <p>Tag HTML pembuka dan penutup menggunakan namaelemen yang sama, hanya pada elemen penutup, ada tambahan tanda <b>/</b> sebelum namaelemen nya.</p>
        `,
    },
    {
      id: "html-elements",
      title: "HTML Elemen",
      content: `
          <h1>Elemen HTML</h1>
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
          <h1>Atribut</h1>
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
          <h1>Heading</h1>
          <p>Heading HTML adalah judul atau subjudul yang ingin kamu tampilkan di halaman web.</p>
          <p>Heading HTML didefinisikan dengan tag <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code>.</p>
          <pre>
&lt;h1&gt;Ini adalah heading 1 (paling besar)&lt;/h1&gt;
&lt;h2&gt;Ini adalah heading 2&lt;/h2&gt;
&lt;h3&gt;Ini adalah heading 3&lt;/h3&gt;
&lt;h4&gt;Ini adalah heading 4&lt;/h4&gt;
&lt;h5&gt;Ini adalah heading 5&lt;/h5&gt;
&lt;h6&gt;Ini adalah heading 6 (paling kecil)&lt;/h6&gt;</pre>
          <p><strong>Penting:</strong> Gunakan heading hanya untuk judul. Jangan gunakan heading untuk membuat teks menjadi BESAR atau tebal.</p>
        `,
    },
    {
      id: "html-paragraphs",
      title: "HTML Paragraf",
      content: `
          <h1>Paragraf dan Gaya Teks</h1>
          <p>Paragraf HTML didefinisikan dengan tag <code>&lt;p&gt;</code>.</p>
          <p>Paragraf selalu dimulai di baris baru, dan browser secara otomatis menambahkan beberapa spasi (margin) sebelum dan sesudah paragraf.</p>
          <pre>
&lt;p&gt;Ini adalah paragraf pertama.&lt;/p&gt;
&lt;p&gt;Ini adalah paragraf kedua.&lt;/p&gt;</pre>
          <p>Anda tidak dapat memastikan bagaimana HTML akan ditampilkan. Layar besar atau kecil, dan jendela yang diubah ukurannya akan membuat hasil yang berbeda. Dengan HTML, Anda tidak dapat mengubah tampilan output dengan menambahkan spasi ekstra atau baris ekstra dalam kode HTML Anda.</p>

          <h3>Gaya Teks:</h3>
          <ul>
              <li><code>&lt;b&gt;</code> atau <code>&lt;strong&gt;</code>: <strong>Tebal (Bold)</strong></li>
              <li><code>&lt;i&gt;</code> atau <code>&lt;em&gt;</code>: <em>Miring (Italic)</em></li>
              <li><code>&lt;u&gt;</code>: <u>Garis Bawah (Underline)</u></li>
              <li><code>&lt;br&gt;</code>: Ganti baris (Enter/Break)</li>
              <li><code>&lt;hr&gt;</code>: Garis horizontal</li>
          </ul>

          <pre>
&lt;p&gt;
  &lt;b&gt;Teks ini dicetak tebal&lt;/b&gt;&lt;br&gt;
  &lt;i&gt;Teks ini dicetak miring&lt;/i&gt;&lt;br&gt;
  &lt;u&gt;Teks ini bergaris bawah&lt;/u&gt;
&lt;/p&gt; </pre>
        `,
    },
    {
      id: "html-links",
      title: "HTML Hyperlink",
      content: `
          <h1>Hyperlink (Tautan)</h1>
          <p>Tautan HTML (hyperlink) digunakan untuk menghubungkan satu halaman ke halaman lain. Elemen <code>&lt;a&gt;</code> (anchor) adalah elemennya.</p>
          <p>Atribut yang paling penting adalah <code>href</code>, yang menunjukkan tujuan tautan.</p>
          <pre>
&lt;a href="https://www.google.com"&gt;Kunjungi Google&lt;/a&gt;</pre>
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
          <ul>
              <li>Atribut <code>src</code> (source) : Menentukan jalur/lokasi (URL) ke file gambar.</li>
              <li>Atribut <code>alt</code> (alternatif) : Menyediakan teks alternatif untuk gambar jika tidak dapat ditampilkan.</li>
          </ul>
          <pre>
&lt;img src="gambar_mobil.jpg" alt="Mobil balap merah"&gt;</pre>
          <p>Anda juga bisa menentukan lebar dan tinggi gambar dengan atribut <code>width</code> dan <code>height</code>.</p>
          <pre>
&lt;img src="gambar_mobil.jpg" alt="Mobil balap merah" width="500" height="300"&gt;</pre>
        `,
    },
    {
      id: "html-lists",
      title: "HTML Lists",
      content: `
          <h1>Lists</h1>
          <p>HTML menyediakan dua jenis daftar utama: daftar tidak terurut (unordered) dan daftar terurut (ordered).</p>
          <br>
          <h3>Unordered List (Daftar Tidak Terurut)</h3>
          <p>Daftar tidak terurut dimulai dengan tag <code>&lt;ul&gt;</code>. Setiap item daftar dimulai dengan tag <code>&lt;li&gt;</code> (list item).</p>
          <p>Secara default, item daftar akan ditandai dengan bulet (lingkaran hitam kecil).</p>
          <pre>
&lt;ul&gt;
  &lt;li&gt;Kopi&lt;/li&gt;
  &lt;li&gt;Teh&lt;/li&gt;
  &lt;li&gt;Susu&lt;/li&gt;
&lt;/ul&gt;</pre>
          <br>
          <h3>Ordered List (Daftar Terurut)</h3>
          <p>Daftar terurut dimulai dengan tag <code>&lt;ol&gt;</code>. Setiap item daftar juga dimulai dengan tag <code>&lt;li&gt;</code>.</p>
          <p>Secara default, item daftar akan ditandai dengan angka.</p>
          <pre>
&lt;ol&gt;
  &lt;li&gt;Bangun tidur&lt;/li&gt;
  &lt;li&gt;Mandi&lt;/li&gt;
  &lt;li&gt;Sarapan&lt;/li&gt;
&lt;/ol&gt;</pre>
        `,
    },
    {
      id: "html-tables",
      title: "HTML Tabel",
      content: `
          <h1>Tabel</h1>
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
&lt;/table&gt;</pre>
          <p><strong>Catatan:</strong> Atribut <code>border="1"</code> digunakan untuk menampilkan garis pada tabel. Saat ini, cara yang lebih modern adalah menggunakan CSS.</p>
        `,
    },
    {
      id: "html-divspan",
      title: "HTML Div & Span",
      content: `
          <h1>Div & Span</h1>
          <p>Dua tag ini sangat penting untuk pengelompokan elemen (Grouping).</p>
          <h3>&lt;div&gt; (Division)</h3>
          <p>Elemen <strong>Block</strong>. Digunakan untuk mengelompokkan bagian besar (seperti header, sidebar, footer). Otomatis membuat baris baru.</p>
          <pre>
&lt;div class="kotak-berita"&gt;
  &lt;h2&gt;Judul Berita&lt;/h2&gt;
  &lt;p&gt;Isi berita...&lt;/p&gt;
&lt;/div&gt; </pre>
          <br>
          <h3>&lt;span&gt;</h3>
          <p>Elemen <strong>Inline</strong>. Digunakan untuk menandai bagian kecil teks dalam satu baris (misal: mewarnai satu kata).</p>
          <pre>
&lt;p&gt;Saya suka warna &lt;span style="color:red"&gt;Merah&lt;/span&gt;.&lt;/p&gt; </pre>
        `,
    },
    {
      id: "html-block-inline",
      title: "HTML Block & Inline",
      content: `
          <h1>Elemen Block vs Inline</h1>
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
  
&lt;/form&gt;</pre>
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
    {
      id: "html-comments",
      title: "HTML Komentar",
      content: `
          <h1>HTML Komentar</h1>
          <p>Komentar HTML (HTML Comments) adalah catatan atau teks yang Anda tambahkan ke dalam kode HTML, tetapi <strong>tidak akan ditampilkan</strong> oleh browser di halaman web.</p>
          <p>Komentar sangat berguna untuk:</p>
          <ul>
            <li>Meninggalkan catatan untuk diri sendiri atau pengembang lain tentang cara kerja kode.</li>
            <li>"Menonaktifkan" sementara sebagian kode untuk tujuan pengujian (debugging) tanpa harus menghapusnya.</li>
          </ul>
          <h3>Sintaks Komentar</h3>
          <p>Komentar dimulai dengan <code>&lt;!--</code> dan diakhiri dengan <code>--&gt;</code>.</p>
          <pre>
&lt;!-- Ini adalah komentar satu baris --&gt;

&lt;p&gt;Ini adalah paragraf yang akan tampil.&lt;/p&gt;

&lt;!-- 
  Ini adalah komentar
  yang mencakup
  beberapa baris.
--&gt;

&lt;!-- &lt;p&gt;Paragraf ini tidak akan tampil.&lt;/p&gt; --&gt;
          </pre>
        `,
    },
    {
      id: "html-text-formatting-advanced",
      title: "Pemformatan Teks Lanjutan",
      content: `
          <h1>Pemformatan Teks Lanjutan</h1>
          <p>Selain <code>&lt;strong&gt;</code> dan <code>&lt;em&gt;</code>, HTML menyediakan tag untuk pemformatan yang lebih spesifik, seperti Subscript, Superscript, dan Simbol Khusus.</p>
          
          <h3>Subscript (<code>&lt;sub&gt;</code>) dan Superscript (<code>&lt;sup&gt;</code>)</h3>
          <ul>
            <li><strong><code>&lt;sub&gt;</code> (Subscript):</strong> Mendefinisikan teks yang ditempatkan sedikit <strong>di bawah</strong> garis normal. Biasa digunakan untuk rumus kimia.</li>
            <li><strong><code>&lt;sup&gt;</code> (Superscript):</strong> Mendefinisikan teks yang ditempatkan sedikit <strong>di atas</strong> garis normal. Biasa digunakan untuk catatan kaki (footnote) atau rumus matematika.</li>
          </ul>
          <pre>
&lt;!-- Contoh Subscript --&gt;
<p>Rumus kimia untuk air adalah H&lt;sub&gt;2&lt;/sub&gt;O.</p>

&lt;!-- Contoh Superscript --&gt;
<p>Rumus matematika terkenal: E = mc&lt;sup&gt;2&lt;/sup&gt;.</p>
          </pre>

          <h3>Simbol Khusus (HTML Entities)</h3>
          <p>Beberapa karakter, seperti <code>&lt;</code> atau <code>&gt;</code>, memiliki makna khusus di HTML. Untuk menampilkannya sebagai teks, kita harus menggunakan "HTML Entities" (Entitas HTML).</p>
          <p>Entitas selalu dimulai dengan ampersand (<code>&amp;</code>) dan diakhiri dengan titik koma (<code>;</code>).</p>
          
          <p><strong>Contoh Umum:</strong></p>
          <ul>
            <li>Untuk menampilkan <code>&lt;</code>, gunakan <code>&amp;lt;</code></li>
            <li>Untuk menampilkan <code>&gt;</code>, gunakan <code>&amp;gt;</code></li>
            <li>Untuk menampilkan <code>&amp;</code>, gunakan <code>&amp;amp;</code></li>
            <li>Untuk menampilkan simbol Hak Cipta (©), gunakan <code>&amp;copy;</code></li>
            <li>Untuk spasi ekstra (Non-Breaking Space), gunakan <code>&amp;nbsp;</code></li>
          </ul>
          <pre>
&lt;!-- SALAH: Browser akan mengira ini tag --&gt;
&lt;p&gt;Jika x < 10, maka...&lt;/p&gt;

&lt;!-- BENAR: Gunakan entitas --&gt;
&lt;p&gt;Jika x &amp;lt; 10, maka...&lt;/p&gt;
          </pre>
        `,
    },
    {
      id: "html-media",
      title: "HTML Video & Audio",
      content: `
          <h1>HTML Media: Video & Audio</h1>
          <p>HTML5 memperkenalkan tag <code>&lt;video&gt;</code> dan <code>&lt;audio&gt;</code> yang memungkinkan Anda menyematkan konten media langsung ke halaman web tanpa memerlukan plugin eksternal seperti Flash.</p>
          
          <h2>HTML Video</h2>
          <p>Tag <code>&lt;video&gt;</code> digunakan untuk menampilkan klip video. Anda harus menyertakan atribut <code>controls</code> agar pengguna dapat memutar, menjeda, dan mengatur volume video.</p>
          <pre>
&lt;video src="path/ke/video-saya.mp4" width="320" height="240" controls&gt;
  Browser Anda tidak mendukung tag video.
&lt;/video&gt;
          </pre>
          <p><strong>Atribut Penting:</strong></p>
          <ul>
            <li><code>src</code>: Lokasi file video Anda.</li>
            <li><code>controls</code>: Menampilkan kontrol pemutar standar.</li>
            <li><code>width</code> / <code>height</code>: Mengatur ukuran pemutar video.</li>
            <li><code>autoplay</code>: Memutar video secara otomatis (sering diblokir browser modern).</li>
            <li><code>muted</code>: Membisukan video (sering diperlukan agar <code>autoplay</code> berfungsi).</li>
          </ul>

          <h2>HTML Audio</h2>
          <p>Sama seperti video, tag <code>&lt;audio&gt;</code> digunakan untuk memutar file suara. Atribut <code>controls</code> juga sangat penting di sini.</p>
          <pre>
&lt;audio src="path/ke/musik-saya.mp3" controls&gt;
  Browser Anda tidak mendukung tag audio.
&lt;/audio&gt;
          </pre>

          <div class="tip-box">
            <h3>Menggunakan Tag <code>&lt;source&gt;</code></h3>
            <p>Browser yang berbeda terkadang mendukung format file yang berbeda (misal: MP4, WebM, Ogg). Untuk jangkauan terbaik, Anda dapat menyediakan beberapa format file menggunakan tag <code>&lt;source&gt;</code> di dalam tag <code>&lt;video&gt;</code> atau <code>&lt;audio&gt;</code>.</p>
            <pre>
&lt;video controls width="300"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  Browser Anda tidak mendukung pemutaran video ini.
&lt;/video&gt;
            </pre>
          </div>
        `,
    },
    {
      id: "html-iframe",
      title: "HTML Iframe",
      content: `
          <h1>HTML Iframe</h1>
          <p>Tag <code>&lt;iframe&gt;</code> (kependekan dari "inline frame") digunakan untuk menampilkan sebuah halaman web di dalam halaman web lain. Ini seperti membuka "jendela" kecil ke situs web lain.</p>
          <p>Penggunaan paling umum untuk <code>&lt;iframe&gt;</code> saat ini adalah untuk menyematkan konten dari pihak ketiga, seperti video YouTube, peta Google Maps, atau postingan media sosial.</p>
          
          <h3>Sintaks Dasar</h3>
          <p>Anda hanya perlu menentukan URL yang ingin ditampilkan di dalam atribut <code>src</code>.</p>
          <pre>
&lt;iframe src="https://www.w3schools.com"&gt;&lt;/iframe&gt;
          </pre>

          <h3>Atribut Penting</h3>
          <p>Selalu atur <code>width</code>, <code>height</code>, dan <code>title</code> untuk <code>&lt;iframe&gt;</code> Anda.</p>
          <ul>
            <li><code>width</code> / <code>height</code>: Menentukan lebar dan tinggi "jendela" iframe.</li>
            <li><code>title</code>: Deskripsi konten iframe (sangat penting untuk aksesibilitas dan pembaca layar).</li>
          </ul>
          <pre>
&lt;iframe 
  src="httpsia://www.google.com/maps/embed?..." 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy"
  title="Contoh Peta Google Maps"
&gt;&lt;/iframe&gt;
          </pre>
          
          <div class="warning-box">
            <h3>Catatan Keamanan</h3>
            <p>Banyak situs web modern (seperti Google.com atau Facebook.com) secara eksplisit <strong>melarang</strong> halaman mereka dimuat di dalam <code>&lt;iframe&gt;</code> karena alasan keamanan (untuk mencegah "clickjacking"). Mereka hanya mengizinkan jika mereka menyediakannya secara khusus melalui URL "embed" (sematan), seperti pada contoh peta di atas.</p>
          </div>
        `,
    },
    {
      id: "html-head-meta",
      title: "Elemen <head> & Meta Tag",
      content: `
          <h1>Elemen <code>&lt;head&gt;</code> & Meta Tag</h1>
          <p>Jika <code>&lt;body&gt;</code> adalah "tubuh" atau "wajah" dari halaman web Anda, maka <code>&lt;head&gt;</code> adalah "otak"-nya. Konten di dalam <code>&lt;head&gt;</code> tidak terlihat di halaman, tetapi berisi semua data penting (metadata) yang memberi tahu browser cara menangani halaman Anda.</p>
          
          <h3>Isi Umum dari <code>&lt;head&gt;</code></h3>
          <ul>
            <li><code><strong>&lt;title&gt;</strong></code>: (Wajib) Menentukan judul halaman yang muncul di tab browser dan hasil pencarian Google.</li>
            <li><code><strong>&lt;meta&gt;</strong></code>: (Penting) Menyediakan metadata tentang halaman.</li>
            <li><code><strong>&lt;link&gt;</strong></code>: (Penting) Digunakan untuk menghubungkan file eksternal, paling sering adalah file CSS.</li>
            <li><code><strong>&lt;script&gt;</strong></code>: Digunakan untuk menautkan atau menulis kode JavaScript.</li>
          </ul>

          <h3>Meta Tag yang Wajib Diketahui</h3>
          <p>Tag <code>&lt;meta&gt;</code> adalah tag serbaguna. Berikut adalah dua meta tag yang akan selalu Anda gunakan:</p>
          
          <h4>1. <code>charset</code> (Pengkodean Karakter)</h4>
          <p>Meta tag ini memberi tahu browser jenis pengkodean karakter yang digunakan halaman Anda. Menggunakan <code>UTF-8</code> adalah standar universal yang memastikan semua simbol dan bahasa (termasuk emoji 😉) tampil dengan benar.</p>
          <pre>
&lt;meta charset="UTF-8"&gt;
          </pre>
          
          <h4>2. <code>viewport</code> (Tampilan Seluler)</h4>
          <p>Ini adalah salah satu meta tag <strong>paling penting</strong> untuk pengembangan web modern. Tanpa tag ini, website Anda akan terlihat sangat kecil (di-zoom out) di perangkat seluler (HP).</p>
          <p>Tag ini memberi tahu browser seluler: "Atur lebar halaman agar pas dengan lebar layar perangkat, dan atur skala zoom awal ke 100%."</p>
          <pre>
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
          </pre>
          
          <div class="tip-box">
            <h3>Meta untuk SEO</h3>
            <p>Anda juga dapat menggunakan meta tag untuk memberikan deskripsi halaman ke mesin pencari seperti Google, yang dapat meningkatkan SEO (Search Engine Optimization).</p>
            <pre>
&lt;meta name="description" content="Website pembelajaran web interaktif untuk pemula."&gt;
            </pre>
          </div>
        `,
    },
    {
      id: "html-text-formatting-basic",
      title: "Pemformatan Teks Dasar",
      content: `
          <h1>Pemformatan Teks Dasar (Style Teks)</h1>
          <p>Selain tag paragraf (<code>&lt;p&gt;</code>) dan heading (<code>&lt;h1&gt;</code>), HTML memiliki banyak tag <em>inline</em> yang dirancang khusus untuk memberi "gaya" atau makna semantik pada bagian-bagian kecil dari teks Anda.</p>
          
          <h3>Perbedaan Semantik vs. Visual</h3>
          <p>Beberapa tag memiliki makna semantik (makna khusus), sementara yang lain murni untuk visual.</p>
          <ul>
            <li><code><strong>&lt;strong&gt;</strong></code>: Menandakan teks yang memiliki <strong>kepentingan serius</strong>. Browser menampilkannya sebagai <strong>tebal</strong>.</li>
            <li><code><b></code>: Murni visual untuk <b>menebalkan</b> teks tanpa menyiratkan kepentingan khusus.</li>
            <li><code><em>&lt;em&gt;</em></code>: Menandakan teks yang ingin <strong>ditekankan</strong> (emphasis). Browser menampilkannya sebagai <em>miring</em>.</li>
            <li><code><i></code>: Murni visual untuk membuat <i>miring</i> teks (sering digunakan untuk istilah teknis atau nama).</li>
          </ul>

          <h3>Tag Pemformatan Umum Lainnya</h3>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;mark&gt;</code></td><td>Mendefinisikan teks yang ditandai atau <mark>disorot</mark> (highlighted).</td></tr>
              <tr><td><code>&lt;del&gt;</code></td><td>Mendefinisikan teks yang telah <del>dihapus</del> dari dokumen.</td></tr>
              <tr><td><code>&lt;ins&gt;</code></td><td>Mendefinisikan teks yang <ins>disisipkan</ins> ke dalam dokumen.</td></tr>
              <tr><td><code>&lt;u&gt;</code></td><td>Mendefinisikan teks yang <u>digarisbawahi</u> (murni visual, sebaiknya dihindari agar tidak dikira link).</td></tr>
              <tr><td><code>&lt;small&gt;</code></td><td>Mendefinisikan teks yang <small>lebih kecil</small> (sering untuk hak cipta atau catatan kaki).</td></tr>
            </tbody>
          </table>

          <pre>
<p>Gunakan <strong>&lt;strong&gt;</strong> untuk hal penting.</p>
<p>Gunakan <em>&lt;em&gt;</em> untuk penekanan.</p>
<p>Harga lama: <del>$100</del>, harga baru: <ins>$80</ins>!</p>
          </pre>
        `,
    },
    {
      id: "html-global-attributes",
      title: "Atribut Global (Global Attributes)",
      content: `
          <h1>HTML Atribut Global (Global Attributes)</h1>
          <p>Atribut global adalah atribut yang dapat digunakan pada <strong>semua elemen HTML</strong>, tanpa terkecuali. Baik itu <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, atau <code>&lt;span&gt;</code>, semuanya dapat memiliki atribut ini.</p>
          <p>Meskipun ada banyak, ada beberapa atribut global yang paling fundamental dan wajib Anda ketahui:</p>
          
          <table class="ref-table">
            <thead><tr><th>Atribut</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code><strong>id</strong></code></td><td>Memberikan <strong>ID unik</strong> untuk sebuah elemen. Dalam satu halaman HTML, tidak boleh ada dua elemen dengan ID yang sama. Sangat penting untuk JavaScript (<code>getElementById</code>) dan tautan internal (<code>href="#id-saya"</code>).</td></tr>
              <tr><td><code><strong>class</strong></code></td><td>Memberikan satu atau lebih <strong>nama kelas</strong> untuk sebuah elemen. Ini adalah cara paling umum untuk memilih elemen di CSS (<code>.nama-kelas</code>). Elemen bisa punya banyak kelas, dan banyak elemen bisa punya kelas yang sama.</td></tr>
              <tr><td><code><strong>style</strong></code></td><td>Digunakan untuk menerapkan <strong>CSS Inline</strong> (CSS yang ditulis langsung di tag HTML). Ini sebaiknya dihindari dan diganti dengan file CSS eksternal, tetapi berguna untuk pengujian cepat.</td></tr>
              <tr><td><code><strong>title</strong></code></td><td>Memberikan informasi tambahan tentang elemen, yang biasanya muncul sebagai <strong>tooltip</strong> (kotak info kecil) saat pengguna mengarahkan mouse ke atas elemen.</td></tr>
              <tr><td><code><strong>lang</strong></code></td><td>Menentukan bahasa dari konten elemen. Paling sering digunakan pada tag <code>&lt;html&gt;</code> (misal: <code>&lt;html lang="id"&gt;</code>) untuk membantu mesin pencari dan pembaca layar.</td></tr>
            </tbody>
          </table>

          <h3>Contoh Penggunaan</h3>
          <pre>
<h1 id="judul-utama">Halaman Utama</h1>

<p class="info-box penting">Ini adalah paragraf penting.</p>

<p style="color: blue; font-size: 20px;">Paragraf ini biru.</p>

<button title="Klik untuk menyimpan dokumen Anda">Simpan</button>
          </pre>
        `,
    },
    {
      id: "html-semantic-layout",
      title: "Template Layout Semantik",
      content: `
          <h1>Template Layout Semantik</h1>
          <p>Sebelum HTML5, pengembang web membuat struktur layout halaman hanya menggunakan tag <code>&lt;div&gt;</code> dengan ID seperti <code>&lt;div id="header"&gt;</code> atau <code>&lt;div class="footer"&gt;</code>. Ini tidak memiliki "makna".</p>
          <p>HTML5 memperkenalkan elemen semantik (lihat poin 2.12 di buku) yang secara spesifik dirancang untuk <strong>membangun struktur layout</strong> halaman. Menggunakan tag ini membuat kode Anda lebih mudah dibaca, lebih mudah diakses oleh pembaca layar, dan lebih baik untuk SEO.</p>
          
          <h3>Struktur Layout Halaman Tipikal</h3>
          <p>Berikut adalah contoh template halaman web modern menggunakan elemen semantik:</p>
          
          <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;title&gt;Contoh Halaman Semantik&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;!-- HEADER: Bagian atas halaman, berisi logo & navigasi utama --&gt;
  &lt;header&gt;
    &lt;img src="logo.png" alt="Logo Perusahaan"&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="/"&gt;Beranda&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/tentang"&gt;Tentang Kami&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/kontak"&gt;Kontak&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;!-- MAIN: Konten utama yang unik untuk halaman ini --&gt;
  &lt;main&gt;
    &lt;article&gt;
      &lt;h1&gt;Judul Artikel Utama&lt;/h1&gt;
      &lt;p&gt;Ini adalah paragraf pertama dari konten utama...&lt;/p&gt;
    &lt;/article&gt;

    &lt;!-- ASIDE: Konten sampingan, terkait tapi tidak esensial --&gt;
    &lt;aside&gt;
      &lt;h3&gt;Link Terkait&lt;/h3&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="/terbaru"&gt;Berita Terbaru&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/aside&gt;
  &lt;/main&gt;

  &lt;!-- FOOTER: Bagian bawah halaman, berisi info hak cipta, dll. --&gt;
  &lt;footer&gt;
    &lt;p&gt;&copy; 2025 Website Saya. Semua hak cipta dilindungi.&lt;/p&gt;
  &lt;/footer&gt;

&lt;/body&gt;
&lt;/html&gt;
          </pre>
          <div class="info-box">
            <p><strong>Catatan:</strong> Elemen semantik ini secara visual tidak berbeda dengan <code>&lt;div&gt;</code>. Anda tetap harus menatanya menggunakan CSS (misalnya menggunakan Flexbox atau Grid) untuk membuatnya terlihat seperti layout yang Anda inginkan.</p>
          </div>
        `,
    },
    {
      id: "html-forms-advanced",
      title: "Elemen Form Lanjutan",
      content: `
          <h1>Elemen Form Lanjutan</h1>
          <p>Selain input teks dan tombol radio, formulir HTML memiliki elemen yang lebih kuat untuk mengumpulkan data, seperti menu dropdown (<code>&lt;select&gt;</code>) dan kotak teks multi-baris (<code>&lt;textarea&gt;</code>).</p>
          
          <h2><code>&lt;select&gt;</code> (Menu Dropdown)</h2>
          <p>Tag <code>&lt;select&gt;</code> digunakan untuk membuat daftar pilihan (menu dropdown). Setiap pilihan di dalam daftar didefinisikan oleh tag <code>&lt;option&gt;</code>.</p>
          <p>Ini sangat berguna ketika Anda memiliki banyak pilihan dan ingin menghemat ruang layar.</p>
          <pre>
&lt;label for="jurusan"&gt;Pilih Jurusan Anda:&lt;/label&gt;
&lt;select id="jurusan" name="jurusan_user"&gt;
  &lt;option value=""&gt;--Pilih Opsi--&lt;/option&gt;
  &lt;option value="informatika"&gt;Teknik Informatika&lt;/option&gt;
  &lt;option value="sipil"&gt;Teknik Sipil&lt;/option&gt;
  &lt;option value="mesin"&gt;Teknik Mesin&lt;/option&gt;
&lt;/select&gt;
          </pre>

          <h2><code>&lt;textarea&gt;</code> (Area Teks)</h2>
          <p>Jika <code>&lt;input type="text"&gt;</code> hanya untuk satu baris, <code>&lt;textarea&gt;</code> adalah untuk input multi-baris. Ini sangat ideal untuk kotak "Komentar", "Pesan", atau "Alamat".</p>
          <p>Anda dapat mengontrol ukurannya dengan atribut <code>rows</code> (jumlah baris) dan <code>cols</code> (jumlah kolom/lebar).</p>
          <pre>
&lt;label for="pesan"&gt;Tulis Pesan Anda:&lt;/label&gt;&lt;br&gt;
&lt;textarea 
  id="pesan" 
  name="pesan_user" 
  rows="5" 
  cols="40"
  placeholder="Ketik pesan Anda di sini..."
&gt;&lt;/textarea&gt;
          </pre>
          <div class="tip-box">
            <p><strong>Catatan:</strong> Tidak seperti tag <code>&lt;input&gt;</code>, tag <code>&lt;textarea&gt;</code> memiliki tag penutup (<code>&lt;/textarea&gt;</code>). Teks <em>placeholder</em> (teks petunjuk) harus diatur menggunakan atribut <code>placeholder</code>, bukan di antara tag.</p>
          </div>
        `,
    },
  ],
};
