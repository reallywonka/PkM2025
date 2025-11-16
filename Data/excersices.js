export const Excersices = {
  // --- LATIHAN HTML ---
  html: {
    title: "HTML",
    lessons: [
      // ...
      {
        id: "html-exc-1",
        title: "Latihan Atribut Link",
        icon: "fa-solid fa-link",
        // [MODIFIKASI] Ganti seluruh 'content' dengan ini
        content: `
          <h1>Latihan Atribut <code>href</code></h1>
          <p><strong>Tantangan:</strong> Lengkapi kode di bawah ini untuk membuat link ke <code>https://www.google.com</code>. Klik "Run" untuk melihat hasilnya.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-html5" style="color: #e34f26;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-html-exc-1">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;!-- Tulis kodemu di sini --&gt;
  &lt;a&gt;Kunjungi Google&lt;/a&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-html-exc-1" data-frame-id="frame-html-exc-1">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-html-exc-1" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "html-exc-2",
        title: "Latihan Atribut Gambar",
        content: `
          <h1>Latihan Atribut <code>src</code> & <code>alt</code></h1>
          <p><strong>Tantangan:</strong> Tampilkan gambar <code>logo.png</code> (yang ada di <code>assets/image/logo.png</code>) dan berikan <code>alt</code> text "Logo".</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <textarea class="exc-code-input">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } img { width: 100px; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;!-- Tulis kodemu di sini --&gt;
  &lt;img&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn">Run</button>
            </div>
            <div class="exc-output">
              <iframe class="exc-output-frame" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "html-exc-3",
        title: "Latihan Daftar (Lists)",
        icon: "fa-solid fa-list-ul",
        content: `
          <h1>Latihan Daftar (Unordered List)</h1>
          <p><strong>Tantangan:</strong> Buat sebuah "Daftar Belanjaan" menggunakan tag <code>&lt;ul&gt;</code> (unordered list). Daftar tersebut harus berisi tiga item (<code>&lt;li&gt;</code>): "Apel", "Jeruk", dan "Susu".</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-html5" style="color: #e34f26;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-html-exc-3">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <h3>Daftar Belanjaan:</h3>

  &lt;!-- Tulis kodemu di sini --&gt;
  

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-html-exc-3" data-frame-id="frame-html-exc-3">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-html-exc-3" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "html-exc-4",
        title: "Latihan Form (Input)",
        icon: "fa-solid fa-keyboard",
        content: `
          <h1>Latihan Form Sederhana</h1>
          <p><strong>Tantangan:</strong> Buat sebuah label (<code>&lt;label&gt;</code>) dengan teks "Nama:" dan sebuah kotak input teks (<code>&lt;input type="text"&gt;</code>) di sebelahnya.</p>
          <div class="tip-box">
            <p><strong>Petunjuk:</strong> Gunakan atribut <code>for</code> pada <code>&lt;label&gt;</code> dan <code>id</code> pada <code>&lt;input&gt;</code> untuk menghubungkan keduanya. Ini adalah praktik terbaik untuk aksesibilitas.</p>
          </div>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-html5" style="color: #e34f26;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-html-exc-4">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <h3>Masukkan Namamu:</h3>

  &lt;!-- Tulis kodemu di sini --&gt;
  
  
&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-html-exc-4" data-frame-id="frame-html-exc-4">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-html-exc-4" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "html-exc-5",
        title: "Latihan Layout Semantik",
        icon: "fa-solid fa-layer-group",
        content: `
          <h1>Latihan Layout Semantik</h1>
          <p><strong>Tantangan:</strong> Kode di bawah ini menggunakan <code>&lt;div&gt;</code> dengan <code>id</code> untuk struktur halaman. Ganti <code>&lt;div&gt;</code> tersebut dengan tag HTML5 Semantik yang benar.</p>
          <ul>
            <li>Ganti <code>&lt;div id="header"&gt;</code> dengan <code>&lt;header&gt;</code>.</li>
            <li>Ganti <code>&lt;div id="content"&gt;</code> dengan <code>&lt;main&gt;</code>.</li>
            <li>Ganti <code>&lt;div id="footer"&gt;</code> dengan <code>&lt;footer&gt;</code>.</li>
          </ul>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-html5" style="color: #e34f26;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-html-exc-5">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; 
    body { font-family: sans-serif; margin: 0; }
    #header { background: #eee; padding: 20px; text-align: center; }
    #content { padding: 20px; height: 150px; }
    #footer { background: #333; color: white; padding: 10px; text-align: center; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;!-- Ganti tag-tag div di bawah ini --&gt;

  &lt;div id="header"&gt;
    &lt;h1&gt;Logo Perusahaan&lt;/h1&gt;
  &lt;/div&gt;

  &lt;div id="content"&gt;
    &lt;p&gt;Ini adalah konten utama halaman.&lt;/p&gt;
  &lt;/div&gt;
  
  &lt;div id="footer"&gt;
    &lt;p&gt;&copy; 2025&lt;/p&gt;
  &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-html-exc-5" data-frame-id="frame-html-exc-5">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-html-exc-5" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "html-exc-6",
        title: "Latihan Tabel Sederhana",
        icon: "fa-solid fa-table-cells",
        content: `
          <h1>Latihan Tabel Sederhana</h1>
          <p><strong>Tantangan:</strong> Buat sebuah tabel (<code>&lt;table&gt;</code>) data sederhana. Tabel harus memiliki <strong>header</strong> (<code>&lt;thead&gt;</code> dengan <code>&lt;th&gt;</code>) dan <strong>body</strong> (<code>&lt;tbody&gt;</code> dengan <code>&lt;td&gt;</code>).</p>
          <ul>
            <li>Header harus berisi: "Nama" dan "Umur".</li>
            <li>Harus ada satu baris data (<code>&lt;tr&gt;</code>) di body: "Budi" dan "20".</li>
          </ul>
          <p><strong>Catatan:</strong> Tambahkan <code>border="1"</code> ke tag <code>&lt;table&gt;</code> agar garisnya terlihat.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-html5" style="color: #e34f26;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-html-exc-6">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } table { border-collapse: collapse; } th, td { padding: 8px; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <h3>Data Siswa</h3>

  &lt;!-- Tulis kodemu di sini --&gt;
  

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-html-exc-6" data-frame-id="frame-html-exc-6">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-html-exc-6" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "html-exc-7",
        title: "Latihan Menyematkan Video",
        icon: "fa-solid fa-video",
        content: `
          <h1>Latihan Menyematkan Video</h1>
          <p><strong>Tantangan:</strong> Sematkan sebuah video menggunakan tag <code>&lt;video&gt;</code>. Gunakan file video publik ini sebagai sumber (<code>src</code>):</p>
          <p><code>https://www.w3schools.com/html/mov_bbb.mp4</code></p>
          <p>Pastikan video tersebut menampilkan <strong>kontrol</strong> (<code>controls</code>) dan memiliki lebar (<code>width</code>) <code>300</code>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-html5" style="color: #e34f26;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-html-exc-7">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <h3>Video Latihan</h3>

  &lt;!-- Tulis kodemu di sini --&gt;
  

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-html-exc-7" data-frame-id="frame-html-exc-7">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-html-exc-7" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "html-exc-8",
        title: "Latihan Form (Radio Button)",
        icon: "fa-solid fa-dot-circle",
        content: `
          <h1>Latihan Form (Radio Button)</h1>
          <p><strong>Tantangan:</strong> Buat sebuah pilihan "Jenis Kelamin" menggunakan <code>&lt;input type="radio"&gt;</code>.</p>
          <ol>
            <li>Buat dua radio button.</li>
            <li>Keduanya harus memiliki <code>name="jenis_kelamin"</code> agar saling terhubung (hanya satu yang bisa dipilih).</li>
            <li>Satu untuk "Pria" (<code>value="pria"</code>) dan satu untuk "Wanita" (<code>value="wanita"</code>).</li>
            <li>Jangan lupa tambahkan <code>&lt;label&gt;</code> untuk setiap pilihan.</li>
          </ol>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-html5" style="color: #e34f26;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-html-exc-8">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <h3>Pilih Jenis Kelamin:</h3>
  &lt;form&gt;
    &lt;!-- Tulis kodemu di sini --&gt;
    
    
  &lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-html-exc-8" data-frame-id="frame-html-exc-8">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-html-exc-8" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "html-exc-9",
        title: "Latihan Iframe (Embed)",
        icon: "fa-brands fa-youtube",
        content: `
          <h1>Latihan Iframe (Embed Video YouTube)</h1>
          <p><strong>Tantangan:</strong> Sematkan (embed) video YouTube menggunakan tag <code>&lt;iframe&gt;</code>.</p>
          <p>Gunakan URL embed berikut: <code>https://www.youtube.com/embed/ScMzIvxBSi4</code></p>
          <p>Atur <code>width</code> ke "560", <code>height</code> ke "315", dan berikan <code>title="Contoh Video YouTube"</code> untuk aksesibilitas.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-html5" style="color: #e34f26;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-html-exc-9">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <h3>Video YouTube Sematan:</h3>

  &lt;!-- Tulis kodemu di sini --&gt;
  

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-html-exc-9" data-frame-id="frame-html-exc-9">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-html-exc-9" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
    ],
  },

  // --- LATIHAN CSS ---
  css: {
    title: "CSS",
    lessons: [
      {
        id: "css-exc-1",
        title: "Latihan Selektor Class",
        content: `
          <h1>Latihan Selektor Class</h1>
          <p><strong>Tantangan:</strong> Buat teks di bawah ini menjadi berwarna biru (<code>blue</code>) menggunakan selektor <code>class</code>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <textarea class="exc-code-input">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    body { font-family: sans-serif; }
    
    /* Tulis CSS-mu di sini */
    
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;p class="info-text"&gt;Ini teks yang harus jadi biru.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn">Run</button>
            </div>
            <div class="exc-output">
              <iframe class="exc-output-frame" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "css-exc-2",
        title: "Latihan Warna & Latar",
        icon: "fa-solid fa-palette",
        content: `
          <h1>Latihan Warna & Latar Belakang</h1>
          <p><strong>Tantangan:</strong> Gunakan selektor class <code>.box</code> untuk memberikan style pada kotak di bawah. Buat agar kotak tersebut memiliki warna latar (<code>background-color</code>) <code>lightblue</code> dan warna teks (<code>color</code>) <code>darkblue</code>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-css3-alt" style="color: #264de4;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-css-exc-2">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    body { font-family: sans-serif; }
    .box {
      padding: 20px;
      border: 1px solid #ccc;
    }
    
    /* Tulis CSS-mu di sini */
    
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <div class="box">
    Ini adalah kotak untuk latihan.
  </div>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-css-exc-2" data-frame-id="frame-css-exc-2">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-css-exc-2" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "css-exc-3",
        title: "Latihan Box Model",
        icon: "fa-solid fa-box-open",
        content: `
          <h1>Latihan Box Model (Padding & Border)</h1>
          <p><strong>Tantangan:</strong> Teks di dalam kotak ini terlihat terlalu "mepet" ke tepi. Gunakan CSS untuk memperbaiki ini pada class <code>.box</code>.</p>
          <ol>
            <li>Tambahkan <code>padding</code> sebesar <code>20px</code> untuk memberi ruang bernapas di dalam kotak.</li>
            <li>Tambahkan <code>border</code> (garis tepi) sebesar <code>1px solid black</code>.</li>
          </ol>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-css3-alt" style="color: #264de4;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-css-exc-3">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    body { font-family: sans-serif; }
    .box {
      background-color: #eee;
      width: 200px;
      
      /* Tulis CSS-mu di sini */
      
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <div class="box">
    Teks ini butuh ruang bernapas.
  </div>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-css-exc-3" data-frame-id="frame-css-exc-3">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-css-exc-3" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "css-ref-units",
        title: "Satuan Ukuran (Units)",
        content: `
          <h1>Referensi Satuan Ukuran (Units)</h1>
          <p>Satuan yang digunakan untuk menentukan ukuran (panjang, lebar, spasi, ukuran font).</p>
          <h3>Satuan Absolut (Ukuran Tetap)</h3>
          <table class="ref-table">
            <thead><tr><th>Satuan</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>px</code></td><td>Pixel. Satuan ukuran tetap berdasarkan titik di layar.</td></tr>
            </tbody>
          </table>
          <h3>Satuan Relatif (Ukuran Fleksibel)</h3>
          <table class="ref-table">
            <thead><tr><th>Satuan</th><th>Relatif Terhadap</th></tr></thead>
            <tbody>
              <tr><td><code>%</code></td><td>Ukuran elemen induk (parent).</td></tr>
              <tr><td><code>em</code></td><td>Ukuran font dari elemen itu sendiri.</td></tr>
              <tr><td><code>rem</code></td><td>Ukuran font dari elemen root (<code>&lt;html&gt;</code>). <strong>Sangat disarankan untuk font & spasi.</strong></td></tr>
              <tr><td><code>vw</code></td><td>1% dari lebar viewport (jendela browser).</td></tr>
              <tr><td><code>vh</code></td><td>1% dari tinggi viewport (jendela browser).</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-exc-4",
        title: "Latihan Transisi (Hover)",
        icon: "fa-solid fa-wand-magic-sparkles",
        content: `
          <h1>Latihan Transisi (Hover)</h1>
          <p><strong>Tantangan:</strong> Tombol di bawah ini berubah warna latar (<code>background-color</code>) saat di-hover, tetapi perubahannya terjadi secara instan (kasar).</p>
          <p>Tambahkan properti <code>transition</code> pada class <code>.tombol</code> untuk membuat perubahan <code>background-color</code> tersebut berjalan mulus selama <code>0.3</code> detik (<code>0.3s</code>).</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-css3-alt" style="color: #264de4;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-css-exc-4">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    .tombol {
      background-color: #007bff; /* Biru */
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      
      /* Tulis CSS-mu di sini */
      
    }
    
    .tombol:hover {
      background-color: #0056b3; /* Biru Tua */
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <button class="tombol">
    Arahkan Mouse ke Sini
  </button>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-css-exc-4" data-frame-id="frame-css-exc-4">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-css-exc-4" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "css-exc-5",
        title: "Latihan CSS Units (rem)",
        icon: "fa-solid fa-text-height",
        content: `
          <h1>Latihan CSS Units (rem)</h1>
          <p><strong>Tantangan:</strong> Saat ini, <code>font-size</code> pada <code>&lt;html&gt;</code> diatur ke <code>10px</code> (untuk mempermudah perhitungan).</p>
          <p>Gunakan satuan <code>rem</code> untuk mengatur <code>font-size</code> dari <code>h1</code> menjadi <code>30px</code> dan <code>p</code> menjadi <code>16px</code>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-css3-alt" style="color: #264de4;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-css-exc-5">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    html {
      font-size: 10px; /* 1rem = 10px */
    }
    body { font-family: sans-serif; }
    
    h1 {
      /* Atur font-size menjadi 30px (gunakan rem) */
      
    }
    
    p {
      /* Atur font-size menjadi 16px (gunakan rem) */
      
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <h1>Judul Ini (target 30px)</h1>
  <p>Paragraf ini (target 16px).</p>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-css-exc-5" data-frame-id="frame-css-exc-5">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-css-exc-5" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "css-exc-6",
        title: "Latihan Positioning",
        icon: "fa-solid fa-map-pin",
        content: `
          <h1>Latihan CSS Positioning (Absolute)</h1>
          <p><strong>Tantangan:</strong> Buat agar kotak biru (<code>.box-biru</code>) tumpang tindih (overlap) di atas kotak abu-abu (<code>.box-abu</code>).</p>
          <ol>
            <li>Beri <code>position: relative;</code> pada <code>.container</code> (agar <code>.box-biru</code> mengacu padanya).</li>
            <li>Beri <code>position: absolute;</code> pada <code>.box-biru</code>.</li>
            <li>Atur <code>.box-biru</code> agar menempel <code>10px</code> dari <code>top</code> (atas) dan <code>10px</code> dari <code>left</code> (kiri) kontainer.</li>
          </ol>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-css3-alt" style="color: #264de4;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-css-exc-6">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    .container {
      width: 200px;
      height: 200px;
      border: 2px solid black;
      
      /* 1. Tambahkan position relative */
      
    }
    .box-abu {
      width: 100%;
      height: 100%;
      background: #eee;
    }
    .box-biru {
      width: 50px;
      height: 50px;
      background: lightblue;
      
      /* 2. Tambahkan position absolute */
      
      
      /* 3. Atur posisi top dan left */
      
      
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <div class="container">
    <div class="box-abu"></div>
    <div class="box-biru"></div>
  </div>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-css-exc-6" data-frame-id="frame-css-exc-6">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-css-exc-6" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "css-exc-7",
        title: "Latihan Animasi (@keyframes)",
        icon: "fa-solid fa-film",
        content: `
          <h1>Latihan Animasi (@keyframes)</h1>
          <p><strong>Tantangan:</strong> Buat animasi sederhana untuk kotak di bawah.</p>
          <ol>
            <li>Buat <code>@keyframes</code> dengan nama <code>mengembang</code>.</li>
            <li>Di <code>from</code> (atau <code>0%</code>), atur <code>transform: scale(1);</code>.</li>
            <li>Di <code>to</code> (atau <code>100%</code>), atur <code>transform: scale(1.1);</code> (memperbesar 10%).</li>
            <li>Terapkan animasi tersebut ke class <code>.box</code> menggunakan properti <code>animation</code>.</li>
          </ol>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-css3-alt" style="color: #264de4;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-css-exc-7">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    .box {
      width: 100px;
      height: 100px;
      background: lightblue;
      margin: 50px;
      
      /* 4. Terapkan animasi di sini */
      /* contoh: animation: mengembang 2s infinite alternate; */
      
    }
    
    /* 1. Buat @keyframes di sini */
    
    
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <div class="box"></div>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-css-exc-7" data-frame-id="frame-css-exc-7">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-css-exc-7" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "css-exc-8",
        title: "Latihan Centering (Margin)",
        icon: "fa-solid fa-align-center",
        content: `
          <h1>Latihan Centering (Margin)</h1>
          <p><strong>Tantangan:</strong> Kotak di bawah ini memiliki lebar (<code>width</code>) <code>200px</code>, tetapi menempel di sebelah kiri. Ini adalah trik layout yang sangat umum.</p>
          <p>Gunakan properti <code>margin</code> untuk membuat kotak ini berada di <strong>tengah</strong> secara horizontal.</p>
          <p><strong>Petunjuk:</strong> Anda perlu mengatur margin kiri dan kanan menjadi <code>auto</code>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-css3-alt" style="color: #264de4;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-css-exc-8">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    .box {
      width: 200px; /* Punya lebar tetap */
      height: 100px;
      background: #eee;
      border: 1px solid black;
      
      /* Tulis CSS-mu di sini */
      
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <div class="box">
    Saya ingin ke tengah
  </div>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-css-exc-8" data-frame-id="frame-css-exc-8">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-css-exc-8" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
    ],
  },

  // --- LATIHAN JAVASCRIPT ---
  javascript: {
    title: "JavaScript",
    lessons: [
      {
        id: "js-exc-1",
        title: "Latihan Variabel",
        content: `
          <h1>Latihan Variabel & Console</h1>
          <p><strong>Tantangan:</strong> Buat variabel <code>nama</code> berisi namamu, lalu tampilkan pesan "Halo, [namamu]" ke konsol.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <textarea class="exc-code-input">
// Tulis kodemu di sini

let nama = "namamu";
console.log("Halo, " + nama);
              </textarea>
              <button class="exc-run-js-btn">Run JS</button>
            </div>
            <div class="exc-output">
              <pre class="exc-js-output"></pre>
            </div>
          </div>
        `,
      },
      {
        id: "js-exc-2",
        title: "Latihan DOM (HTML)",
        content: `
          <h1>Latihan Manipulasi DOM</h1>
          <p><strong>Tantangan:</strong> Gunakan JavaScript untuk mengubah teks paragraf di bawah dari "...." menjadi "Halo JavaScript!".</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <textarea class="exc-code-input">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;p id="pesan"&gt;....&lt;/p&gt;

  &lt;script&gt;
    // Tulis kodemu di sini
    let paragraf = document.getElementById("pesan");
    paragraf.innerHTML = "Halo JavaScript!";
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn">Run</button>
            </div>
            <div class="exc-output">
              <iframe class="exc-output-frame" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "js-exc-3",
        title: "Latihan Event Listener",
        icon: "fa-solid fa-hand-pointer",
        content: `
          <h1>Latihan Event Listener</h1>
          <p><strong>Tantangan:</strong> Gunakan <code>document.getElementById()</code> untuk menemukan tombol dan paragraf. Kemudian, gunakan <code>.addEventListener()</code> untuk membuat tombol tersebut "mendengarkan" event <code>'click'</code>.</p>
          <p>Saat tombol diklik, ubah teks di dalam paragraf (<code>id="pesan"</code>) menjadi "Tombol sudah diklik!".</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-js" style="color: #f7df1e;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-js-exc-3">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <button id="tombol-tes">Klik Saya!</button>
  <p id="pesan">Belum diklik...</p>

  &lt;script&gt;
    // Tulis kodemu di sini
    
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-js-exc-3" data-frame-id="frame-js-exc-3">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-js-exc-3" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "js-exc-4",
        title: "Latihan Mengambil Nilai Input",
        icon: "fa-solid fa-right-to-bracket",
        content: `
          <h1>Latihan Mengambil Nilai Input</h1>
          <p><strong>Tantangan:</strong> Ini adalah gabungan dari semua yang telah kita pelajari. Saat tombol "Sapa!" diklik:</p>
          <ol>
            <li>Ambil teks yang diketik pengguna dari dalam kotak input (<code>id="input-nama"</code>).</li>
            <li>Tampilkan teks tersebut di dalam paragraf (<code>id="hasil"</code>).</li>
          </ol>
          <p><strong>Petunjuk:</strong> Anda perlu menggunakan properti <code>.value</code> untuk membaca isi input, dan <code>.innerHTML</code> untuk menulis ke paragraf.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-js" style="color: #f7df1e;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-js-exc-4">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <label for="input-nama">Nama:</label>
  <input type="text" id="input-nama" placeholder="Ketik namamu...">
  <button id="tombol-sapa">Sapa!</button>
  <p id="hasil">Hasil akan muncul di sini...</p>

  &lt;script&gt;
    // 1. Ambil elemen-elemen yang dibutuhkan
    let input = document.getElementById("input-nama");
    let tombol = document.getElementById("tombol-sapa");
    let hasil = document.getElementById("hasil");
  
    // 2. Buat fungsi yang akan dijalankan
    function sapaPengguna() {
      // Tulis kodemu di sini:
      // Ambil nilai dari 'input' dan masukkan ke 'hasil'
      
    }
  
    // 3. Pasang event listener ke tombol
    tombol.addEventListener("click", sapaPengguna);
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-js-exc-4" data-frame-id="frame-js-exc-4">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-js-exc-4" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "js-ref-modules",
        title: "ES6 Modules (import/export)",
        content: `
          <h1>Referensi ES6 Modules</h1>
          <p>Sintaks untuk memecah kode JavaScript menjadi file-file terpisah dan dapat digunakan kembali.</p>
          <table class="ref-table">
            <thead><tr><th>Sintaks</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>export const ...</code></td><td>Mengekspos (export) variabel, fungsi, atau objek agar dapat diakses oleh file lain.</td></tr>
              <tr><td><code>import { ... } from '...'</code></td><td>Mengimpor (import) variabel atau fungsi yang telah di-export dari file lain.</td></tr>
              <tr><td><code>&lt;script type="module"&gt;</code></td><td>Atribut yang wajib ditambahkan pada tag <code>&lt;script&gt;</code> di HTML untuk mengaktifkan sistem modul.</td></tr>
            </tbody>
          </table>
          <h3>Contoh File</h3>
          <pre>
// ---- file: utilitas.js ----
export const PI = 3.14;
export function sapa(nama) {
  return "Halo, " + nama;
}

// ---- file: skrip_utama.js ----
import { PI, sapa } from './utilitas.js';
console.log(sapa("Dunia")); // Output: Halo, Dunia

// ---- file: index.html ----
&lt;script src="skrip_utama.js" type="module"&gt;&lt;/script&gt;
          </pre>
        `,
      },
      {
        id: "js-exc-5",
        title: "Latihan Fetch API",
        icon: "fa-solid fa-cloud-arrow-down",
        content: `
          <h1>Latihan Fetch API (Async/Await)</h1>
          <p><strong>Tantangan:</strong> Ini adalah latihan tingkat lanjut. Gunakan <code>async/await</code> dan <code>fetch()</code> untuk mengambil data dari API publik.</p>
          <ol>
            <li>Ambil data dari URL: <code>https://jsonplaceholder.typicode.com/todos/1</code></li>
            <li>Konversi respons menjadi JSON.</li>
            <li>Ambil <code>title</code> dari data JSON tersebut.</li>
            <li>Tampilkan <code>title</code> itu ke dalam paragraf (<code>id="hasil"</code>).</li>
          </ol>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-js" style="color: #f7df1e;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-js-exc-5">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <button id="tombol-fetch">Ambil Data!</button>
  <p id="hasil">Data akan muncul di sini...</p>

  &lt;script&gt;
    const tombol = document.getElementById("tombol-fetch");
    const hasil = document.getElementById("hasil");
    const API_URL = "https://jsonplaceholder.typicode.com/todos/1";
  
    // 1. Buat fungsi 'async'
    async function ambilData() {
      hasil.innerHTML = "Mengambil data...";
      try {
        // Tulis kodemu di sini:
        // 2. 'fetch' data dari API_URL
        
        // 3. Konversi response ke JSON
        
        // 4. Tampilkan 'data.title' ke 'hasil.innerHTML'
        
        
      } catch (error) {
        hasil.innerHTML = "Gagal mengambil data.";
      }
    }
  
    // 5. Pasang event listener
    tombol.addEventListener("click", ambilData);
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-js-exc-5" data-frame-id="frame-js-exc-5">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-js-exc-5" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "js-exc-6",
        title: "Latihan Array Method (filter)",
        icon: "fa-solid fa-filter",
        content: `
          <h1>Latihan Array Method (.filter)</h1>
          <p><strong>Tantangan:</strong> Kita memiliki array <code>angka</code>. Gunakan metode <code>.filter()</code> untuk membuat array baru (bernama <code>angkaGenap</code>) yang <strong>hanya</strong> berisi angka yang lebih besar dari 10.</p>
          <p>Tampilkan hasilnya di paragraf <code>#hasil</code>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-js" style="color: #f7df1e;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-js-exc-6">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <p id="hasil">Hasil filter akan muncul di sini...</p>

  &lt;script&gt;
    const angka = [5, 12, 8, 130, 44, 9];
    const hasil = document.getElementById("hasil");
    
    // Tulis kodemu di sini:
    // Gunakan .filter() pada 'angka'
    const angkaGenap = angka.filter(function(n) {
      // kembalikan 'true' jika angka > 10
      
    });
    
    // Tampilkan array baru ke paragraf
    hasil.innerHTML = "Angka yang lolos: " + angkaGenap.join(", ");
    
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-js-exc-6" data-frame-id="frame-js-exc-6">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-js-exc-6" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "js-exc-7",
        title: "Latihan Manipulasi Class",
        icon: "fa-solid fa-paint-roller",
        content: `
          <h1>Latihan Manipulasi Class (.classList)</h1>
          <p><strong>Tantangan:</strong> Saat tombol diklik, tambahkan (<code>add</code>) class CSS bernama <code>.highlight</code> ke paragraf (<code>id="teks"</code>).</p>
          <p>Class <code>.highlight</code> sudah disediakan di dalam tag <code>&lt;style&gt;</code>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-js" style="color: #f7df1e;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-js-exc-7">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; 
    body { font-family: sans-serif; }
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <button id="tombol">Highlight Teks!</button>
  <p id="teks">Teks ini akan berubah.</p>

  &lt;script&gt;
    const tombol = document.getElementById("tombol");
    const teks = document.getElementById("teks");
    
    function ubahStyle() {
      // Tulis kodemu di sini:
      // Gunakan .classList.add() pada 'teks'
      
    }
    
    tombol.addEventListener("click", ubahStyle);
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-js-exc-7" data-frame-id="frame-js-exc-7">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-js-exc-7" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "js-exc-8",
        title: "Latihan Array Method (.map)",
        icon: "fa-solid fa-arrow-right-arrow-left",
        content: `
          <h1>Latihan Array Method (.map)</h1>
          <p><strong>Tantangan:</strong> Metode <code>.map()</code> membuat array baru dengan mengubah setiap elemen dari array asli.</p>
          <p>Kita memiliki array <code>angka</code>. Gunakan <code>.map()</code> untuk membuat array baru (bernama <code>angkaGanda</code>) yang berisi setiap angka <strong>dikali dua</strong>.</p>
          <p>Tampilkan hasilnya di paragraf <code>#hasil</code>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-js" style="color: #f7df1e;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-js-exc-8">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; body { font-family: sans-serif; } &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <p id="hasil">Hasil map akan muncul di sini...</p>

  &lt;script&gt;
    const angka = [1, 5, 10, 15];
    const hasil = document.getElementById("hasil");
    
    // Tulis kodemu di sini:
    // Gunakan .map() pada 'angka'
    const angkaGanda = angka.map(function(n) {
      // kembalikan angka dikali 2
      
    });
    
    // Tampilkan array baru ke paragraf
    hasil.innerHTML = "Array asli: [1, 5, 10, 15] <br> Array baru: [" + angkaGanda.join(", ") + "]";
    
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-js-exc-8" data-frame-id="frame-js-exc-8">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-js-exc-8" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "js-exc-9",
        title: "Latihan classList.toggle()",
        icon: "fa-solid fa-toggle-on",
        content: `
          <h1>Latihan .classList.toggle()</h1>
          <p><strong>Tantangan:</strong> <code>.classList.toggle()</code> adalah cara cerdas untuk menambah/menghapus class. Jika class ada, ia dihapus. Jika tidak ada, ia ditambahkan.</p>
          <p>Saat tombol diklik, gunakan <code>.classList.toggle()</code> untuk menambah/menghapus class <code>.is-hidden</code> pada paragraf (<code>id="teks"</code>). Ini akan membuatnya muncul dan menghilang setiap kali diklik.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-brands fa-js" style="color: #f7df1e;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-js-exc-9">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt; 
    body { font-family: sans-serif; }
    .is-hidden {
      display: none;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <button id="tombol">Toggle Teks!</button>
  <p id="teks">Halo! Saya bisa menghilang.</p>

  &lt;script&gt;
    const tombol = document.getElementById("tombol");
    const teks = document.getElementById("teks");
    
    function toggleTeks() {
      // Tulis kodemu di sini:
      // Gunakan .classList.toggle() pada 'teks'
      
    }
    
    tombol.addEventListener("click", toggleTeks);
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-js-exc-9" data-frame-id="frame-js-exc-9">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-js-exc-9" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
    ],
  },

  // --- LATIHAN UI/UX ---
  design: {
    title: "Design UI/UX",
    lessons: [
      {
        id: "design-exc-1",
        title: "Latihan Tata Letak",
        content: `
          <h1>Latihan (Eksperimen)</h1>
          <p><strong>Tantangan:</strong> Latihan UI/UX adalah tentang visual. Coba gunakan HTML & CSS di editor ini untuk membuat 2 kotak (<code>&lt;div&gt;</code>) bersebelahan.</p>
          <div class="tip-box">
            <p><strong>Petunjuk:</strong> Anda bisa menggunakan <code>display: flex;</code> pada elemen pembungkusnya.</p>
          </div>

          <div class="exc-container">
            <div class="exc-editor">
              <textarea class="exc-code-input">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    .container {
      /* Tulis CSS-mu di sini */
      display: flex;
      gap: 10px;
    }
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
  </div>
&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn">Run</button>
            </div>
            <div class="exc-output">
              <iframe class="exc-output-frame" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "design-exc-2",
        title: "Latihan Perataan Flexbox",
        icon: "fa-solid fa-arrows-left-right-to-line",
        content: `
          <h1>Latihan Perataan Flexbox</h1>
          <p><strong>Tantangan:</strong> Kontainer di bawah ini sudah diatur sebagai <code>display: flex</code>. Gunakan properti <code>justify-content</code> untuk membuat ketiga kotak di dalamnya menjadi rata tengah (center) secara horizontal.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-solid fa-palette" style="color: #8A2BE2;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-design-exc-2">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    .container {
      display: flex;
      gap: 10px;
      border: 1px solid black;
      padding: 10px;
      
      /* Tulis CSS-mu di sini */
      
    }
    .box {
      width: 50px;
      height: 50px;
      background-color: lightblue;
      text-align: center;
      line-height: 50px;
      font-weight: bold;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-design-exc-2" data-frame-id="frame-design-exc-2">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-design-exc-2" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "design-exc-3",
        title: "Latihan Perataan Vertikal",
        icon: "fa-solid fa-arrows-up-down",
        content: `
          <h1>Latihan Perataan Vertikal (Flexbox)</h1>
          <p><strong>Tantangan:</strong> Kontainer di bawah ini sengaja diberi tinggi (<code>height: 200px</code>). Saat ini, kotak-kotak di dalamnya menempel di atas.</p>
          <p>Gunakan properti <code>align-items</code> pada <code>.container</code> untuk membuat ketiga kotak tersebut rata tengah (center) secara <strong>vertikal</strong>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-solid fa-palette" style="color: #8A2BE2;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-design-exc-3">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    .container {
      display: flex;
      justify-content: center; /* (Ini untuk rata tengah horizontal) */
      gap: 10px;
      border: 1px solid black;
      padding: 10px;
      height: 200px; /* <-- Diberi tinggi */
      
      /* Tulis CSS-mu di sini */
      
    }
    .box {
      width: 50px;
      height: 50px;
      background-color: lightblue;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-design-exc-3" data-frame-id="frame-design-exc-3">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-design-exc-3" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "design-exc-4",
        title: "Latihan Aksesibilitas (Form)",
        icon: "fa-solid fa-universal-access",
        content: `
          <h1>Latihan Aksesibilitas (Form)</h1>
          <p><strong>Tantangan:</strong> Formulir di bawah ini "rusak" secara aksesibilitas. Pengguna pembaca layar (screen reader) tidak tahu input mana yang untuk "Email" dan mana yang untuk "Password".</p>
          <p>Perbaiki formulir ini dengan menghubungkan setiap <code>&lt;label&gt;</code> ke <code>&lt;input&gt;</code> yang sesuai menggunakan atribut <code>for</code> dan <code>id</code>.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-solid fa-palette" style="color: #8A2BE2;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-design-exc-4">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    body { font-family: sans-serif; }
    div { margin-bottom: 10px; }
    label { display: inline-block; width: 80px; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;!-- PERBAIKI FORMULIR INI --&gt;
  <form>
    <div>
      <label>Email:</label>
      <input type="email">
    </div>
    <div>
      <label>Password:</label>
      <input type="password">
    </div>
  </form>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-design-exc-4" data-frame-id="frame-design-exc-4">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-design-exc-4" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "design-exc-5",
        title: "Latihan Prinsip Proximity",
        icon: "fa-solid fa-object-group",
        content: `
          <h1>Latihan Prinsip Desain (Proximity)</h1>
          <p><strong>Tantangan:</strong> "Proximity" (Kedekatan) berarti elemen yang terkait harus dikelompokkan bersama. Saat ini, "Judul 1" terlihat sama jauhnya dengan "Paragraf 1" dan "Judul 2".</p>
          <p>Perbaiki ini dengan menambahkan <code>margin-top</code> yang lebih besar (misal: <code>30px</code>) hanya pada <code>h2</code> (Judul) untuk memisahkannya dari paragraf sebelumnya.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-solid fa-palette" style="color: #8A2BE2;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-design-exc-5">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    body { font-family: sans-serif; line-height: 1.6; }
    h2 {
      font-size: 20px;
      margin-bottom: 5px; /* Jarak ke paragraf di bawahnya (sudah baik) */
      
      /* Tulis CSS-mu di sini: */
      
    }
    p {
      margin-top: 0; /* Jarak ke judul di atasnya (sudah baik) */
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <h2>Judul 1</h2>
  <p>Ini adalah paragraf yang menjelaskan Judul 1. Teks ini harus terlihat berkelompok dengan Judul 1.</p>
  
  <h2>Judul 2</h2>
  <p>Ini adalah paragraf untuk Judul 2. Judul 2 harus terlihat terpisah dari paragraf di atasnya.</p>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-design-exc-5" data-frame-id="frame-design-exc-5">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-design-exc-5" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "design-exc-6",
        title: "Latihan Kontras Warna (A11y)",
        icon: "fa-solid fa-eye",
        content: `
          <h1>Latihan Kontras Warna (Aksesibilitas)</h1>
          <p><strong>Tantangan:</strong> Teks di dalam kotak (<code>.box</code>) sangat sulit dibaca karena kontrasnya terlalu rendah (teks abu-abu muda di atas latar abu-abu sedang).</p>
          <p>Perbaiki masalah aksesibilitas ini dengan mengubah <code>color</code> dari <code>.box</code> menjadi <code>black</code> (hitam) agar kontrasnya tinggi dan mudah dibaca.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-solid fa-palette" style="color: #8A2BE2;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-design-exc-6">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    body { font-family: sans-serif; }
    .box {
      background-color: #dddddd; /* Latar abu-abu sedang */
      padding: 20px;
      
      /* Teks ini sulit dibaca! Ganti warnanya */
      color: #aaaaaa; /* Teks abu-abu muda */
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <div class="box">
    Teks ini sangat sulit dibaca.
  </div>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-design-exc-6" data-frame-id="frame-design-exc-6">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-design-exc-6" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "design-exc-7",
        title: "Latihan Prinsip Alignment",
        icon: "fa-solid fa-align-left",
        content: `
          <h1>Latihan Prinsip Desain (Alignment)</h1>
          <p><strong>Tantangan:</strong> "Alignment" (Perataan) adalah tentang menciptakan tatanan visual yang bersih. Teks di bawah ini terlihat berantakan karena perataannya acak (rata kiri, tengah, dan kanan).</p>
          <p>Perbaiki ini dengan membuat <strong>semua</strong> elemen (<code>h2</code> dan <code>p</code>) memiliki <code>text-align: left;</code> agar lurus dan rapi.</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-solid fa-palette" style="color: #8A2BE2;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-design-exc-7">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    body { font-family: sans-serif; }
    .container {
      width: 300px;
      border: 1px solid #ccc;
      padding: 10px;
    }
    
    .container h2 {
      text-align: center; /* <-- Ini acak */
    }
    .container p {
      text-align: right; /* <-- Ini acak */
    }
    
    /* Tulis CSS-mu di sini untuk memperbaikinya */
    
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <div class="container">
    <h2>Judul di Tengah</h2>
    <p>Paragraf ini menempel di kanan. Tampilannya sangat berantakan dan sulit dibaca.</p>
  </div>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-design-exc-7" data-frame-id="frame-design-exc-7">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-design-exc-7" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
      {
        id: "design-exc-8",
        title: "Latihan Prinsip Repetition",
        icon: "fa-solid fa-clone",
        content: `
          <h1>Latihan Prinsip Desain (Repetition)</h1>
          <p><strong>Tantangan:</strong> "Repetition" (Pengulangan) berarti elemen yang serupa harus terlihat konsisten. Saat ini, tombol "Simpan" dan "Batal" terlihat sangat berbeda, yang membuat pengguna bingung.</p>
          <p>Perbaiki ini dengan membuat class <code>.btn-batal</code> memiliki style yang sama dengan <code>.btn-simpan</code> (padding, border, font-size, dll), tetapi dengan <code>background-color</code> yang berbeda (misal: <code>#ccc</code>).</p>
          
          <div class="exc-container">
            <div class="exc-editor">
              <div class="exc-editor-header">
                <i class="fa-solid fa-palette" style="color: #8A2BE2;"></i>
                index.html
              </div>
              <textarea class="exc-code-input" id="editor-design-exc-8">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Hasil Latihan&lt;/title&gt;
  &lt;style&gt;
    .btn-simpan {
      background-color: #007bff;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }
    
    .btn-batal {
      background-color: white;
      color: red;
      border: 1px solid red;
      /* Style-nya sangat berbeda! */
      
      /* Tulis CSS-mu di sini untuk membuatnya konsisten */
      
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

  <button class="btn-simpan">Simpan</button>
  <button class="btn-batal">Batal</button>

&lt;/body&gt;
&lt;/html&gt;
              </textarea>
              <button class="exc-run-btn" data-editor-id="editor-design-exc-8" data-frame-id="frame-design-exc-8">
                <i class="fa-solid fa-play"></i> Run
              </button>
            </div>
            <div class="exc-output">
              <div class="exc-editor-header">
                <i class="fa-solid fa-display"></i>
                Browser Output
              </div>
              <iframe class="exc-output-frame" id="frame-design-exc-8" srcdoc=""></iframe>
            </div>
          </div>
        `,
      },
    ],
  },
};
