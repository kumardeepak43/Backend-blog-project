import React, { useContext } from "react";
import { store } from "./data"
// import "./ContentStyle.css"
import { Link } from "react-router-dom";


const Bollywood = () => {
    const [info] = useContext(store)
    console.log(info);
    return (
        <>
            <p className="BollywoodHeading">Bollywood</p>

            <div className="mainDiv">
                {
                    info.filter((value) => value.category === "Bollywood").map((data, index) => (
                        <Link to={`/bollywood/article/${data.id}`} className="subLink">
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

                    <Link to={`/Hollywood/article/${info[1].id}`} className="subLink">
                <div className="subDivTwo">
                    <img src={info[1].img} className="imgTwo" alt=""></img>
                    <h1 className="subDivRank">1</h1>
                    <h2 className="subDivHeadingTwo">{info[1].title}</h2><br />
                    <p className="subDivPraTwo">{info[1].category} {info[1].date}</p>
                </div>
                </Link>


                <Link to={`/bollywood/article/${info[3].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[3].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">2</h1>
                    <h3 className="subDivHeadingThree">{info[3].title}</h3><br />
                    <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                </div>
                </Link>

                <Link to={`/bollywood/article/${info[5].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[5].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">3</h1>
                    <h3 className="subDivHeadingThree">{info[5].title}</h3><br />
                    <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                </div>
                </Link>

                <Link to={`/bollywood/article/${info[4].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[4].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">4</h1>
                    <h3 className="subDivHeadingThree">{info[4].title}</h3><br />
                    <p className="subDivPraThree">{info[1].category} {info[1].date}</p>
                </div>
                </Link>
                
                <Link to={`/bollywood/article/${info[8].id}`} className="subLink">
                <div className="subDivThree">
                    <img src={info[8].img} className="imgThree" alt=""></img>
                    <h1 className="subDivRankThree">5</h1>
                    <h3 className="subDivHeadingThree">{info[8].title}</h3><br />
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
export default Bollywood;