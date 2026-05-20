// ==========================
// GLOBAL VARIABLE
// ==========================

let savedDowntime = null;
let savedStatus = null;
let savedCabang = null;
let savedTicket = null;
let updateCount = 0;

// ==========================
// EMAIL MAPPING
// ==========================

const emailMapping = {
  HO: "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id",

  Jakarta:
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id; it.jkt.rafly@surganyamotor.co.id; it.jkt.rifani@surganyamotor.co.id; it.jkt.rizal@surganyamotor.co.id; it.jkt.zihan@surganyamotor.co.id",

  Tangerang:
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id; it.tng.okta@surganyamotor.co.id; it.tng.alvito@surganyamotor.co.id",

  Bandung:
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id; it.bdg.atep@surganyamotor.co.id; it.bdg.aep@surganyamotor.co.id; it.bdg.akbar@surganyamotor.co.id",

  Palembang:
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id; it.plg.arafik@surganyamotor.co.id; it.plg.paul@surganyamotor.co.id",

  Semarang:
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id; it.smg.dedy@surganyamotor.co.id; it.smg.adhi@surganyamotor.co.id",

  Surabaya:
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id; it.sby.yudha@surganyamotor.co.id; it.sby.adi@surganyamotor.co.id; it.sur.andra@surganyamotor.co.id; it.bagus@surganyamotor.co.id; it.smr.dito@surganyamotor.co.id",

  Samarinda:
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id; it.sby.yudha@surganyamotor.co.id; it.sby.adi@surganyamotor.co.id; it.sur.andra@surganyamotor.co.id; it.bagus@surganyamotor.co.id; it.smr.dito@surganyamotor.co.id",

  Denpasar:
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id; it.dpr.toni@surganyamotor.co.id; it.dpr.yoga@surganyamotor.co.id",

  Banjarmasin:
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id; it.bjm.alif@surganyamotor.co.id",

  "cabang Planetban":
    "mahendra@surganyamotor.co.id; ernest@surganyamotor.co.id; eky.purnomo@surganyamotor.co.id; marzuki@surganyamotor.co.id; ridlo.ginanjar@surganyamotor.co.id; it.ade@surganyamotor.co.id; it.dinda@surganyamotor.co.id; it.demas@surganyamotor.co.id; it.arief@surganyamotor.co.id; it.yudhaksatria@surganyamotor.co.id; it.angga@surganyamotor.co.id; it.bambang@surganyamotor.co.id; it.ridhwan@surganyamotor.co.id; it.andri@surganyamotor.co.id; toha@surganyamotor.co.id; it.rizkyfirnanda@surganyamotor.co.id; it.agas@surganyamotor.co.id; it.noc@surganyamotor.co.id; it.prasomya@surganyamotor.co.id",
};

// ==========================
// GET DATA
// ==========================

function ambilData() {
  return {
    gangguan: document.getElementById("gangguan").value,
    cabang: document.getElementById("cabang").value,
    ticket: document.getElementById("ticket").value,

    waktu: document.getElementById("waktu").value,
    uptime: document.getElementById("uptime").value,

    tindakan: document.getElementById("tindakan").value,

    kendala: document.getElementById("kendala").value,
    impact: document.getElementById("impact").value,
    penyebab: document.getElementById("penyebab").value,
    status: document.getElementById("status").value,
    picnoc: document.getElementById("picnoc").value,
  };
}

// ==========================
// FORMAT TANGGAL
// ==========================

function parseDateTime24(input) {
  // Accept:
  // 1) YYYY-MM-DDTHH:mm (from datetime-local)
  // 2) YYYY-MM-DD HH:mm (custom)
  // Ensure 24-hour (00-23) and minutes (00-59)
  if (!input) return null;

  const s = String(input).trim();

  const m = s.match(
    /^([0-9]{4})-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])(?:[T\s])([01][0-9]|2[0-3]):([0-5][0-9])$/,
  );
  if (!m) return null;

  const year = Number(m[1]);
  const month = Number(m[2]); // 1..12
  const day = Number(m[3]);
  const hour = Number(m[4]);
  const minute = Number(m[5]);

  // Use local time to match user expectation (WIB)
  const dt = new Date(year, month - 1, day, hour, minute, 0, 0);

  // Guard against invalid dates like 2026-02-31
  if (
    dt.getFullYear() !== year ||
    dt.getMonth() !== month - 1 ||
    dt.getDate() !== day ||
    dt.getHours() !== hour ||
    dt.getMinutes() !== minute
  ) {
    return null;
  }

  return dt;
}

