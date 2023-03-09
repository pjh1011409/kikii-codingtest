## 📚 키키아이 FE 과제 

<br>
리드미를 참고해주면 감사하겠습니다.  😃
<br>
<strong>🌈 목차</strong>
<br>

- [프로젝트 기간](#프로젝트-기간)
- [Start](#start)
- [Tools](#tools)
- [Check List](#check-list)
- [ GIF & Image ](#gif--image)
- [Project Architecture](#project-architecture)
- [Module Install](#install-module)


  
<br>

## Intro

키키아이 FE 사전 테스트로 진행된 프로젝트입니다. 
<br>

로그인하여 배차일보 조회 화면을 구성하고, 배차일보의 시간을 수정하는 기능을 제공합니다. 

<br>


## 프로젝트 기간

: 2022.03.07 ~ 2023.03.09
<br>

## Start

```
npm install
npm run start
```

<br>

##  Tools

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=%2361DAFB">  
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=%2361DAFB">  
<br>
<img src="https://img.shields.io/badge/Emotion-F16521?style=for-the-badge&logo=Etsy&logoColor=white">
<img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=Ant Design&logoColor=white">
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">
<br>
<img src="https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
<img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">


<br>

 ## Check List
<mark style='background-color: yellow'> 💡 실제 구현 코드를 간략화한 코드들입니다. (화살표 버튼을 클릭하여 글을 확인해주세요.)</mark>

<strong>: 주어진 요구사항에 대한 구현 완료 </strong>

####  ✅ 로그인

<details>
<summary> 사용자는 로그인을 할 수 있다. ✔️ </summary>
👉 사용 아이디 : paTEST / 사용 비밀번호: TEST
<br>
👉 UserNumber.tsx, UserPassword.tsx 참고
<br>
👉 사용자 유효성 검사 : 제공 받은 아이디,비번이 아닐 경우 또는 둘 중 하나라도 입력하지 않을 경우 Toast UI 출력을 통해 사용자에게 알리기
<br>
⭐️ 직접 구현한 화면입니다.
<br>
<img width="450" alt="로그인,로그아웃" src="https://user-images.githubusercontent.com/81337674/223996242-cb4a4a76-e830-4eec-9869-09b75b380924.gif">
</details>

 <details>
 <summary>사용자는 로그인 후 배차 조회 화면으로 이동한다. ✔️ </summary>
 👉 로그인할 경우 배차 조회 화면으로 이동.
<br>

```typescript
//로그인 요청 성공 후
...
navigate('/managementPage');
```
<br>
👉 로그인한 경우, 로그인화면로 이동하려 하면 자동으로 배차 조회 화면으로.
👉 로그아웃 경우, 배차조회화면으로 이동하려 하면 자동으로 로그인화면으로.
<br>

```typescript
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/managementPage');
    }
  }, [isAuthenticated]);

    useEffect(() => {
    if (!isAuthenticated) {
      navigate('/loginPage');
    }
  }, [isAuthenticated]);
``` 

<br>
👉 서버에 로그인 요청 후, 토큰 발급 받아 로컬스토리지 저장.
<br>

```typescript
  const response = await api.post('/auth/login', {
          loginId: userNumber.trim(),
          password: userPassword.trim(),
        });
  const token = response.data.object.token;
  localStorage.setItem('token', token);
```

<br>
⭐️ 직접 구현한 화면입니다.
<br>
<img width="450" alt="로그인,로그아웃" src="https://user-images.githubusercontent.com/81337674/223996242-cb4a4a76-e830-4eec-9869-09b75b380924.gif">
<br>
 </details>
 <details>
 <summary>사용자는 로그아웃을 할 수 있다. ✔️ </summary>
👉 로그아웃 버튼 클릭시 로컬스토리지의 토큰 삭제, 로그인페이지로 이동.
<br>

```typescript
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/loginPage');
  };
```

<br>
⭐️ 직접 구현한 화면입니다.
<br>
<img width="450" alt="로그인,로그아웃" src="https://user-images.githubusercontent.com/81337674/223996242-cb4a4a76-e830-4eec-9869-09b75b380924.gif">
 </details>

 <br>


####  ✅ 배차 정보 조회
<details>
<summary> 인증된 사용자는 2023년 2월 20일부터 26일까지의 배차일보를 조회한다. ✔️ </summary>
👉 서버에 데이터 요청하여 가져오기

```typescript
  ...
  const response = await api.get(`/dispatch/70/${date}`);
  ...
```
<br>
👉 주어진 범위 내에서만 데이터 조회 가능하게 제한.
<br>

```typescript
  const changeDate = (days: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    if (newDate < new Date('2023-02-20') || newDate > new Date('2023-02-26')) {
      return showToast(MessageType.Error, '데이터는 20일에서 26일까지 존재!');
    }
    showToast(MessageType.Success, `배차 조회 성공`);
    setCurrentDate(newDate);
  };
```

<br>
⭐️ 직접 구현한 화면입니다.
<br>
<img width="450" alt="배차 정보 조회" src="https://user-images.githubusercontent.com/81337674/223996419-d4ffe88d-da72-4499-9016-de94cfc1d086.gif">
<br>
</details>

####  ✅ 배차 정보 수정
<details>
<summary> 인증된 사용자는 배차일보의 시간 cell을 클릭하여 시간을 수정한다. ✔️ </summary>
👉 수정할 시간 cell 클릭시, 해당 cell에 highlight 효과 구현 

<br>
👉 변경할 시간에 클릭한 cell의 정보 및 시간 출력 필요 
<br>
👉 수정 시간의 HH 란은 00 ~ 24까지 가능하며, mm란은 00 부터 59까지 가능 
<br>
👉 수정 시간을 입력하지 않고 “변경”버튼 클릭시, 수정 시간을 입력해달라는 alert 출력 
<br>
👉 “변경”버튼 클릭시 수정 API 호출 ( 200일시 변경된 시각으로 재렌더링하여 표에 출력 )
<br>

⭐️ 직접 구현한 화면입니다.
<br>
<img width="450" alt="배차 정보 수정" src="https://user-images.githubusercontent.com/81337674/223996477-55fa1734-5b4f-4313-ae9a-7dbef472a93a.gif">
<br>
</details>





<br/>



## GIF & Image

|**로그인 / 로그아웃** | **배차 정보 조회**  |
| :------: | :--------------: |
<img width="400" alt="스크린샷 2023-03-09 오후 7 33 23" src="https://user-images.githubusercontent.com/81337674/223998245-a051a5fb-0bd4-4720-8b5e-6a3b9192472e.png">|<img width="400" alt="스크린샷 2023-03-09 오후 7 33 33" src="https://user-images.githubusercontent.com/81337674/223998333-cf47825a-a8aa-44a2-b214-fa7c22d92450.png">|
| **배차 정보 수정 ** | **영상 1**|
|<img width="400" alt="스크린샷 2023-03-09 오후 7 33 40" src="https://user-images.githubusercontent.com/81337674/223998415-f230776e-19c5-410b-82d0-e9afe205609c.png">|<img width="400" alt="로그인,로그아웃" src="https://user-images.githubusercontent.com/81337674/223996242-cb4a4a76-e830-4eec-9869-09b75b380924.gif">|
| **영상 2** | **영상 3**|
|<img width="400" alt="배차 정보 조회" src="https://user-images.githubusercontent.com/81337674/223996419-d4ffe88d-da72-4499-9016-de94cfc1d086.gif">|<img width="400" alt="배차 정보 수정" src="https://user-images.githubusercontent.com/81337674/223996477-55fa1734-5b4f-4313-ae9a-7dbef472a93a.gif">|
| **반응형 NavBar** | |
|<img width="400" alt="스크린샷 2023-03-09 오후 7 39 42" src="https://user-images.githubusercontent.com/81337674/223999738-f87ce7ed-2d6a-43df-8ed2-65f06f724b5c.png">
|
<br>

##  Project Architecture

```
⭐️ src
|
├── 🗂 redux 
│     ├──  🗂 reducer - 📄 dispatchSlice.ts
│     └──  🗂 store - 📄 store.ts
│
├── 🗂 components
│   │
│   ├── 🗂 Rental
│   │     ├── 🗂 Input
│   │     │    ├── 📄 index.tsx
│   │     │    ├── 📄 UserNumber.tsx
│   │     │    └── 📄 UserPassword.tsx
│   │     └── 📄 index.tsx
│   │
│   ├── 🗂 Magaement
│   │     ├── 🗂 Table
│   │     │    ├── 📄 index.tsx
│   │     │    ├── 📄 TableHeader.tsx
│   │     │    └── 📄 TableBody.tsx
│   │     ├── 📄 EditSideBar.tsx
│   │     ├── 📄 SelectDateBar.tsx
│   │     └── 📄 index.tsx
│   │
│   ├── 🗂 NavBar
│   │     ├── 📄 index.tsx
│   │     ├── 📄 NormalNavBar.tsx
│   │     └── 📄 DropdownBar.tsx
│   │
│   └──  🗂 LoadUI
│         ├── 📄 LoadSpinner.tsx
│         └── 📄 Skeleton.tsx
│
├── 🗂 hooks
│     ├── 📄 useCustomSelector.ts
│     ├── 📄 useCustomToast.ts
│     └── 📄 useCustomInput.ts
│
│   
├── 🗂 layout - 📄 layout.tsx
│  
│
├── 🗂 pages 
│     ├──  🗂 loginPage - 📄 index.tsx
│     └──  🗂 managementPage - 📄 index.tsx
│
├──  📄 app.tsx
└──  📄 index.tsx
```



<br>

## Install Module 

#### 👉 package.json


```
  "dependencies": {
    "@emotion/css": "^11.10.0",
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@mui/icons-material": "^5.11.11",
    "@mui/material": "^5.11.12",
    "@reduxjs/toolkit": "^1.9.3",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@types/react-router-dom": "^5.3.3",
    "@types/react-table": "^7.7.14",
    "@types/react-toastify": "^4.1.0",
    "antd": "^5.3.0",
    "axios": "^1.3.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.8.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.1",
    "typescript": "^4.9.5"
  },
  "devDependencies": {
    "@emotion/babel-plugin": "^11.10.6",
    "@types/react": "^18.0.17",
    "@types/react-datepicker": "^4.8.0",
    "@types/react-dom": "^18.0.6",
    "eslint": "^8.33.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^2.8.3"
  },

```




