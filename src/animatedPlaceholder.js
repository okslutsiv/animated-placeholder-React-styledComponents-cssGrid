import React from "react";
import styled from "styled-components";

export default function AnimatedPlaceholder() {
  return (
    <Wrapper>
      <AnimatedBackground>
        <Masker>
          <GapVert1 />
          <GapVert2 />
          <GapVert3 />
          <GapVert4 />
          <GapVert5 />
          <GapHor1 />
          <GapHor2 />
          <GapHor3 />
          <GapHor4 />
          <GapHor5 />
          <GapHor6 />
        </Masker>
      </AnimatedBackground>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #fff;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  padding: 20px;
  margin: 0 auto;
  max-width: 500px;
  height:250px;
`;
const AnimatedBackground = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 180px;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;
const Masker = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80px 20px 50% 20% auto;
  grid-template-rows: repeat(19, 9px);
`;
const GapHor1 = styled.div`
  grid-column: 2/6;
  grid-row: 1/3;
  background: #fff;
`;
const GapHor2 = styled.div`
  grid-column: 2/6;
  grid-row: 4/6;
  background: #fff;
`;
const GapHor3 = styled.div`
  grid-column: 2/6;
  grid-row: 7/9;
  background: #fff;
`;
const GapHor4 = styled.div`
  grid-column: 1/6;
  grid-row: 10/14;
  background: #fff;
`;
const GapHor5 = styled.div`
  grid-column: 1/6;
  grid-row: 15/17;
  background: #fff;
`;
const GapHor6 = styled.div`
  grid-column: 1/6;
  grid-row: 18/20;
  background: #fff;
`;
const GapVert1 = styled.div`
  grid-column: 2/3;
  grid-row: 1/10;
  background: #fff;
`;
const GapVert2 = styled.div`
  grid-column: 5/6;
  grid-row: 1/10;
  background: #fff;
`;
const GapVert3 = styled.div`
  grid-column: 4/6;
  grid-row: 17/18;
  background: #fff;
`;
const GapVert4 = styled.div`
  grid-column: 5/6;
  grid-row: 20/22;
  background: #fff;
`;
const GapVert5 = styled.div`
  grid-column: 4/6;
  grid-row: 3/4;
  background: #fff;
`;
