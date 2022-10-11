# Master Of CSS

### 재미있고 유용한 CSS 효과 만들며 CSS 장인되기

## **Spin**

![spin gif](https://user-images.githubusercontent.com/96935557/182620711-af642cc7-3f49-4864-992e-ba1222e99491.gif)

- `Spin`을 만들며 정리한 개념
  - float : 뜨게하다, 부유하다라는 해석, inline 요소에 `어떻게 배치할건가`를 나타내는 CSS
  - clear : clear: both는 `취소하다`의 개념. float: left/right와 짝꿍 개념이다. float 속성을 더이상 사용하고싶지 않을때 clear: both를 사용한다.
  - [float와 clear를 잘 설명한 유튜브 링크](https://www.youtube.com/watch?v=xara4Z1b18I&t=15s "float와 clear를 잘 설명한 유튜브 링크")
  - em : `상위요소 크기의 몇배`로 사이즈를 맞출것인지?
    - Ex) font-size : 5em은 몇 픽셀일까?
    - 기본 font-size는 16px \* 5 = 80px
  - list-style : `li` 옆에 동그라미가 없어짐
  - display: inline-block
    - display : 웹페이지 상에서 엘리먼트들이 어떻게 보여지고 다른 엘리먼트들과 어떻게 상호배치되는지를 결정하는 속성
    - inline : `<span>` `<a>` `<em>` 태그들이 대표적으로, inline으로 지정된 엘리먼트들은 전후 줄바꿈없이 한줄에 다른 엘리먼트들과 나란히 배치됨
      - inline은 `width와 height 속성을 지정해도 무시됨`. 해당 태그가 마크업하고 있는 컨텐츠의 크기만큼만 공간을 차지하도록 되어있음
      - `margin과 padding 속성은 좌우간격만 반영, 상하간격 반영 X`
    - block : `<div>` `<p>` `<h1>` 태그들이 대표적으로, block으로 지정된 엘리먼트들은 `전후 줄바꿈`이 들어가 다른 엘리먼트들을 다른줄로 밀어내고 `혼자 한줄을 차지함`.
      - inline과 달리 width, height, margin, padding 모두 반영됨
    - inline-block : `하이브리드 모드`, inline 처럼 한줄에 다른 엘리먼트들과 나란히 배치되지만, block 처럼 width height margin padding 속성의 상하 간격지정이 가능해짐.
      - 대표적으로 `<button>` `<input>` `<select>`
      - 명시적으로 display: inline-block 지정해줘야함

## **Icon Hover**

![iconhover](https://user-images.githubusercontent.com/96935557/183090878-4d83ad67-c652-4344-94db-615c51db9644.gif)

- `Icon Hover`를 만들며 정리한 개념 
    - text-decoration : 텍스트에 줄, 장식용 선을 추가하는 기능. 보통 `<a> 태그`에 default 값으로 들어있는 밑줄을 삭제할때, text-decoration : none을 사용한다. 
    - transition : 속성에 변화를 부드럽게 줄때 애니메이션 속도를 조절하는 기능. 
        - transition은 `자동으로 발동되지않고`, :hover와 같은 가상 클래스 선택자 또는 자바스크립트의 `부수적인 액션`에 의해 발동된다 
        - `모든 CSS 속성이 트랜지션의 대상이 될 수 없다.` width, font-size, background-color 등의 하나의 범주안에서 값이 변화하는 건 대상이 되지만, display 속성은 그렇지 않은 것이다. 
            - `transition의 대상이 될수 있는 CSS 속성` 
            - *Box model* : width height max-width max-height min-width min-height padding margin border-color border-width border-spacing
            - *Background* : background-color background-position
            - *좌표* : top left right bottom
            - *텍스트* : color font-size font-weight letter-spacing line-height text-indent text-shadow vertical-align word-spacing
            - *기타 속성* : opacity outline-color outline-offset outline-width visibility z-index
        - ❗**중요**❗ 요소의 속성 값이 변화한다면 `속성 값의 변화에 영향을 받는 모든 요소의 기하값을 다시 계산하여 layout 작업을 수행`한다. 이것은 브라우저의 성능저하의 요인이 될 수 있기 때문에 layout에 영향을 주는 transition 효과는 피하도록 해야한다.
        - `layout에 영향을 주는 속성들`
            - width height padding margin border display position float overflow top left right bottom font-size font-family font-weight text-align vertical-align line-height clear white-space
    - opacity : `불투명` 이라는 뜻. 불투명도가 0이면 아예 보이지 않는다. 1이면 정상적으로 잘보인다.
        - 보통 가상클래스에 :hover를 사용하여 다른 불투명도를 적용해 사라졌다 나타나는 효과, 나타났다 사라지는 효과를 사용할수 있다.
    - scale : transform의 속성중 하나. transform은 요소에 크기조절, 기울이기, 이동효과를 부여하는 속성인데 여기서 `scale은 확대와 축소를 담당하는 속성`이다.
        - transform : scale(2); => 가로세로 모두 2배 확대
        - transform : scaleX(2); => 가로로만 2배 확대
        - transform : scaleY(2); => 세로로만 2배 확대

## **Framer Motion**
```
npm install framer-motion
```

### framer-motion 기본 사용법
```js
import { motion } from "framer-motion"

export const MyComponent = ({ isVisible }) => (
< motion.div animate={{ opacity: isVisible ? 1 : 0 }} / >
)
```

- styled-components 에서 motion 사용법 : styled 옆에 소괄호로 motion.element 작성
- *`animate`* =  모션 컴포넌트의 유연한 animate 속성을 통해 간단히 애니메이션 기능 구현 가능. animate props에서 직접 값을 설정.
- *`transition`* = 값이 한 상태에서 다른 상태로 움직이는 방식을 정의. transition에는 기본적으로 `type : "spring" 튕기는 상태가 내장.`
- *`initial`* = element의 초기 상태.
```js
const Box = styled(motion.div)`
  border-radius : 15px;
`

function App () {
  return (
    <>
      <Box initial={{ scale : 0 }} animate={{ scale : 1, borderRadius : "100%" }}  transition={{ duration : 3 }}/>
    </>
  )
}
```

- *`Variants`* : 컴포넌트가 가질 수 있는 미리 정의된 시각적 state. 컴포넌트에 속성을 다 적으면 가독성이 좋지 않으니, Variants 라는 지정 변수로 설정.
```js
  const variants : Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  }
  <motion.div initial="hidden" animate="visible" variants={variants}></motion.div>
```

- *`Orchestration`* : 자식 컴포넌트의 애니메이션을 관여하고 싶을 때
  - delayChildren: 딜레이 시간(초) 후에 하위 애니메이션이 시작
  - staggerChildren: 하위 컴포넌트의 애니메이션에 지속 시간(초)만큼 시차를 둘 수 있는 기능. 예를 들어, staggerChildren이 0.1이면 첫 번째 자식은 0초, 두 번째 자식은 0.1초, 세 번째 자식은 0.2초로 지연되는 식

### 제스쳐 모션 (이벤트핸들링 관련 모션)

- `while~` : 제스쳐가 인식되는 동안 애니메이션 할 속성, 레이블
  - `whileHover`: VariantLabels | TargetAndTransition : 호버 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블
  ```js
  <motion.div whileHover={{ scale: 0.8 }} />
  ```
  - `whileTap`: VariantLabels | TargetAndTransition : 컴포넌트를 누르고 있는 동안 애니메이션할 속성 또는 변형 레이블
  ```js
  <motion.div whileTap={{ scale: 0.8 }} />
  ```
  - `drag`: boolean | "x" | "y" : 이 요소에 대해 끌기를 활성화 함. 기본적으로 false로 설정. 양방향으로 드래그하려면 true로 설정. 특정 방향으로만 드래그하려면 "x" 또는 "y"를 설정.
  ```js
  <motion.div drag="x" />
  ```
  - `whileDrag`: VariantLabels | TargetAndTransition : 드래그 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블
  ```js
  <motion.div whileDrag={{ scale: 1.2 }} />
  ```
- `dragConstraints` : 허용된 드래그 가능 영역에 제약 조건을 적용
  ```js
  //px 설정으로 제약
  <motion.div drag="x" dragConstraints={{ left: 0, right: 300 }}/ >
  ```
  ```js
  // ref 설정으로 제약
  const MyComponent = () => {
    const constraintsRef = useRef(null)

    return (
      <motion.div ref={constraintsRef}>
        <motion.div drag dragConstraints={constraintsRef} />
      </motion.div>
    )
  }
  ```
- `dragSnapToOrigin: boolean` : true인 경우 드래그 가능한 요소는 드래그를 놓을 때, 원점으로 다시 애니메이션.

- `dragElastic: DragElastic` : 외부 제약 조건에서 허용되는 이동 정도. 0 = 움직임 없음, 1 = 전체 움직임. 기본적으로 0.5로 설정. 움직임을 비활성화하기 위해 false로 설정 가능.

- `MotionValue`
  - MotionValues는 애니메이션 값의 상태(state)와 속도(velocity)를 추적하는 함수이다. 
  - 모든 모션 컴포넌트는 내부적으로 MotionValues를 사용하여 애니메이션 값의 상태와 속도를 추적한다. 일반적으로 이들은 자동으로 생성된다. 
  - MotionValue는 React State가 아니기 때문에 Motion Value값이 바뀌어도 리랜더링이 일어나지 않는다.
  ```js
  import { motion, useMotionValue } from "framer-motion"

  export function MyComponent() {
    const x = useMotionValue(0);
    
    return <motion.div style={{ x }} />
  }
  ```
  - const x = useMotionValue(0)
  - `useMotionValue 훅`으로 MotionValues를 생성. useMotionValue에 전달된 값은 MotionValue의 초기 상태로 작동

  - x.set(100) : set 메서드로 업데이트 가능. React 리렌더링 트리거 X

  - x.get() // 100 : MotionValue는 문자열이나 숫자가 될 수 있음. get 메소드로 값을 읽기 가능.

  - `useTransform(좌표, [좌표값], [원하는 값])` : 한 값 범위에서 다른 값 범위로 매핑하여 다른 MotionValue의 output을 변환하는 MotionValue를 만듬.
  ```js
  const x = useMotionValue(0)
  const input = [-200, 0, 200]
  const output = [0, 1, 0]
  const opacity = useTransform(x, input, output)

  return <motion.div drag="x" style={{ x, opacity: opacity }} />
  ```

  - `useViewportScroll(): ScrollMotionValues` : 뷰포트가 스크롤될 때 업데이트되는 MotionValues를 리턴. 아래 값들은 모두 MotionValue<number>를 넘겨준다.
    - scrollX: 실제 수평 스크롤 픽셀 ex) 500px
    - scrollY: 실제 수직 스크롤 픽셀 ex) 500px
    - scrollXProgress : 0 ~ 1 사이의 수평 스크롤
    - scrollYProgress : 0 ~ 1 사이의 수직 스크롤(가장 상단 0, 가장 하단 1)
    ```js
    export const MyComponent = () => {
      const { scrollYProgress } = useViewportScroll();
      return <motion.div style={{ scaleX: scrollYProgress }} />
    }
    ```
