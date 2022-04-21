# 원티드 프리온보딩 코스

## 1. Toggle.js

<br/>

![ezgif com-gif-maker](https://user-images.githubusercontent.com/77774807/164426994-d6743e29-3b3b-4b46-8420-87da81e04a9b.gif)

<br/>

### 구현한 방법과 이유

화면에서 변화하는 값인 '기본' 과 '상세' 를 state 값으로 저장하고 클릭했을 때 변화하도록 구현했습니다. <br/>
css 또한 변화를 주어야 하므로 className 을 부여해서 isActive 가 true 일 때 transform 을 통해 이동하도록
구현했습니다.

<br/>

### 구현하면서 어려웠던 점

처음에는 css 요소의 변화 뿐만아니라 text 또한 변화를 주어야함을 인지하지 못하고 고정된 text 가 쓰여진 요소를 옮기려고 했었는데 text 자체를 state 로 만들어서 옮겨야 한다는 점을 생각하고 나서는 비교적 간편하게 구현할 수 있었습니다.

<br/><br/>

## 2. Tab.js

<br/>

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/77774807/164428088-5bd75cc8-de07-4065-a3c9-7077f489bd94.gif)

<br/>

### 구현한 방법과 이유

클릭한 배열 요소의 현재 index 값을 state 로 저장하고, state 로 저장된 index 값과 현재 클릭한 index 값이 같으면
className 을 통해 css 를 부여했습니다. index 번호에 따라 transform 의 이동 px 을 다르게 부여했습니다.

<br/>

### 구현하면서 어려웠던 점

요소가 늘어나 배열로 구현해야 하므로 각 요소에 따라 다른 css 를 부여해야 하는 점이 약간 까다로웠지만, Toggle 에서 구현했던 방식을 응용해서 구현할 수 있었습니다.

<br/><br/>

<br/><br/>

## 3. Slider.js

<br/>

![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/77774807/164430622-3636d928-30cd-4846-940c-574349d68f75.gif)

<br/>

### 구현한 방법과 이유

Input type range 를 통해 범위를 간편하게 구현할 수 있었고, 범위 내의 값을 state 로 저장해서, 값이 변화할 때마다 화면 상의 % 의 값이 변화합니다. input 밑의 text 를 클릭하면 클릭한 숫자만큼의 % 로 이동하도록 onClick 이벤트를 부여해서 state 로 선언했던 값으로 이동하도록 구현했습니다.

<br/>

### 구현하면서 어려웠던 점

input 밑의 text 를 클릭하면 해당 % 로 이동하는 것을 어떻게 구현할지 더 복잡하게 생각해서 구현하는데 오래걸렸던 것 같습니다.
이미 선언해두었던 state 를 이용해서 옮기면 되는 것을 너무 오래 생각했던 것 같습니다. input range 는 이번 과제를 통해 처음 사용해보는데 사용해왔던 것을 제외하고도 여러가지를 구현하면서 다양하게 사용해봐야겠다는 생각을 가지게 되었습니다.

<br/><br/>

<br/><br/>

## 4. Input.js

<br/>

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/77774807/164432087-35e0dcd6-40a5-470f-94ca-3bbf84117ff0.gif)

<br/>

### 구현한 방법과 이유

정규식을 통해 이메일 형태인지 확인하고 true 인지 false 인지 styled-component 를 통해 props 로 state 를 전달하여 아이콘의 색을 다르게 주었습니다. 이메일을 입력한 뒤 다른 곳을 바깥 영역을 클릭해야 이메일이 유효한지 유효하지 않은지 에러 메시지가 뜨게하는 것은 onBlur 이벤트를 통해 구현하였습니다. <br/>
비밀번호는 type 을 state 로 저장하여 클릭했을 때 type 의 값이 text 혹은 password 로 반대로 바뀌도록 구현했습니다.

<br/>

### 구현하면서 어려웠던 점

에러 처리와, 유효성을 검증하는 것들이 섞여서 코드가 어수선한 것 같아 더 깔끔히 구현할 수 있지 않을까라는 생각을 가지면서 구현했던 것 같습니다. onChange 이벤트가 계속 발생해서 화면이 느려져 useCallback 을 통해 최적화를 시켜야 한다는 점을 깨달았습니다.

<br/><br/>

<br/><br/>

## 5. Dropdown.js

<br/>

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/77774807/164435559-dea550bf-5276-4c13-b9ba-cb607ee88c4b.gif)

<br/>

### 구현한 방법과 이유

목록에 있는 요소들을 클릭하면 클릭한 요소가 선택되어야 하므로 state 로 저장했습니다.
검색 기능은 filter 과 includes 를 통해 검색어가 포함되어 있는 것만 반환하도록 구현했습니다.
dropdown 을 구현한 바깥부분을 클릭해도 검색창이 닫히도록 구현하기 위해 useRef 를 사용했고, 클릭한 부분이 ref 로 설정한 요소가 아니라면 검색창의 state 를 false 로 주어 닫히도록 구현했습니다.
입력하는 사람에 따라 다르기 때문에 대소문자를 가리지 않기 위해 e.target.value 를 소문자로 변환하여 저장해줬습니다.

<br/>

### 구현하면서 어려웠던 점

이전에 한 번 구현해본적이 있는 기능이라 잘 구현할 수 있었던 것 같습니다.
입력받은 값을 소문자로 변환해주는 과정을 통해서 모든 부분을 신경써서 구현해야겠다고 생각했습니다.

<br/><br/>
