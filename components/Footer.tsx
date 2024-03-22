import { footerData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponentElement } from "react";
import type { IconBaseProps, IconType } from "react-icons";

const Footer = () => {
  return (
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <Image src="assets/logo.svg" width={170} height={70} alt="logo" />
          <p className="text-[1rem] leading-tight">{footerData.aboutUs}</p>
          <Socials list={footerData.socialList} />
        </div>
        <div className="flex gap-12 flex-col md:gap-0 md:flex-row md:justify-between lg:px-12">
          <FooterColumn title="Help" list={footerData.list1} textCenter />
          <FooterColumn title="Explore" list={footerData.list2} textCenter />
        </div>
        <FooterColumn title="Contact" list={footerData.list3} />
      </div>
    </div>
  );
};

interface IFooterColumnProps {
  title: string;
  list: {
    href?: string;
    name: string;
  }[];
  textCenter?: boolean;
}

const FooterColumn = ({ list, title, textCenter }: IFooterColumnProps) => {
  return (
    <div
      className={`flex flex-col items-center ${
        textCenter ? "text-center" : ""
      } lg:items-start gap-4 mt-2 text-primary`}
    >
      <h3 className="mb-4">{title}</h3>
      {list.map((item, i) => (
        <>
          {item.href && (
            <Link className="font-light text-sm" href={item.href} key={i}>
              {item.name}
            </Link>
          )}
          {!item.href && <p className="font-light text-sm">{item.name}</p>}
        </>
      ))}
    </div>
  );
};

interface ISocialList {
  list: {
    icon: FunctionComponentElement<IconBaseProps>;
    href: string;
  }[];
}

const Socials = ({ list }: ISocialList) => {
  return (
    <ul className="flex gap-4 mt-2">
      {footerData.socialList.map((social, i) => (
        <li key={i} className="icon w-8 h-8 hover:text-accent-hover group">
          <Link href={social.href}>{social.icon}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