### SVG Animation

- `Line drawing`
  - svg 엘리먼트에 'pathLength', 'pathSpacing', 'pathOffset' 속성을 사용하여 Line drawing 애니메이션 제작.
  ```js
  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}></motion.path>
  ```

- `Path` : motion.path 컴포넌트는 세 가지 강력한 SVG path 속성인 pathLength, pathSpacing 및 pathOffset을 보유. 수동 경로 측정이 필요 없이 모두 0과 1 사이의 값으로 설정.

### AnimatePresence

- React 트리에서 컴포넌트가 제거될 때, 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있음. - React에는 AnimatePresence 같은 수명 주기 메서드가 없기 때문에 종료 애니메이션을 활성화해야 함.
- exit : 컴포넌트가 트리에서 제거될 때 애니메이션할 대상
```js
import { motion, AnimatePresence } from "framer-motion"

export const MyComponent = ({ isVisible }) => (
  <AnimatePresence>
    { isVisible && (
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      />
    )}
  </AnimatePresence>
)
```

- AnimatePresence의 `단일 자식 key를 변경`하여 `슬라이드쇼(슬라이더)와 같은 컴포넌트`를 쉽게 만들 수 있음
```js
export const Slideshow = ({ image }) => (
  <AnimatePresence
    key={image.src}
    src={image.src}
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
  >
  </AnimatePresence>
)
```

