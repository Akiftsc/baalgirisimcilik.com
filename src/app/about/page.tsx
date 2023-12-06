import Slider from "@/Components/Slider";

export default function About() {
  return (
    <main className="aboutPage animate-fade-up">
        <h3 className="text-white px-2 py-8 text-3xl md:text-[84px] font-semibold">
            Hakkımızda
        </h3>
        <div className="flex md:flex-row flex-col">
            <div className="flex-1">
              <div className="text-white px-2 py-8 flex-1 text-xl whitespace-pre-W">
                <p>
                Merhaba! Biz, Lisemiz bünyesinde 2023 yılında kurulan okulumuzun Girişimcilik Kulübüyüz. Kurucularımız, İlhan Arda Çiftçi ve Mehmet Akif Taşçı, girişimcilik tutkusunu bir araya getirerek bu kulübü hayata geçirdi. Amacımız, öğrencilere girişimcilik dünyasına adım atmaları için gerekli yetenekleri kazandırmak.
                </p>
                <p>
                  <strong>Kuruluş Tarihi</strong>:
                </p>
                <p>2023 Kasım</p>
                <p>
                  <strong>Kurucular</strong>:
                </p>
                <p>- İlhan Arda Çiftçi</p>
                <p>- Mehmet Akif Taşçı</p>
                <p>
                  <br />
                </p>
                <p>
                  <strong>Amaçlarımız</strong>:
                </p>
                <p>- Girişimcilik eğitimi ile öğrencilere pratik beceriler kazandırmak.</p>
                <p>- Finansal yönetim, psikolojik takım yönetimi, liderlik gibi yetenekleri katmak ve bu alanlarda kapsamlı eğitimler sunmak.
                </p>
                <p>
                  - Öğrencilerimizi girişimci ruhla donatarak, kendi projelerini hayata geçirmelerine destek olmak.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Bizimle birlikte girişimcilik dünyasını keşfedin ve kariyerinize heyecan
                  katın!
                </p>
            </div>
            </div>
            <div className="flex-1 p-6 block">
                  <Slider />
              </div>           
        </div>
    </main>
  ) 
}
