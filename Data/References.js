export const References = {
  // --- MATERI HTML
  html: {
    title: "HTML",
    lessons: [
      {
        id: "html-ref-basic",
        title: "Tag Dasar & Dokumen",
        content: `
          <h1>Referensi Tag Dasar</h1>
          <p>Tag-tag ini adalah fondasi dari setiap halaman HTML.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>Mendefinisikan bahwa dokumen ini adalah HTML5.</td></tr>
              <tr><td><code>&lt;html&gt;</code></td><td>Elemen root yang membungkus semua konten di halaman.</td></tr>
              <tr><td><code>&lt;head&gt;</code></td><td>Wadah untuk metadata (data tentang data), seperti <code>&lt;title&gt;</code>, <code>&lt;link&gt;</code> (CSS), dan <code>&lt;script&gt;</code>.</td></tr>
              <tr><td><code>&lt;title&gt;</code></td><td>Menentukan judul untuk halaman yang tampil di tab browser.</td></tr>
              <tr><td><code>&lt;body&gt;</code></td><td>Berisi semua konten yang terlihat oleh pengguna (teks, gambar, link, dll).</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-text",
        title: "Tag Teks & Judul",
        content: `
          <h1>Referensi Tag Teks</h1>
          <p>Tag yang digunakan untuk mengatur teks dan membuat hierarki konten.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code></td><td>Mendefinisikan level judul (Heading), dari 1 (paling penting) sampai 6 (paling tidak penting).</td></tr>
              <tr><td><code>&lt;p&gt;</code></td><td>Mendefinisikan sebuah paragraf.</td></tr>
              <tr><td><code>&lt;br&gt;</code></td><td>Memasukkan satu baris baru (line break). Tag ini kosong (tidak punya penutup).</td></tr>
              <tr><td><code>&lt;strong&gt;</code></td><td>Menandakan teks yang penting (importance). Tampil sebagai <strong>tebal</strong>.</td></tr>
              <tr><td><code>&lt;em&gt;</code></td><td>Menandakan teks yang ditekankan (emphasis). Tampil sebagai <em>miring</em>.</td></tr>
              <tr><td><code>&lt;span&gt;</code></td><td>Wadah inline generik untuk menata sebagian kecil teks (berguna untuk CSS).</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "html-ref-list",
        title: "Tag Daftar (Lists)",
        content: `
          <h1>Referensi Tag Daftar</h1>
          <p>Tag untuk membuat daftar terurut, tidak terurut, dan deskripsi.</p>
          <table class="ref-table">
            <thead><tr><th>Tag</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;ul&gt;</code></td><td>Mendefinisikan daftar tidak terurut (Unordered List), biasanya tampil sebagai bulet.</td></tr>
              <tr><td><code>&lt;ol&gt;</code></td><td>Mendefinisikan daftar terurut (Ordered List), biasanya tampil sebagai angka.</td></tr>
              <tr><td><code>&lt;li&gt;</code></td><td>Mendefinisikan item di dalam daftar (List Item), digunakan di dalam <code>&lt;ul&gt;</code> atau <code>&lt;ol&gt;</code>.</td></tr>
            </tbody>
          </table>
        `,
      },
    ],
  },

  // --- MATERI CSS BARU ---
  css: {
    title: "CSS",
    lessons: [
      {
        id: "css-ref-selectors",
        title: "Selektor Dasar",
        content: `
          <h1>Referensi Selektor Dasar</h1>
          <p>Selektor adalah pola yang digunakan untuk memilih elemen HTML yang ingin Anda gayai.</p>
          <table class="ref-table">
            <thead><tr><th>Selektor</th><th>Contoh</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td>Selektor Tipe/Tag</td><td><code>p { ... }</code></td><td>Memilih semua elemen <code>&lt;p&gt;</code>.</td></tr>
              <tr><td>Selektor Class</td><td><code>.info-box { ... }</code></td><td>Memilih semua elemen dengan <code>class="info-box"</code>.</td></tr>
              <tr><td>Selektor ID</td><td><code>#sidebar { ... }</code></td><td>Memilih satu elemen dengan <code>id="sidebar"</code>. ID harus unik.</td></tr>
              <tr><td>Selektor Universal</td><td><code>* { ... }</code></td><td>Memilih SEMUA elemen di halaman. (Gunakan dengan hati-hati).</td></tr>
              <tr><td>Grouping</td><td><code>h1, h2, h3 { ... }</code></td><td>Memilih semua elemen <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, DAN <code>&lt;h3&gt;</code>.</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "css-ref-boxmodel",
        title: "Box Model",
        content: `
          <h1>Referensi Box Model</h1>
          <p>Semua elemen HTML adalah "kotak". Box Model adalah properti yang membangun kotak tersebut.</p>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>margin</code></td><td>Ruang transparan di <strong>luar</strong> border. Mendorong elemen lain menjauh.</td></tr>
              <tr><td><code>border</code></td><td>Garis yang mengelilingi padding dan konten.</td></tr>
              <tr><td><code>padding</code></td><td>Ruang transparan di <strong>dalam</strong> border, di sekitar konten.</td></tr>
              <tr><td><code>width</code> / <code>height</code></td><td>Mengatur lebar dan tinggi dari area <strong>konten</strong>.</td></tr>
            </tbody>
          </table>
          <div class="tip-box">
            <h3>box-sizing: border-box</h3>
            <p>Secara default, <code>width</code> hanya mengatur konten. Jika Anda menambahkan <code>padding</code> atau <code>border</code>, lebar total elemen akan bertambah.</p>
            <p>Gunakan <code>box-sizing: border-box;</code> agar <code>width</code> yang Anda atur adalah lebar TOTAL (termasuk padding dan border), yang jauh lebih intuitif.</p>
          </div>
        `,
      },
      {
        id: "css-ref-common-props",
        title: "Properti Umum",
        content: `
          <h1>Referensi Properti Umum</h1>
          <p>Beberapa properti CSS yang paling sering digunakan.</p>
          <table class="ref-table">
            <thead><tr><th>Properti</th><th>Deskripsi</th><th>Contoh Nilai</th></tr></thead>
            <tbody>
              <tr><td><code>color</code></td><td>Mengatur warna teks.</td><td><code>red</code>, <code>#FF0000</code>, <code>rgb(255,0,0)</code></td></tr>
              <tr><td><code>background-color</code></td><td>Mengatur warna latar belakang elemen.</td><td><code>lightblue</code>, <code>#F0F8FF</code></td></tr>
              <tr><td><code>font-size</code></td><td>Mengatur ukuran font.</td><td><code>16px</code>, <code>1.2em</code>, <code>120%</code></td></tr>
              <tr><td><code>font-family</code></td><td>Mengatur jenis font.</td><td><code>Arial, sans-serif</code></td></tr>
              <tr><td><code>font-weight</code></td><td>Mengatur ketebalan font.</td><td><code>normal</code>, <code>bold</code>, <code>700</code></td></tr>
              <tr><td><code>text-align</code></td><td>Mengatur perataan teks horizontal.</td><td><code>left</code>, <code>center</code>, <code>right</code></td></tr>
              <tr><td><code>display</code></td><td>Mengatur bagaimana elemen ditampilkan.</td><td><code>block</code>, <code>inline</code>, <code>flex</code>, <code>grid</code>, <code>none</code></td></tr>
            </tbody>
          </table>
        `,
      },
    ],
  },

  // --- MATERI JAVASCRIPT BARU ---
  javascript: {
    title: "JavaScript",
    lessons: [
      {
        id: "js-ref-datatypes",
        title: "Tipe Data Primitif",
        content: `
          <h1>Referensi Tipe Data Primitif</h1>
          <p>Tipe data adalah nilai dasar yang bisa disimpan oleh JavaScript.</p>
          <table class="ref-table">
            <thead><tr><th>Tipe Data</th><th>Deskripsi</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><code>String</code></td><td>Teks (Kumpulan karakter). Harus dibungkus tanda kutip.</td><td><code>"Halo"</code>, <code>'Budi'</code>, <code>\`123\`</code></td></tr>
              <tr><td><code>Number</code></td><td>Angka, baik integer maupun desimal.</td><td><code>100</code>, <code>3.14</code>, <code>-5</code></td></tr>
              <tr><td><code>Boolean</code></td><td>Nilai logika benar atau salah.</td><td><code>true</code>, <code>false</code></td></tr>
              <tr><td><code>undefined</code></td><td>Variabel yang sudah dideklarasi tapi belum diberi nilai.</td><td><code>let nama;</code></td></tr>
              <tr><td><code>null</code></td><td>Mewakili "tidak ada nilai" atau "kosong" secara sengaja.</td><td><code>let data = null;</code></td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "js-ref-operators",
        title: "Operator",
        content: `
          <h1>Referensi Operator</h1>
          <p>Simbol yang digunakan untuk melakukan operasi pada nilai dan variabel.</p>
          <h3>Operator Aritmatika</h3>
          <table class="ref-table">
            <thead><tr><th>Operator</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>+</code></td><td>Penjumlahan (atau penggabungan String)</td></tr>
              <tr><td><code>-</code></td><td>Pengurangan</td></tr>
              <tr><td><code>*</code></td><td>Perkalian</td></tr>
              <tr><td><code>/</code></td><td>Pembagian</td></tr>
              <tr><td><code>%</code></td><td>Modulus (Sisa bagi)</td></tr>
            </tbody>
          </table>
          <h3>Operator Perbandingan (Penting)</h3>
          <table class="ref-table">
            <thead><tr><th>Operator</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>==</code></td><td>Sama dengan (nilainya). <code>5 == "5"</code> (true)</td></tr>
              <tr><td><code>===</code></td><td>Sama dengan (nilai DAN tipenya). <code>5 === "5"</code> (false). <strong>Selalu utamakan ini.</strong></td></tr>
              <tr><td><code>!=</code></td><td>Tidak sama dengan (nilainya).</td></tr>
              <tr><td><code>!==</code></td><td>Tidak sama dengan (nilai ATAU tipenya). <strong>Selalu utamakan ini.</strong></td></tr>
              <tr><td><code>></code> / <code><</code></td><td>Lebih besar / Lebih kecil dari</td></tr>
              <tr><td><code>>=</code> / <code><=</code></td><td>Lebih besar atau sama dengan / Lebih kecil atau sama dengan</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "js-ref-dom",
        title: "DOM Selection",
        content: `
          <h1>Referensi Seleksi DOM</h1>
          <p>Cara JavaScript "menemukan" elemen HTML di halaman untuk dimanipulasi.</p>
          <table class="ref-table">
            <thead><tr><th>Metode</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><code>document.getElementById('id-saya')</code></td><td>Cara tercepat untuk menemukan 1 elemen berdasarkan <code>id</code> uniknya.</td></tr>
              <tr><td><code>document.querySelector('selector')</code></td><td>Metode modern dan fleksibel. Menemukan <strong>elemen pertama</strong> yang cocok dengan selektor CSS.</td></tr>
              <tr><td><code>document.querySelectorAll('selector')</code></td><td>Menemukan <strong>SEMUA</strong> elemen yang cocok dengan selektor CSS. Mengembalikan daftar (NodeList).</td></tr>
            </tbody>
          </table>
          <h3>Contoh <code>querySelector</code></h3>
          <pre>
// Menemukan elemen berdasarkan ID
let judul = document.querySelector("#judul-utama");

// Menemukan elemen pertama berdasarkan Class
let item = document.querySelector(".item-menu");

// Menemukan elemen pertama berdasarkan Tag
let paragraf = document.querySelector("p");
          </pre>
        `,
      },
    ],
  },

  // --- MATERI UI/UX BARU ---
  design: {
    title: "Design UI/UX",
    lessons: [
      {
        id: "design-ref-heuristics",
        title: "10 Usability Heuristics",
        content: `
          <h1>Referensi: 10 Usability Heuristics (Jakob Nielsen)</h1>
          <p>Ini adalah 10 "hukum" atau prinsip umum yang digunakan untuk mengevaluasi apakah sebuah desain (UX) mudah digunakan atau tidak.</p>
          <ol class="ref-list">
            <li><strong>Visibility of system status:</strong> Sistem harus selalu memberi tahu pengguna apa yang sedang terjadi (misal: loading bar, pesan "Berhasil terkirim").</li>
            <li><strong>Match between system and the real world:</strong> Desain harus menggunakan bahasa dan konsep yang familiar bagi pengguna (misal: ikon "keranjang belanja").</li>
            <li><strong>User control and freedom:</strong> Pengguna harus bisa "undo" atau "cancel" (membatalkan) aksi yang tidak sengaja (misal: tombol "Kembali", "Undo").</li>
            <li><strong>Consistency and standards:</strong> Jangan buat pengguna bingung. Gunakan pola dan elemen yang konsisten di seluruh aplikasi Anda.</li>
            <li><strong>Error prevention:</strong> Desain yang baik mencegah kesalahan terjadi (misal: menonaktifkan tombol "Kirim" jika formulir belum diisi).</li>
            <li><strong>Recognition rather than recall:</strong> Pengguna tidak perlu mengingat-ingat. Buat opsi terlihat jelas (misal: tampilkan menu, jangan sembunyikan).</li>
            <li><strong>Flexibility and efficiency of use:</strong> Berikan "jalan pintas" (shortcut) untuk pengguna ahli tanpa membingungkan pengguna baru.</li>
            <li><strong>Aesthetic and minimalist design:</strong> Tampilan (UI) tidak boleh berisi informasi yang tidak relevan atau jarang dibutuhkan. "Less is more".</li>
            <li><strong>Help users recognize, diagnose, and recover from errors:</strong> Pesan error harus jelas (human-readable), menjelaskan masalahnya, dan menyarankan solusi.</li>
            <li><strong>Help and documentation:</strong> Sediakan bantuan atau dokumentasi yang mudah dicari jika pengguna membutuhkannya.</li>
          </ol>
        `,
      },
      {
        id: "design-ref-elements",
        title: "Komponen UI Umum",
        content: `
          <h1>Referensi Komponen UI Umum</h1>
          <p>Blok bangunan visual (UI) yang digunakan untuk menyusun aplikasi.</p>
          <table class="ref-table">
            <thead><tr><th>Komponen</th><th>Deskripsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Button</strong></td><td>Elemen yang dapat diklik untuk melakukan aksi (misal: Kirim, Batal, Simpan).</td></tr>
              <tr><td><strong>Input Field</strong></td><td>Kotak teks tempat pengguna dapat mengetik informasi (nama, email, password).</td></tr>
              <tr><td><strong>Dropdown (Select)</strong></td><td>Memberikan daftar opsi yang bisa dipilih pengguna. Hemat tempat.</td></tr>
              <tr><td><strong>Checkbox</strong></td><td>Memperbolehkan pengguna memilih 0 atau lebih opsi dari sebuah daftar (misal: Hobi).</td></tr>
              <tr><td><strong>Radio Button</strong></td><td>Memaksa pengguna memilih <strong>hanya 1</strong> opsi dari sebuah daftar (misal: Jenis Kelamin).</td></tr>
              <tr><td><strong>Toggle</strong></td><td>Tombol geser (On/Off) untuk mengubah satu pengaturan.</td></tr>
              <tr><td><strong>Modal</strong></td><td>Jendela pop-up yang muncul di atas konten utama, memaksa pengguna fokus pada satu tugas (misal: Konfirmasi Hapus).</td></tr>
              <tr><td><strong>Tooltip</strong></td><td>Pesan kecil yang muncul saat pengguna meng-hover elemen, memberikan info tambahan.</td></tr>
            </tbody>
          </table>
        `,
      },
    ],
  },
};
