export function Navbar(){
    return(
        <div className="flex flex-row justify-between  items-center sticky top-0 bg-black h-[100px] px-[50px] z-10">
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
    )
}