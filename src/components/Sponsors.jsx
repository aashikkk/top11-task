import React from "react";

const Sponsors = () => {
    return (
        <div className="container px-4 py-5" id="custom-cards">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div className="col">
                    <div
                        className="card card-fit h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg "
                        style={{
                            backgroundImage:
                                "url('https://sponsor.top11india.net/images/license/lc.webp')",
                        }}
                    >
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-black text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                PAGCOR
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div
                        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style={{
                            backgroundImage:
                                "url('https://sponsor.top11india.net/images/license/ukgc.jpg')",
                        }}
                    >
                        {/* <div className="d-flex flex-column h-100 p-5 pb-3 text-black text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                UKGC
                            </h3>
                        </div> */}
                    </div>
                </div>

                <div className="col">
                    <div
                        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style={{
                            backgroundImage:
                                "url('https://sponsor.top11india.net/images/license/MGA.webp')",
                        }}
                    >
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                MGA
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
