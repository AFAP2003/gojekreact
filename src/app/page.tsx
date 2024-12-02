import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div className="flex flex-row justify-between  items-center sticky top-0 bg-black h-[100px] px-[50px]">
        <div >
          <img src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" alt="" />
        </div>
        <div className="flex flex-row  gap-[20px] text-white">
          <a href="">Beranda</a>
          <a href="">Gabung Jadi Mitra</a>
          <a href="">GoCorp</a>
          <a href="">Karir</a>
          <a href="">Perusahaan</a>
          <a href="">Produk</a>
          <a href="">Blog</a>
          <a href="">Bantuan</a>
          <a href="">ID</a>

        </div>
      </div>
      <div className="bg-[url('https://cdn-site.gojek.com/uploads/hero_b18c33ed07.jpg')] w-full h-screen bg-cover bg-no-repeat">
        <div>
          <p className="text-white font-bold pt-[250px] pl-[170px] text-[50px]">
            3 negara. 20+ layanan. 1 <br /> platform on-demand <br />terkemuka.
          </p>
        </div>
      </div>
      <div className="bg-black h-screen">
        <div className=" pt-[90px] flex flex-col items-center">
          <span className="text-white text-[50px]  text-center font-bold ">Kenalin, Gojek. Si pembawa perubahan.</span>
          <div className="pt-[20px]">
            <button className="bg-[#00880D] rounded-[25px] text-[15px] h-[44px] w-[100px] text-white">Gabung</button>
          </div>
        </div>
        <div className="bg-white h-screen rounded-tl-[100px] rounded-tr-[100px] mt-[100px]">
          <div className="flex flex-row justify-center gap-[40px] relative bottom-[80px]">
            <div className="flex flex-col items-center text-center max-w-[278px]">
              <img src="/FortuneTop20.png" alt="" className="w-[140px] h-[186px]" />
              <h1 className="font-bold text-[24px]">Fortune Top 20</h1>
              <p className="pt-[20px]">Satu-satunya perusahaan di Asia tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune</p>
            </div>
            <div className="flex flex-col items-center  text-center max-w-[278px]">
              <img src="/BerkontribusiEkonomi.png" alt="" className="w-[140px] h-[186px]" />
              <h1 className="font-bold text-[24px]">Berkontribusi lebih dari $7.1 trillion</h1>
              <p className="pt-[20px]">Berkontribusi lebih dari $7.1 trillion</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[278px]">
              <img src="/GerakanHijau.png" alt="" className="w-[140px] h-[186px]" />
              <h1 className="font-bold text-[24px]">Jaket hijau, pergerakan juga hijau</h1>
              <p className="pt-[20px]">Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[278px]">
              <img src="/TumbuhPasPandemi.png" alt="" className="w-[140px] h-[186px]" />
              <h1 className="font-bold text-[24px]">Tumbuh 80% sejak pandemi</h1>
              <p className="pt-[20px]">Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-[48px]">Skala Kami</span>
            <button className="mt-[15px] bg-[#00880D] rounded-[25px] text-[15px] h-[44px] w-[100px] text-white">Gabung</button>
          </div>
          <div className="flex flex-row justify-center mt-[150px] gap-[50px]">
            <div className="bg-[#7CCC6C] w-[270px] h-[370px] rounded-[40px] shadow-[0_0_20px_5px_rgba(0,0,0,0.2)]">
              <img src="https://cdn-site.gojek.com/uploads/170_mil_340e5c5603.png" className="relative bottom-[75px]" alt="" />
              <div className="flex flex-col justify-start px-[40px]">
                <span className="font-bold text-[40px] ">190 juta+</span>
                <span>jumlah install aplikasi kami

                </span>
              </div>
            </div>
            <div className="bg-[#D48BC8] w-[270px] h-[370px] rounded-[40px] shadow-[0_0_20px_5px_rgba(0,0,0,0.2)]">
              <img src="https://cdn-site.gojek.com/uploads/2_million_04b50bc75a.png" className="relative bottom-[75px]" alt="" />
              <div className="flex flex-col  justify-start px-[40px]">
                <span className="font-bold text-[40px]">2 juta+</span>
                <span>mitra Driver yang sudah bergabung dengan kami</span>
              </div>
            </div>
            <div className="bg-[#FFAE62] w-[270px] h-[370px] rounded-[40px] shadow-[0_0_20px_5px_rgba(0,0,0,0.2)]">
              <img src="https://cdn-site.gojek.com/uploads/50_million_c34b6365a4.png" className="relative bottom-[75px]" alt="" />
              <div className="flex flex-col  justify-start px-[50px]">
                <span className="font-bold text-[40px]">900.000+</span>
                <span>jumlah mitra GoGood</span>
              </div>

            </div>
            <div className="bg-[#4AC9E3] w-[270px] h-[370px] rounded-[40px] shadow-[0_0_20px_5px_rgba(0,0,0,0.2)]">
              <img src="https://cdn-site.gojek.com/uploads/12x_growth_cc1a49b8c3.png" className="relative bottom-[75px]" alt="" />
              <div className="flex flex-col  justify-start px-[30px]">
                <span className="font-bold text-[40px]">2.448x</span>
                <span>lipat kenaikan pengunduhan

                  aplikasi Gojek dari 2015

                  sampai 2020</span>
              </div>
            </div>
          </div>
          <div className="h-[50px]"></div>
        </div>


      </div>
    </div>
  );
}
