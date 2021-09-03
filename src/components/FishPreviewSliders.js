import React, { useState, useEffect } from "react";

import { Image } from "../index.js";

// lets people see the 'answers' to the game
// if they move the sliders, they can see the different fish
// you could win based on your score
const FishPreviewSliders = ({fishTypes, fishImages}) => {

    const [academicPreview, setAcademicPreview] = useState(50);
    const [healthPreview, setHealthPreview] = useState(50);
    const [socialPreview, setSocialPreview] = useState(50);
    const [extracurricularsPreview, setExtracurricularsPreview] = useState(50);
    const [fishIdx, setFishIdx] = useState(0);
    
    useEffect(() => {
        var categories = [academicPreview, healthPreview, socialPreview, extracurricularsPreview];
         setFishIdx(categories.indexOf(Math.max(...categories)));

    }, [academicPreview, healthPreview, socialPreview, extracurricularsPreview])

    return (
        <div class="card">
            <div class="card-header">
                <div class="card-header-title menu-label is-light is-warning">
                    Adjust the sliders to see what kinds of sea life you could get!
                </div>
            </div>
            <div class="card-content columns is-centered">
                <div class="column is-narrow is-flex-direction-column">
                    <p class="is-size-6 ml-4">Academics</p>
                    <input class="slider is-small is-circle ml-4" defaultValue={academicPreview} onMouseUp={e => setAcademicPreview(parseInt(e.target.value))} step="1" min="0" max="100" type="range"></input>
                    <p class="is-size-6 ml-4">Health</p>
                    <input class="slider is-small is-circle ml-4" defaultValue={healthPreview} onMouseUp={e => setHealthPreview(parseInt(e.target.value))} step="1" min="0" max="100" type="range"></input>
                    <p class="is-size-6 ml-4">Social</p>
                    <input class="slider is-small is-circle ml-4" defaultValue={socialPreview} onMouseUp={e => setSocialPreview(parseInt(e.target.value))} step="1" min="0" max="100" type="range"></input>
                    <p class="is-size-6 ml-4">Extracurriculars</p>
                    <input class="slider is-small is-circle ml-4" defaultValue={extracurricularsPreview} onMouseUp={e => setExtracurricularsPreview(parseInt(e.target.value))} step="1" min="0" max="100" type="range"></input>
                </div>
                <div class="column is-one-third">
                    <Image imgLink={fishImages[fishIdx]} />
                    <p class="is-size-4 is-spark-font">{fishTypes[fishIdx]}</p>
                    {/* <p class="m-3 is-size-7">fishPun[fishIdx]</p> */}
                </div>
            </div>
        </div>
    );
};

export default FishPreviewSliders;