- `custom` : variants에 데이터를 다르게 적용할 때 사용할 수 있는 사용자 지정 데이터 프로퍼티.
```js
const variants = {
  visible: (custom) => ({
  opacity: 1,
  transition: { delay: custom * 0.2 }
  })
}

<motion.div custom={0} animate="visible" variants={variants} />
<motion.div custom={1} animate="visible" variants={variants} />
<motion.div custom={2} animate="visible" variants={variants} />
```

### Layout

- `layout: boolean | "position" | "size"`
  - true인 경우 이 컴포넌트는 레이아웃이 변경될 때 새 위치에 자동으로 애니메이션을 적용
  - 크기나 위치가 변경될 때 모션 컴포넌트의 레이아웃에 자동으로 애니메이션을 적용하려면 레이아웃 prop을 제공
  - 부모 플렉스박스 방향, 너비, 상단/오른쪽 등 레이아웃 변경의 원인이 무엇이든 상관없이 애니메이션 자체는 최대 성능을 위해 변환으로 수행

- `Syncing layout animations`
  - 모션 컴포넌트의 layout prop은 레이아웃이 변할 때마다, 자동으로 애니메이션을 적용.

- `Animate between components`
  - AnimateSharedLayout은 `동일한 layoutId prop을 가진 모션 컴포넌트들 간에 애니메이션을 적용`할 수 있다.
  - layoutId가 있는 새 컴포넌트가 추가되고 다른 컴포넌트가 제거되면 `이전 컴포넌트에서 새 컴포넌트로 레이아웃 애니메이션을 수행`
  - 새 컴포넌트는 이전 컴포넌트의 애니메이션 값도 초기 상태로 상속. 따라서 시각적으로 하나의 연속 컴포넌트로 처리됨.


## Login Form

- 

## Swiper Button

- 
## Animated Circular Progress

- 
## Responsive Website Design (Cocacola)

- 

## Parallax Scroling Website

- 

## Animated Navigation Bar

- 

## Animated Search Box

- 

## Responsive Menu Bar

- 

