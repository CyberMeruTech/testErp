import React, { useEffect, useState } from "react";

export default function LifeCycleFEx(p) {
  let [time, setTime] = useState(0);
 
  useEffect(() => {
    console.log("Second - Lifecycle Function component is rendered");
    return ()=>{console.log("first Unmounted")}
  }, [time, p.nm]);
 

  useEffect(() => {
    console.log("Third");
    return ()=>{console.log("Second Unmounted")}
  });

  useEffect(() => {
    console.log("Info Called");
  }, [p.inf]);

  useEffect(() => {
    // intid=setInterval(()=>{setTime(time+1)},3000)
    return ()=>{ console.log("Lifecycle Function component is about to be unmounted");}
  }, []);
  return (
    <div>
      <h4>LifeCycle Function Ex</h4>
    </div>
  );
}
