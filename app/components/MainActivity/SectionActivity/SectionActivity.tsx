import React, { useContext, useEffect, useRef, useState } from "react";
import style from "@/app/styles/MainActivity/SectionActivity/section.module.css";
import { AppContext } from "@/app/context/store";
import { getOffset } from "../MainActivity";

export default function SectionActivity() {
  return (
    <div className={`${style.main}`}>
      <header className="section-header ">
        <div className="section-name fw-bold">Goals</div>
        <div className="section-titles text-muted">
          <div>Not at all important</div>
          <div>Not important</div>
          <div>Neutral</div>
          <div>important</div>
          <div>very important</div>
        </div>
      </header>
      <InnerSection />
      <InnerSection />
      <InnerSection />
      {/* <LeftSection />
        <RightSection /> */}
    </div>
  );
}

function InnerSection() {
  return (
    <div className="section-header mt-2">
      <div className="section-name">
        <div>Goal 1</div>
      </div>
      <SectionTitles />
    </div>
  );
}

function SectionTitles() {
  const [pointLoc, setPointLoc] = useState([0, 0, 0]);

  return (
    <div className="section-titles bg-white">
      <SubInnerSection id={1} pointLoc={pointLoc} setPointLoc={setPointLoc} />
      <SubInnerSection id={2} pointLoc={pointLoc} setPointLoc={setPointLoc} />
      <SubInnerSection id={3} pointLoc={pointLoc} setPointLoc={setPointLoc} />
      <SubInnerSection id={4} pointLoc={pointLoc} setPointLoc={setPointLoc} />
      <SubInnerSection id={5} pointLoc={pointLoc} setPointLoc={setPointLoc} />
    </div>
  );
}

function SubInnerSection({
  id,
  pointLoc,
  setPointLoc,
}: {
  id: number;
  pointLoc: any;
  setPointLoc: any;
}) {
  const { highlightId, p1ref,setp1Ref,lineHandler} = useContext(AppContext);
  const p1Ref = useRef();

  useEffect(()=>{
    setp1Ref(p1Ref.current);
  },[])

  return (
    <div
      className="inner-section"
      onClick={() => {
        const newPointLoc = [...pointLoc] ;
        if (highlightId) {
          newPointLoc[highlightId - 1] = id;
          setPointLoc(newPointLoc);
          console.log("setting pointer ref ", p1Ref.current);
          setp1Ref(p1Ref.current);
          lineHandler(p1Ref.current);
        }
        console.log(pointLoc);
      }}
    >
      <div>+</div>
      <div ref={p1Ref}>
        {pointLoc.map((d: any, i: any) => {
          if (d === id) {
            if (i == 0) return <div key={i} id={1} className="p1 rounded-circle"></div>;
            if (i == 1) return <div key={i} className="p2 rounded-circle"></div>;
            if (i == 2) return <div key={i} className="p3 rounded-circle"></div>;
            else return null;
          }
        })}
      </div>
    </div>
  );
}

/* 
function SectionTitles2() {
  return (
    <div className="section-titles bg-white">
      <div> +
        <input type="radio" name="blue" className="p1" />
        <input type="radio" name="green" className="p2" />
        <input type="radio" name="orange" className="p3" />
      </div><div> +
        <input type="radio" name="blue" className="p1" />
        <input type="radio" name="green" className="p2" />
        <input type="radio" name="orange" className="p3" />
      </div><div> +
        <input type="radio" name="blue" className="p1" />
        <input type="radio" name="green" className="p2" />
        <input type="radio" name="orange" className="p3" />
      </div><div> +
        <input type="radio" name="blue" className="p1" />
        <input type="radio" name="green" className="p2" />
        <input type="radio" name="orange" className="p3" />
      </div><div> +
        <input type="radio" name="blue" className="p1" />
        <input type="radio" name="green"className="p2" />
        <input type="radio" name="orange"className="p3" />
      </div>
    </div>
  )
}

function SectionTitles() {
  const [selected, setSelected] = useState(0);
  const [pointsLoc, setPointsLoc] = useState([0,0,0]);
  return (
    <div className="section-titles bg-white">
      <SectionInnerSection
        id={1}
        selected={selected}
        setSelected={setSelected}
        points = {pointsLoc}
        setPoints = {setPointsLoc}
      />
      <SectionInnerSection
        id={2}
        selected={selected}
        setSelected={setSelected}
        points = {pointsLoc}
        setPoints = {setPointsLoc}
      />
      <SectionInnerSection
        id={3}
        selected={selected}
        setSelected={setSelected}
        points = {pointsLoc}
        setPoints = {setPointsLoc}
      />
      <SectionInnerSection
        id={4}
        selected={selected}
        setSelected={setSelected}
        points = {pointsLoc}
        setPoints = {setPointsLoc}
      />
      <SectionInnerSection
        id={5}
        selected={selected}
        setSelected={setSelected}
        points = {pointsLoc}
        setPoints = {setPointsLoc}
      />
    </div>
  );
}

function SectionInnerSection({
  id,
  selected,
  setSelected,
  points,
  setPoints,
}: {
  id: number;
  selected: any;
  setSelected: any;
  points:any;
  setPoints:any;
}) {
  const { highlightId, setHighLightID } = useContext(AppContext);
  const [selectedPoints, setSelectedPoints] = useState(new Set([]));
  return (
    <div
      className="inner-section"
      onClick={() => {
        console.log("this is not working");
        setSelected(id);
        const newPoint = selectedPoints;
        newPoint.add(highlightId);
        setSelectedPoints(newPoint);

        console.log("selected: ", selectedPoints);
      }}
    >
      +
      {Array.from(selectedPoints).map((p, i) => {
        return (
        <div key={i}> 
        {p==1  ? <div key={i} className="p1 scale rounded-circle"></div> : null }
        {p==2  ? <div key={i} className="p2 scale rounded-circle"></div> : null }
        {p==3  ? <div key={i} className="p3 scale rounded-circle"></div> : null }
        </div>
        );
      })}
    </div>
  );
}
 */
