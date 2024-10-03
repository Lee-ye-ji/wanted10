# React + TypeScript + Vite

## 파일 구조

```
wanted10/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/                # 이미지, 아이콘 등 정적 파일
│   ├── components/                # 재사용 가능한 컴포넌트
│   │   ├── Button.tsx
│   │   └── Header.tsx
│   ├── hooks/                     # 커스텀 훅
│   │   └── useCustomHook.ts
│   ├── pages/                     # 페이지 단위 컴포넌트
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── styles/                    # 전역 스타일 파일(CSS/SCSS 등)
│   │   └── global.css
│   ├── types/                     # 전역 타입 정의 파일
│   │   └── mockData.d.ts
│   ├── datas/                     # 데이터 정의 파일
│   │   └── mockData.ts
│   ├── App.tsx                    # 메인 App 컴포넌트
│   ├── main.tsx                   # 진입점 파일
│   ├── vite-env.d.ts              # Vite 관련 타입 선언 파일
│   └── index.css                  # 전역 CSS
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
