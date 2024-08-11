import FooterStyles from "./Footer.module.css";
import Link from "next/link";
import FooterItem from "./FooterItem";
export default function Footer(props: { footerItems: any[]; }) {
  return (
    <div className={FooterStyles.footer}>
      <div className={FooterStyles.footerContent}>
          {props.footerItems.map((item, index) => (
            <FooterItem key={index} title={item.title} list={item.list} />
          ))}
        
      </div>
      <div className={FooterStyles.footerBottom}>
        <div className={FooterStyles.footerBottomContent}>
          <div className="text-xs text-slate-300">
          <br/>
          +91 7002942615 | aiclub@cit.ac.in
          </div>
        </div>
      </div>
    </div>
  );
}