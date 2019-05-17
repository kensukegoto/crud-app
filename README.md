## react-router-dom
ヒストリーAPIを操作しつつ、画面遷移もしてくれる
```JS
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'
```
BrouserRouterがヒストリーAPIを操作。メニューを押したときに、ページ遷移するのではなく、コンポーネントを入れ換える。コンポーネントの入れ替え時にURLを変更するなど。

## redux-form

フォームにしたいコンポーネントをruduxForm関数を使って装飾（オフィシャルではデコレートと表現されている）。<br>
これによりコンポーネント内のpropsにフォーム関連の関数が設定される。

```JS
export default reduxForm({ validate, form: 'eventNewForm5'})(EventsNew)
```

更にreducerを使う場合は下記

```JS
export default connect(null,mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
)
```
## redux-thunk

actionの中身に非同期で取得したものを含めたい場合などに有効。通常actionは即時実行で「状態」オブジェクトの生成がされreducerに渡されるが、何か処理をした後に「状態」オブジェクトの生成がされreducerに渡すことが可能となる

```JS
// 通常
// 呼び出したらすぐにオブジェクトを返さないとエラーに…
export const increment = () => ({
    type: INCREMENT
})

// thunk
export const increment = () => dispatch => {
  setTimeout(()=>{
    dispatch({ type: INCREMENT })
  },1000)
}

```

## axios