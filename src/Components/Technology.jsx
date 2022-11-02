import React, { useContext } from "react";
import { store } from "./data"
//  import "./ContentStyle.css"
import { Link } from "react-router-dom";


const Technology = () => {
    const [info] = useContext(store)
    console.log(info);
    return (
        <>
            <p className="BollywoodHeading">Technology</p>

            <div className="mainDiv">
                {
                    info.filter((value) => value.category === "Technology").map((data, index) => (
                        <Link to={`/Technology/article/${data.id}`} className="subLink">
                            <div key={index} className="subDiv">
                                <img src={data.img} className="img" alt=""></img>
                                <h2 className="subDivHeading">{data.title}</h2><br />
                                <p className="subDivPra">{data.description}</p><br /><br />
                                <p className="subDivPra">{data.release}</p><br />
                                <p className="subDivPra">{data.imdb}</p>
                                <p className="posting" >Posting Details-{data.category} {data.date}</p>
                            </div>
                        </Link>
                    ))
                }


                <div className="mainDivTwo">

                    <h1 className="divTwoHeading">Top 5 Posts</h1>

                    <Link to={`/Technology/article/${info[42].id}`} className="subLink">
                        <div className="subDivTwo">
                            <img src={info[42].img} className="imgTwo" alt=""></img>
                            <h1 className="subDivRank">1</h1>
                            <h2 className="subDivHeadingTwo">{info[42].title}</h2><br />
                            <p className="subDivPraTwo">{info[1].category} {info[1].date}</p>
                        </div>
                    </Link>


                    <Link to={`/Technology/article/${info[46].id}`} className="subLink">
                        <div className="subDivThree">
                            <img src={info[46].img} className="imgThree" alt=""></img>
                            <h1 className="subDivRankThree">2</h1>
                            <h3 className="subDivHeadingThree">{info[46].title}</h3><br />
                            <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                        </div>
                    </Link>

                    <Link to={`/Technology/article/${info[44].id}`} className="subLink">
                        <div className="subDivThree">
                            <img src={info[44].img} className="imgThree" alt=""></img>
                            <h1 className="subDivRankThree">3</h1>
                            <h3 className="subDivHeadingThree">{info[44].title}</h3><br />
                            <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                        </div>
                    </Link>

                    <Link to={`/Technology/article/${info[41].id}`} className="subLink">
                        <div className="subDivThree">
                            <img src={info[41].img} className="imgThree" alt=""></img>
                            <h1 className="subDivRankThree">4</h1>
                            <h3 className="subDivHeadingThree">{info[41].title}</h3><br />
                            <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                        </div>
                    </Link>

                    <Link to={`/Technology/article/${info[45].id}`} className="subLink">
                        <div className="subDivThree">
                            <img src={info[45].img} className="imgThree" alt=""></img>
                            <h1 className="subDivRankThree">5</h1>
                            <h3 className="subDivHeadingThree">{info[45].title}</h3><br />
                            <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                        </div>
                    </Link>

                </div>

                <div className="advertisement">
                    <h1>Advertisement</h1>
                </div>

            </div>
        </>
    )
}
export default Technology;