function formatTanggal(dateInput) {
  const d = parseDateTime24(dateInput);
  if (!d) return "-";

  const bulan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const namaHari = d.toLocaleDateString("id-ID", { weekday: "long" });

  const tanggal = String(d.getDate()).padStart(2, "0");
  const monthIdx = d.getMonth();
  const tahun = d.getFullYear();

  const jam = String(d.getHours()).padStart(2, "0");
  const menit = String(d.getMinutes()).padStart(2, "0");

  return `${namaHari} | ${tanggal} ${bulan[monthIdx]} ${tahun} | ${jam}:${menit} WIB`;
}

function formatTanggalLengkap(dateString) {
  if (!dateString) return "-";

  const d = parseDateTimeStrict(dateString);
  if (!d) return "-";

  const hari = d.toLocaleDateString("id-ID", { weekday: "long" });

  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return `${hari} | ${String(d.getDate()).padStart(2, "0")} ${bulan[d.getMonth()]} ${d.getFullYear()} | ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} WIB`;
}
// ==========================
// HITUNG DURASI
// ==========================

function hitungDurasi(start, end) {
  if (!start || !end) return "-";

  const diff = new Date(end) - new Date(start);

  const hours = Math.floor(diff / (1000 * 60 * 60));

  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

// ==========================
// ALERT
// ==========================

function showSuccess(message) {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    background: "#393E46",
    color: "#EEEEEE",
    confirmButtonColor: "#00ADB5",
  });
}

function showInfo(message) {
  Swal.fire({
    icon: "info",
    title: "Information",
    text: message,
    background: "#393E46",
    color: "#EEEEEE",
    confirmButtonColor: "#00ADB5",
  });
}

function parseDate(value) {
  if (!value) return null;
  return new Date(value); // datetime-local aman kalau langsung dipakai konsisten
}
// ==========================
// GENERATE SUBJECT
// ==========================

function generateSubject(type, cabang, ticket, mode = "down") {
  const t = (type || "").toLowerCase();
  const originalType = type || "-";
  const c = cabang || "-";
  const tk = ticket || "-";

  // =========================
  // DOWN SUBJECT
  // =========================
  if (mode === "down") {
    // INTERNET / NETWORK
    if (t.includes("internet") || t.includes("network")) {
      return `Koneksi Internet Cabang ${c} DOWN`;
    }

    // API
    if (t.includes("api")) {
      return `${originalType} di cabang ${c} DOWN`;
    }

    // SERVER
    if (t.includes("server")) {
      return `${originalType} di cabang ${c} DOWN`;
    }

    // APLIKASI
    if (
      t.includes("aplikasi") ||
      t.includes("application") ||
      t.includes("apps")
    ) {
      return `${originalType} di cabang ${c} Mengalami Gangguan`;
    }

    // DEFAULT
    return `[DOWN] ${originalType} ${c} - ${tk}`;
  }

  // =========================
  // UPTIME SUBJECT
  // =========================
  if (mode === "up") {
    // INTERNET / NETWORK
    if (t.includes("internet") || t.includes("network")) {
      return `Koneksi Internet Cabang ${c} Kembali Normal`;
    }

    // API
    if (t.includes("api")) {
      return `${originalType} di cabang ${c} Kembali Normal`;
    }

    // SERVER
    if (t.includes("server")) {
      return `${originalType} di cabang ${c} Kembali Normal`;
    }

    // APLIKASI
    if (
      t.includes("aplikasi") ||
      t.includes("application") ||
      t.includes("apps")
    ) {
      return `${originalType} di cabang ${c} Kembali Normal`;
    }

    // DEFAULT
    return `[UPTIME] ${originalType} ${c} Normal`;
  }

  // FALLBACK
  return `${originalType} ${c}`;
}

// ==========================
// GENERATE WA DOWN
// ==========================

