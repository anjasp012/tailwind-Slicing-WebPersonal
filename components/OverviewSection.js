export default function OverviewSection() {
  return (
    <section className="container mx-auto px-28 py-40" id="overview">
      <div className="flex">
        <div className="w-6/12">
          <div className="flex items-center -ml-16">
            <span className="text-white/5 text-[100px] font-bold tracking-tight">
              Overview
            </span>
            <h1 className="-ml-96 mt-5 text-white text-[40px] font-bold tracking-tight">
              Overview
            </h1>
          </div>
          <p className="text-white/60 w-8/12">
            Nama saya Dedik Sugiharto, saya seorang software-engineer sebelum
            kata software-engineer itu ada. Saya terbiasa ngoding di Microsoft
            Word 2003.
          </p>

          <div className="mt-8">
            <h3 className="text-white font-semibold text-[28px] mb-2">
              Pendidikan
            </h3>
            <ul className="list-disc list-inside text-white text-[18px] leading-loose">
              <li>2003-2009 SDN California 2</li>
              <li>2009-2012 SMP Los Santos 9</li>
              <li>2012-2015 SMA Berlin Jakarta 64</li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-white font-semibold text-[28px] mb-2">
              Pekerjaan
            </h3>
            <ul className="list-disc list-inside text-white text-[18px] leading-loose">
              <li>Software Engineer at PT. Mencari Cinta Sejati</li>
              <li>Co-founder at A.D.M (Artis Dunia Maya)</li>
              <li>Manager at Liverpool F.C</li>
              <li>Manager at Cliquers Cllamanya</li>
            </ul>
          </div>
        </div>
        <div className="w-6/12">
          <img
            src="backed.png"
            className="absolute right-52 w-[502px] h-[536px]"
            alt=""
          />
          <img
            src="profileoverview.png"
            className="w-[287px] h-[392px] mx-auto mt-20"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
