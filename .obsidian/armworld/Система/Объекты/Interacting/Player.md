## displayName

Это имя которое будет отображаться в видимых местах, нужно лишь для того чтобы формально отделить ник от настоящего имени, так как мы не знаем как будет модифицироваться игра, для этого у нас есть дополнительное поле размещения пользовательских данных.

Формально, может иметь любые значения

## nickname

Пользовательский ник может включать в себя только буквы латинского алфавита в нижнем регистре, цифры и нижнее подчёркивание.

```javascript
/^[a-z0-9_]+$/
```