function buatWA() {
  const d = ambilData();

  savedDowntime = d.waktu;
  savedStatus = d.status;
  savedCabang = d.cabang;
  savedTicket = d.ticket;

  // SUBJECT
  const subject = generateSubject(d.gangguan, savedCabang, savedTicket, "down");

  // karena emailSubject sekarang textarea
  document.getElementById("emailSubject").value = subject;

  // TEMPLATE WA
  const laporan = `Dear All,

Bersama ini kami memberitahukan bahwa saat ini ${d.gangguan} di cabang ${d.cabang} terpantau sedang mengalami masalah.

• No Ticket : ${d.ticket}
• Tanggal/Jam : ${formatTanggal(d.waktu)}
• Laporan Kendala : ${d.kendala}
• Impact : ${d.impact}
• Indikasi Penyebab : ${d.penyebab}
• Status : ${d.status}

Terimakasih,
NOC-Team`;

  document.getElementById("hasil").value = laporan;

  navigator.clipboard.writeText(laporan);

  showSuccess("Template WA berhasil dibuat!");
}

// ==========================
// GENERATE EMAIL DOWN
// ==========================

function buatEmail() {
  const d = ambilData();

  savedDowntime = d.waktu;
  savedStatus = d.status;
  savedCabang = d.cabang;
  savedTicket = d.ticket;

  // EMAIL TUJUAN
  const email = emailMapping[d.cabang] || "-";

  // SUBJECT
  const subject = generateSubject(d.gangguan, d.cabang, d.ticket, "down");

  // FIX textarea
  document.getElementById("emailSubject").value = subject;

  // FIX textarea
  document.getElementById("emailOutput").value = email;

  const footer = `

Jika ada pertanyaan tentang masalah ini, silakan hubungi tim IT NOC di it.noc@surganyamotor.co.id atau melalui call atau whatsapp +62 815-1040-1208.

Terimakasih,
${d.picnoc}
IT NOC - PT Surganya Motor Indonesia`;

  // BODY EMAIL
  const body = `Dear All,

Bersama ini kami memberitahukan bahwa saat ini ${d.gangguan} di cabang ${d.cabang} terpantau sedang mengalami masalah.

• No Ticket : ${d.ticket}
• Tanggal/Jam : ${formatTanggal(d.waktu)}
• Laporan Kendala : ${d.kendala}
• Impact : ${d.impact}
• Indikasi Penyebab : ${d.penyebab}
• Status : ${d.status}

${footer}`;

  document.getElementById("hasil").value = body;

  navigator.clipboard.writeText(body);

  showSuccess("Template Email berhasil dibuat!");
}

// ==========================
// UPDATE INFO
// ==========================

function buatUpdateInfo() {
  const d = ambilData();

  if (!savedDowntime) {
    showInfo("Generate DOWN terlebih dahulu!");
    return;
  }

  updateCount++;

  const waktuUpdate = formatTanggal(new Date());

  const subject = `[UPDATE ${updateCount}] ${d.gangguan} ${d.cabang}`;

  document.getElementById("emailSubject").value = subject;

  const laporan = `Dear All,

Saat ini tim masih melakukan pengecekan terhadap gangguan yang terjadi.

• Waktu Update : ${waktuUpdate}
• Status Saat Ini : ${d.status}

Terimakasih,
NOC-Team`;

  document.getElementById("hasil").value = laporan;

  navigator.clipboard.writeText(laporan);

  showSuccess("Update info berhasil dibuat!");
}

// ==========================
// UPTIME WA
// ==========================

function buatUptimeWA() {
  const d = ambilData();

  if (!savedDowntime) {
    showInfo("Generate template down terlebih dahulu!");
    return;
  }

  const downtimeFormat = formatTanggalLengkap(savedDowntime);

  const uptimeFormat = formatTanggalLengkap(d.uptime);

  const duration = hitungDurasi(savedDowntime, d.uptime);

  const subject = generateSubject(d.gangguan, savedCabang, savedTicket, "up");

  document.getElementById("emailSubject").value = subject;

  const laporan = `Dear All,

Bersama ini kami informasikan bahwa gangguan di cabang ${savedCabang} telah berhasil diselesaikan dan layanan sudah kembali normal.

• No Ticket : ${savedTicket}
• Down Time : ${downtimeFormat}
• Up Time : ${uptimeFormat}
• Duration Downtime : ${duration}
• Jenis Gangguan : ${d.impact}
• Tindakan : ${d.tindakan}
• Status : Normal

Terimakasih,
NOC-Team`;


  document.getElementById("hasil").value = laporan;

  navigator.clipboard.writeText(laporan);

  showSuccess("Template Uptime WA berhasil dibuat!");
}

