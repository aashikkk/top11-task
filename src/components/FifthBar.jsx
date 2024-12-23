import React from "react";

const FifthBar = () => {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold text-body-emphasis pb-3">
                Legacy of PSV
            </h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    PSV is one of the most successful football clubs globally.
                    Top11 is a leading brand in the Indian market, has been
                    dedicated to combining sports and entertainment since its
                    inception. Both Top11 and PSV share a common vision and
                    entrepreneurial spirit. With this partnership, Top11 will
                    further expand its international reach by leveraging PSV's
                    significant global fanbase and reputation, creating new
                    opportunities for growth and engagement.
                </p>
            </div>
            <div className="overflow-hidden">
                <div className="container px-5 d-flex justify-content-center">
                    <img
                        src="https://sponsor.top11india.net/images/football/top4.png"
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

export default FifthBar;
