![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=500&section=header&text=NOVEL%20IDEAS&fontSize=100)

# 🔖 목차

> ## [👥 팀원 소개](#-팀원-소개-1)
>
> ## [✨ 프로젝트 소개](#-프로젝트-소개-notion)
>
> ## [🤝 협업 방식](#-협업-방식-1)
>
> ## [📚 프로젝트 진행 상황 관리](#-프로젝트-진행-상황-관리-1)
>
> ## [🔍 브랜치 전략](#-브랜치-전략-1)
>
> ## [✔ 컨벤션](#-컨벤션-1)

<br/>
<br/>

## 👥 팀원 소개

<div align="center">
<img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/6339b2ff-101b-4316-98b1-fe5e53bda768" />
<img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/344a9254-8f2f-439e-af78-addcb748c4e9" />
<table >
    <thead>
        <tr>
            <th align="center"><span>이동윤(팀장)</span></th>
            <th align="center"><span>이지언</span></th>
            <th align="center"><span>서현욱</span></th>
            <th align="center"><span>김종현</span></th>
        </tr>
    </thead>
    <tbody>
        <td align="center">
            <a href="https://github.com/dongyoon7212">
                <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/50f5a224-bbbc-4486-9ce0-b873d962898d" width="150" height="150" />
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/ez0603">
                <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/37d1fc3b-f435-44d0-adb4-0404c1b71837" width="150" height="150" />
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/seohyeonwook">
                <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/b015e01d-1078-428e-a713-a92b23e4ff6a" width="150" height="150" />
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/jayhyeon12">
                <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/ffb0f7a2-6df1-4935-8b3f-036cf89e344b" width="150" height="150" />
            </a>
        </td>
    </tbody>
</table>
</div>

## ✨ Novel Ideas 프로젝트 소개 [Notion](https://mangrove-comic-a17.notion.site/Team-Project-dc414362131b4ee799fa852737236fa9?pvs=4)

### 🌟 제목

<h2>
    <a href="https://github.com/Novel-Ideas/gumeonggage-front">
        차세대 키오스크 "GUMEONG GAGE" 개발
    </a>
</h2>

### 🔎 주요 기능

-   관리자 회원가입 및 로그인
-   관리자 모드 메뉴

    > 전체 매출 및 제품별 매출 조회

    > 결제 내역 조회

    > 메뉴 추가/관리

    > 회원 피드백 조회

    > 회원 조회

    > 점포 관리(가게 설정, 비밀번호 변경하기)

-   사용자 모드 메뉴

    > 포장/매장 여부 선택

    > 전체 및 카테고리별 메뉴 선택

    > 결제 방법(카드결제, 카카오페이)

    > 포인트 적립/사용

    > 피드백 작성

    > 주변 관광지 추천 받기

<br/>
<br/>

<br/>
<br/>

## 🤝 협업 방식

1. 해당하는 업무에 대해 GitHub Issue를 생성합니다.
2. GitHub Actions에 의해 자동으로 생성된 브랜치로 전환하여 해당하는 업무를 진행합니다.
3. 작업을 완료하면 각자의 생성한 브랜치에서 코드를 push합니다.
4. PR(Pull Request) 을 오픈합니다.

-   PR(pull request)을 오픈하면, 팀장이 코드를 확인하고 승인합니다.

-   코드 리뷰 & 승인은 팀장이 일임했지만, 팀원들의 코드 스타일은 다같이 공유하며 서로 잘 이해할 수 있도록 다 같이 정리하는 시간을 가지도록 하였습니다.

*   컨펌 담당
    -   지언 : <code>동윤</code>
    -   현욱 : <code>동윤</code>
    -   종현 : <code>동윤</code>

5. PR이 merge되어 close 되면 해당 이슈는 자동으로 Done상태로 변경됩니다.

<br/>
<br/>

## 📚 프로젝트 진행 상황 관리

-   <a href="https://github.com/Novel-Ideas/gumeonggage-front/issues?q=is%3Aissue+is%3Aclosed">📋 GitHub Issues(Front) & </a>
    <a href="https://github.com/Novel-Ideas/gumeonggage-back/issues?q=is%3Aissue+is%3Aclosed"> GitHub Issues(Back) </a>
    -   간편한 이슈 생성을 위해 이슈 템플릿을 만들어 사용했습니다. + 팀원이 현재 어떤 작업을 진행하고 있는지를 바로 알 수 있어 의사소통 비용을 줄일 수 있었습니다.
-   <a href="https://github.com/orgs/Novel-Ideas/projects/1">📁 GitHub Projects</a>
    -   칸반 보드로 프로젝트 진행 상황을 한 눈에 확인할 수 있어 일정을 관리하기 수월했습니다.

<br/>
<br/>

## 🔍 브랜치 전략

<h3>💡 GitHub Flow 전략</h3>

-   개발과 동시에 지속적으로 배포를 진행할 것이 아니라, 기능을 모두 개발하고 최종적으로 배포를 할 예정이었기 때문에 Git flow에 비해 흐름이 단순해짐에 따라 그 규칙도 단순한 GitHub Flow 전략이 적합하다고 생각했습니다.

