// btn,textというIDを持つHTML要素を取得し、定数に入れる
const btn = document.getElementById('btn');
const text = document.getElementById('text');


// HTML要素がクリックされたときにイベント処理を実行

btn.addEventListener('click', () => {
  // li要素を追加
  const childList = document.createElement('li');
  // 「ボタンをクリックしました」というテキストの追加
  childList.textContent = 'ボタンをクリックしました';
  text.appendChild(childList);
  // 作成したli要素にテキストを追加する
  text.textContent = 'ボタンをクリックしました';
});