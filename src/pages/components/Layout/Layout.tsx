import Image from "next/image";
import Accordion from "../Accordion/Accordion";
import Navbar from "../Navigation/Navbar";
import style from "./layout.module.css";
import Wave from "../Wave/Wave";
import easy from "../../../../public/images/easy_living_2.png";
import Logo from "../Logo/Logo";
import Card from "../Card/Card";
import healing from "../../../../public/images/healing_1.png";
import feelingBad from "../../../../public/images/feeling_bad.png";
import feelingRelaxed from "../../../../public/images/feeling_relexed_2.png";
import Footer from "../Footer/Footer";
import Divider from "../Divider/Divider";
import Avatar from "../Avatar/Avatar";

const Layout = () => {
  const handleClickScroll = (value: string) => {
    const element = document.getElementById(value);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const onNavItemCkick = (data: string) => {
    handleClickScroll(data);
  };

  return (
    <div>
      <div className="bg-main-background scroll-smooth pb-24">
        <Navbar onNavItemCkick={onNavItemCkick} />
        <div className={` bg-main-background px-10 ${style.distance_to_nav}`}>
          <div className=" ">
            <Wave />
            <div
              className={`flex justify-center font-bold md:text-4xl md:mt-24 mt-6 text-main-violet`}
            >
              Körper, Geist und Seele in Balance
            </div>
          </div>

          <div id="" className="md:mt-4 ">
            <div className="flex justify-center ">
              <Logo
                className="opacity-20 md:w-96 w-1/2 md:h-2/4 h-1/4"
                height={390}
                width={390}
              />
            </div>
            <div className="">
              <Divider />
            </div>
            <div>
              <div className="flex justify-center items-center content-center md:px-12 md:pt-24 pt-6 pb-6 font-bold md:text-3xl text-base text-center">
                Cranio Sacrale Körperbalance aktiviert Deine
                Selbstheilungskräfte
              </div>
              {/*     <div className="flex justify-center items-center content-center px-12 pt-4 pb-6 font-bold md:text-3xl text-base text-center">
              Aktiviere Deine Selbstheilungskräfte
            </div> */}
              <div className="md:pb-20 pb-9 md:pt-12 pt-4">
                <Image className="rounded-xl" src={easy} alt={"pic"}></Image>
              </div>
              <div>
                <Divider />
              </div>
              <div
                id="section-2"
                className="scroll-mt-36 flex flex-col justify-center items-center content-center md:px-44 md:pt-12 pt-6 md:pb-20 text-xl text-center"
              >
                <div className="font-bold md:text-3xl text-base">
                  Was ist Cranio Sacrale Körperbalance?
                </div>

                <div className="md:text-lg text-sm  pt-6">
                  Die Cranio Sacrale Körperbalance ist eine sanfte, manuelle und
                  energetische Körperarbeit, die den Menschen in seiner Ganzheit
                  anspricht und die Selbstheilungskräfte aktiviert. Durch den
                  achtsamen Umgang unterstütze ich die Selbstwahrnehmung und
                  gebe dadurch dem Körper und der Seele Raum und Halt.
                </div>
              </div>

              <div className="flex justify-center md:pt-0 pt-12">
                <Card
                  headline="Blockaden lösen, Selbstheilung aktivieren"
                  content="Bei der Cranio Sacral Behandlung spüre ich Blockaden in deinem
              Körper auf und löse sie mit gezielten Berührungen. Deine
              Selbstheilungskräfte aktivieren sich. Vitalität, Entspannung und
              Wohlbefinden breiten sich aus."
                  image={healing}
                />
              </div>
            </div>
            <div className="flex justify-center pt-20">
              <Card
                headline="Hast du das Gefühl, dass Körper und Seele aus dem Gleichgewicht
                geraten sind?"
                content="Negative Gedanken, Ängste, depressive Verstimmungen und
                Schlaflosigkeit können durch Energiearbeit und Cranio Sacral
                Behandlungen gelindert werden. Gemeinsam begeben wir uns auf
                eine Reise in dein inneres Selbst, um dort aufzuräumen, Dinge
                loszulassen, die du nicht mehr benötigst, und frischen Glanz in
                dein Innerstes zu bringen, damit du dich wieder rundum
                wohlfühlen kannst."
                image={feelingBad}
              />
            </div>
            <div className="flex justify-center pt-20 pb-12">
              <Card
                headline="Cranio Sacral Therapie zur Steigerung deines Wohlbefindens"
                content="Cranio Sacral Behandlungen bieten einen ganzheitlichen Ansatz für Gesundheit und Wohlbefinden, 
                sowohl körperlich als auch emotional und seelisch. Sie fördern die körperliche Gesundheit, 
                u.a. mit einem angeregten Körpersaftfluss, guter Durchblutung und einem starken Immunsystem. 
                Gleichzeitig unterstützen sie das emotionale und seelische Wohlbefinden, indem sie zu einem freien Kopf, 
                klarer Gedanken, Schmerzfreiheit, erholsamem Schlaf, gesteigerter Lebensenergie und mehr Lebensfreude führen. 
                Dies trägt zu einer aufgehellten Stimmung, innerer Ruhe und Gelassenheit bei."
                image={feelingRelaxed}
              />
            </div>
            <div>
              <Divider />
            </div>
            {/*             <div
              id="section-2"
              className="scroll-mt-36 flex flex-col justify-center items-center content-center md:px-44 12 pt-12 text-xl text-center"
            >
              <div className="font-extrabold md:text-2xl text-lg">
                Was ist Cranio Sacrale Körperbalance?
              </div>
              <br />
              <br />
              <div className="md:text-xl text-base">
                Die Cranio Sacrale Körperbalance Therapie ist eine alternative
                und effektive Heilungsmethode. Ihre sanfte Herangehensweise
                wirkt ausgleichend auf verschiedene Körpersysteme und fördert
                die körpereigenen Selbstheilungsmechanismen.
                <br />
                <br />
                Während der Behandlung liegt der Patient in Ruhe auf einer
                Therapieliege. Durch gezielte Techniken und sanfte Berührung
                wird die natürliche Regeneration des Körpers angeregt. Dies
                ermöglicht innere Entspannung und Heilung.
                <br />
                <br />
                Während und nach einer craniosacralen Therapie nehmen wir unser
                Körperbewusstsein verstärkt wahr, was uns dabei hilft, einen
                respektvolleren Umgang mit unserem eigenen Körper zu erlernen.
              </div>
            </div> */}
          </div>
          <div className="flex justify-center">
            <Logo
              className="opacity-20 md:w-96 w-1/2 md:h-2/4 h-1/4"
              height={390}
              width={390}
            />
          </div>
          <div id="" className="flex items-center place-content-center pb-24">
            <Accordion />
          </div>
          <div>
            <Divider />
          </div>
          {/* Termine */}
          <div
            id="section-3"
            className="scroll-mt-28 px-4 flex flex-col justify-center text-center bg-main-background"
          >
            <div className="py-12">
              <Avatar />
            </div>

            <div>
              Termine - Kontakt
              <br /> <br />
            </div>
            <div>
              Katja Rogall
              <br />
              <br />
            </div>
            <div>
              Cranio Sacrale Körperbalance
              <br /> <br />
            </div>
            <div>
              Besprechen
              <br /> <br />
            </div>
            <div>
              Chakren Massage
              <br /> <br />
            </div>
            <div>
              Alstertalweg 32 24558 Wakendorf II Tel. 0176 32 69 69 49
              <br /> <br />
            </div>
            <div>
              tel. Terminvereinbarung
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
