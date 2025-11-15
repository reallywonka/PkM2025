// Data khusus untuk materi JavaScript
export const javascript = {
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
document.getElementById("demo").innerHTML = "Halo JavaScript!";</pre>
          
          <h3>2. Menulis ke Konsol Browser (<code>console.log</code>)</h3>
          <p>Untuk tujuan debugging, Anda dapat menggunakan metode <code>console.log()</code> untuk menampilkan data di konsol browser.</p>
          <p>Tekan F12 di browser Anda untuk membuka konsol.</p>
          <pre>
let a = 5;
let b = 10;
let c = a + b;
console.log(c); // Akan menampilkan 15 di konsol </pre>
          
          <h3>3. Menulis ke Peringatan (<code>alert</code>)</h3>
          <p>Anda dapat menggunakan kotak peringatan (alert) untuk menampilkan data:</p>
          <pre>
alert("Selamat datang di website kami!"); </pre>
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
console.log(umur); // Output: 18 </pre>

          <h3>Contoh <code>const</code></h3>
          <p>Gunakan <code>const</code> jika nilai variabel tidak akan pernah berubah. Ini mencegah perubahan yang tidak disengaja.</p>
          <pre>
const tanggalLahir = "1 Januari 2005";
// tanggalLahir = "2 Februari 2006"; // Ini akan menyebabkan error!
console.log(tanggalLahir); // Output: 1 Januari 2005 </pre>
          
          <h3>Penamaan Variabel</h3>
          <p>Nama variabel di JavaScript (dan kebanyakan bahasa lain) biasanya menggunakan <strong>camelCase</strong>.</p>
          <pre>
let namaSaya = "Budi"; // Benar (camelCase)
let hobi_saya = "Memancing"; // (snake_case, umum di Python tapi jarang di JS)
let NamaSaya = "Ani"; // (PascalCase, biasanya untuk Class) </pre>
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
&lt;button onclick="tampilkanPesan()"&gt;Klik Saya!&lt;/button&gt; </pre>
          
          <p><strong>Contoh di JavaScript:</strong></p>
          <pre>
// Fungsi ini akan dipanggil saat tombol diklik
function tampilkanPesan() {
  alert("Anda baru saja mengklik tombol!");
} </pre>
          
          <h3>Contoh Event Lainnya:</h3>
          <ul>
            <li><code>onchange</code>: Saat nilai elemen input diubah.</li>
            <li><code>onmouseover</code>: Saat mouse digerakkan ke atas elemen.</li>
            <li><code>onmouseout</code>: Saat mouse digerakkan keluar dari elemen.</li>
            <li><code>onload</code>: Saat halaman selesai dimuat.</li>
          </ul>
        `,
    },
    {
      id: "js-dom-manipulation",
      title: "JS DOM Manipulation",
      content: `
          <h1>JS DOM Manipulation</h1>
          <p>JavaScript dapat memanipulasi <strong>DOM (Document Object Model)</strong>. DOM adalah representasi pohon dari semua elemen di halaman HTML Anda.</p>
          <p>Dengan memanipulasi DOM, Anda dapat mengubah konten HTML, mengubah atribut, dan bahkan mengubah style CSS secara dinamis.</p>

          <h3>Menemukan Elemen HTML</h3>
          <p>Anda sudah belajar <code>document.getElementById(id)</code>. Ada cara lain:</p>
          <ul>
            <li><code>document.getElementsByTagName(namaTag)</code>: Menemukan elemen berdasarkan tag (misal: 'p').</li>
            <li><code>document.getElementsByClassName(namaClass)</code>: Menemukan elemen berdasarkan class.</li>
            <li><code>document.querySelector(selectorCSS)</code>: Menemukan elemen <strong>pertama</strong> yang cocok dengan selector CSS (misal: '#intro', '.box').</li>
            <li><code>document.querySelectorAll(selectorCSS)</code>: Menemukan <strong>semua</strong> elemen yang cocok.</li>
          </ul>

          <h3>Mengubah Elemen</h3>
          <p>Setelah elemen ditemukan, Anda bisa mengubahnya:</p>
          <pre>
// Menemukan elemen
let judul = document.getElementById("judul-utama");

// 1. Mengubah konten (sudah dipelajari)
judul.innerHTML = "Judul Baru yang Keren!";

// 2. Mengubah atribut HTML
// Misal: <img id="gambar" src="gambar-lama.jpg">
let gambar = document.getElementById("gambar");
gambar.src = "gambar-baru.jpg";

// 3. Mengubah style CSS
// Properti CSS diubah menjadi camelCase (misal: background-color -> backgroundColor)
judul.style.color = "blue";
judul.style.fontSize = "24px";
judul.style.backgroundColor = "#f1f1f1"; </pre>
        `,
    },
    {
      id: "js-functions",
      title: "JS Functions",
      content: `
          <h1>JS Functions (Fungsi)</h1>
          <p>Fungsi adalah blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi akan dieksekusi (dijalankan) ketika "dipanggil".</p>
          <p>Keuntungan utama menggunakan fungsi adalah <strong>reusability</strong> (dapat digunakan kembali). Anda menulis kode sekali, dan menggunakannya berkali-kali.</p>
          
          <h3>Mendefinisikan Fungsi</h3>
          <p>Sebuah fungsi didefinisikan dengan kata kunci <code>function</code>, diikuti dengan nama, lalu tanda kurung <code>()</code>.</p>
          <pre>
// Mendefinisikan fungsi
function sapaPengguna() {
  alert("Halo, selamat datang!");
}

// Memanggil fungsi (agar berjalan)
sapaPengguna();
sapaPengguna(); // Bisa dipanggil lagi </pre>

          <h3>Fungsi dengan Parameter</h3>
          <p>Anda dapat mengirim nilai (disebut <strong>parameter</strong> atau argumen) ke dalam fungsi. Ini membuat fungsi lebih dinamis.</p>
          <pre>
// 'nama' adalah parameter
function sapaNama(nama) {
  console.log("Halo, " + nama + "! Apa kabar?");
}

// Memanggil fungsi dengan nilai parameter
sapaNama("Budi"); // Output: Halo, Budi! Apa kabar?
sapaNama("Ani");  // Output: Halo, Ani! Apa kabar? </pre>
          
          <h3>Fungsi yang Mengembalikan Nilai (<code>return</code>)</h3>
          <p>Fungsi juga dapat mengembalikan nilai kembali ke kode yang memanggilnya menggunakan kata kunci <code>return</code>.</p>
          <pre>
// Fungsi ini menjumlahkan dua angka dan mengembalikannya
function tambah(angka1, angka2) {
  return angka1 + angka2;
}

// Menyimpan hasil fungsi ke dalam variabel
let hasilPenjumlahan = tambah(5, 3);

console.log(hasilPenjumlahan); // Output: 8
console.log(tambah(10, 10));  // Output: 20 </pre>
        `,
    },
    {
      id: "js-operators",
      title: "JS Operators",
      content: `
          <h1>JavaScript Operators</h1>
          <p>Operators adalah simbol khusus yang digunakan untuk melakukan operasi pada nilai (variabel).</p>

          <h3>1. Arithmetic Operators (Aritmatika)</h3>
          <p>Digunakan untuk melakukan operasi matematika dasar.</p>
          <ul>
            <li><code>+</code> (Penjumlahan)</li>
            <li><code>-</code> (Pengurangan)</li>
            <li><code>*</code> (Perkalian)</li>
            <li><code>/</code> (Pembagian)</li>
            <li><code>%</code> (Modulus/Sisa bagi)</li>
          </ul>
          <pre>
let x = 10;
let y = 3;
console.log(x + y); // Output: 13
console.log(x * y); // Output: 30
console.log(x % y); // Output: 1 (Karena 10 dibagi 3 sisa 1) </pre>
          
          <h3>2. Assignment Operators (Penugasan)</h3>
          <p>Digunakan untuk memberikan nilai ke variabel.</p>
          <ul>
            <li><code>=</code> (Sama dengan)</li>
            <li><code>+=</code> (Tambah lalu isi, misal: <code>x += y</code> sama dengan <code>x = x + y</code>)</li>
            <li><code>-=</code> (Kurang lalu isi)</li>
          </ul>
          <pre>
let umur = 20;
umur += 1; // Sekarang umur menjadi 21
console.log(umur); </pre>
          
          <h3>3. Comparison Operators (Perbandingan)</h3>
          <p>Digunakan dalam logika untuk membandingkan dua nilai. Hasilnya selalu <strong>boolean</strong> (<code>true</code> atau <code>false</code>).</p>
          <ul>
            <li><code>==</code> (Sama dengan nilainya)</li>
            <li><code>===</code> (Sama dengan nilai DAN tipe datanya) - <strong>(Lebih disarankan)</strong></li>
            <li><code>!=</code> (Tidak sama dengan nilainya)</li>
            <li><code>!==</code> (Tidak sama dengan nilai ATAU tipe datanya) - <strong>(Lebih disarankan)</strong></li>
            <li><code>></code> (Lebih besar dari)</li>
            <li><code><</code> (Lebih kecil dari)</li>
            <li><code>>=</code> (Lebih besar atau sama dengan)</li>
            <li><code><=</code> (Lebih kecil atau sama dengan)</li>
          </ul>
          <pre>
let nilai = 100;
console.log(nilai > 90);   // Output: true
console.log(nilai === 100); // Output: true
console.log(nilai === "100"); // Output: false (karena tipe data beda, angka vs teks)
console.log(nilai == "100");  // Output: true (karena nilai dianggap sama) </pre>
        `,
    },
    {
      id: "js-conditionals",
      title: "JS Conditionals (if/else)",
      content: `
          <h1>JS Conditionals (Logika Kondisional)</h1>
          <p>Kondisional digunakan untuk melakukan tindakan berbeda berdasarkan kondisi yang berbeda.</p>
          
          <h3>Pernyataan <code>if</code></h3>
          <p>Gunakan <code>if</code> untuk menjalankan blok kode jika kondisi tertentu bernilai <code>true</code>.</p>
          <pre>
let jam = 10;

if (jam < 12) {
  console.log("Selamat pagi!");
}
// Output: Selamat pagi! </pre>

          <h3>Pernyataan <code>if...else</code></h3>
          <p>Gunakan <code>else</code> untuk menjalankan blok kode alternatif jika kondisi pertama bernilai <code>false</code>.</p>
          <pre>
let nilaiUjian = 70;

if (nilaiUjian >= 75) {
  console.log("Anda Lulus!");
} else {
  console.log("Anda Gagal (Remedial).");
}
// Output: Anda Gagal (Remedial). </pre>
          
          <h3>Pernyataan <code>if...else if...else</code></h3>
          <p>Gunakan <code>else if</code> untuk menentukan kondisi baru jika kondisi pertama salah.</p>
          <pre>
let nilaiHuruf = "A";

if (nilaiHuruf === "A") {
  console.log("Luar biasa!");
} else if (nilaiHuruf === "B") {
  console.log("Bagus!");
} else if (nilaiHuruf === "C") {
  console.log("Cukup.");
} else {
  console.log("Perlu belajar lagi.");
}
// Output: Luar biasa! </pre>
        `,
    },
    {
      id: "js-loops",
      title: "JS Loops (Perulangan)",
      content: `
          <h1>JS Loops (Perulangan)</h1>
          <p>Bayangkan Anda harus menulis <code>console.log("Halo!");</code> sebanyak 100 kali. Tentu melelahkan. Perulangan (loops) adalah cara kita menyuruh JavaScript untuk menjadi "pekerja" yang melakukan tugas berulang-ulang secara otomatis.</p>
          <p>Ada dua "pekerja" utama yang bisa kita suruh:</p>
          
          <h3>1. <code>for</code> loop (Si Pekerja Teliti)</h3>
          <p>Gunakan <code>for</code> loop ketika Anda <strong>sudah tahu pasti</strong> berapa kali tugas itu harus diulang.</p>
          <p>Kita memberinya 3 instruksi yang jelas:</p>
          <ol>
            <li><strong>Mulai dari mana:</strong> (Inisialisasi, misal: <code>let i = 0</code>)</li>
            <li><strong>Batas berhenti kapan:</strong> (Kondisi, misal: <code>i < 5</code>)</li>
            <li><strong>Cara menghitung:</strong> (Increment, misal: <code>i++</code> atau "tambah 1 setiap selesai")</li>
          </ol>
          <pre>
// "Hei JavaScript, lakukan ini:"
// 1. Mulai hitung dari i = 0
// 2. Berhenti JIKA i sudah TIDAK < 5
// 3. Tambah i dengan 1 setiap putaran
for (let i = 0; i < 5; i++) {
  console.log("Putaran ke-" + i);
}

/*
Output Console:
Putaran ke-0
Putaran ke-1
Putaran ke-2
Putaran ke-3
Putaran ke-4
*/
          </pre>
          
          <h3>2. <code>while</code> loop (Si Pekerja Ulet)</h3>
          <p>Gunakan <code>while</code> loop ketika Anda <strong>tidak tahu pasti</strong> berapa kali harus mengulang, tapi Anda tahu <strong>kondisi berhentinya</strong>.</p>
          <p>Analoginya: "Selama (while) sup ini belum panas, terus aduk."</p>
          <div class="warning-box">
            <p><strong>Peringatan:</strong> Hati-hati dengan <code>while</code> loop! Jika kondisinya tidak pernah tercapai (misal: Anda lupa menambahkan pemanas), ia akan mengaduk selamanya (disebut "infinite loop") dan membuat browser Anda crash.</p>
          </div>
          <pre>
let angkaAcak = 0;
let jumlahPutaran = 0;

// "Selama (while) angkaAcak BUKAN 5, terus coba"
while (angkaAcak !== 5) {
  // Dapatkan angka acak antara 1 dan 10
  angkaAcak = Math.floor(Math.random() * 10) + 1;
  
  jumlahPutaran++;
  console.log("Mencoba... dapat angka " + angkaAcak);
}

console.log("Selesai! Butuh " + jumlahPutaran + " putaran untuk dapat angka 5.");
          </pre>
        `,
    },
    {
      id: "js-arrays",
      title: "JS Arrays (Kumpulan Data)",
      content: `
          <h1>JS Arrays (Kumpulan Data)</h1>
          <p>Variabel biasa itu seperti kotak kecil yang hanya bisa menyimpan <strong>satu</strong> barang. <code>let nama = "Budi";</code>.</p>
          <p>Tapi bagaimana jika kita ingin menyimpan daftar belanjaan? Atau daftar nilai siswa? Kita butuh "laci" atau "rak buku". Itulah <strong>Array</strong>.</p>
          <p>Array adalah variabel spesial yang bisa menampung <strong>banyak</strong> nilai dalam urutan yang rapi. Kita membuatnya dengan kurung siku <code>[]</code>.</p>
          
          <h3>Membuat dan Mengakses Array</h3>
          <p>Setiap "laci" di dalam array memiliki nomor. Di pemrograman, kita menyebutnya <strong>index</strong>.</p>
          <div class="info-box">
            <p><strong>Penting:</strong> Index Array SELALU dimulai dari <strong>0 (nol)</strong>, bukan 1. Anggap saja "Lantai Dasar".</p>
          </div>
          
          <pre>
// Membuat array (rak buku) berisi 3 buah
let buahBuahan = ["Apel", "Jeruk", "Mangga"];

// Mengakses data (mengambil barang dari laci)
console.log( buahBuahan[0] ); // Output: "Apel" (Index ke-0)
console.log( buahBuahan[1] ); // Output: "Jeruk" (Index ke-1)
console.log( buahBuahan[2] ); // Output: "Mangga" (Index ke-2)

// Mengubah data (mengganti isi laci)
buahBuahan[1] = "Semangka";
console.log( buahBuahan[1] ); // Output: "Semangka"

// Mengetahui jumlah barang di rak
console.log( buahBuahan.length ); // Output: 3
          </pre>
          
          <h3>Menggabungkan Loop dan Array</h3>
          <p>Ini adalah hal yang paling sering dilakukan. Kita bisa menggunakan <code>for</code> loop untuk "mengunjungi" setiap laci secara otomatis.</p>
          <pre>
let daftarTugas = ["Menyapu", "Mencuci piring", "Belajar JS"];

// Kita loop dari i = 0 sampai i < jumlah total tugas
for (let i = 0; i < daftarTugas.length; i++) {
  // Ambil tugas berdasarkan index ke-i
  console.log("Tugas hari ini: " + daftarTugas[i]);
}

/*
Output Console:
Tugas hari ini: Menyapu
Tugas hari ini: Mencuci piring
Tugas hari ini: Belajar JS
*/
          </pre>
        `,
    },
    {
      id: "js-objects",
      title: "JS Objects (Data Berstruktur)",
      content: `
          <h1>JS Objects (Data Berstruktur)</h1>
          <p>Jika Array adalah "daftar belanjaan" (berurutan), maka <strong>Object</strong> adalah "formulir data diri" (tidak berurutan, tapi memiliki label).</p>
          <p>Array bagus untuk daftar, tapi buruk untuk data yang kompleks. Bayangkan data siswa:</p>
          <code>let siswa = ["Budi", "Santoso", 17, "Bandung"];</code>
          <p>Apa itu "Budi"? Apa itu 17? Kita tidak tahu. Object menyelesaikan ini dengan menggunakan pasangan <strong>key: value</strong> (kunci: nilai) atau (label: isi). Kita membuatnya dengan kurung kurawal <code>{}</code>.</p>

          <h3>Membuat dan Mengakses Object</h3>
          <p>Alih-alih index angka, kita menggunakan "key" (kunci) yang deskriptif untuk mengakses data. Cara paling umum adalah menggunakan <strong>dot notation</strong> (notasi titik).</p>
          
          <pre>
// Membuat Object
let siswa = {
  namaDepan: "Budi",
  namaBelakang: "Santoso",
  umur: 17,
  alamat: "Bandung",
  sudahLulus: false
};

// Mengakses data menggunakan Dot Notation
console.log( siswa.namaDepan ); // Output: "Budi"
console.log( siswa.umur );      // Output: 17

// Mengubah data
siswa.umur = 18;
console.log( siswa.umur ); // Output: 18

// Menambah data baru
siswa.hobi = "Ngoding";
console.log( siswa.hobi ); // Output: "Ngoding"
          </pre>
          
          <h3>Kapan Pakai Array vs Object?</h3>
          <div class="tip-box">
            <ul>
              <li>Gunakan <strong>Array <code>[]</code></strong> jika Anda memiliki daftar data yang mirip dan <strong>urutannya penting</strong> (misal: daftar skor, antrian, langkah-langkah).</li>
              <li>Gunakan <strong>Object <code>{}</code></strong> jika Anda memiliki satu benda dengan banyak properti yang <strong>perlu label</strong> (misal: data user, deskripsi produk, konfigurasi).</li>
            </ul>
          </div>
          
          <p>Pada kenyataannya, kita sering menggabungkan keduanya. Misal: <strong>Array</strong> yang berisi <strong>Object</strong>.</p>
          <pre>
let daftarSiswa = [
  { nama: "Budi", umur: 17 }, // Index 0
  { nama: "Ani", umur: 16 }   // Index 1
];

// Mengakses nama siswa pertama
console.log( daftarSiswa[0].nama ); // Output: "Budi"
          </pre>
        `,
    },
    {
      id: "js-modern-interaction",
      title: "JS Interaksi Modern",
      content: `
          <h1>JS Interaksi Modern: Event Listener</h1>
          <p>Di materi "Events", Anda belajar menambahkan event langsung di HTML:</p>
          <code>&lt;button onclick="tampilkanPesan()"&gt;Klik Saya&lt;/button&gt;</code>
          <p>Ini cara yang "kurang rapi" karena mencampurkan HTML (struktur) dengan JavaScript (perilaku).</p>
          <p>Cara modern dan lebih bersih adalah menggunakan <strong><code>addEventListener</code></strong>. Anggap saja ini seperti menyuruh "Satpam" (JavaScript) untuk mengawasi sebuah elemen, alih-alih menempelkan instruksi di elemen itu sendiri.</p>

          <h3>Cara Kerja <code>addEventListener</code></h3>
          <p>Logikanya adalah: "Hei JavaScript, cari elemen ini, lalu pasang 'pendengar' padanya. Jika 'event' ini terjadi, jalankan 'fungsi' ini."</p>

          <p><strong>Contoh di HTML (Bersih):</strong></p>
          <pre>
&lt;!-- HTML kita bersih, tidak ada 'onclick' --&gt;
&lt;button id="tombol-sapa"&gt;Sapa Saya!&lt;/button&gt;
&lt;p id="area-pesan"&gt;&lt;/p&gt;
          </pre>
          
          <p><strong>Contoh di JavaScript (Semua logika di sini):</strong></p>
          <pre>
// 1. Ambil elemennya dulu (sudah dipelajari di DOM Manipulation)
let tombol = document.getElementById("tombol-sapa");
let pesan = document.getElementById("area-pesan");

// 2. Buat fungsi yang ingin dijalankan
function sapaPengguna() {
  pesan.innerHTML = "Halo! Anda berhasil menggunakan Event Listener!";
  pesan.style.color = "green";
}

// 3. Pasang 'pendengar'
// "Hei 'tombol', dengarkan 'click'. Jika terjadi, panggil 'sapaPengguna'."
tombol.addEventListener("click", sapaPengguna);
          </pre>
          
          <h3>Metode <code>.forEach()</code></h3>
          <p>Cara modern untuk me-looping array (selain <code>for</code> loop) adalah <code>.forEach()</code>. Ini jauh lebih sederhana dan mudah dibaca.</p>
          <p>Analoginya: "Hei array, untuk <strong>setiap</strong> item di dalammu, tolong lakukan ini..."</p>
          <pre>
let buahBuahan = ["Apel", "Jeruk", "Mangga"];

// 'buah' adalah variabel sementara untuk tiap item
buahBuahan.forEach(function(buah) {
  console.log("Saya suka " + buah);
});

/*
Output Console:
Saya suka Apel
Saya suka Jeruk
Saya suka Mangga
*/
          </pre>
          <p>Metode <code>.forEach()</code> dan <code>addEventListener</code> adalah dua hal yang akan sangat sering Anda gunakan dalam pengembangan web modern.</p>
        `,
    },
    {
      id: "js-form-handling",
      title: "JS Form Handling",
      content: `
          <h1>JS Form Handling (Mengelola Input)</h1>
          <p>Ini adalah salahT satu tugas paling umum JavaScript: mengambil data yang diketik pengguna di dalam formulir.</p>
          <p>Kita akan menggabungkan semua yang telah kita pelajari: <code>getElementById</code>, <code>addEventListener</code>, dan properti <code>.value</code>.</p>
          <p>Properti <code>.value</code> adalah cara kita "membaca" apa yang ada di dalam kotak input.</p>

          <h3>Contoh: Mengambil Nilai Input</h3>
          <p>Bayangkan kita punya HTML ini:</p>
          <pre>
&lt;label for="namaUser"&gt;Masukkan Nama Anda:&lt;/label&gt;
&lt;input type="text" id="input-nama"&gt;
&lt;button id="tombol-kirim"&gt;Kirim&lt;/button&gt;
&lt;p id="sapaan-hasil"&gt;&lt;/p&gt;
          </pre>
          
          <p>JavaScript-nya akan terlihat seperti ini:</p>
          <pre>
// 1. Ambil semua elemen yang kita butuhkan
let inputNama = document.getElementById("input-nama");
let tombolKirim = document.getElementById("tombol-kirim");
let sapaanHasil = document.getElementById("sapaan-hasil");

// 2. Buat fungsi yang akan dijalankan saat tombol diklik
function sapaPengguna() {
  // 3. Ambil nilai (.value) DARI DALAM input
  let nama = inputNama.value;

  // 4. Tampilkan hasilnya di elemen paragraf
  sapaanHasil.innerHTML = "Halo, " + nama + "! Selamat datang.";
}

// 5. Pasang event listener ke tombol
tombolKirim.addEventListener("click", sapaPengguna);
          </pre>
          <div class="tip-box">
            <p><strong>Tips Pro:</strong> Jika <code>&lt;button&gt;</code> Anda ada di dalam <code>&lt;form&gt;</code>, halaman akan otomatis me-refresh saat diklik. Untuk mencegah ini, tambahkan <code>event.preventDefault()</code> di dalam fungsi Anda.</p>
          </div>
        `,
    },
    {
      id: "js-es6-syntax",
      title: "JS ES6+ (Sintaks Modern)",
      content: `
          <h1>JS ES6+ (Sintaks Modern)</h1>
          <p>Seiring waktu, JavaScript berevolusi. Versi ES6 (dirilis 2015) memperkenalkan cara penulisan yang lebih singkat dan kuat. Anda akan <strong>pasti</strong> melihat ini di semua tutorial modern.</p>
          <p>Dua hal terpenting yang harus Anda kenali adalah:</p>

          <h3>1. Arrow Functions (Fungsi Panah)</h3>
          <p>Ini adalah cara singkat untuk menulis fungsi.</p>
          <pre>
// Cara LAMA (Function Declaration)
function tambah(a, b) {
  return a + b;
}

// Cara BARU (Arrow Function)
let tambah = (a, b) => {
  return a + b;
}

// Jika fungsinya SANGAT singkat (hanya 1 baris return)
// Bisa disingkat lagi:
let tambahSingkat = (a, b) => a + b;

// Keren, kan?
console.log( tambahSingkat(5, 10) ); // Output: 15
          </pre>
          
          <h3>2. Template Literals (String "Cerdas")</h3>
          <p>Lupakan tanda kutip <code>" "</code> dan <code>+</code> yang merepotkan untuk menggabungkan string dan variabel. Sekarang kita gunakan <strong>backticks</strong> <code>\` \`</code>.</p>
          <p>Di dalam backticks, Anda bisa memasukkan variabel apa pun secara langsung menggunakan <code>\${...}</code>.</p>
          
          <pre>
let nama = "Budi";
let umur = 20;

// Cara LAMA (Ribet dengan tanda + dan kutip)
let sapaanLama = "Halo, nama saya " + nama + " dan umur saya " + umur + " tahun.";

// Cara BARU (Template Literals)
let sapaanBaru = \Halo, nama saya \${nama} dan umur saya \${umur} tahun.\;

console.log(sapaanBaru);
// Output: Halo, nama saya Budi dan umur saya 20 tahun.
          </pre>
        `,
    },
    {
      id: "js-async-intro",
      title: "JS Asynchronous (Menunggu)",
      content: `
          <h1>JS Asynchronous (Menunggu)</h1>
          <p>Secara default, JavaScript adalah <strong>Synchronous</strong> (sinkron). Artinya, ia menjalankan kode baris per baris, dari atas ke bawah. Ia tidak akan pindah ke baris 2 sebelum baris 1 selesai.</p>
          <p>Tapi, bagaimana jika baris 1 adalah tugas yang LAMA? (Misal: men-download gambar 100MB). Apakah seluruh website harus "freeze" (macet) menunggu?</p>
          <p>Di sinilah <strong>Asynchronous</strong> (asinkron) berperan. JavaScript bisa "mendelegasikan" tugas yang lama itu ke browser, lalu lanjut mengerjakan tugas lain. Ia tidak mau menunggu.</p>

          <h3>Contoh: <code>setTimeout</code></h3>
          <p><code>setTimeout</code> adalah cara termudah untuk mensimulasikan tugas asinkron. Ini adalah fungsi yang berkata: "Jalankan fungsi ini, TAPI NANTI setelah sekian milidetik."</p>
          
          <pre>
console.log("1. Saya pesan kopi."); // Langsung dijalankan

// "Tolong buatkan kopi, tapi saya tinggal dulu."
// (Jalankan fungsi ini setelah 2000 ms atau 2 detik)
setTimeout(() => {
  console.log("2. Kopi saya sudah jadi!"); // Dijalankan NANTI
}, 2000);

console.log("3. Saya duduk di meja."); // Langsung dijalankan

/*
Output Console akan menjadi:
1. Saya pesan kopi.
3. Saya duduk di meja.
(Menunggu 2 detik...)
2. Kopi saya sudah jadi!
*/
          </pre>
          <p>Perhatikan! Kode tidak berhenti di <code>setTimeout</code>. JavaScript lanjut ke "3. Saya duduk di meja." sambil menunggu "kopinya jadi". Inilah inti dari Asynchronous.</p>
        `,
    },
    {
      id: "js-fetch-api",
      title: "JS Fetch API (Ambil Data Luar)",
      content: `
          <h1>"Final Boss" Pemula: Fetch API</h1>
          <p>Ini adalah puncak dari semua yang telah kita pelajari. <strong>API</strong> (Application Programming Interface) adalah cara satu website "berbicara" dengan website lain untuk meminta data.</p>
          <p>Kita akan menggunakan fungsi <code>fetch()</code>, yang merupakan cara modern JavaScript untuk "meminta" data dari sebuah URL. <code>fetch()</code> adalah tugas Asynchronous (seperti memesan kopi!).</p>
          <p><code>fetch()</code> akan mengembalikan sebuah "Janji" (<strong>Promise</strong>). Anggap saja ini seperti "buzzer" restoran: "Buzzer ini akan berbunyi (<code>.then()</code>) saat datamu siap."</p>

          <h3>Contoh: Mengambil Data dari API Publik</h3>
          <p>Kita akan mengambil data "todo" (daftar tugas) palsu dari API gratis bernama JSONPlaceholder.</p>
          
          <pre>
// URL API tempat kita akan meminta data
let url = 'https://jsonplaceholder.typicode.com/todos/1';

console.log("Meminta data...");

// 1. fetch() data dari URL
fetch(url)
  // 2. .then() pertama (saat buzzer berbunyi)
  // Data mentah (Response) harus diubah jadi data .json()
  .then(response => response.json())
  
  // 3. .then() kedua (saat data JSON siap digunakan)
  .then(data => {
    // 'data' sekarang adalah Object JavaScript!
    console.log("Data diterima:", data);
    
    // Mari tampilkan ke HTML (misal kita punya <p id="hasil">)
    let hasil = document.getElementById("hasil");
    hasil.innerHTML = \Judul Tugas: \${data.title}\;
  })
  
  // 4. .catch() (Jika ada error, misal internet mati)
  .catch(error => {
    console.log("Gagal mengambil data:", error);
  });

console.log("Permintaan sedang diproses...");
          </pre>
          <p>Jika Anda menjalankan ini, Anda akan melihat data (sebuah Object) muncul di konsol, dan judul tugasnya muncul di halaman Anda. Anda baru saja menghubungkan web Anda ke dunia luar!</p>
        `,
    },
    {
      id: "js-modules",
      title: "JS Modules: import & export",
      content: `
          <h1>JS Modules: <code>import</code> & <code>export</code></h1>
          <p>Saat proyek Anda semakin besar, menyimpan semua kode JavaScript Anda dalam satu file raksasa akan sangat merepotkan. <strong>ES6 Modules</strong> adalah cara modern untuk memecah kode Anda menjadi file-file terpisah yang dapat digunakan kembali.</p>
          <p>Situs web pembelajaran ini sendiri (termasuk file <code>Data</code> Anda) dibangun menggunakan sistem Modul!</p>

          <h3><code>export</code> (Mengekspos Kode)</h3>
          <p>Gunakan kata kunci <code>export</code> untuk membuat variabel, fungsi, atau objek di dalam file agar "terlihat" dan dapat diakses oleh file lain.</p>
          <p>Anda bisa memiliki beberapa <code>export</code> dalam satu file.</p>
          
          <pre>
// File: Data/HTML_tutorial.js

// 'html' sekarang bisa di-impor oleh file lain
export const html = {
  title: "HTML",
  lessons: [
    // ... data materi ...
  ]
};

// Anda juga bisa mengekspor fungsi
export function sapa(nama) {
  return "Halo, " + nama;
}
          </pre>

          <h3><code>import</code> (Mengambil Kode)</h3>
          <p>Gunakan kata kunci <code>import</code> untuk mengambil kode yang telah di-<code>export</code> dari file lain. Anda harus menggunakan kurung kurawal <code>{ }</code> untuk menentukan apa yang ingin Anda impor.</p>
          
          <pre>
// File: assets/js/HTML_page_script.js

// Mengimpor 'html' dan 'sapa' dari file lain
import { html, sapa } from "/Data/HTML_tutorial.js";

console.log(html.title); // Output: "HTML"
console.log(sapa("Budi")); // Output: "Halo, Budi"
          </pre>

          <div class="info-box">
            <h3>Penting: <code>type="module"</code> di HTML</h3>
            <p>Browser tidak akan memproses <code>import</code>/<code>export</code> secara default. Untuk memberi tahu browser bahwa sebuah file skrip menggunakan sistem Modul, Anda <strong>wajib</strong> menambahkan <code>type="module"</code> pada tag <code>&lt;script&gt;</code> Anda di file HTML.</p>
            <pre>
&lt;script src="assets/js/HTML_page_script.js"&gt;&lt;/script&gt;

&lt;script src="assets/js/HTML_page_script.js" type="module"&gt;&lt;/script&gt;
            </pre>
            <p>Ini adalah persis seperti yang Anda lakukan di semua file <code>..._topic.html</code> Anda.</p>
          </div>
        `,
    },
  ],
};