// ==========================
// UPTIME EMAIL
// ==========================

function buatUptimeEmail() {
  const d = ambilData();

  if (!savedDowntime) {
    showInfo("Generate template down terlebih dahulu!");
    return;
  }

  const email = emailMapping[savedCabang] || "-";

  const downtimeFormat = formatTanggalLengkap(savedDowntime);

  const uptimeFormat = formatTanggalLengkap(d.uptime);

  const duration = hitungDurasi(savedDowntime, d.uptime);

  const subject = generateSubject(d.gangguan, savedCabang, savedTicket, "up");

  document.getElementById("emailSubject").value = subject;

  document.getElementById("emailOutput").value = email;

  const footer = `

Jika ada pertanyaan tentang masalah ini, silakan hubungi tim IT NOC di [it.noc@surganyamotor.co.id](mailto:it.noc@surganyamotor.co.id) atau melalui call atau whatsapp +62 815-1040-1208.

Terimakasih,
${d.picnoc}
IT NOC - PT Surganya Motor Indonesia`;

  const laporan = `Dear All,

Bersama ini kami informasikan bahwa gangguan di cabang ${savedCabang} telah berhasil diselesaikan dan layanan kini beroperasi normal kembali.

• No Ticket : ${savedTicket}
• Down Time : ${downtimeFormat}
• Up Time : ${uptimeFormat}
• Duration Downtime : ${duration}
• Jenis Gangguan : ${d.impact}
• Tindakan : ${d.tindakan}
• Status : Normal

${footer}`;


  document.getElementById("hasil").value = laporan;

  navigator.clipboard.writeText(laporan);

  showSuccess("Template Uptime Email berhasil dibuat!");
}

// ==========================
// CLEAR FORM
// ==========================

function clearForm() {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });

  document.getElementById("hasil").value = "";
  document.getElementById("emailOutput").value = "";
  document.getElementById("emailSubject").value = "";

  savedDowntime = null;
  savedStatus = null;
  savedCabang = null;
  savedTicket = null;

  showInfo("Form berhasil dibersihkan!");
}

// ==========================
// COPY TEMPLATE
// ==========================

function copyText() {
  const text = document.getElementById("hasil").value;

  if (!text || text.trim() === "") {
    showInfo("Belum ada template!");
    return;
  }

  navigator.clipboard.writeText(text);

  showSuccess("Template berhasil dicopy!");
}

// ==========================
// COPY EMAIL
// ==========================

function copyEmail() {
  const email = document.getElementById("emailOutput").value;

  if (!email || email.trim() === "" || email === "-") {
    showInfo("Belum ada email bwangg!");
    return;
  }

  navigator.clipboard.writeText(email);

  showSuccess("Email udah dicopy!");
}

// ==========================
// COPY SUBJECT
// ==========================

function copySubject() {
  const text = document.getElementById("emailSubject").value;

  if (!text || text.trim() === "") {
    showInfo("Belum ada subject!");
    return;
  }

  navigator.clipboard.writeText(text);

  showSuccess("Subject udah dicopy!");
}

// ==========================
// DATE
// ==========================

function formatTanggalLengkap(dateInput) {
  if (!dateInput) return "-";

  const d = parseDateTime24(dateInput);
  if (!d) return "-";

  const hari = d.toLocaleDateString("id-ID", { weekday: "long" });

  const bulan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const tanggal = String(d.getDate()).padStart(2, "0");
  const bulanIdx = d.getMonth();
  const tahun = d.getFullYear();

  const jam = String(d.getHours()).padStart(2, "0");
  const menit = String(d.getMinutes()).padStart(2, "0");

  return `${hari} | ${tanggal} ${bulan[bulanIdx]} ${tahun} | ${jam}:${menit} WIB`;
}

function parseDateTimeStrict(value) {
  if (!value) return null;

  const m = value
    .trim()
    .match(/^(\d{4})-(\d{2})-(\d{2})\s([01]\d|2[0-3]):([0-5]\d)$/);

  if (!m) return null;

  const [_, y, mo, d, h, mi] = m;

  const date = new Date(+y, +mo - 1, +d, +h, +mi);

  return date;
}
