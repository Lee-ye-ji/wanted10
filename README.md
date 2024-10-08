# 프리온보딩 FE 챌린지 10월 (2024) | 리액트 오픈소스 펼쳐보기

## 구현한 링크

- https://yeji-tomato.github.io/wanted10/
  ![alt text](image.png)

## 과제 내용

- https://gist.github.com/goldfrosch/034b966075059447efa1c00476849d68

## 파일 구조

```
wanted10/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/                # 재사용 가능한 컴포넌트
│   │   ├── card
│   │   └── loading
│   ├── hooks/                     # 커스텀 훅
│   │   └── useInfiniteScroll.ts
│   ├── types/                     # 전역 타입 정의 파일
│   │   └── mockData.d.ts
│   ├── datas/                     # 데이터 정의 파일
│   │   └── mockData.ts
│   ├── pages/                     # 데이터 정의 파일
│   │   └── CardPage.tsx
│   ├── App.tsx                    # 메인 App 컴포넌트
│   ├── main.tsx                   # 진입점 파일
│   ├── vite-env.d.ts              # Vite 관련 타입 선언 파일
│   └── App.css                    # 전역 CSS
├── .gitignore
├── index.html                     # 프로젝트 진입 HTML 파일
├── package.json
├── tsconfig.json                  # TypeScript 설정 파일
├── vite.config.ts                 # Vite 설정 파일
└── README.md
```

## 동작 방식

**useState**를 사용하여 현재 화면에 표시되는 데이터와 더 로드할 데이터가 있는지 여부를 관리합니다.
**useRef**와 **IntersectionObserver**를 사용하여 화면의 마지막 요소가 뷰포트에 들어오면 데이터를 추가로 로드합니다.
10개의 데이터를 한 번에 로드하며, 모든 데이터를 로드하면 더 이상 로드하지 않습니다.
