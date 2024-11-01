import Link from "next/link"

function Navbar (){
    return(
        <div id="nav">
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                   
            </ul>
        </div>
    )
}
export default Navbar