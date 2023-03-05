# uk-fp
Functional programming util

```bash
$ npm install uk-fp
```

# API
### Function
  * pipe
  * go
  * range

### Array-util
  > (f) => (a) => a.map(f); // Array를 나중에 받는 형식
  * map
  * filter
  * forEach

### Rusty Type
> https://doc.rust-lang.org/std/option/enum.Option.html
  * Option
    * Some
    * None

### 추후 방향성
 - Type level programming을 해볼것, 타입 체킹도 가능하게 제네릭을 활용해서 만들어볼 예정
 - Monad 패턴으로 Option을 사용하였지만, go함수를 이용한 파이프 체이닝을 할꺼면, 굳이 Option 메소드를 이용한 체이닝이 필요 없어 보임.
 - 고로 this 바인딩이 필요한 객체지향의 method는 완전히 버리고 함수형으로 작성하는게 일관성 있어 보임
  >```ts
  > const mayBeSome: Option<number> = SomeThing;
  >
  > mayBeSome
  >     .map(f)
  >     .unwrap();
  >
  > go(
  >   mayBeSome,
  >   map(f),
  >   Option.unwrap,
  > );
  >```

### 참고 라이브러리
  - fx/ts
  - rx/js
  - lodash
  - ramda
  - ...
