import Link from 'next/link'
import React from 'react'
import Context from '../../_components/Context'
import CoverYAML from "../../_components/CoverYAML";
import "../../_components/greyBGLines.css";

export default function Liminal() {
    
    return (
      <main className="m-5 h-fit block grid-background">
        <Context />
        <CoverYAML />
        {/* <Context /> */}
        {/* <Callout /> */}
        {/* Scene */}
        {/* <Challenges /> */}
        {/* <Solution /> */}
      </main>
    );
}