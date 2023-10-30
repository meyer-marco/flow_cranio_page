import React from "react";
import { Accordion as AccordionWrapper, Flowbite } from "flowbite-react";
import style from "./accordion.module.css";
import type { CustomFlowbiteTheme, ThemeProps } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  accordion: {
    root: {
      base: " divide-y divide-main-violet shadow-md",
      flush: {
        off: "rounded-lg",
        on: "border-b",
      },
    },
    content: {
      base: "py-5 md:px-10 px-7 last:rounded-b-lg first:rounded-t-lg md:text-base text-xs bg-second-background ",
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0 font-bold ",
        open: {
          off: "",
          on: "rotate-180",
        },
      },
      base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 md:text-xl  text-left font-medium text-gray-500 dark:text-gray-400",
      flush: {
        off: "",
        on: "bg-transparent ",
      },
      heading: "",
      open: {
        off: "",
        on: "text-main-violet ",
      },
    },
  },
};

const Accordion: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <AccordionWrapper
        className={`md:w-2/3 border-main-violet ${style.accordion}`}
      >
        <AccordionWrapper.Panel>
          <AccordionWrapper.Title className=" text-main-violet ">
            Für wen ist Cranio Sacral geeignet?
          </AccordionWrapper.Title>
          <AccordionWrapper.Content className="">
            <div className="mb-2 text-main-violet">
              <p>
                Diese Therapie eignet sich für Menschen aller Altersgruppen, von
                Neugeborenen bis zu älteren Menschen, selbst wenn sie sich in
                einem sehr schmerzhaften oder gebrechlichen Zustand befinden.
                Während der Behandlung hören meine Hände auf die Botschaften des
                Körpers.
              </p>
            </div>
          </AccordionWrapper.Content>
        </AccordionWrapper.Panel>
        <AccordionWrapper.Panel>
          <AccordionWrapper.Title className=" text-main-violet">
            Für Kinder & Säuglinge
          </AccordionWrapper.Title>
          <AccordionWrapper.Content>
            <div className="mb-2  text-main-violet">
              <p>
                Die Cranio Sacral Therapie bietet Unterstützung für Kinder und
                Säuglinge bei einer Vielzahl von Anliegen, darunter
                Geburtstraumen (wie Kaiserschnitt oder Saugglocke), Koliken,
                Schlafstörungen, Entwicklungsverzögerungen, Lern- und
                Konzentrationsschwierigkeiten, Hyperaktivitäten und Schreibabys.
              </p>
            </div>
          </AccordionWrapper.Content>
        </AccordionWrapper.Panel>
        <AccordionWrapper.Panel>
          <AccordionWrapper.Title className=" text-main-violet">
            Wobei kann Cranio Sacral unterstüzen?
          </AccordionWrapper.Title>
          <AccordionWrapper.Content>
            <div className="mb-2 text-main-violet">
              <p>
                Cranio Sacral bietet wertvolle Unterstützung bei einer Vielzahl
                von Anliegen, darunter chronischen Schmerzen, Kopfschmerzen und
                Migräne, Erholung und Regeneration (nach Unfällen, Verletzungen,
                Stress und Burnout), Störungen des Immunsystems,
                psychosomatischen Beschwerden und der Regulierung von Organen
                sowie des vegetativen und zentralen Nervensystems.
              </p>
            </div>
          </AccordionWrapper.Content>
        </AccordionWrapper.Panel>
      </AccordionWrapper>
    </Flowbite>
  );
};
export default Accordion;
