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


## **Login Form**
<img src="https://user-images.githubusercontent.com/96935557/195271397-114643ea-8541-4a55-866f-01912e0dcc3e.gif">

- `가상요소 before과 after`
  - `가상클래스?` - :before, :after, :first-child ... class를 지정하지 않아도 클래스를 선택하여 제어할 수 있다. 굳이 class를 만들지 않아도 CSS 만으로 클래스를 만들어 조종할 수 있는 것이다.
  - `대표적 가상클래스의 종류`
    - :hover : 마우스를 요소위에 놓을 때 요소 선택
    - :active : 사용자가 활성화한 요소(버튼 등)를 나타냄. 마우스를 사용하는 경우, "활성"이란 보통 마우스 버튼을 누르는 순간부터 떼는 시점까지를 의미한다.
    - :focus: 양식의 입력 칸 등 포커스를 받은 요소를 나타낸다. 보통 사용자가 요소를 클릭 또는 탭하거나, 키보드 Tab 키로 선택했을 때 발동한다.
    - :valid: <input> 요소의 값이 유효한 경우에만 요소선택 및 스타일 지정
    - :first-child, :last-child, nth-child(N): 요소의 첫번째, 끝, N번째 요소를 나타냄.
    - :before, :after 가상엘리먼트는 content 속성이 있을 경우에만 출력

  - `가상요소?` : 요소가 없어도 있는 것과 같이 제어해줄 수 있다. 굳이 HTML 태그를 작성하지 않아도 CSS 만으로 가상으로 덩어리를 만들수 있는것이다.
  - `대표적 가상요소의 종류`
    - ::before : 요소의 콘텐츠 시작부분에서 `생성된 콘텐츠를 추가한다.` 실제 내용 바로 앞에서 생성되는 자식요소
    - ::after : 요소의 콘텐츠 끝부분에서 `생성된 콘텐츠를 추가한다.` 실제 내용 바로 뒤에서 생성되는 자식요소​
    - ::placeholder : input placeholder 요소에 스타일을 적용한다.
    - ::selection : 요소의 텍스트에서 사용자에 의해 선택된 영역의 속성을 변경한다.
    - ::first-letter : 요소의 첫 번째 글자에 스타일을 적용한다.
  - 가상요소 사용시 `content에 ""`를 사용해준다.

- inset : 태그 요소의 위치를 결정하는 top, right, bottom, left의 축약 스타일 속성.
  - 즉 상하좌우를 각각의 css 속성으로 설정하지 않고 inset 하나만 사용하는 것이 가능
  ```
  inset : top right bottom left;
  ```

- input:valid ~ span, input:focus ~ span : **선택자에 대해**
  - `인접형제 선택자` `"+"` : 특정 태그의 `다음 형제 요소`를 선택함
  ```js
  //style.css
  h1 + p { color: yellow };

  //index.html
  <h1>h1</h1>
  <p>hello</p> // 적용대상
  <p>hello</p> 
  <p>hello</p> 
  ```
  - `형제 선택자` `"~"` : 특정태그에 `다음에 오는 모든 형제들`을 선택함.
  ```js
  //style.css
  h1 ~ p { color: yellow };

  //index.html
  <h1>h1</h1>
  <p>hello</p> // 적용대상
  <p>hello</p> // 적용대상
  <p>hello</p> // 적용대상
  ```

  - `그룹 선택자` `","` : 2개 이상의 선택자를 묶을 때 사용.
  ```js
  //style.css
  .box p,
  .box h2, 
  .box a {
    background-color:yellow;
  }

  //index.html
  <div class="box">
    <p>1</p> //적용대상
    <h2>2</h2> //적용대상
    <a href="#">3</a> //적용대상
  </div>
  ```

- i 태그 : 글자를 기울여서 표시하는 태그로, italic의 약자

