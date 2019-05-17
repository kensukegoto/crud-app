## react-router-dom
ヒストリーAPIを操作しつつ、画面遷移もしてくれる
```JS
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'
```
BrouserRouterがヒストリーAPIを操作。メニューを押したときに、ページ遷移するのではなく、コンポーネントを入れ換える。コンポーネントの入れ替え時にURLを変更するなど。