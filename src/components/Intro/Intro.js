import React from 'react';
import TextGeo from '../../models/TextGeo.js';
import './Intro.scss';
import { Perf } from 'r3f-perf';
import Button from '../../models/Button.js';
import Donut from '../../models/Donut.js';
export const Intro = () => {
  return (
    <>
      <Perf position="top-left" />
      <TextGeo />
      {/* <Donut /> */}
      <Button />
    </>
  );
};
