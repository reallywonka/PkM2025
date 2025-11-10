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
judul.style.backgroundColor = "#f1f1f1";
          </pre>
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
sapaPengguna(); // Bisa dipanggil lagi
          </pre>

          <h3>Fungsi dengan Parameter</h3>
          <p>Anda dapat mengirim nilai (disebut <strong>parameter</strong> atau argumen) ke dalam fungsi. Ini membuat fungsi lebih dinamis.</p>
          <pre>
// 'nama' adalah parameter
function sapaNama(nama) {
  console.log("Halo, " + nama + "! Apa kabar?");
}

// Memanggil fungsi dengan nilai parameter
sapaNama("Budi"); // Output: Halo, Budi! Apa kabar?
sapaNama("Ani");  // Output: Halo, Ani! Apa kabar?
          </pre>
          
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
console.log(tambah(10, 10));  // Output: 20
          </pre>
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
console.log(x % y); // Output: 1 (Karena 10 dibagi 3 sisa 1)
          </pre>
          
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
console.log(umur);
          </pre>
          
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
console.log(nilai == "100");  // Output: true (karena nilai dianggap sama)
          </pre>
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
// Output: Selamat pagi!
          </pre>

          <h3>Pernyataan <code>if...else</code></h3>
          <p>Gunakan <code>else</code> untuk menjalankan blok kode alternatif jika kondisi pertama bernilai <code>false</code>.</p>
          <pre>
let nilaiUjian = 70;

if (nilaiUjian >= 75) {
  console.log("Anda Lulus!");
} else {
  console.log("Anda Gagal (Remedial).");
}
// Output: Anda Gagal (Remedial).
          </pre>
          
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
// Output: Luar biasa!
          </pre>
        `,
    },
  ],
};