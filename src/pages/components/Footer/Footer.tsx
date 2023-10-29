import React from "react";
import { Footer as FooterWrapper } from "flowbite-react";

export const Footer: React.FC<{}> = () => {
  return (
    <FooterWrapper container className="bg-second-background">
      <div className="w-full text-center text-main-violet">
        <div className="w-full flex justify-center ">
          <FooterWrapper.LinkGroup className="text-main-violet">
            <FooterWrapper.Link className="md:px-8 px-2" href="#">
              Über mich
            </FooterWrapper.Link>
            <FooterWrapper.Link className="md:px-8 px-2" href="#">
              Datenschutz
            </FooterWrapper.Link>
            <FooterWrapper.Link className="md:px-8 px-2" href="#">
              Kontakt
            </FooterWrapper.Link>
          </FooterWrapper.LinkGroup>
        </div>
        <FooterWrapper.Divider className="border-main-violet" />
        <FooterWrapper.Copyright
          className="text-main-violet"
          by="Marco Meyer"
          href="#"
          year={2023}
        />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
