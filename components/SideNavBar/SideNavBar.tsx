import NavLinks from "../NavLinks/navLinks"
import styles from "./SideNavBar.module.css"
import Image from 'next/image'

export default ({active = "Films"}) => {

    const navLinks =[
        {color: "#A9C1FF", url: "/Dashboard/StarShips", text:"StarShips"},
        {color: "#FFA9EC", url: "/Dashboard/People", text:"People"},
        {color: "#FDFFA9", url: "/Dashboard/Species", text:"Species"}
    ]
    

    return(
        <div className={styles.SideBarContainer}>
            <div className={styles.logoCon}>
                <Image alt="star-wars" width={107} height={46} className={styles.logo} src="/Images/starWarsLogo.png" />
                <NavLinks 
                    useColor = {false}
                    url = "/Dashboard"
                    ImageUrl="/Images/overview.png"
                    text="Films"
                    active = {active.toLowerCase() === "films"}
                />
            </div>

            <nav className={styles.nav}>
                {
                    navLinks.map(navItem =>(
                        <NavLinks
                            key={navItem.text} 
                            useColor = {true}
                            url={navItem.url}
                            text={navItem.text}
                            color={navItem.color}
                            active = {active.toLowerCase() === navItem.text.toLowerCase()}
                        />
                    ))
                }
            </nav>
        </div>
    )
}