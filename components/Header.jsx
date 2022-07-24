import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <span>Frontend Mentor</span>
                    <span>Feedback Board</span>
                </div>

                <button>
                    {/* // menu */}
                </button>

                <div>
                    <button>All</button>
                    <button>UI</button>
                    <button>UX</button>
                    <button>Enhancement</button>
                    <button>Bug</button>
                    <button>Feature</button>
                </div>

                <div>
                    <div>
                        <span>Roadmap</span>
                        <button>View</button>
                    </div>

                    <div>
                        <div>
                            <span>color</span> Planned <span>2</span>
                        </div>

                        <div><span>color</span> In-progress <span>3</span></div>

                        <div><span>color</span> Live <span>1</span></div>
                    </div>
                </div>
            </div>

            <div>
                <div>{ /*no of suggestions go here */}</div>

                <div>sort by : <button>Most Upvotes</button></div>

                <button>Add Feedback</button>
            </div>
        </header>
    )
}

export default Header