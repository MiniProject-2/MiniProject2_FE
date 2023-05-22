#  프로젝트 소개

## 1. 프로젝트 개요
이 프로젝트는 기업에서 사용을 하는 할일 관리 어플리케이션을 컨셉으로 잡았습니다. 그렇기 때문에 모든 기능이 할일의 관리에 맞춰서 구현이 되어있습니다.

### 1.1 프로젝트 멤버
**프론트엔드**
| <center>최환석<팀장></center> | <center>장현준</center>|<center>이재하</center>
|:--:|:--:|:--:|
| <img src="https://avatars.githubusercontent.com/u/97926993?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/83224463?v=4" width=200> | <img src="https://avatars.githubusercontent.com/u/108874515?v=4" width=200> |
| [최환석](https://github.com/BeeMOre32) | [장현준](https://github.com/hyeon17)  | [이재하](https://github.com/jaehafe) |
칸반 보드 <br/> 할일 모달창 <br/> 할일 생성모달  |  캘린더 페이지  </br> 일정 목록 페이지</br> NotFound 페이지 </br> | 회원 가입 및 로그인 페이지 <br/> 마이페이지 <br/> 대시보드

### 1.2 프로젝트 실행 방법
```
1. $ git clone https://github.com/MiniProject-2/need-more-task-fe.git
2. $ cd need-more-task-fe
3. $ npm i
4. root 경로에 .env 파일 생성 후, 관련 정보 입력
5. $ npm run dev
```
### 1.3 프로젝트 링크
[Demo]()

### 1.4 프로젝트 문서
[Notion]()

## 2. 프로젝트 스택
 - 메인 라이브러리 및 프레임워크: Next.js
 - 상태 관리: Zustand
 - 서버 통신: React-query
 - UI 라이브러리: Chakra UI
 - CSS: emotion
 - 기타 라이브러리
   - mui/material
   - fullcalendar/react
   - d3
   - dayjs
   - framer-motion
   - lottie-web
   - react-beautiful-dnd

## 3. 프로젝트 구조
```
├─apis
│  └─configs
├─components
│  ├─Admin
│  ├─Auth
│  │  └─Join
│  ├─Calendar
│  ├─ChakraProviders
│  ├─common
│  ├─CommonAvatar
│  ├─CommonHeader
│  ├─Dashboard
│  ├─Drawer
│  ├─kanban
│  ├─modal
│  ├─OverView
│  ├─Profile
│  └─Skeleton
├─constant
├─hooks
├─pages
│  ├─api
│  ├─dashboard
│  ├─join
│  ├─profile
│  └─tasks
├─store
├─styles
├─type
│  └─enum
└─utils
```

## 4. 프로젝트 기능

- 회원가입 및 로그인
- 프로젝트 생성 및 삭제
- 프로젝트에 멤버 초대 및 삭제
- 프로젝트 전체보기
- 프로젝트 칸반보드
- 프로젝트 캘린더
- 프로젝트 일정 목록
- 프로젝트 대시보드
- 프로필 수정

## 5. 프로젝트 결과

### 5.1 시연 영상

[시연영상 링크](https://youtu.be/ZncmakNfVtw)

### 5.2 사이트의 전체적인 모습

- 로그인 페이지 및 회원가입 페이지

![img.png](exam/img.png)
![img_1.png](exam/img_1.png)

- 프로젝트 캘린더 페이지

![img_2.png](exam/img_2.png)
![img_3-1](exam/img_3-1.png)

- 프로젝트 일정 목록

![img_3.png](exam/img_3.png)

- 프로젝트 칸반보드 페이지

![img_4.png](exam/img_4.png)
![img_5.png](exam/img_5.png)
![img_6.png](exam/img_6.png)

- 프로젝트 대시보드 페이지

![img_7.png](exam/img_7.png)
![img_8.png](exam/img_8.png)

- 프로필 및 프로필 수정 페이지

![img_9.png](exam/img_9.png)
![img_10.png](exam/img_10.png)
