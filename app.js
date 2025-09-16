const form = document.getElementById("upscaleForm");
const imageUrlInput = document.getElementById("imageUrl");
const scaleInput = document.getElementById("scale");
const statusDiv = document.getElementById("status");
const resultDiv = document.getElementById("result");
const resultImage = document.getElementById("resultImage");
const downloadBtn = document.getElementById("downloadBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const imageUrl = imageUrlInput.value.trim();
  const scale = scaleInput.value;

  if (!imageUrl) {
    statusDiv.textContent = "⚠️ Masukkan URL gambar terlebih dahulu!";
    return;
  }

  statusDiv.textContent = "⏳ Memproses gambar...";
  resultDiv.classList.add("hidden");

  try {
    const apiUrl = `https://api.siputzx.my.id/api/iloveimg/upscale?image=${encodeURIComponent(imageUrl)}&scale=${scale}`;

    resultImage.src = apiUrl;
    resultImage.onload = () => {
      statusDiv.textContent = "✅ Berhasil di-upscale!";
      resultDiv.classList.remove("hidden");
      downloadBtn.href = apiUrl;
    };
    resultImage.onerror = () => {
      statusDiv.textContent = "❌ Gagal memproses gambar. Coba periksa URL.";
    };
  } catch (error) {
    statusDiv.textContent = "❌ Terjadi kesalahan: " + error.message;
  }
});
