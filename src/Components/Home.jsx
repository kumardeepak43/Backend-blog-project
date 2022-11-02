import React, { useContext } from "react";
import { store } from "./data"
// import "./ContentStyle.css"
import { Link } from "react-router-dom";

const Home = () => {
    const [info] = useContext(store)
    return (
        <>
            <img src="	https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/70/5c/c6.jpg" alt="" className="pic1"></img>
            <img src="https://www.joelannesley.com/wp-content/uploads/2015/09/Travel-Quote-Escape.jpg" alt="" className="pic2"></img>
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/98/6a/c4.jpg" alt="" className="pic3"></img>


            <div className="homeDiv1">
                <h1 className="homeHeading1">Latest Bollywood Articles</h1>
                <div className="articleDiv2-1">
                    {
                        info.filter((value) => value.category === "Bollywood").slice(0, 3).map((data) => (
                            <Link to={`/${data.category}/article/${data.id}`} className="subLink">
                                <div>
                                    <img src={data.img} className="articleImg2" alt=""></img>
                                    <h2 className="articleDivHeading2">{data.title}</h2>
                                    <p className="articlePosting2" >{data.category} {data.date}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="homeDiv1">
                <h1 className="homeHeading1">Latest Food Articles</h1>
                <div className="articleDiv2-1">
                    {
                        info.filter((value) => value.category === "Food").slice(0, 3).map((data) => (
                            <Link to={`/${data.category}/article/${data.id}`} className="subLink">
                                <div>
                                    <img src={data.img} className="articleImg2" alt=""></img>
                                    <h2 className="articleDivHeading2">{data.title}</h2>
                                    <p className="articlePosting2" >{data.category} {data.date}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>


            <div className="homeDiv1">
                <h1 className="homeHeading1">Latest Hollywood Articles</h1>
                <div className="articleDiv2-1">
                    {
                        info.filter((value) => value.category === "Hollywood").slice(0, 3).map((data) => (
                            <Link to={`/${data.category}/article/${data.id}`} className="subLink">
                                <div>
                                    <img src={data.img} className="articleImg2" alt=""></img>
                                    <h2 className="articleDivHeading2">{data.title}</h2>
                                    <p className="articlePosting2" >{data.category} {data.date}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="homeDiv1">
                <h1 className="homeHeading1">Latest Places Articles</h1>
                <div className="articleDiv2-1">
                    {
                        info.filter((value) => value.category === "Places").slice(0, 3).map((data) => (
                            <Link to={`/${data.category}/article/${data.id}`} className="subLink">
                                <div>
                                    <img src={data.img} className="articleImg2" alt=""></img>
                                    <h2 className="articleDivHeading2">{data.title}</h2>
                                    <p className="articlePosting2" >{data.category} {data.date}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>


            <div className="homeDiv1">
                <h1 className="homeHeading1">Latest Technology Articles</h1>
                <div className="articleDiv2-1">
                    {
                        info.filter((value) => value.category === "Technology").slice(0, 3).map((data) => (
                            <Link to={`/${data.category}/article/${data.id}`} className="subLink">
                                <div>
                                    <img src={data.img} className="articleImg2" alt=""></img>
                                    <h2 className="articleDivHeading2">{data.title}</h2>
                                    <p className="articlePosting2" >{data.category} {data.date}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Home