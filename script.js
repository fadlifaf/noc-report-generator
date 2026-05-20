
      let savedDowntime = null;
      let savedStatus = null;
      let savedCabang = null;
      let savedTicket = null;

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

      function formatTanggal(dateString) {
        if (!dateString) return "-";

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

        const d = new Date(dateString);

        const day = String(d.getDate()).padStart(2, "0");
        const month = bulan[d.getMonth()];
        const year = d.getFullYear();

        const hour = String(d.getHours()).padStart(2, "0");
        const minute = String(d.getMinutes()).padStart(2, "0");

        return `${day} ${month} ${year} ${hour}:${minute} WIB`;
      }

      function hitungDurasi(start, end) {
        if (!start || !end) return "-";

        const diff = new Date(end) - new Date(start);

        const hours = Math.floor(diff / (1000 * 60 * 60));

        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
      }

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

      function buatWA() {
        const d = ambilData();

        savedDowntime = d.waktu;
        savedStatus = d.status;
        savedCabang = d.cabang;
        savedTicket = d.ticket;

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

        showSuccess("Done tinggal copy template WA gessss");
      }

      function buatEmail() {
        const d = ambilData();

        savedDowntime = d.waktu;
        savedStatus = d.status;
        savedCabang = d.cabang;
        savedTicket = d.ticket;

        const email = emailMapping[d.cabang] || "-";

        const footer = `

Jika ada pertanyaan tentang masalah ini, silakan hubungi tim IT NOC di it.noc@surganyamotor.co.id atau melalui call atau whatsapp +62 815-1040-1208.

Terimakasih,
${d.picnoc}
IT NOC - PT Surganya Motor Indonesia`;

        const laporan = `Dear All,

Bersama ini kami memberitahukan bahwa saat ini ${d.gangguan} di cabang ${d.cabang} terpantau sedang mengalami masalah.

• No Ticket : ${d.ticket}
• Tanggal/Jam : ${formatTanggal(d.waktu)}
• Laporan Kendala : ${d.kendala}
• Impact : ${d.impact}
• Indikasi Penyebab : ${d.penyebab}
• Status : ${d.status}

${footer}`;

        document.getElementById("emailOutput").innerText = email;

        document.getElementById("hasil").value = laporan;

        navigator.clipboard.writeText(laporan);

        showSuccess("Done tinggal copy tempalte Email gessss");
      }

      function buatUptimeWA() {
        const d = ambilData();

        if (!savedDowntime) {
          showInfo("Generate template down terlebih dahulu!");

          return;
        }

        const downtimeFormat = formatTanggal(savedDowntime);

        const uptimeFormat = formatTanggal(d.uptime);

        const duration = hitungDurasi(savedDowntime, d.uptime);

        const laporan = `SUBJECT: Koneksi Internet Cabang ${savedCabang} Kembali Normal

Dear All,

Bersama ini kami informasikan bahwa masalah koneksi INTERNET ${savedCabang} telah berhasil diselesaikan. Semua layanan kini beroperasi dengan normal.

• No Ticket : ${savedTicket}
• Down Time : ${savedStatus} | ${downtimeFormat}
• Up Time : ${savedStatus} | ${uptimeFormat}
• Duration Downtime : ${duration}
• Jenis Gangguan : ${d.impact}
• Tindakan : ${d.tindakan}
• Status : Network Link/Internet Cabang ${savedCabang} Kembali Normal

Terimakasih,
NOC-TEAM`;

        document.getElementById("hasil").value = laporan;

        navigator.clipboard.writeText(laporan);

        showSuccess("Done tinggal copy tempalte WA gessss!");
      }

      function buatUptimeEmail() {
        const d = ambilData();

        if (!savedDowntime) {
          showInfo("Generate template down terlebih dahulu!");

          return;
        }

        const email = emailMapping[savedCabang] || "-";

        const downtimeFormat = formatTanggal(savedDowntime);

        const uptimeFormat = formatTanggal(d.uptime);

        const duration = hitungDurasi(savedDowntime, d.uptime);

        const footer = `

Jika ada pertanyaan tentang masalah ini, silakan hubungi tim IT NOC di it.noc@surganyamotor.co.id atau melalui call atau whatsapp +62 815-1040-1208.

Terimakasih,
${d.picnoc}
IT NOC - PT Surganya Motor Indonesia`;

        const laporan = `SUBJECT: Koneksi Internet Cabang ${savedCabang} Kembali Normal

Dear All,

Bersama ini kami informasikan bahwa masalah koneksi INTERNET ${savedCabang} telah berhasil diselesaikan. Semua layanan kini beroperasi dengan normal.

• No Ticket : ${savedTicket}
• Down Time : ${savedStatus} | ${downtimeFormat}
• Up Time : ${savedStatus} | ${uptimeFormat}
• Duration Downtime : ${duration}
• Jenis Gangguan : ${d.impact}
• Tindakan : ${d.tindakan}
• Status : Network Link/Internet Cabang ${savedCabang} Kembali Normal

${footer}`;

        document.getElementById("emailOutput").innerText = email;

        document.getElementById("hasil").value = laporan;

        navigator.clipboard.writeText(laporan);

        showSuccess("Done tinggal copy tempalte Email gessss");
      }

      function clearForm() {
        document.querySelectorAll("input").forEach((input) => {
          input.value = "";
        });

        document.getElementById("hasil").value = "";

        document.getElementById("emailOutput").innerText = "-";

        savedDowntime = null;
        savedStatus = null;
        savedCabang = null;
        savedTicket = null;

        showInfo("udah acu delete ya!");
      }

      function copyText() {
        const text = document.getElementById("hasil").value;

        navigator.clipboard.writeText(text);

        showSuccess("Template udah dicopy!");
      }

      function copyEmail() {
        const email = document.getElementById("emailOutput").innerText;

        navigator.clipboard.writeText(email);

        showSuccess("Email udah dicopy!");
      }

       function copyWa() {
        const email = document.getElementById("waOutput").innerText;

        navigator.clipboard.writeText(email);

        showSuccess("WA udah dicopy!");
      }
    
