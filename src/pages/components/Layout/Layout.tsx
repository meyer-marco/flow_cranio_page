import Image from "next/image";
import Accordion from "../Accordion/Accordion";
import Navbar from "../Navigation/Navbar";
import style from "./layout.module.css";
import Wave from "../Wave/Wave";
import easy from "../../../../public/images/easy_living_2.png";
import Logo from "../Logo/Logo";

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
    <div className="bg-main-background scroll-smooth">
      <Navbar onNavItemCkick={onNavItemCkick} />

      <div className={` bg-main-background px-10 ${style.distance_to_nav}`}>
        <div className="">
          <Wave />
          <div
            className={`flex justify-center font-bold md:text-4xl md:mt-24 mt-2 ${style.text_gradient} `}
          >
            Körper, Geist und Seele in Balance
          </div>
        </div>

        <div id="" className="mt-4 ">
          <div className="flex justify-center ">
            <Logo
              className="opacity-20 md:w-96 w-1/2 md:h-2/4 h-1/4"
              height={390}
              width={390}
            />
          </div>
          <div className="flex justify-center items-center content-center md:px-44 pt-4 md:text-xl text-base text-center">
            <div>
              <p>
                Fühlst du dich manchmal, als würdest du nicht ganz du selbst
                sein?
                <br />
                Hast du das Gefühl, dass Körper und Seele aus dem Gleichgewicht
                geraten sind? <br />
                Negative Gedanken, Ängste, depressive Verstimmungen und
                Schlaflosigkeit können durch Energiearbeit und Cranio Sacral
                Behandlungen gelindert werden. Gemeinsam begeben wir uns auf
                eine Reise in dein inneres Selbst, um dort aufzuräumen, Dinge
                loszulassen, die du nicht mehr benötigst, und frischen Glanz in
                dein Innerstes zu bringen, damit du dich wieder rundum
                wohlfühlen kannst.
              </p>
            </div>
          </div>
          <div className="pb-24 pt-24">
            <Image className="rounded-xl" src={easy} alt={"pic"}></Image>
          </div>
          <div
            id="section-2"
            className="scroll-mt-36 flex flex-col justify-center items-center content-center md:px-44 text-xl text-center"
          >
            <div className="font-extrabold md:text-2xl text-lg">
              Was ist Cranio Sacrale Körperbalance?
            </div>
            <br />
            <br />
            <div className="md:text-xl text-base">
              Die Cranio Sacrale Körperbalance Therapie ist eine alternative und
              effektive Heilungsmethode. Ihre sanfte Herangehensweise wirkt
              ausgleichend auf verschiedene Körpersysteme und fördert die
              körpereigenen Selbstheilungsmechanismen.
              <br />
              <br />
              Während der Behandlung liegt der Patient in Ruhe auf einer
              Therapieliege. Durch gezielte Techniken und sanfte Berührung wird
              die natürliche Regeneration des Körpers angeregt. Dies ermöglicht
              innere Entspannung und Heilung.
              <br />
              <br />
              Während und nach einer craniosacralen Therapie nehmen wir unser
              Körperbewusstsein verstärkt wahr, was uns dabei hilft, einen
              respektvolleren Umgang mit unserem eigenen Körper zu erlernen.
            </div>
          </div>
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
        {/* Termine */}
        <div id="section-3" className="scroll-mt-28">
          #section-2 <br />
          <br />
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum. Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo. Duis autem vel eum
          iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi. Nam liber tempor cum
          soluta nobis eleifend option congue nihil imperdiet doming id quod
          mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
          ut aliquip ex ea commodo. Duis autem vel eum iriure dolor in hendrerit
          in vulputate velit esse molestie consequat, vel illum dolore eu
          feugiat nulla facilisis at vero eros et accumsan et iusto odio
          dignissim qui blandit praesent luptatum zzril delenit augue duis
          dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis
          eleifend option congue nihil imperdiet doming id quod mazim placerat
          facer possim assum. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
          ea commodo
          <br />
        </div>
      </div>
    </div>
  );
};

export default Layout;