-   프로젝트 기간 동안 팀원들이 같은 시간에 작업하기 때문에 잦은 충돌이 발생할 것을 우려하여 충돌의 크기를 줄이고자 GitHub Flow 전략을 채택하여 작은 단위로 이슈를 쪼개 이슈 별로 브랜치를 분기하고 main 브랜치에 지속적으로 merge 하는 방식으로 진행했습니다.

-   기본적으로 master branch에 대한 규칙만 정확하게 정립되어 있다면 나머지 가지들에 대해서는 특별한 관여를 하지 않으며 pull request기능을 사용하도록 권장하였습니다.

<br/>
<br/>

## ✔ 컨벤션

팀원 간의 원활한 소통과 협업을 위해 커밋 컨벤션과, 코드 컨벤션을 만들어 이를 따랐습니다. 리드미에는 간략히 작성하고, 자세한 컨벤션은 각각의 타이틀에 링크된 깃허브 위키에 적어두었습니다.

<h3>
<a href="https://mangrove-comic-a17.notion.site/Git-Commit-Message-Convention-8e5410868b7d4bb6a9e61e976d638963">📍 커밋 컨벤션</a>
</h3>

<div>
<pre background-color="#dbdbdb">
<p>
1. 커밋 유형 지정
    - 커밋 유형은 영어 대문자로 작성하기
    - 커밋 유형
    - Feat : 새로운 기능 추가
    - Fix : 버그 수정
    - Docs : 문서 수정
    - Style : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
    - Refactor : 코드 리팩토링
    - Test : 테스트 코드, 리팩토링 테스트 코드 추가
    - Chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
    - Design : CSS 등 사용자 UI 디자인 변경
    - Comment : 필요한 주석 추가 및 변경
    - Rename : 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
    - Remove : 파일을 삭제하는 작업만 수행한 경우
    - !BREAKING CHANGE : 커다란 API 변경의 경우
    - !HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우

🧾 2. 제목과 본문을 빈행으로 분리 - 커밋 유형 이후 제목과 본문은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것 - 본문에는 변경한 내용과 이유 설명 (어떻게보다는 무엇 & 왜를 설명)

#️⃣ 3. 제목 첫 글자는 대문자로, 끝에는 . 금지

↩️ 4. 제목은 영문 기준 50자 이내로 할 것

⏺️ 5. 자신의 코드가 직관적으로 바로 파악할 수 있다고 생각하지 말자

👆 6. 여러가지 항목이 있다면 글머리 기호를 통해 가독성 높이기

</p>
</pre>
</div>

<h3>
<a href="https://mangrove-comic-a17.notion.site/Code-Convention-ed0bf7dc4b974f17acae503ba05efc24?pvs=74">📍 코드 컨벤션</a>
</h3>
<div>
<pre>
<p>
🛼 문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.

🐫 문장이 종료될 때는 세미콜론을 붙여줍니다.

💄 함수명, 변수명은 카멜케이스로 작성합니다.

🐫 가독성을 위해 한 줄에 하나의 문장만 작성합니다.

❓ 주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.

🔠 연산자 사이에는 공백을 추가하여 가독성을 높입니다.

🔢 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.

💬 생성자 함수명의 맨 앞글자는 대문자로 합니다.

🔚 var는 절대 사용하지 않는다. (const를 let 보다 위에 선언한다)

👆 const와 let은 사용 시점에 선언 및 할당을 한다. (함수는 변수 선언문 다음에 오도록한다.)

✏️ 외부 모듈과 내부 모듈을 구분하여 사용한다.

🧮 배열과 객체는 반드시 리터럴로 선언한다. (new 사용 X)

📠 배열 복사 시 반복문을 사용하지 않는다.

😎 배열의 시작 괄호 안에 요소가 줄 바꿈으로 시작되었다면 끝 괄호 이전에도 일관된 줄 바꿈 해야한다. (일관되게 모두 줄 바꿈을 해주어야 한다.)

🧶 객체의 프로퍼티가 1개인 경우에만 한 줄 정의를 허용하며, 2개 이상일 경우에는 개행을 강제한다. (객체 리터럴 정의 시 콜론 앞은 공백을 허용하지 않음 콜론 뒤는 항상 공백을 강제)

🧂 메서드 문법 사용 시 메서드 사이에 개행을 추가한다.

🌭 화살표 함수의 파라미터가 하나이면 괄호를 생략한다.

🍳 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🧇 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🥞 wildcard import는 사용하지 않는다. (import문으로부터 직접 export하지 않는다.)

🥖 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

🥯 switch-case 사용 시 첫 번째 case문을 제외하고 case문 사용 이전에 개행한다.

🥐 삼중 등호 연산자인 ===, !==만 사용한다.

🚐 반복문 사용은 일반화된 순회 메서드 사용을 권장한다.

🚑 람다함수 안에서 밖에 있는 변수를 사용하지 말라

🚚 코드 블럭 주석 처리를 위해서는 한 줄 주석을 사용한다. 여러 줄 주석을 작성할 때는 \*의 들여쓰기를 맞춘다. 주석의 첫 줄과 마지막 줄은 비워둠

💫 시작 괄호 바로 다음과 끝 괄호 바로 이전에 공백이 있으면 안 된다.

</p>
</pre>
</div>
