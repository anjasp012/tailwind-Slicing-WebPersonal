import SectionBgTitle from "./SectionBgTitle";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-28" id="ContactSection">
      <div className="flex">
        <div className="w-6/12">
          <div className="flex items-center -ml-16">
            <SectionBgTitle>Contact</SectionBgTitle>
            <SectionTitle className="-ml-80">Contact</SectionTitle>
          </div>
          <SectionDescription className="w-9/12">
            Kamu bisa menghubungi saya lewat kedua kontak di bawah ini.
          </SectionDescription>
          <div className="flex items-center mt-11 mb-7">
            <img
              src="phone-call.svg"
              className="p-4 bg-white/5 rounded"
              alt=""
            />
            <div className="ml-7">
              <h3 className="text-white/60 text-[16px]">Phone</h3>
              <p className="text-white font-bold text-[20px] select-all">
                +62 1234 8921
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="mail.svg" className="p-4 bg-white/5 rounded" alt="" />
            <div className="ml-7">
              <h3 className="text-white/60 text-[16px]">Email</h3>
              <p className="text-white font-bold text-[20px] select-all">
                support@collosal.tld
              </p>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <img
            src="backed.png"
            className="absolute w-[502px] h-[536px] -z-10"
            alt=""
          />
          <div className="flex justify-center mt-32">
            <div className="bg-transparent group w-6/12 ">
              <div className="bg-white/5 p-5 rounded-lg w-full border border-white/10 animate-bounce group-hover:animate-none">
                <p className="text-white">
                  “Aku akan sangat senang sekali mendapat pesan dari Anda”
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mr-20 mt-6 animate-pulse">
            <div className="bg-white/5 p-4 rounded-full animate">
              <div className="bg-white/5 p-4 rounded-full">
                <img src="contactphoto.png" className="w-[70px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
