# cleantech-site

(주)크린텍개발 / Aqua-crete 마케팅 사이트 — Ember.js + Tailwind, Vercel 배포 (aqua-crete.com).

## 새 컴퓨터 셋업 (처음 한 번)

1. **Git** 설치 (macOS: `xcode-select --install`)
2. **Node 22** 설치 — nvm 권장:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
   # 터미널 재시작 후
   nvm install 22 && nvm alias default 22
   ```
   (`package.json` engines: node >= 20.11, CI는 Node 22 사용)
3. **Git 사용자 정보 + GitHub 인증**
   ```bash
   git config --global user.name  "Kevin Song"
   git config --global user.email "cwsong95@gmail.com"
   brew install gh && gh auth login   # 브라우저로 GitHub 로그인 → push 가능
   ```
4. **클론 + 의존성 설치**
   ```bash
   git clone https://github.com/cwsong95/cleantech-site.git
   cd cleantech-site
   npm ci          # package-lock.json 기준으로 정확히 설치
   npm run start   # http://localhost:4200
   ```
5. **Chrome** 설치 (ember test / testem 용)
6. (선택) Claude 데스크톱 앱 설치 후 이 폴더를 연결하면 바로 작업 가능

## 개발

- `npm run start` — 개발 서버 (FastBoot 프리렌더링 포함)
- `npm run start:spa` — FastBoot 끄고 순수 SPA 모드로 실행
- `npm run lint` / `npm run lint:fix`
- `npm run test` / `npm run test:ember -- --server`
- `npm run build` — 프로덕션 빌드 (`dist/`, prember로 라우트별 정적 HTML 생성)

## 배포

- Vercel이 GitHub 레포와 연결되어 있음 → **`main`에 push하면 자동 배포**, 다른 브랜치/PR은 프리뷰 배포
- 도메인: `aqua-crete.com` (Vercel 프로젝트 설정에서 관리)
- 리다이렉트/헤더: `vercel.json`
- 로컬에 `.env` 파일 없음 — 환경변수는 쓰지 않음
- Google Search Console / 네이버 서치어드바이저 소유확인 파일은 `public/`에 커밋되어 있음

## 브랜치 규칙

- `main` — 배포 브랜치
- 작업은 `WEB-XXXX/영역/설명` 형태의 브랜치에서 하고 PR로 머지
- CI(`.github/workflows/ci.yml`): `main` push와 PR에서 lint + test 실행 — **push 전에 `npm run lint` 통과 확인**

## 기타

- Ember Inspector 확장 ([Chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi))
- `npx ember help generate` — 코드 제너레이터
