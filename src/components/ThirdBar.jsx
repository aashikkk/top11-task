import React from "react";
import VideoPlayer from "./VideoPlayer";

const ThirdBar = () => {
    return (
        <div className="position-relative overflow-hidden p-3 p-md-5 text-left bg-body-tertiary text-black ">
            <div className="d-flex flex-column items-center justify-content-center">
                <div className=" order-md-0">
                    <VideoPlayer />
                </div>
                <div className="col-md-6 p-lg-5 mx-auto my-5">
                    <h2 className="text-black mb-3 text-center display-4 fw-bold text-body-emphasis pb-3">
                        Sponsor of football field
                    </h2>
                    <p className="text-lg text-ce text-center">
                        Top11 and PSV have come together to embody the shared
                        mission of &quot;achieving greatness together&quot;,
                        This collaboration brings the world&apos;s most
                        prestigious sports events to life, offering an
                        unparalleled interactive entertainment experience for
                        fans and platform users alike, with moments of
                        excitement and enjoyment at every turn.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThirdBar;

{
    /* <h2 className="fw-normal text-muted mb-3 font-serif text-3xl text-center">

</h2>
> */
}
