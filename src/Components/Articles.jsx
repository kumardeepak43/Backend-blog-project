import React, { useContext } from "react";
import { store } from "./data";
import { useParams, Link } from "react-router-dom";
import pic from "./pic2x.png";
import "./Articles.css";


const Articles = () => {
    const [info] = useContext(store)
    var { path } = useParams();
    let a = parseInt(path), b;
    a = a + 1;
    b = a + 3

    return (
        <>
            <div className="articleMainDiv">
                {
                    info.filter((value) => value.id === path).map((data, index) => (

                        <div key={index} className="articleDiv">
                            <img src={data.img} className="articleImg" alt=""></img>
                            <h2 className="articleDivHeading">{data.title}</h2>
                            <div className="box">
                                <p className="articleDivPra">{data.description}</p>
                                <p className="articleDivPra">{data.release}</p>
                                <p className="articleDivPra">{data.imdb}</p>
                                <p className="articlePosting" >Posting Details-{data.category} {data.date}</p>
                            </div>
                            <p className="articleDetails">{data.details}</p>

                        </div>
                    ))
                }


                <div className="articleDiv3">
                    <img src={pic} className="profilePic" alt=""></img>
                    <p className="articlePosting">Written By</p>
                    <h2>Deepak kumar</h2>
                    <p className="articlePosting">23 September 2022</p>
                </div>

                <div className="articleDiv2">
                    <h1 className="articleHeading2">Some Specific Articles</h1>
                    <div className="articleDiv2-1">
                    {
                        info.slice(a, b).map((data) => (
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
            </div>

        </>
    )
}

export default Articles;