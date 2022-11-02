import React, { useContext } from "react";
import { store } from "./data"
// import "./ContentStyle.css"
import { Link } from "react-router-dom";


const Food = () => {
    const [info] = useContext(store)
    console.log(info);
    return (
        <>
            <p className="BollywoodHeading">Food</p>

            <div className="mainDiv">
                {
                    info.filter((value) => value.category === "Food").map((data, index) => (
                        <Link to={`/food/article/${data.id}`} className="subLink">
                        <div key={index} className="subDiv">
                            <img src={data.img} className="img" alt=""></img>
                            <h2 className="subDivHeading">{data.title}</h2><br />
                            <p className="subDivPra" id="p1">{data.description}</p><br /><br />
                            <p className="subDivPra" id="p2">{data.imdb}</p>
                            <p className="posting" >Posting Details - {data.category} {data.date}</p>

                        </div>
                        </Link>
                    ))
                }


                <div className="mainDivTwo">

                    <h1 className="divTwoHeading">Top 5 Posts</h1>
                    <Link to={`/food/article/${info[27].id}`} className="subLink">
                    <div className="subDivTwo">
                        <img src={info[27].img} className="imgTwo" alt=""></img>
                        <h1 className="subDivRank">1</h1>
                        <h2 className="subDivHeadingTwo">{info[27].title}</h2><br />
                        <p className="subDivPraTwo">{info[27].category} {info[27].date}</p>
                    </div>
                    </Link>
                    <Link to={`/food/article/${info[24].id}`} className="subLink">
                    <div className="subDivThree">
                        <img src={info[25].img} className="imgThree" alt=""></img>
                        <h1 className="subDivRankThree">2</h1>
                        <h3 className="subDivHeadingThree">{info[25].title}</h3><br />
                        <p className="subDivPraThree">{info[25].category} {info[25].date}</p>
                    </div>
                    </Link>
                    <Link to={`/food/article/${info[21].id}`} className="subLink">
                    <div className="subDivThree">
                        <img src={info[21].img} className="imgThree" alt=""></img>
                        <h1 className="subDivRankThree">3</h1>
                        <h3 className="subDivHeadingThree">{info[21].title}</h3><br />
                        <p className="subDivPraThree">{info[21].category} {info[21].date}</p>
                    </div>
                    </Link>
                    <Link to={`/food/article/${info[24].id}`} className="subLink">
                    <div className="subDivThree">
                        <img src={info[24].img} className="imgThree" alt=""></img>
                        <h1 className="subDivRankThree">4</h1>
                        <h3 className="subDivHeadingThree">{info[24].title}</h3><br />
                        <p className="subDivPraThree">{info[24].category} {info[24].date}</p>
                    </div>
                    </Link>
                    <Link to={`/food/article/${info[18].id}`} className="subLink">
                    <div className="subDivThree">
                        <img src={info[18].img} className="imgThree" alt=""></img>
                        <h1 className="subDivRankThree">5</h1>
                        <h3 className="subDivHeadingThree">{info[18].title}</h3><br />
                        <p className="subDivPraThree">{info[18].category} {info[18].date}</p>
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
export default Food;