import React from "react";

import { shark, Image } from "../index.js";

const FishResult = () => {

    // TODO get real results
    return (
        <div class="card mb-6 is-centered">
            <div class="card-content columns">
                <div class="column is-half">
                <p>(Insert Matt's</p>
                <p>score bars here)</p>
                </div>
                <div class="column is-narrow">
                    <Image imgLink={shark} />
                    <p class="is-size-4 is-spark-font">baby shark</p>
                    <p class="m-3 is-size-7">Doo doo doo doo doo doo</p>
                </div>
            </div>
        </div>
    );
};

export default FishResult;