- [type='submit'] : 속성선택자. form 관련 대상을 선택 시 주로 사용.
  - 선택자[속성=값]  속성의 값이 모두 일치할 때 선택.
  - 선택자[속성^=값] 속성의 값이 이것으로 시작할 때 선택.
  - 선택자[속성$=값] 속성의 값이 이것으로 끝날 때 선택.
  - 선택자[속성*=값] 속성의 값에 이것이 포함되었을 때 선택.

## **Swiper Button**
<img src="https://user-images.githubusercontent.com/96935557/195275349-a73f3e8e-30bb-4e97-8cce-d9d56ae0c855.gif">

- skew : 요소를 기울일 때 사용함. skew(x축, y축)으로 표현하나, skewX(), skewY()로도 설정가능.
- `position : relative와 absolute의 관계`
  - relative : 요소 자기자신을 기준으로 배치
  - absolute : 부모(조상) 요소를 기준으로 배치
  - fixed : 뷰포트 기준으로 배치
  - sticky : 스크롤 영역 기준으로 배치
  - 기본적으로 부모 relative를 잡고, 자식을 absolute로 포지션을 잡으면 부모 요소가 자식 요소의 기준점이 되기 때문에 `부모요소의 기준`으로 위치가 결정됨.
  - absolute의 기준점이 없다면? `뷰포트를 기준`으로 위치가 결정된다.
## **Animated Circular Progress**
<img src="https://user-images.githubusercontent.com/96935557/195271441-af1461fe-4ac5-4201-956c-c8a8ffad35ec.gif">

- `flex-wrap` : flex 컨테이너에서 flex 아이템의 줄바꿈을 설정하는 방법이다.
  - wrap: flex 아이템이 Flex 컨테이너의 끝에 닿으면 문자의 표기 방향에 따라 줄 바꿈
  - nowrap: 줄 바꿈하지 않고 flex 아이템 모두를 한줄로 표시
  - wrap-reverse: wrap과 같지만, 문자의 표기 방향과는 반대로 배치.
  - 비슷한 방법으로 `flex-flow` 속성이 있는데, 속성은 flex-direction과 flex-wrap을 합쳐 지정하는 단축 속성이 있다. `초기 값은 row nowrap`

- `svg 태그의 구조`
  - svg? : Scalable Vector Graphics의 약자로 벡터 기반 그래픽을 XML 형식으로 정의하는 것. svg 그래픽을 담기 위한 요소로 생각하자.
  - svg 내부에 담을 수 있는 것은 원(circle), 사각형(rect), 다각형(polygon), 라인(line), path(path) 등이 있다.
  - fill 속성 : 면색을 의미, svg에서 쓰는 color와 같다.
  - stroke와 stroke-width 속성 : 선색과 선굵기를 조정한다.
  - fill-opacity, stroke-opacity : 면색의 투명도 설정, 선색의 투명도 설정
  - rect의 rx, ry : 사각형 svg의 모서리를 둥글게 만드는 속성.
  - circle의 cx, cy, r : 원 중심의 x좌표와 y좌표를 정의. r 속성은 원의 반지름.

- css의 변수설정법 - `var(--clr)`
  - 문서 전반적으로 재사용할 임의의 값을 변수에 담아 설정.
  - 기본적으로 두 개의 붙임표(--)로 시작하는 속성의 이름과 함께, 유효한 CSS 값이라면 아무거나 그 값으로 지정해 선언하면 된다.

## **Responsive Website Design (Cocacola)**
<img src="https://user-images.githubusercontent.com/96935557/195274894-b645bdc0-6200-44e5-b9e3-75ffecc4cbfb.gif">

