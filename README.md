# 개발 일지

1. 부트스트랩과 바닐라 CSS
    - 배경 : 원래는 온전히 부트스트랩으로 작성할 예정이었다.
    - 문제 : 부트스트랩의 디자인에서 세부적인 수정이 매우 번거롭다는 내용을 인지.
    - 해결방안 : 바닐라 CSS를 통해서 작업하는 방안을 선택. => 이에 따라 기존 CSS를 전부 수정하는 작업을 진행.

2. AWS를 이용한 서버 열기
    - 배경 : 기존에 localhost에서 진행하던 개발을, 이제 AWS로 옮기는 작업을 진행
    - 문제 : npm start를 하려고 했으나, permission denied 오류가 발생했다.
    - 해결방안 : sudo chmod +x node_modules/.bin/react-scripts 명령어를 통해 react에게 node_modules에 대한 권한을 부여해야한다.
