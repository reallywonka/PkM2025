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
    ],
  },
};
