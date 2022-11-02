import React, { useContext } from "react";
import { store } from "./data"
// import "./ContentStyle.css"
import { Link } from "react-router-dom";

const Places = () => {
    const [info] = useContext(store)
    console.log(info);
    return (
        <>
            <p className="BollywoodHeading">Places</p>

            <div className="mainDiv">
                {
                    info.filter((value) => value.category === "Places").map((data, index) => (
                        <Link to={`/places/article/${data.id}`} className="subLink">
                        <div key={index} className="subDiv">
                            <img src={data.img} className="img" alt=""></img>
                            <h2 className="subDivHeading">{data.title}</h2><br />
                            <p className="subDivPra" id="p1">{data.description}</p><br /><br />
                            <p className="subDivPra" id="p2">{data.release}</p><br />
                            <p className="subDivPra" id="p3">{data.imdb}</p>
                            <p className="posting" >Posting Details-{data.category} {data.date}</p>
                        </div>
                        </Link>
                    ))
                }


                <div className="mainDivTwo">

                    <h1 className="divTwoHeading">Top 5 Posts</h1>

                    <Link to={`/Places/article/${info[32].id}`} className="subLink">
                <div className="subDivTwo">
                    <img src={info[32].img} className="imgTwo" alt=""></img>
                    <h1 className="subDivRank">1</h1>
                    <h2 className="subDivHeadingTwo">{info[32].title}</h2><br />
                    <p className="subDivPraTwo">{info[32].category} {info[32].date}</p>
                </div>
                </Link>


                <Link to={`/Places/article/${info[28].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[28].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">2</h1>
                    <h3 className="subDivHeadingThree">{info[28].title}</h3><br />
                    <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                </div>
                </Link>

                <Link to={`/Places/article/${info[34].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[34].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">3</h1>
                    <h3 className="subDivHeadingThree">{info[34].title}</h3><br />
                    <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                </div>
                </Link>

                <Link to={`/Places/article/${info[31].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[31].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">4</h1>
                    <h3 className="subDivHeadingThree">{info[31].title}</h3><br />
                    <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                </div>
                </Link>
                
                <Link to={`/Places/article/${info[37].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[37].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">5</h1>
                    <h3 className="subDivHeadingThree">{info[37].title}</h3><br />
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
export default Places;