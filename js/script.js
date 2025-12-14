$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#navbar").removeClass("navbar-transparent");
      $("#navbar").addClass("navbar-solid");
    } else {
      $("#navbar").removeClass("navbar-solid");
      $("#navbar").addClass("navbar-transparent");
    }
  });

  // ===== HAMBURGER MENU TOGGLE =====
  $("#hamburgerBtn").click(function () {
    $("#navMenu").toggleClass("active");

    // Ganti icon hamburger <-> close
    var icon = $(this).find("i");
    if (icon.hasClass("fa-bars")) {
      icon.removeClass("fa-bars");
      icon.addClass("fa-xmark");
    } else {
      icon.removeClass("fa-xmark");
      icon.addClass("fa-bars");
    }
  });

  // Tutup menu saat klik link (mobile)
  $(".nav-link").click(function () {
    if ($(window).width() < 769) {
      $("#navMenu").removeClass("active");
      $("#hamburgerBtn i").removeClass("fa-xmark").addClass("fa-bars");
    }
  });

  // Validasi realtime saat user mengetik

  // Validasi Nama (minimal 3 karakter)
  $("#nama").on("input", function () {
    var nama = $(this).val().trim();
    if (nama === "") {
      $("#namaError").text("Nama tidak boleh kosong");
    } else if (nama.length < 3) {
      $("#namaError").text("Nama minimal 3 karakter");
    } else {
      $("#namaError").text("");
    }
  });

  // Validasi Email (harus @gmail.com)
  $("#email").on("input", function () {
    var email = $(this).val().trim();
    if (email === "") {
      $("#emailError").text("Email tidak boleh kosong");
    } else if (!email.includes("@gmail.com")) {
      $("#emailError").text("Email harus menggunakan @gmail.com");
    } else if (!isValidGmail(email)) {
      $("#emailError").text("Format email tidak valid");
    } else {
      $("#emailError").text("");
    }
  });

  // Validasi No HP (hanya angka, minimal 10 digit)
  $("#nohp").on("input", function () {
    var nohp = $(this).val().trim();
    if (nohp === "") {
      $("#nohpError").text("No HP tidak boleh kosong");
    } else if (!/^[0-9]+$/.test(nohp)) {
      $("#nohpError").text("No HP hanya boleh berisi angka");
    } else if (nohp.length < 10) {
      $("#nohpError").text("No HP minimal 10 digit");
    } else if (nohp.length > 13) {
      $("#nohpError").text("No HP maksimal 13 digit");
    } else {
      $("#nohpError").text("");
    }
  });

  // Validasi Kategori
  $("#kategori").on("change", function () {
    var kategori = $(this).val();
    if (kategori === "") {
      $("#kategoriError").text("Silakan pilih kategori");
    } else {
      $("#kategoriError").text("");
    }
  });

  // Validasi Pesan (minimal 10 karakter)
  $("#pesan").on("input", function () {
    var pesan = $(this).val().trim();
    if (pesan === "") {
      $("#pesanError").text("Pesan tidak boleh kosong");
    } else if (pesan.length < 10) {
      $("#pesanError").text("Pesan minimal 10 karakter");
    } else {
      $("#pesanError").text("");
    }
  });

  // Tombol Reset
  $("#resetBtn").click(function () {
    // Reset form
    $("#contactForm")[0].reset();
    // Hapus semua error message
    $(".error-message").text("");
  });
  // Checkbox langganan email promosi di form kontak
  $("#promosiEmail").on("change", function () {
    if ($(this).is(":checked")) {
      alert("Anda sekarang berlangganan email promosi AldigTech.");
    } else {
      alert("Anda berhenti berlangganan email promosi AldigTech.");
    }
  });

  // Validasi Form saat Submit
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    // Ambil nilai dari setiap input
    var nama = $("#nama").val().trim();
    var email = $("#email").val().trim();
    var nohp = $("#nohp").val().trim();
    var kategori = $("#kategori").val();
    var pesan = $("#pesan").val().trim();

    // Flag untuk cek validasi
    var isValid = true;

    // Reset error messages
    $(".error-message").text("");

    // Validasi Nama
    if (nama === "") {
      $("#namaError").text("Nama tidak boleh kosong");
      isValid = false;
    } else if (nama.length < 3) {
      $("#namaError").text("Nama minimal 3 karakter");
      isValid = false;
    }

    // Validasi Email
    if (email === "") {
      $("#emailError").text("Email tidak boleh kosong");
      isValid = false;
    } else if (!email.includes("@gmail.com")) {
      $("#emailError").text("Email harus menggunakan @gmail.com");
      isValid = false;
    } else if (!isValidGmail(email)) {
      $("#emailError").text("Format email tidak valid");
      isValid = false;
    }

    // Validasi No HP
    if (nohp === "") {
      $("#nohpError").text("No HP tidak boleh kosong");
      isValid = false;
    } else if (!/^[0-9]+$/.test(nohp)) {
      $("#nohpError").text("No HP hanya boleh berisi angka");
      isValid = false;
    } else if (nohp.length < 10 || nohp.length > 13) {
      $("#nohpError").text("No HP harus 10-13 digit");
      isValid = false;
    }

    // Validasi Kategori
    if (kategori === "") {
      $("#kategoriError").text("Silakan pilih kategori");
      isValid = false;
    }

    // Validasi Pesan
    if (pesan === "") {
      $("#pesanError").text("Pesan tidak boleh kosong");
      isValid = false;
    } else if (pesan.length < 10) {
      $("#pesanError").text("Pesan minimal 10 karakter");
      isValid = false;
    }

    // Jika semua valid
    // Jika semua valid
    if (isValid) {
      alert("Terima kasih, " + nama + "! Pesan Anda berhasil dikirim.");
      $("#contactForm")[0].reset();
      $(".error-message").text("");
    }
  });

  // ===== FORM SEMINAR UMKM GROW DIGITAL =====
  if ($("#seminarForm").length) {
    // Realtime: Nama minimal 3 karakter
    $("#seminarNama").on("input", function () {
      var nama = $(this).val().trim();
      if (nama === "") {
        $("#seminarNamaError").text("Nama tidak boleh kosong");
      } else if (nama.length < 3) {
        $("#seminarNamaError").text("Nama minimal 3 karakter");
      } else {
        $("#seminarNamaError").text("");
      }
    });

    // Realtime: Email (boleh pakai isValidGmail yang sudah ada)
    $("#seminarEmail").on("input", function () {
      var email = $(this).val().trim();
      if (email === "") {
        $("#seminarEmailError").text("Email tidak boleh kosong");
      } else if (!isValidGmail(email)) {
        $("#seminarEmailError").text("Gunakan email Gmail yang valid");
      } else {
        $("#seminarEmailError").text("");
      }
    });

    // Realtime: No HP 10–13 digit angka
    $("#seminarNohp").on("input", function () {
      var nohp = $(this).val().trim();
      if (nohp === "") {
        $("#seminarNohpError").text("No HP tidak boleh kosong");
      } else if (!/^[0-9]+$/.test(nohp)) {
        $("#seminarNohpError").text("No HP hanya boleh berisi angka");
      } else if (nohp.length < 10 || nohp.length > 13) {
        $("#seminarNohpError").text("No HP harus 10-13 digit");
      } else {
        $("#seminarNohpError").text("");
      }
    });

    // Realtime: Bukti pembayaran harus dipilih
    $("#buktiBayar").on("change", function () {
      var file = $(this)[0].files[0];
      if (!file) {
        $("#buktiBayarError").text("Silakan upload bukti pembayaran");
      } else {
        $("#buktiBayarError").text("");
      }
    });

    // Realtime: Checkbox syarat & ketentuan
    $("#setujuSyarat").on("change", function () {
      if (!$(this).is(":checked")) {
        $("#setujuSyaratError").text(
          "Anda harus menyetujui syarat dan ketentuan"
        );
      } else {
        $("#setujuSyaratError").text("");
      }
    });

    // Tombol reset form seminar
    $("#seminarResetBtn").click(function () {
      $("#seminarForm")[0].reset();
      $(
        "#seminarNamaError, #seminarEmailError, #seminarNohpError, #buktiBayarError, #setujuSyaratError"
      ).text("");
    });

    // Submit form seminar
    $("#seminarForm").submit(function (e) {
      e.preventDefault();

      var nama = $("#seminarNama").val().trim();
      var email = $("#seminarEmail").val().trim();
      var nohp = $("#seminarNohp").val().trim();
      var file = $("#buktiBayar")[0].files[0];
      var setuju = $("#setujuSyarat").is(":checked");

      var isValid = true;

      // reset error
      $(
        "#seminarNamaError, #seminarEmailError, #seminarNohpError, #buktiBayarError, #setujuSyaratError"
      ).text("");

      // Cek Nama
      if (nama === "") {
        $("#seminarNamaError").text("Nama tidak boleh kosong");
        isValid = false;
      } else if (nama.length < 3) {
        $("#seminarNamaError").text("Nama minimal 3 karakter");
        isValid = false;
      }

      // Cek Email
      if (email === "") {
        $("#seminarEmailError").text("Email tidak boleh kosong");
        isValid = false;
      } else if (!isValidGmail(email)) {
        $("#seminarEmailError").text("Gunakan email Gmail yang valid");
        isValid = false;
      }

      // Cek No HP
      if (nohp === "") {
        $("#seminarNohpError").text("No HP tidak boleh kosong");
        isValid = false;
      } else if (!/^[0-9]+$/.test(nohp)) {
        $("#seminarNohpError").text("No HP hanya boleh berisi angka");
        isValid = false;
      } else if (nohp.length < 10 || nohp.length > 13) {
        $("#seminarNohpError").text("No HP harus 10-13 digit");
        isValid = false;
      }

      // Cek bukti pembayaran
      if (!file) {
        $("#buktiBayarError").text("Silakan upload bukti pembayaran");
        isValid = false;
      }

      // Cek syarat & ketentuan
      if (!setuju) {
        $("#setujuSyaratError").text(
          "Anda harus menyetujui syarat dan ketentuan"
        );
        isValid = false;
      }

      // Jika semua valid
      if (isValid) {
        alert(
          "Terima kasih, " +
            nama +
            "! Pendaftaran Seminar UMKM Grow Digital berhasil dikirim."
        );
        $("#seminarForm")[0].reset();
        $(
          "#seminarNamaError, #seminarEmailError, #seminarNohpError, #buktiBayarError, #setujuSyaratError"
        ).text("");
      }
    });
  }
  // Fungsi untuk validasi format email Gmail
  function isValidGmail(email) {
    var pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return pattern.test(email);
  }
  if ($(".galeri-item").length) {
    $(".galeri-item").on("click", function () {
      var title = $(this).data("title") || $(this).find("h3").text();
      var subtitle = $(this).data("subtitle") || "";
      var desc = $(this).data("desc") || "";

      // Ambil gambar dari galeri-placeholder
      var imgSrc = $(this).find(".galeri-placeholder img").attr("src");
      var imgAlt = $(this).find(".galeri-placeholder img").attr("alt") || title;

      $("#galeriModalTitle").text(title);
      $("#galeriModalSubtitle").text(subtitle);
      $("#galeriModalDesc").text(desc);

      // Set gambar di modal
      if (imgSrc) {
        $("#galeriModalImage").attr("src", imgSrc);
        $("#galeriModalImage").attr("alt", imgAlt);
      } else {
        // kalau nggak ada gambar, kosongkan saja
        $("#galeriModalImage").attr("src", "").attr("alt", "");
      }

      $("#galeriModal").addClass("show");
    });

    $("#galeriModalClose, #galeriModal").on("click", function (e) {
      if (e.target.id === "galeriModal" || e.target.id === "galeriModalClose") {
        $("#galeriModal").removeClass("show");
      }
    });
  }
  // ===== REKOMENDASI WEBSITE BERDASARKAN USIA PELANGGAN =====
  if ($("#btnRekomendasiUsia").length) {
    $("#btnRekomendasiUsia").on("click", function () {
      var usiaInput = $("#usiaPelanggan").val().trim();
      var usia = parseInt(usiaInput, 10);
      var kategori = "";
      var rekomendasi = "";
      var isValid = true;

      // Reset error & hasil
      $("#usiaError").text("");
      $("#usiaResult").addClass("hidden");

      // Validasi usia
      if (usiaInput === "" || isNaN(usia)) {
        $("#usiaError").text("Usia tidak boleh kosong dan harus berupa angka.");
        isValid = false;
      } else if (usia < 0 || usia > 120) {
        $("#usiaError").text("Masukkan usia antara 0 sampai 120 tahun.");
        isValid = false;
      }

      if (!isValid) return;

      // Tentukan kategori usia
      if (usia <= 2) {
        kategori = "Bayi (0–2 tahun)";
        rekomendasi =
          "Website sebaiknya fokus pada informasi untuk orang tua: " +
          "desain lembut, warna pastel, dan penjelasan produk bayi yang jelas. " +
          "Prioritaskan kepercayaan dan keamanan.";
      } else if (usia <= 12) {
        kategori = "Anak-anak (3–12 tahun)";
        rekomendasi =
          "Gunakan warna cerah, ilustrasi ramah anak, dan tampilan yang " +
          "sederhana. Cocok untuk website mainan edukatif, buku cerita, atau bimbel anak.";
      } else if (usia <= 17) {
        kategori = "Remaja (13–17 tahun)";
        rekomendasi =
          "Desain modern dengan tipografi tegas, sedikit elemen dinamis, " +
          "dan fokus pada visual. Cocok untuk produk fashion, kursus, atau hobi remaja.";
      } else if (usia <= 59) {
        kategori = "Dewasa (18–59 tahun)";
        rekomendasi =
          "Tampilkan informasi yang jelas, profesional, dan mudah diakses. " +
          "Desain bersih dengan struktur rapi. Cocok untuk UMKM jasa, toko online, " +
          "kuliner, atau layanan profesional.";
      } else {
        kategori = "Lansia (60+ tahun)";
        rekomendasi =
          "Gunakan ukuran teks yang lebih besar, kontras tinggi, dan navigasi " +
          "yang sederhana. Kurangi elemen bergerak berlebihan agar lebih nyaman digunakan.";
      }

      // Tampilkan hasil
      $("#usiaKategori").text(kategori);
      $("#usiaRekomendasi").text(rekomendasi);
      $("#usiaResult").removeClass("hidden");
    });
  }
  // ===== KERANJANG BELANJA DI HALAMAN PRODUK =====
  if ($("#cartSection").length) {
    var cart = [];

    function formatRupiah(num) {
      return "Rp " + num.toLocaleString("id-ID");
    }

    function renderCart() {
      var $tbody = $("#cartItems");
      $tbody.empty();

      if (cart.length === 0) {
        $tbody.append(
          '<tr><td colspan="5" class="text-center text-gray-400 py-4">Keranjang masih kosong.</td></tr>'
        );
        $("#cartTotal").text(formatRupiah(0));
        return;
      }

      var total = 0;

      cart.forEach(function (item) {
        var subtotal = item.price * item.qty;
        total += subtotal;

        var row =
          "<tr>" +
          '<td class="py-2">' +
          item.name +
          "</td>" +
          '<td class="py-2">' +
          formatRupiah(item.price) +
          "</td>" +
          '<td class="py-2">' +
          '<div class="cart-qty">' +
          '<button class="cart-qty-btn btn-minus" data-name="' +
          item.name +
          '">-</button>' +
          '<span class="cart-qty-value">' +
          item.qty +
          "</span>" +
          '<button class="cart-qty-btn btn-plus" data-name="' +
          item.name +
          '">+</button>' +
          "</div>" +
          "</td>" +
          '<td class="py-2">' +
          formatRupiah(subtotal) +
          "</td>" +
          '<td class="py-2">' +
          '<span class="cart-remove-btn" data-name="' +
          item.name +
          '">Hapus</span>' +
          "</td>" +
          "</tr>";

        $tbody.append(row);
      });

      $("#cartTotal").text(formatRupiah(total));
    }

    function findCartItemIndex(name) {
      return cart.findIndex(function (it) {
        return it.name === name;
      });
    }

    // Tambah ke keranjang
    $(".btn-add-cart").on("click", function () {
      var name = $(this).closest(".cart-product").data("name");
      var price = parseInt($(this).closest(".cart-product").data("price"), 10);

      var idx = findCartItemIndex(name);
      if (idx !== -1) {
        cart[idx].qty += 1;
      } else {
        cart.push({
          name: name,
          price: price,
          qty: 1,
        });
      }

      renderCart();
    });

    // Event delegasi untuk tombol +, -, dan Hapus
    $("#cartItems").on("click", ".btn-plus", function () {
      var name = $(this).data("name");
      var idx = findCartItemIndex(name);
      if (idx !== -1) {
        cart[idx].qty += 1;
        renderCart();
      }
    });

    $("#cartItems").on("click", ".btn-minus", function () {
      var name = $(this).data("name");
      var idx = findCartItemIndex(name);
      if (idx !== -1) {
        cart[idx].qty -= 1;
        if (cart[idx].qty <= 0) {
          cart.splice(idx, 1); // hapus kalau qty 0
        }
        renderCart();
      }
    });

    $("#cartItems").on("click", ".cart-remove-btn", function () {
      var name = $(this).data("name");
      var idx = findCartItemIndex(name);
      if (idx !== -1) {
        cart.splice(idx, 1);
        renderCart();
      }
    });

    // Checkout / Bayar
    $("#btnCheckout").on("click", function () {
      var nama = $("#cartCustomerName").val().trim();

      if (cart.length === 0) {
        alert("Keranjang masih kosong. Silakan pilih paket terlebih dahulu.");
        return;
      }

      if (nama === "") {
        alert("Nama pemesan belum diisi.");
        return;
      }

      var total = cart.reduce(function (sum, item) {
        return sum + item.price * item.qty;
      }, 0);

      alert(
        "Terima kasih, " +
          nama +
          "! Total pembayaran Anda: " +
          formatRupiah(total) +
          "."
      );

      // Reset keranjang setelah "pembayaran"
      cart = [];
      renderCart();
      $("#cartCustomerName").val("");
    });
  }
});
