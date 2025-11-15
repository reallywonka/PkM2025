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
    ],
  },
};
