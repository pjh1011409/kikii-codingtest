## ๐ ํคํค์์ด FE ๊ณผ์  

<br>
๋ฆฌ๋๋ฏธ๋ฅผ ์ฐธ๊ณ ํด์ฃผ๋ฉด ๊ฐ์ฌํ๊ฒ ์ต๋๋ค.  ๐
<br>
<strong>๐ ๋ชฉ์ฐจ</strong>
<br>

- [ํ๋ก์ ํธ ๊ธฐ๊ฐ](#ํ๋ก์ ํธ-๊ธฐ๊ฐ)
- [Start](#start)
- [Tools](#tools)
- [Check List](#check-list)
- [ GIF & Image ](#gif--image)
- [Project Architecture](#project-architecture)
- [Module Install](#install-module)


  
<br>

## Intro

ํคํค์์ด FE ์ฌ์  ํ์คํธ๋ก ์งํ๋ ํ๋ก์ ํธ์๋๋ค. 
<br>

๋ก๊ทธ์ธํ์ฌ ๋ฐฐ์ฐจ์ผ๋ณด ์กฐํ ํ๋ฉด์ ๊ตฌ์ฑํ๊ณ , ๋ฐฐ์ฐจ์ผ๋ณด์ ์๊ฐ์ ์์ ํ๋ ๊ธฐ๋ฅ์ ์ ๊ณตํฉ๋๋ค. 

<br>


## ํ๋ก์ ํธ ๊ธฐ๊ฐ

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
<mark style='background-color: yellow'> ๐ก ์ค์  ๊ตฌํ ์ฝ๋๋ฅผ ๊ฐ๋ตํํ ์ฝ๋๋ค์๋๋ค. (ํ์ดํ ๋ฒํผ์ ํด๋ฆญํ์ฌ ๊ธ์ ํ์ธํด์ฃผ์ธ์.)</mark>

<strong>: ์ฃผ์ด์ง ์๊ตฌ์ฌํญ์ ๋ํ ๊ตฌํ ์๋ฃ </strong>

####  โ ๋ก๊ทธ์ธ

<details>
<summary> ์ฌ์ฉ์๋ ๋ก๊ทธ์ธ์ ํ  ์ ์๋ค. โ๏ธ </summary>
๐ ์ฌ์ฉ ์์ด๋ : paTEST / ์ฌ์ฉ ๋น๋ฐ๋ฒํธ: TEST
<br>
๐ UserNumber.tsx, UserPassword.tsx ์ฐธ๊ณ 
<br>
๐ ์ฌ์ฉ์ ์ ํจ์ฑ ๊ฒ์ฌ : ์ ๊ณต ๋ฐ์ ์์ด๋,๋น๋ฒ์ด ์๋ ๊ฒฝ์ฐ ๋๋ ๋ ์ค ํ๋๋ผ๋ ์๋ ฅํ์ง ์์ ๊ฒฝ์ฐ Toast UI ์ถ๋ ฅ์ ํตํด ์ฌ์ฉ์์๊ฒ ์๋ฆฌ๊ธฐ
<br>
โญ๏ธ ์ง์  ๊ตฌํํ ํ๋ฉด์๋๋ค.
<br>
<img width="450" alt="แแฉแแณแแตแซ,แแฉแแณแแกแแฎแบ" src="https://user-images.githubusercontent.com/81337674/223996242-cb4a4a76-e830-4eec-9869-09b75b380924.gif">
</details>

 <details>
 <summary>์ฌ์ฉ์๋ ๋ก๊ทธ์ธ ํ ๋ฐฐ์ฐจ ์กฐํ ํ๋ฉด์ผ๋ก ์ด๋ํ๋ค. โ๏ธ </summary>
 ๐ ๋ก๊ทธ์ธํ  ๊ฒฝ์ฐ ๋ฐฐ์ฐจ ์กฐํ ํ๋ฉด์ผ๋ก ์ด๋.
<br>

```typescript
//๋ก๊ทธ์ธ ์์ฒญ ์ฑ๊ณต ํ
...
navigate('/managementPage');
```
<br>
๐ ๋ก๊ทธ์ธํ ๊ฒฝ์ฐ, ๋ก๊ทธ์ธํ๋ฉด๋ก ์ด๋ํ๋ ค ํ๋ฉด ์๋์ผ๋ก ๋ฐฐ์ฐจ ์กฐํ ํ๋ฉด์ผ๋ก.
๐ ๋ก๊ทธ์์ ๊ฒฝ์ฐ, ๋ฐฐ์ฐจ์กฐํํ๋ฉด์ผ๋ก ์ด๋ํ๋ ค ํ๋ฉด ์๋์ผ๋ก ๋ก๊ทธ์ธํ๋ฉด์ผ๋ก.
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
๐ ์๋ฒ์ ๋ก๊ทธ์ธ ์์ฒญ ํ, ํ ํฐ ๋ฐ๊ธ ๋ฐ์ ๋ก์ปฌ์คํ ๋ฆฌ์ง ์ ์ฅ.
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
โญ๏ธ ์ง์  ๊ตฌํํ ํ๋ฉด์๋๋ค.
<br>
<img width="450" alt="แแฉแแณแแตแซ,แแฉแแณแแกแแฎแบ" src="https://user-images.githubusercontent.com/81337674/223996242-cb4a4a76-e830-4eec-9869-09b75b380924.gif">
<br>
 </details>
 <details>
 <summary>์ฌ์ฉ์๋ ๋ก๊ทธ์์์ ํ  ์ ์๋ค. โ๏ธ </summary>
๐ ๋ก๊ทธ์์ ๋ฒํผ ํด๋ฆญ์ ๋ก์ปฌ์คํ ๋ฆฌ์ง์ ํ ํฐ ์ญ์ , ๋ก๊ทธ์ธํ์ด์ง๋ก ์ด๋.
<br>

```typescript
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/loginPage');
  };
```

<br>
โญ๏ธ ์ง์  ๊ตฌํํ ํ๋ฉด์๋๋ค.
<br>
<img width="450" alt="แแฉแแณแแตแซ,แแฉแแณแแกแแฎแบ" src="https://user-images.githubusercontent.com/81337674/223996242-cb4a4a76-e830-4eec-9869-09b75b380924.gif">
 </details>

 <br>


####  โ ๋ฐฐ์ฐจ ์ ๋ณด ์กฐํ
<details>
<summary> ์ธ์ฆ๋ ์ฌ์ฉ์๋ 2023๋ 2์ 20์ผ๋ถํฐ 26์ผ๊น์ง์ ๋ฐฐ์ฐจ์ผ๋ณด๋ฅผ ์กฐํํ๋ค. โ๏ธ </summary>
๐ ์๋ฒ์ ๋ฐ์ดํฐ ์์ฒญํ์ฌ ๊ฐ์ ธ์ค๊ธฐ

```typescript
  ...
  const response = await api.get(`/dispatch/70/${date}`);
  ...
```
<br>
๐ ์ฃผ์ด์ง ๋ฒ์ ๋ด์์๋ง ๋ฐ์ดํฐ ์กฐํ ๊ฐ๋ฅํ๊ฒ ์ ํ.
<br>

```typescript
  const changeDate = (days: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    if (newDate < new Date('2023-02-20') || newDate > new Date('2023-02-26')) {
      return showToast(MessageType.Error, '๋ฐ์ดํฐ๋ 20์ผ์์ 26์ผ๊น์ง ์กด์ฌ!');
    }
    showToast(MessageType.Success, `๋ฐฐ์ฐจ ์กฐํ ์ฑ๊ณต`);
    setCurrentDate(newDate);
  };
```

<br>
โญ๏ธ ์ง์  ๊ตฌํํ ํ๋ฉด์๋๋ค.
<br>
<img width="450" alt="แแขแแก แแฅแผแแฉ แแฉแแฌ" src="https://user-images.githubusercontent.com/81337674/223996419-d4ffe88d-da72-4499-9016-de94cfc1d086.gif">
<br>
</details>

####  โ ๋ฐฐ์ฐจ ์ ๋ณด ์์ 
<details>
<summary> ์ธ์ฆ๋ ์ฌ์ฉ์๋ ๋ฐฐ์ฐจ์ผ๋ณด์ ์๊ฐ cell์ ํด๋ฆญํ์ฌ ์๊ฐ์ ์์ ํ๋ค. โ๏ธ </summary>
๐ ์์ ํ  ์๊ฐ cell ํด๋ฆญ์, ํด๋น cell์ highlight ํจ๊ณผ ๊ตฌํ 

<br>
๐ ๋ณ๊ฒฝํ  ์๊ฐ์ ํด๋ฆญํ cell์ ์ ๋ณด ๋ฐ ์๊ฐ ์ถ๋ ฅ ํ์ 
<br>
๐ ์์  ์๊ฐ์ HH ๋์ 00 ~ 24๊น์ง ๊ฐ๋ฅํ๋ฉฐ, mm๋์ 00 ๋ถํฐ 59๊น์ง ๊ฐ๋ฅ 
<br>
๐ ์์  ์๊ฐ์ ์๋ ฅํ์ง ์๊ณ  โ๋ณ๊ฒฝโ๋ฒํผ ํด๋ฆญ์, ์์  ์๊ฐ์ ์๋ ฅํด๋ฌ๋ผ๋ alert ์ถ๋ ฅ 
<br>
๐ โ๋ณ๊ฒฝโ๋ฒํผ ํด๋ฆญ์ ์์  API ํธ์ถ ( 200์ผ์ ๋ณ๊ฒฝ๋ ์๊ฐ์ผ๋ก ์ฌ๋ ๋๋งํ์ฌ ํ์ ์ถ๋ ฅ )
<br>

โญ๏ธ ์ง์  ๊ตฌํํ ํ๋ฉด์๋๋ค.
<br>
<img width="450" alt="แแขแแก แแฅแผแแฉ แแฎแแฅแผ" src="https://user-images.githubusercontent.com/81337674/223996477-55fa1734-5b4f-4313-ae9a-7dbef472a93a.gif">
<br>
</details>





<br/>



## GIF & Image

|**๋ก๊ทธ์ธ / ๋ก๊ทธ์์** | **๋ฐฐ์ฐจ ์ ๋ณด ์กฐํ**  |
| :------: | :--------------: |
<img width="400" alt="แแณแแณแแตแซแแฃแบ 2023-03-09 แแฉแแฎ 7 33 23" src="https://user-images.githubusercontent.com/81337674/223998245-a051a5fb-0bd4-4720-8b5e-6a3b9192472e.png">|<img width="400" alt="แแณแแณแแตแซแแฃแบ 2023-03-09 แแฉแแฎ 7 33 33" src="https://user-images.githubusercontent.com/81337674/223998333-cf47825a-a8aa-44a2-b214-fa7c22d92450.png">|
| **๋ฐฐ์ฐจ ์ ๋ณด ์์  ** | **์์ 1**|
|<img width="400" alt="แแณแแณแแตแซแแฃแบ 2023-03-09 แแฉแแฎ 7 33 40" src="https://user-images.githubusercontent.com/81337674/223998415-f230776e-19c5-410b-82d0-e9afe205609c.png">|<img width="400" alt="แแฉแแณแแตแซ,แแฉแแณแแกแแฎแบ" src="https://user-images.githubusercontent.com/81337674/223996242-cb4a4a76-e830-4eec-9869-09b75b380924.gif">|
| **์์ 2** | **์์ 3**|
|<img width="400" alt="แแขแแก แแฅแผแแฉ แแฉแแฌ" src="https://user-images.githubusercontent.com/81337674/223996419-d4ffe88d-da72-4499-9016-de94cfc1d086.gif">|<img width="400" alt="แแขแแก แแฅแผแแฉ แแฎแแฅแผ" src="https://user-images.githubusercontent.com/81337674/223996477-55fa1734-5b4f-4313-ae9a-7dbef472a93a.gif">|
| **๋ฐ์ํ NavBar** | |
|<img width="400" alt="แแณแแณแแตแซแแฃแบ 2023-03-09 แแฉแแฎ 7 39 42" src="https://user-images.githubusercontent.com/81337674/223999738-f87ce7ed-2d6a-43df-8ed2-65f06f724b5c.png">
|
<br>

##  Project Architecture

```
โญ๏ธ src
|
โโโ ๐ redux 
โ     โโโ  ๐ reducer - ๐ dispatchSlice.ts
โ     โโโ  ๐ store - ๐ store.ts
โ
โโโ ๐ components
โ   โ
โ   โโโ ๐ Rental
โ   โ     โโโ ๐ Input
โ   โ     โ    โโโ ๐ index.tsx
โ   โ     โ    โโโ ๐ UserNumber.tsx
โ   โ     โ    โโโ ๐ UserPassword.tsx
โ   โ     โโโ ๐ index.tsx
โ   โ
โ   โโโ ๐ Magaement
โ   โ     โโโ ๐ Table
โ   โ     โ    โโโ ๐ index.tsx
โ   โ     โ    โโโ ๐ TableHeader.tsx
โ   โ     โ    โโโ ๐ TableBody.tsx
โ   โ     โโโ ๐ EditSideBar.tsx
โ   โ     โโโ ๐ SelectDateBar.tsx
โ   โ     โโโ ๐ index.tsx
โ   โ
โ   โโโ ๐ NavBar
โ   โ     โโโ ๐ index.tsx
โ   โ     โโโ ๐ NormalNavBar.tsx
โ   โ     โโโ ๐ DropdownBar.tsx
โ   โ
โ   โโโ  ๐ LoadUI
โ         โโโ ๐ LoadSpinner.tsx
โ         โโโ ๐ Skeleton.tsx
โ
โโโ ๐ hooks
โ     โโโ ๐ useCustomSelector.ts
โ     โโโ ๐ useCustomToast.ts
โ     โโโ ๐ useCustomInput.ts
โ
โ   
โโโ ๐ layout - ๐ layout.tsx
โ  
โ
โโโ ๐ pages 
โ     โโโ  ๐ loginPage - ๐ index.tsx
โ     โโโ  ๐ managementPage - ๐ index.tsx
โ
โโโ  ๐ app.tsx
โโโ  ๐ index.tsx
```



<br>

## Install Module 

#### ๐ package.json


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




