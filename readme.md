# Master Of CSS

## 재미있고 유용한 CSS 효과 만들며 CSS 장인되기

### **Spin**

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

### **Icon Hover**

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
