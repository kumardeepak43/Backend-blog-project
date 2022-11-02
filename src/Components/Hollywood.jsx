import React, { useContext } from "react";
import { store } from "./data"
// import "./ContentStyle.css"
import { Link } from "react-router-dom";


const Hollywood = () => {
    const [info] = useContext(store)
    console.log(info);
    return (
        <>
            <p className="BollywoodHeading">Bollywood</p>

            <div className="mainDiv">
                {
                    info.filter((value) => value.category === "Hollywood").map((data, index) => (
                        
                        <Link to={`/Hollywood/article/${data.id}`} className="subLink">
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
                
                <Link to={`/Hollywood/article/${info[14].id}`} className="subLink">
                <div className="subDivTwo">
                    <img src={info[14].img} className="imgTwo" alt=""></img>
                    <h1 className="subDivRank">1</h1>
                    <h2 className="subDivHeadingTwo">{info[14].title}</h2><br />
                    <p className="subDivPraTwo">{info[14].category} {info[14].date}</p>
                </div>
                </Link>


                <Link to={`/Hollywood/article/${info[11].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[11].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">2</h1>
                    <h3 className="subDivHeadingThree">{info[11].title}</h3><br />
                    <p className="subDivPraThree">{info[11].category} {info[11].date}</p>
                </div>
                </Link>

                <Link to={`/Hollywood/article/${info[16].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[16].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">3</h1>
                    <h3 className="subDivHeadingThree">{info[16].title}</h3><br />
                    <p className="subDivPraThree">{info[16].category} {info[16].date}</p>
                </div>
                </Link>

                <Link to={`/Hollywood/article/${info[15].id}` } className="subLink">
                <div className="subDivThree">
                    <img src={info[15].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">4</h1>
                    <h3 className="subDivHeadingThree">{info[15].title}</h3><br />
                    <p className="subDivPraThree">{info[15].category} {info[15].date}</p>
                </div>
                </Link>
                
                <Link to={`/Hollywood/article/${info[12].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[12].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">5</h1>
                    <h3 className="subDivHeadingThree">{info[12].title}</h3><br />
                    <p className="subDivPraThree">{info[12].category} {info[12].date}</p>
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
export default Hollywood;