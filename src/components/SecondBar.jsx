import React from "react";
import Carousel from "./Carousel";

const SecondBar = () => {
    return (
        <div className="shadow-2xl rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-bottom mb-10 ">
            <div className="position-relative overflow-hidden p-3 p-md-5 text-left bg-body-tertiary">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="col-md-6 p-lg-5 mx-auto my-5">
                        <h2 className=" mb-3 text-body-emphasis text-3xl text-center">
                            TOP11 is a global sports betting website, founded in
                            2012 in the United Kingdom. The platform offers a
                            wide range of sports events and diversified
                            entertainment projects, catering to players
                            worldwide. Over the years, TOP11 has built a
                            reputation for providing an exciting and seamless
                            betting experience, attracting millions of loyal
                            players across the globe.
                        </h2>
                    </div>
                    <div className="col-md-6 order-md-2">
                        <Carousel />
                    </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </div>
    );
};

export default SecondBar;
