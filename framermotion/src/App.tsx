import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  Variants,
} from "framer-motion";
import React, { useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1), 0 10px 20px rgba;
  background-color: skyblue;
`;

const VariantBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.1), 0 10px 20px rgba;
  background-color: rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 40px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1), 0 10px 20px rgba;
`;

const BiggerBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const PresenceBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: skyblue;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LayoutBox = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const LayoutCircle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const GridBox = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const overlay: Variants = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const myVariants: Variants = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

const boxVariants: Variants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.2,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants: Variants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const hoverVariants: Variants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100%" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 3 } },
};

const svgVariants: Variants = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  },
};

const presenceBoxVariants: Variants = {
  entry: (back: boolean) => {
    return {
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: (back: boolean) => {
    return {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    };
  },
  exit: (back: boolean) => {
    return {
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 1 },
    };
  },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  const [id, setId] = useState<null | string>(null);

  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextButton = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevButton = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const x = useMotionValue(0);
  const rotateHook = useTransform(x, [-800, 800], [-360, 360]);

  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  return (
    <>
      <GlobalStyle />
      <Container style={{ background: gradient }}>
        <Box variants={myVariants} initial="start" animate="end" />
        <VariantBox variants={boxVariants} initial="start" animate="end">
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
        </VariantBox>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin
            dragElastic={0.5}
            dragConstraints={biggerBoxRef}
            variants={hoverVariants}
            whileHover="hover"
            whileTap="click"
            whileDrag="drag"
          />
        </BiggerBox>
        <Box drag="x" dragSnapToOrigin style={{ x, rotateZ: rotateHook }} />
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <motion.path
            variants={svgVariants}
            initial="start"
            animate="end"
            transition={{
              default: { duration: 5 },
              fill: { duration: 2, delay: 3 },
            }}
            d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
          />
        </Svg>
        <div>
          <AnimatePresence exitBeforeEnter custom={back}>
            <PresenceBox
              custom={back}
              variants={presenceBoxVariants}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
            >
              {visible}
            </PresenceBox>
          </AnimatePresence>
          <button onClick={nextButton}>next</button>
          <button onClick={prevButton}>prev</button>
        </div>
        <Wrapper onClick={toggleClicked}>
          <LayoutBox>
            {!clicked ? (
              <LayoutCircle layoutId="circle" style={{ borderRadius: 50 }} />
            ) : null}
          </LayoutBox>
          <LayoutBox>
            {clicked ? (
              <LayoutCircle
                layoutId="circle"
                style={{ borderRadius: 0, scale: 2 }}
              />
            ) : null}
          </LayoutBox>
        </Wrapper>

        <GridWrap>
          <Grid>
            {["1", "2", "3", "4"].map((n) => (
              <GridBox onClick={() => setId(n)} key={n} layoutId={n} />
            ))}
          </Grid>
          <AnimatePresence>
            {id ? (
              <Overlay
                variants={overlay}
                onClick={() => setId(null)}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <GridBox layoutId={id} style={{ width: 400, height: 200 }} />
              </Overlay>
            ) : null}
          </AnimatePresence>
        </GridWrap>
      </Container>
    </>
  );
}

export default App;
