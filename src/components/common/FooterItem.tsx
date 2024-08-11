import Link from "next/link";
import classes from "./FooterItem.module.css";


export default function FooterItem(props: { title: string; list: any; }) {
    
    return (<>  <div className={classes.footerContentColumn}>
          <h2>{props.title}</h2>
          <ul>
            {props.list.map((item: any, index: any) => (
                <li key={index}>
                    <Link href = {item.url}  target={item.blank ? '_blank' : "_parent"}><div className="text-slate-400" >{item.title}</div></Link>
                    </li>
                    
            ))}
            </ul>
            </div>
            </>
 );
}