- section 태그 : 구획 요소. HTML 문서에 포함된 독립적인 섹션(section)을 정의할 때 사용
- clip-path : 표시되어야 하는 요소의 부분을 설정하는 클리핑 영역을 만들어줌. 영역 내부에 있는 부품은 표시되고 외부에 있는 영역은 숨겨진다.
```js
clip-path: circle(70% at right -20%);
```
- filter: invert(number) : 입력 이미지의 색상 샘플을 반전시키는 속성.
```js
filter: invert(1);
```
- **반응형 웹 - media 쿼리**
  - 해상도, 뷰포트 너비에 따라 웹사이트나 앱의 스타일을 수정해줄 때 사용함.
  - 조건에는 여러가지가 삽입, 보통 뷰포트 넓이를 통해 반응형 웹을 제작.
  ```css
  @media (max-width: 768px) {
    .desktop {
      display : none;
    }
  }
  ```
  - only : 미디어 쿼리를 지원하는 사용자 에이전트만 미디어 쿼리 구문을 해석하라는 명령이며 생략 가능. 오래 된 브라우저가 스타일을 잘못 적용하지 못하도록 방지할 때 유용하다.
  - and : 논리적으로 ‘AND’ 연산을 수행하여 앞과 뒤의 조건을 모두 만족해야 한다는 것을 의미

  - *Device Size*
    - Mobile Device : 481px 이상 768px 미만 해상도의 모바일 기기를 위한 코드를 작성.
    ```css
    @media (min-width: 481px) and (max-width: 767px) {
    }
    ```
    - Tablet & Desktop Device : 사용자 해상도가 768px 이상일 때 이 코드가 실행됨. 테블릿과 데스크톱의 공통 코드를 작성한다.
    ```css
    @media all and (min-width:768px) {
    }
    ```
    - Tablet Device : 사용자 해상도가 768px 이상이고 1024px 이하일 때 이 코드가 실행됨. 아이패드 또는 비교적 작은 해상도의 랩탑이나 데스크톱에 대응하는 코드를 작성한다.
    ```css
    @media all and (min-width:768px) and (max-width:1024px) {
    }
    ```
    - Desktop Device : 사용자 해상도가 1025px 이상일 때 이 코드가 실행됨. 1024px 이상의 랩탑 또는 데스크톱에 대응하는 코드를 작성한다.
    ```css
    @media all and (min-width:1025px) {
    }
    ```

## **Parallax Scroling Website**
<img src="https://user-images.githubusercontent.com/96935557/195273276-b7e3bad9-49f9-4a77-88bf-d6a99e6549c4.gif">

- GSAP 라이브러리 (The GreenSock Animation Platform)
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"><script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js"></script>
```
  - CSS와 바닐라 자바스크립트만으로도 동적인 화면을 만들 수 있지만, GSAP은 세밀한 움직임과 동작의 연속성을 훨씬 간편하게 설정
  - `gsap.from(ele, option)` : 어디서부터 element를 option을 통해 이동시킬 것인가 하는 메서드이다. 
  - `option : scrolltrigger` : 스크롤 이벤트 발생시, 지정한 축으로 자연스러운(scrub) 이동이 가능하게 한다.

## **Animated Navigation Bar**
<img src="https://user-images.githubusercontent.com/96935557/195271101-c7dd1d64-3700-43d4-8c14-2bc2444a2b78.gif">

- position: fixed : 뷰포트 기준으로 요소를 배치하는 방법
- `변수로 transition delay를 주는 방법` : style 태그에 변수를 설정 후 number 값을 주어 calc로 딜레이 초를 지정한다.
```js
//style.css
transition-delay: calc(0.1s * var(--i));

//index.html
<ul>
  <li style="--i:0;"><a href="#">Home</a></li>
  <li style="--i:1;"><a href="#">About</a></li>
  <li style="--i:2;"><a href="#">Services</a></li>
  <li style="--i:3;"><a href="#">Work</a></li>
  <li style="--i:4;"><a href="#">Team</a></li>
  <li style="--i:5;"><a href="#">Contact</a></li>
</ul>
```
- display: block : div나 p, h1처럼, 전후 줄바꿈이 들어가 다른 엘리먼트들을 다른 줄로 밀어내고 혼자 한 줄을 차지.

## **Animated Search Box**
<img src="https://user-images.githubusercontent.com/96935557/195271358-10e525de-0955-4fda-a6d8-59a298cee7bf.gif">

## **Responsive Menu Bar**
<img src="https://user-images.githubusercontent.com/96935557/195271464-15540007-1216-44e8-960a-dc7b639d84b2.gif">
