import Link from "next/link"
import Threadify from '../utils/threadify'
import { appList, links } from '../utils/app-list'
import { robotomono, prata } from "./fonts"

export default function Home() {

  return (
    <div className="prose dark:prose-invert">
      <Threadify text="fvrtrp" />
      {/* <div className={`SectionTitle text-hackergreen text-3xl ${prata.className} mb-10`}>Apps</div> */}
      {
        appList.map((item, key) => {
          return (
            <a key={key} href={item.link} target="_blank" rel="noreferrer noopener">
              <div className="appItem m-3">
                <span className="appTitle font-bold text-hackergreen">{item.title}</span>
                <span className={`appDescription text-slate-50 text-sm ${robotomono.className}`}>{item.description}</span>
              </div>
            </a>
          )
        })
      }
      <div className="m-20 flex justify-center">
        {
          links.map((item, key) => {
            return (
              <a key={key} href={item.link} target="_blank" rel="noreferrer noopener">
                <div className="linkItem m-3">
                  <span className="linkTitle font-bold bg-hackergreen hover:bg-slate-50 text-xs">{item.title}</span>
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}
