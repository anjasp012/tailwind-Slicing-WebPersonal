import DescriptionSkill from "./DescriptionSkill";
import SectionBgTitle from "./SectionBgTitle";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import TitleSkill from "./TitleSkill";

export default function SkillsSection() {
  return (
    <section className="container mx-auto pb-28 pt-28 px-28" id="SkillsSection">
      <div className="w-5/12">
        <div className="flex items-center -ml-16">
          <SectionBgTitle>Skills</SectionBgTitle>
          <SectionTitle className="-ml-44">Skills</SectionTitle>
        </div>
        <SectionDescription>
          Beberapa skill yang saya punya, sebenernya banyak skill saya, tapi
          males masukin.
        </SectionDescription>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-14">
        <div className="text-center">
          <img src="Skill1.png" alt="" />
          <TitleSkill>Biasa Pake Terminal</TitleSkill>
          <DescriptionSkill>
            Udah terbiasa sih pake terimnal kek gini, karena lebih cepet
            kerjanya ketimbang pake GUI-GUI begitu.
          </DescriptionSkill>
        </div>
        <div className="text-center">
          <img src="Skill2.png" alt="" />
          <TitleSkill>Web Development</TitleSkill>
          <DescriptionSkill>
            Bikin web itu gampang, tinggal ketik-ketik kode doang dah jadi lah
            web. Apalagi sekarang bisa pake Wix hehe.
          </DescriptionSkill>
        </div>
        <div className="text-center">
          <img src="Skill3.png" alt="" />
          <TitleSkill>Nulis Artikel</TitleSkill>
          <DescriptionSkill>
            Biasa nulis artikel di web sendiri, ya walaupun masih berantakan
            yang penting nulis sih, daripada nggak sama sekali.
          </DescriptionSkill>
        </div>
        <div className="text-center">
          <img src="Skill2.png" alt="" />
          <TitleSkill>Web Development</TitleSkill>
          <DescriptionSkill>
            Bikin web itu gampang, tinggal ketik-ketik kode doang dah jadi lah
            web. Apalagi sekarang bisa pake Wix hehe.
          </DescriptionSkill>
        </div>
        <div className="text-center">
          <img src="Skill3.png" alt="" />
          <TitleSkill>Nulis Artikel</TitleSkill>
          <DescriptionSkill>
            Biasa nulis artikel di web sendiri, ya walaupun masih berantakan
            yang penting nulis sih, daripada nggak sama sekali.
          </DescriptionSkill>
        </div>
        <div className="text-center">
          <img src="Skill1.png" alt="" />
          <TitleSkill>Biasa Pake Terminal</TitleSkill>
          <DescriptionSkill>
            Udah terbiasa sih pake terimnal kek gini, karena lebih cepet
            kerjanya ketimbang pake GUI-GUI begitu.
          </DescriptionSkill>
        </div>
      </div>
    </section>
  );
}
