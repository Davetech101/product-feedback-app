import { useEffect, useState } from "react"
import StyledHeader from "../styles/styledComponents/StyledHeader"
import Hamburger from "../assets/Hamburger.jsx"
import Close from "../assets/Close.jsx"
import Arrow from "../assets/Arrow.jsx"
import Link from "next/link"
import AddFeedbackBtn from "./reuseable/AddFeedbackBtn"
import { setCategory } from "../redux/category/setCategorySlice"
import { useDispatch } from "react-redux"

const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]
    const [category, setcategory] = useState("All")
    const dispatch = useDispatch()


    const categoryFilter = categories.map(cat =>
    (
        <button
            key={cat}
            value={cat}
            type="button"
            className={category === cat ? "active" : ""}
            onClick={(e) => {
                dispatch(setCategory(e.target.value)),
                setcategory(e.target.value),
                setShowNav(false)
            }}>{cat}
        </button>
    ))

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

                <div className={showNav ? "showMenu menu" : "menu"} onClick={() => setShowNav(prev => !prev)}></div>
                <div className={showNav ? "showNav nav" : "nav"}>
                    <div className="card card-1">
                        {categoryFilter}
                    </div>

                    <div className="card">
                        <div className="flex top">
                            <h3>Roadmap</h3>
                            <Link href="/roadmap" className="view">View</Link>
                        </div>

                        <div>
                            <div className="flex">
                                <span>
                                    <span className="circle orange"></span> Planned
                                </span>
                                <span>2</span>
                            </div>

                            <div className="flex">
                                <span>
                                    <span className="circle purple"></span> In-progress
                                </span>
                                <span>3</span>
                            </div>

                            <div className="flex">
                                <span>
                                    <span className="circle blue"></span> Live
                                </span>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="subHead">
                <div className="remove">{ /*no of suggestions go here */}</div>

                <div>sort by : <button>Most Upvotes  <Arrow stroke="white" /></button></div>

                <AddFeedbackBtn />
            </div>
        </StyledHeader>
    )
}

export default Header