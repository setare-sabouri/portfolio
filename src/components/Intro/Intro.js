import React from 'react';
import TextGeo from '../../models/TextGeo.js';
import './Intro.scss';
import { Perf } from 'r3f-perf';
import Button from '../../models/Button.js';
import Octahedron from '../../models/octahedron.js';
import { Center } from '@react-three/drei';

export const Intro = () => {
  return (
    <>
      <Perf position="top-left" />
      <Center>
        <TextGeo />
      </Center>
      <Octahedron count={100} />
      <Button />

    </>
  );
};
