import Link from "next/link";


export default function Portfolio(){
    return(
        <>
        <h1>This is a Portfolio Page</h1>
        <ul>
        <li>
          <Link href="/portfolio/designs01">Designs 01</Link>
        </li>
        <li>
          <Link href="/portfolio/designs02">Designs 02</Link>
        </li>
        <li>
          <Link href="/portfolio/designs03">Designs 03</Link>
        </li>
      </ul>
        </>
    )
}