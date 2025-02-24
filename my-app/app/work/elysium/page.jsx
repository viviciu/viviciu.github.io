"use client"
import React, { useState, useEffect, useRef } from "react";
import Title from "../../_components/Title"
import Context from "../../_components/Context";
import Context2 from "../../_components/Context2";
import Context4 from "../../_components/Context4";
import CoverYAML from "../../_components/CoverYAML";
import Challenges from "../../_components/Challenges";
import Header from "../../_components/Header";
import Callout from "../../_components/Callout";
import Solution from "../../_components/Solution";
import ImageGrid1 from "../../_components/ImageGrid1";
import ImageGridTest from "../../_components/ImageGridTest";
import ImageGrid2 from "../../_components/ImageGrid2";
import ImageGrid3 from "../../_components/ImageGrid3";
import ImageGrid4 from "../../_components/ImageGrid4";
import ImageGrid5 from "../../_components/ImageGrid5";
import CircleSect from "../../_components/CircleSect";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import New from "../../_components/New";
import New2 from "../../_components/New2";
import New3 from "../../_components/New3";
import Image from "next/image";
import UnderDevelopment from "../../_components/UnderDevelopment"

import "../../_components/greyBGLines.css";
import Footer from "../../_components/Footer";
import Head from "next/head";

export default function Liminal() {
  const members = [
    "Yon Maor",
    "Stacy Chen",
    "Chris Song",
    "Ayden Xu",
    "Ervin Song",
    "Eric Lin",
    "Minsung Kang",
  ];
  const tools = [
    "Three.js",
    "React Three Fiber",
    "Figma",
    "Blender"
  ]
  const myRole = "Creative Technologist";
  const timeline = "6 months"


  
  // A realm where the very essence of self and time finds itself in flux.
  return (
    <>
    <UnderDevelopment />
    </>
  );
}
