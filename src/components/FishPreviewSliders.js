import React, { useState, useEffect } from "react";

import { shark, Image } from "../index.js";

const FishPreviewSliders = () => {

    const [academicPreview, setAcademicPreview] = useState(50);
    const [healthPreview, setHealthPreview] = useState(50);
    const [socialPreview, setSocialPreview] = useState(50);
    const [extracurricularsPreview, setExtracurricularsPreview] = useState(50);
    const [fishName, setFishName] = useState("");

    // TODO display something other than sharks
    const [dummyScore, setDummyScore] = useState(200);
    const dummyFishTypes = ["Grandpa Shark", "Grandma Shark", "Daddy Shark", "Mommy Shark", "Baby Shark"];

    // TODO calculate your score with something other than a random number generator
    useEffect(() => {
        var dummyScoreCalculator = academicPreview + healthPreview + socialPreview + extracurricularsPreview;
        setDummyScore(dummyScoreCalculator);
        var dummyFishName = dummyFishTypes[Math.floor(Math.random() * dummyFishTypes.length)]

        setFishName(dummyFishName);
    }, [academicPreview, healthPreview, socialPreview, extracurricularsPreview])

    return (
        <div class="card mt-6">
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
                <div class="column is-narrow">
                    <Image imgLink={shark} />
                    <p class="is-size-4 is-spark-font">{fishName}</p>
                    <p class="m-3 is-size-7">Doo doo doo doo doo doo</p>
                </div>
            </div>
        </div>
    );
};

export default FishPreviewSliders;

