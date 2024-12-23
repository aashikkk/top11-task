import React from "react";
import CarouselTwo from "./Carousel2";

const GalleryFootball = () => {
    return (
        <div className="container mb-5">
            <div className="col-md-6 p-lg-5 mx-auto my-5">
                <h2 className="text-black mb-3 text-center display-4 fw-bold text-body-emphasis pb-3">
                    Sponsor Gallery Football
                </h2>
                <p className="lead mb-4 text-center font-semibold">
                    PSV Eindhoven official partner -{" "}
                    <span style={{ color: "blue" }}>Top11</span>
                </p>
                <div className=" mx-auto">
                    <p className="lead mb-4">
                        PSV Eindhoven's triumph this season showcases the power
                        of dedication and teamwork! Top11 is proud to stand
                        alongside PSV Eindhoven in celebrating this remarkable
                        victory
                    </p>
                </div>
            </div>
            <CarouselTwo />
            <div className="mt-40">
                <h2 className="text-black mb-3 text-center display-6 fw-bold text-body-emphasis pb-3">
                    We operate with full legal authorization under our official
                    license
                </h2>
            </div>
        </div>
    );
};

export default GalleryFootball;
