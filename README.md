# mycustom-kkuda-service

> **[ Comments ]**
>
> - Fastcampus에서 주관하는 기업(세어라운드)과의 협업 Final 프로젝트임을 알려드립니다.
> - 구현한 로직에 관한 코드는 오픈되어 있으나 모든 부분은 오픈이 불가능하다는 점 양해부탁드립니다.

## 💎 꾸다 FINAL PROJECT

---

### #Intro

> - 구독 및 렌탈 페이지 '꾸다 서비스' 의 주문 프로세스 **페이지 리뉴얼**(Front-end)
> - 자사 **BO(Back-Office)** 서비스 구축(Front-end)

#### 개발 기간 및 팀구성

- 설계 및 디자인 기간 : 2022.06.20 ~ 2022. 07.01
- 개발 기간 : 2022. 07.04 ~ 2022. 07.22
- 본인 외 4명

#### Languages / Environments

   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

#### Library

<span>
  <img src="https://img.shields.io/badge/styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/axios-512BD4?style=for-the-badge&logo=&logoColor=">
  <img src="https://img.shields.io/badge/date_fns-A9225C?style=for-the-badge&logo=&logoColor=">
  <img src="https://img.shields.io/badge/react_datepicker-83B81A?style=for-the-badge&logo=&logoColor=">
 <img src="https://img.shields.io/badge/ToastUIEditor-0085CA?style=for-the-badge&logo=&logoColor=">
</span>

#### Management Tools

<span>
  <img src="https://img.shields.io/badge/VSCOde-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
</span>

---

### #구현 기능 및 설명

#### [ user-order: 사용자 주문 결제 프로세스 ]

![결제 프로세스](https://user-images.githubusercontent.com/98930796/180378264-b734412f-0797-4e18-bdd9-fc07350d4982.png)

##### Pages : Order, OrderComplete, OrderConfirm

- **데이터 Fetching** : 상품 `id`로 상품 정보를 `axios`를 통해 Fetching 및 Filtering 후 화면에 출력
- **form 데이터 조건 및 유효성 검사**
  - 조건에 따른 활성화/비활성화 : 이전 정보가 완료되었을 때 다음 정보를 작성할 수 있도록 활성화
  - 유효성 검사 : 주문자 정보 및 이용자 정보의 데이터 유효성 검사
- **State 관리** : React Library Recoil을 활용하여 모든 상태 변경을 지속적으로 업데이트
- **주소 API** : 카카오 주소 API를 통해 Custom Hook으로 주소 검색 및 등록 기능 추가

#### [ back-office: 유저에 따라 자사 서비스 관리 페이지 ]

![로그인 회원가입](https://user-images.githubusercontent.com/98930796/180378282-d950046a-43a1-462d-b067-c96b383f1301.png)_로그인/회원가입_

<br/>

![상품 등록](https://user-images.githubusercontent.com/98930796/180378288-7c4539e8-1d26-40e0-9ec6-b28872cceec2.png)_상품등록_

<br/>

![조회 페이지](https://user-images.githubusercontent.com/98930796/180378017-73952798-9f48-4da2-adc3-4e453a680805.png)_주문,배송,상품,고객,파트너 조회_

<br/>

##### Pages : 로그인 및 회원가입 / 상품 등록 / 상품, 고객, 파트너사 조회

- 로그인 및 회원가입 페이지와 기능 구현

  - 사용자가 입력한 데이터 유효성 검사

- 기본 기능 구현
  - 기본 기능 : 상품 CRUD
  - 추가 기능 : Filtering / 상품 N개씩 출력 / Modal / Dropdown / Pagenation
  -
