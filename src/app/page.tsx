import { Navbar } from "@/components/navbar";
import { Button } from "@/components/buttons";
import { FirstCard,SecondCard } from "@/components/cards";
export default function Home() {
  return (
    <div >
      <Navbar/>
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
          <Button/>
          </div>
        </div>
        <div className="bg-white h-screen rounded-tl-[100px] rounded-tr-[100px] mt-[100px]">
          <div className="flex flex-row justify-center gap-[40px] relative bottom-[80px]">
            <FirstCard imageSrc="/FortuneTop20.png" title="Fortune Top 20" text="Satu-satunya perusahaan di Asia tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune"/>
            <FirstCard imageSrc="/BerkontribusiEkonomi.png" title="Berkontribusi lebih dari $7.1 trillion" text="Penggerak roda perekonomian Indonesia"/>
            <FirstCard imageSrc="/GerakanHijau.png" title="Jaket hijau, pergerakan juga hijau" text="Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020"/>
            <FirstCard imageSrc="/TumbuhPasPandemi.png" title="Tumbuh 80% sejak pandemi" text="Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM"/>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-[48px]">Skala Kami</span>
            <div className="mt-[15px]">
            <Button/>

            </div>
          </div>
          <div className="flex flex-row justify-center mt-[150px] gap-[50px]">
           
            <SecondCard color="#7CCC6C" imageSrc="https://cdn-site.gojek.com/uploads/170_mil_340e5c5603.png" title="190 juta+" text="Jumlah install aplikasi kami"/>
          
            <SecondCard color="#D48BC8" imageSrc="https://cdn-site.gojek.com/uploads/2_million_04b50bc75a.png" title="2 juta+" text="mitra Driver yang sudah bergabung dengan kami"/>
           
            <SecondCard color="#FFAE62" imageSrc="https://cdn-site.gojek.com/uploads/50_million_c34b6365a4.png" title="900.000+" text="Jumlah mitra GoFood"/>
           
            <SecondCard color="#4AC9E3" imageSrc="https://cdn-site.gojek.com/uploads/12x_growth_cc1a49b8c3.png" title="2.448x" text="lipat kenaikan pengunduhan

                  aplikasi Gojek dari 2015

                  sampai 2020"/>
          </div>
          <div className="h-[50px]"></div>
        </div>


      </div>
    </div>
  );
}
