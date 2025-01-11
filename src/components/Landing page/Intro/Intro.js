import React from 'react';
import TextGeo from '../TextGeo.js';
import './Intro.scss';
import { Perf } from 'r3f-perf';
import Button from '../Button.js';
import Octahedron from '../octahedron.js';

export const Intro = () => {
  return (
    <>
      {/* <Perf position="top-left" /> */}
      <TextGeo />
      <Octahedron count={100} />
      <Button />

    </>
  );
};  
