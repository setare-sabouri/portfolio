import React from 'react';
import { OrbitControls } from '@react-three/drei';
import TextGeo from '../../models/TextGeo.js';
import './Intro.scss';
import { Perf } from 'r3f-perf';
import '../../utils/GUI.js';
import Button from '../../models/Button.js';

export const Intro = () => {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls enableDamping={true} />
      <TextGeo />
      <Button />
    </>
  );
};
