            let merah = document.getElementById('merah');
            let kuning = document.getElementById('kuning');
            let hijau = document.getElementById('hijau');
            let btnMerah = document.getElementById('ubtn4a').style;
            let btnKuning = document.getElementById('ubtn4b').style;
            let btnHijau = document.getElementById('ubtn4c').style;

            function tampil(mz,mo,kz,ko,hz,ho,bmc,bmd,bkc,bkd,bhc,bhd){
              let tampil2 = {};
                tampil2.merah = function(){
                  merah.style.zIndex=mz;merah.style.opacity=mo;
                  kuning.style.zIndex=kz;kuning.style.opacity=ko;
                  hijau.style.zIndex=hz;hijau.style.opacity=ho;
                  btnMerah.color=bmc;btnMerah.textDecoration=bmd;
                  btnKuning.color=bkc;btnKuning.textDecoration=bkd;
                  btnHijau.color=bhc;btnHijau.textDecoration=bhd;    
                  
                  console.log(merah.style.zIndex=mz);
                };
                return tampil2;
            }

            let merah1 = tampil('3','1','2','0','1','0','#92BFDB','underline','black','none','black','none')
            let kuning1 = tampil('1','0','3','1','2','0','black','none','#92BFDB','underline','black','none')
            let hijau1 = tampil('2','0','1','0','3','1','black','none','black','none','#92BFDB','underline')
          