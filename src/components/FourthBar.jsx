import React from "react";

const FourthBar = () => {
    return (
        <div className="px-4 pt-5 my-5 text-center ">
            <h1 className="display-4 fw-bold text-body-emphasis pb-3 ">
                Partnership of Top11
            </h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Top11 signed an official partnership with PSV Football Club
                    in 2018, marking a new chapter in global sports
                    collaboration. Together with PSV, Top11 is dedicated to
                    advancing the future of sports and ushering in a new era of
                    sports entertainment, delivering an experience that
                    redefines the connection between fans and the game.
                </p>
            </div>
            <div className="overflow-hidden max-h-30vh">
                <div className="container px-5 d-flex justify-content-center">
                    <img
                        src="https://sponsor.top11india.net/images/football/top3.png"
                        className="img-fluid border rounded-3 shadow-lg mb-4"
                        alt="Example image"
                        width="700"
                        height="500"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default FourthBar;
