import { useState } from "react"
import StyledHeader from "../styledComponents/StyledHeader"
import Hamburger from "../assets/Hamburger.jsx"
import Close from "../assets/Close.jsx"
import Arrow from "../assets/Arrow.jsx"

const Header = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <StyledHeader>
            <div>
                <div className="head">
                    <div>
                        <h1>Frontend Mentor</h1>
                        <span>Feedback Board</span>
                    </div>


                    <button onClick={() => setShowNav(prev => (!prev))}>
                        {!showNav ? <Hamburger /> : <Close />}

                    </button>
                </div>

                <div className="menu">
                    <div className="nav">
                        <div className="card">
                            <button>All</button>
                            <button>UI</button>
                            <button>UX</button>
                            <button>Enhancement</button>
                            <button>Bug</button>
                            <button>Feature</button>
                        </div>

                        <div className="card">
                            <div className="flex">
                                <span>Roadmap</span>
                                <button>View</button>
                            </div>

                            <div>
                                <div className="flex">
                                    <span>color</span> Planned <span>2</span>
                                </div>

                                <div className="flex"><span>color</span> In-progress <span>3</span></div>

                                <div className="flex"><span>color</span> Live <span>1</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subHead">
                <div className="remove">{ /*no of suggestions go here */}</div>

                <div>sort by : <button>Most Upvotes  <Arrow /></button></div>

                <button>Add Feedback</button>
            </div>
        </StyledHeader>
    )
}

export default Header