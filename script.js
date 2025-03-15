// Daftar gambar
let images = ["a1.jpeg", "a2.jpeg", "a3.jpeg", "a4.jpeg", "a5.jpeg", "a6.jpeg", "a7.jpeg"];
let index = 0; // Indeks gambar yang sedang ditampilkan

// Fungsi untuk membuka modal dengan gambar yang dipilih
function openModal(i) {
    index = i;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImage").src = images[index];
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Fungsi untuk mengganti gambar ke Next atau Previous
function changeImage(step) {
    index = (index + step + images.length) % images.length;
    document.getElementById("modalImage").src = images[index];
}

// Menutup modal saat klik di luar gambar
document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeModal();
    }
});
