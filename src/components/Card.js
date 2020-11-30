import React from "react";
import { render } from "react-dom";
import datas from '../assets/colleges.json';
import '../components/Card.css';
import InfiniteScroll from "react-infinite-scroll-component";

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            items: Array.from({ length: 10 })
        };
    }

    fetchMoredata = () => {
        // 10 more records in 2.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 10 }))
            });
        }, 2500);
    };


    render() {
        return (
            <>
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoredata}
                    hasMore={true}
                    loader={<h5>Loading...</h5>}
                >
                    {this.state.items.map((i, index) => (
                        <div className="Rectangle-1">
                            <div className="Card-Img">
                                <div style={{ textAlign: "right", opacity: "1" }}>
                                    <span className="Vector-Smart-Object PROMOTED triangle">PROMOTED</span>
                                </div>
                                <div style={{textAlign:"right", position: "relative"}}>
                                <div className="Rectangle-3 -Very-Good" >
                                    <span className="text-style-1">{datas.colleges[index].rating}</span>/5<br />
                                    <span className="text-style-2">{datas.colleges[index].rating_remarks}</span>
                                </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "55%" }}>
                                        <span className="Rectangle-2 Best-college-2018">{datas.colleges[index].tags[0]}</span>
                                        <span className="Rectangle-2 kms-away">{datas.colleges[index].tags[1]}</span>
                                    </div>
                                    <div style={{ width: "45%" }}>
                                        <span id="-in-260-colleges-in-north-campus">#{datas.colleges[index].ranking}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Card-body">
                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "75%" }}>
                                        <span className="Hansraj-College-Delhi-University">{datas.colleges[index].college_name}</span>
                                        <span className="rating"></span>
                                        <span className="rating"></span>
                                        <span className="rating"></span>
                                        <span className="rating"></span>
                                        <span className="rating1"></span>
                                    </div>
                                    <div style={{ width: "25%", textAlign: "right" }}>
                                        <span className="Original-Price-Wrapper">
                                            <span className="Original-Price"><strike>&#x20b9;&nbsp;{datas.colleges[index].original_fees}</strike></span>
                                    &nbsp;&nbsp;<span className="Vector-Smart-Object1 Discount-Font discount-label">{datas.colleges[index].discount}</span>
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "70%" }}>
                                        <span className="Near-Vishwavidyalya-Metro-Station">{datas.colleges[index].nearest_place[0]}</span>
                                        <span className="Shape-2">|</span>
                                        <span className="-Kms-away-from-bus-stand">{datas.colleges[index].nearest_place[1]}</span>
                                    </div>
                                    <div style={{ width: "30%", textAlign: "right", display: "grid" }}>
                                        <span className="Discounted-Fees">&#x20b9;&nbsp;{datas.colleges[index].discounted_fees}</span>
                                        <span className="Per-Semester-3months ">{datas.colleges[index].fees_cycle}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="-Match-25kms-from-GTB-Nagar-7-Kms-from-Rajiv-Chowk">
                                        <span className="text-style-1">93% Match<b>:</b></span>
                                        <span className="text-style-2">{datas.colleges[index].famous_nearest_places[0]}</span>&nbsp;
                                    <span>{datas.colleges[index].famous_nearest_places[1]}</span>&nbsp;
                                    <span className="text-style-2">{datas.colleges[index].famous_nearest_places[2]}</span>&nbsp;
                                    <span>{datas.colleges[index].famous_nearest_places[3]}</span>
                                    </span><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "67%" }}>
                                        <span className="Rectangle-4 Flat-Rs2000-off-upto-Rs-500-wallet-to-avail-LOGIN">
                                            <span className="text-style-1">{datas.colleges[index].offertext[0]}</span>&nbsp;
                                            <span>{datas.colleges[index].offertext[1]}
                                        </span>&nbsp;
                                        <span className="text-style-2">{datas.colleges[index].offertext[2]}</span>&nbsp;
                                        <span>{datas.colleges[index].offertext[3]}</span>&nbsp;
                                        <span className="text-style-2">{datas.colleges[index].offertext[4]}</span>&nbsp;
                                        <span>{datas.colleges[index].offertext[5]}</span>&nbsp;
                                        <span className="text-style-3">{datas.colleges[index].offertext[6]}</span>&nbsp;
                                    </span>
                                    </div>
                                    <div style={{ width: "33%", textAlign:"right"}}>
                                        <span className="Free-Cancellation">{datas.colleges[index].amenties[0]}</span>
                                        <span className="Ellipse-1">.</span>
                                        <span className="Free-Wi-Fi">{datas.colleges[index].amenties[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </>
        )
    }
}

export default Card;