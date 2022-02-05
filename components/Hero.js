import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="container mx-auto pt-28 px-28" id="hero">
      <Navbar />
      <div className="flex mt-28">
        <div className="w-5/12">
          <div className="w-10/12">
            <img
              src="frame 11.png"
              className="absolute w-[510px] h-[496px] left-16 top-40"
              alt=""
            />
            <h2 className="text-[40px] text-white font-light">Hi, nama saya</h2>
            <h1 className="text-[40px] text-white font-bold">
              Dedik Sugiharto
            </h1>
            <p className="text-white/60 mt-2 mb-10">
              Saya seorang software-engineer, pembaca buku, warga NU, dan juga
              murid (online) Pak Fahruddin Faiz.
            </p>
            <a href="" className="flex items-center">
              <span class="text-white font-semibold mr-3">Go to Overview</span>
              <img src="Go to.svg" alt="" />
            </a>

            <div className="flex space-x-10 mt-10">
              <div>
                <h3 className="text-white/40 text-[12px] mb-2 uppercase tracking-widest">
                  project
                </h3>
                <h2 className="text-white text-[24px] font-semibold">12</h2>
              </div>
              <div>
                <h3 className="text-white/40 text-[12px] mb-2 uppercase tracking-widest">
                  experience
                </h3>
                <h2 className="text-white text-[24px] font-semibold">18 yrs</h2>
              </div>
              <div>
                <h3 className="text-white/40 text-[12px] mb-2 uppercase tracking-widest">
                  nationaly
                </h3>
                <h2 className="text-white text-[24px] font-semibold">IDN 🇮🇩</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12">
          <img
            src="frame 12.png"
            className="absolute w-[632px] h-[660px] -z-10 top-24 right-32"
            alt=""
          />
          <img src="hero.png" className="w-11/12 ml-20" alt="" />
        </div>
      </div>
    </div>
  );
}
