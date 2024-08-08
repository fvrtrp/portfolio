import type { Metadata } from 'next'
import Threadify from "../utils/threadify";
import { appList, links } from "../utils/app-list";
import { robotomono } from "./fonts";

export default function Home() {
  return (
    <div className="prose nounderline dark:prose-invert">
      <Threadify text="fvrtrp" />
      {/* <div className={`SectionTitle text-hackergreen text-3xl ${prata.className} mb-10`}>Apps</div> */}
      {appList.map((item, key) => {
        return (
          <a
            key={key}
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="appItem m-3">
              <h2 className="appTitle font-bold text-hackergreen mr-2">
                {item.title}
              </h2>
              <h3
                className={`appDescription text-slate-50 text-sm ${robotomono.className}`}
              >
                {item.description}
              </h3>
            </div>
          </a>
        );
      })}
      <div className="m-20 flex flex-wrap justify-center">
        {links.map((item, key) => {
          return (
            <a
              key={key}
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="linkItem m-3">
                <span className="linkTitle font-bold bg-hackergreen text-slate-950 hover:bg-slate-50 text-xs">
                  {item.title}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
