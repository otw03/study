# git branch 사용법
[branch : 브랜치 란?](#branch--브랜치-란)  
[git switch -c 브랜치명 ⇒브랜치 생성](#git-switch--c-브랜치명-⇒브랜치-생성)  
[git switch ⇒ 브랜치 변경](#git-switch--브랜치-변경)  
[git merge ⇒ 브랜치 합치기](#git-merge-⇒-브랜치-합치기)  
[conflict ⇒ 충돌 해결](#conflict-⇒-충돌-해결)  
[브랜치를 삭제해야 하는 경우](#브랜치를-삭제해야-하는-경우)  
[ - 브랜치 목록 동기화](#브랜치-목록-동기화)  

# branch : 브랜치 란?

추후보충 내용  

# ****git switch -c 브랜치명 ⇒브랜치 생성****

### **브랜치 생성**

**`git branch 브랜치명`**  

**`git switch -c 브랜치명`**  

> 새 브랜치를 만들 때, 현재 브랜치의 상태를 기준으로 만들기 때문에 현재 브랜치가 무엇인지 꼭 확인해야 합니다.
> 

**`-c` 옵션**

git switch의 `-c` 옵션은 브랜치 생성과 브랜치 이동을 한번에 수행합니다.  

# ****git switch ⇒ 브랜치 변경****

### **브랜치 이동**

**`git switch 브랜치명`**  

# ****git merge ⇒ 브랜치 합치기****

### ****브랜치 합치기****

**`git merge 합칠브랜치명`**  

1. `새로 생성한 브랜치`에서 커밋  
2. `main` 브랜치로 이동  
3. 새로 생성한 브랜치 수정사항을 `main` 브랜치로 merge

```bash
git add -A
git commit -m "commit message"
git switch main  
git merge 합칠브랜치명  
```

# ****conflict ⇒ 충돌 해결****

### 지금까지의 과정

1. 브랜치를 만들고
2. 해당 브랜치에서 커밋을 하고
3. 다른 브랜치와 머지하는 작업을 진행

같은 파일을 부득이 수정하는 경우가 생기고 필연적으로 충돌이 발생하는데, 강제로 상황을 만들고 충돌을 해결하는 방법  

### conflict 상황 재현

1. `새로 만든 브랜치`에서 수정한 파일을 `main` 브랜치에서도 수정하여 충돌 상황을 만듭니다.  
2. 전체 변경사항을 인덱스에 추가
3. 커밋 작성
4. `새로 만든 브랜치`를 `main`으로 merge  

### 결과

- `CONFLICT`라는 메시지와 함께 실패

> 충돌을 해결하고 커밋을 하거나, 머지 작업을 취소(`git merge --abort`)할 수 있습니다.
> 

**파일 내용**  

```bash
<<<<<<< HEAD
main 브랜치에서 작업한 내용
=======
새로 만든 브랜치에서 작업한 내용
>>>>>>> 새로 만든 브랜치명
```

- 충돌이 발생하면 양쪽 브랜치에서 동시에 변경된 사항을 표시해줍니다.  
`<<<<<<<`, `=======`, `>>>>>>>` 이 내용이 충돌이 발생한 지점을 의미합니다.
- 위에 내용은 `main` 브랜치에서 작업한 내용이고 아래 내용은 `새로 만든 브랜치`에서 작업한 내용이다. 
둘중에 어떤 내용이 맞는지 개발자가 스스로 판단하고 선택해야 합니다.
- 수정 or 남기고 싶은 내용을 제외하고  
`<<<<<<<`, `제거하고 싶은 내용`, `=======`, `>>>>>>>`를 모두 제거합니다.
- 충돌을 해결했다면 기존과 동일한 방식으로 커밋을 진행합니다.  
차이점은 `git commit`에서 `-m` 메시지를 입력하지 않는다는 점입니다.  
충돌을 수정한 내용을 자동으로 메시지로 만들기 때문에 따로 입력하지 않아도 됩니다.

```bash
git add -A
git commit
```

> vi 창이 열리고 메시지를 입력하는 화면이 나오면 당황하지말고 `ecs`키를 누르고 `:x`를 차례로 입력한 다음 엔터를 칩니다.
> 

# ****브랜치를 삭제해야 하는 경우****

### **로컬에서 브랜치 삭제하기**

내가 현재 있는 작업 브랜치는 삭제 할 수 없다. 먼저 삭제하지 않을 다른 브랜치로 이동(switch, checkout)합니다.  

예를 들면 메인(`main`) 브랜치로 이동(switch, checkout)합니다.  

**브랜치 삭제 명령어**  

**`git branch -d 삭제할브랜치명`**  

- `-d` 옵션으로는 브랜치가 이미 원격에 푸쉬되고 병합 되었을때만 삭제할 수 있다.
- `-D` 옵션을 쓰면 푸쉬나 병합이 아직 안된 상태에서도 강제로 삭제할 수 있다.

### ****원격에서 브랜치 삭제하기****

**원격에서 브랜치를 삭제하는 명령어**  

`git push <remote> —delete <branch>`  

**예시)**  

**`git push origin —delete 삭제할브랜치명`**   

**더 짧은 버전의 명령어**  

`git push <remote> :<branch>`

**예시)**  

**`git push origin :삭제할브랜치명`**   

아래와 같은 에러메세지가 뜬다면 다른 사람이 이미 해당 브랜치를 삭제한 경우일 수도 있습니다.  

```bash
error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to ‘git@repository_name'
```

### 브랜치 목록 동기화

다른 사람이 이미 그 브랜치를 삭제한 경우  
브랜치 목록 동기화를 위한 명령어  

**`git fetch -p`**  

`-p` 옵션은 가지치기(prune)를 한다는 뜻입니다. 패치(fetch)를 하면 원격에서 이미 삭제된 브랜치는 목록에서 없어집니다.