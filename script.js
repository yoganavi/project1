let merah = document.getElementById('merah');
            let kuning = document.getElementById('kuning');
            let hijau = document.getElementById('hijau');
            let btnMerah = document.getElementById('ubtn4a').style;
            let btnKuning = document.getElementById('ubtn4b').style;
            let btnHijau = document.getElementById('ubtn4c').style;

          function tampil(){
            merah.style.zIndex='3';merah.style.opacity='1';
            kuning.style.zIndex='2';kuning.style.opacity='0';
            hijau.style.zIndex='1';hijau.style.opacity='0';
            btnMerah.color='#92BFDB';btnMerah.textDecoration='underline';
            btnKuning.color='black';btnKuning.textDecoration='none';
            btnHijau.color='black';btnHijau.textDecoration='none';
          }
          function tampil2(){
            merah.style.zIndex='1';
            kuning.style.zIndex='3';
            hijau.style.zIndex='2';
            merah.style.opacity='0';
            kuning.style.opacity='1';
            hijau.style.opacity='0';
            btnMerah.color='black';btnMerah.textDecoration='none';
            btnKuning.color='#92BFDB';btnKuning.textDecoration='underline';
            btnHijau.color='black';btnHijau.textDecoration='none';
          }
          function tampil3(){
            merah.style.zIndex='1';
            kuning.style.zIndex='2';
            hijau.style.zIndex='3';
            merah.style.opacity='0';
            kuning.style.opacity='0';
            hijau.style.opacity='1';
            btnMerah.color='black';btnMerah.textDecoration='none';
            btnKuning.color='black';btnKuning.textDecoration='none';
            btnHijau.color='#92BFDB';btnHijau.textDecoration='underline';
          }