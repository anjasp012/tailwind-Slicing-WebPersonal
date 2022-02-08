import SectionBgTitle from "./SectionBgTitle";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";

export default function ProjectSection() {
  return (
    <section
      className="container mx-auto px-28 pb-28 pt-28"
      id="ProjectSection"
    >
      <div className="flex">
        <div className="w-5/12">
          <div className="flex items-center -ml-16">
            <SectionBgTitle>Projects</SectionBgTitle>
            <SectionTitle className="-ml-80">Projects</SectionTitle>
          </div>
          <SectionDescription>
            Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya
            buat.
          </SectionDescription>
          <ul className="list-disc list-inside text-white mt-10">
            <li className="font-semibold">Semua Kategori</li>
            <li>UI Design</li>
            <li>Web Development</li>
            <li>Mobile Development</li>
          </ul>
        </div>
        <div className="w-7/12">
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 mt-10 group">
            <div className="px-4 pt-4 pb-6 bg-white/5 rounded-lg text-center hover:scale-105 transition-all ease-in-out duration-500 hover:cursor-pointer after:scale-150">
              <img src="Login Page.png" alt="" />
              <h3 className="font-semibold text-white text-[18px] mt-6 mb-3">
                Login Page UI
              </h3>
              <p className="text-white/60 text-[12px]">UI DESIGN</p>
            </div>
            <div className="px-4 pt-4 pb-6 bg-white/5 rounded-lg text-center">
              <img src="Login Page.png" alt="" />
              <h3 className="font-semibold text-white text-[18px] mt-6 mb-3">
                Login Page UI
              </h3>
              <p className="text-white/60 text-[12px]">UI DESIGN</p>
            </div>
            <div className="px-4 pt-4 pb-6 bg-white/5 rounded-lg text-center">
              <img src="Login Page.png" alt="" />
              <h3 className="font-semibold text-white text-[18px] mt-6 mb-3">
                Login Page UI
              </h3>
              <p className="text-white/60 text-[12px]">UI DESIGN</p>
            </div>
            <div className="px-4 pt-4 pb-6 bg-white/5 rounded-lg text-center">
              <img src="Login Page.png" alt="" />
              <h3 className="font-semibold text-white text-[18px] mt-6 mb-3">
                Login Page UI
              </h3>
              <p className="text-white/60 text-[12px]">UI DESIGN</p>
            </div>
            <div className="px-4 pt-4 pb-6 bg-white/5 rounded-lg text-center">
              <img src="Login Page.png" alt="" />
              <h3 className="font-semibold text-white text-[18px] mt-6 mb-3">
                Login Page UI
              </h3>
              <p className="text-white/60 text-[12px]">UI DESIGN</p>
            </div>
            <div className="px-4 pt-4 pb-6 bg-white/5 rounded-lg text-center">
              <img src="Login Page.png" alt="" />
              <h3 className="font-semibold text-white text-[18px] mt-6 mb-3">
                Login Page UI
              </h3>
              <p className="text-white/60 text-[12px]">UI DESIGN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
