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
        - 기본 font-size는 16px * 5 = 80px 
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