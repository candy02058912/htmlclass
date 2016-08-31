var SHEET_ID = '1VbQd2qc8cu8aeD6lxSkzk5AfPwnaapMOPKDB-UupF0o';

var $loading = $('#loading');
var $lookupForm = $('#lookup-form');

var hwData;

$loading.show();

Tabletop.init({
  key: SHEET_ID,
  simpleSheet: true,
  callback: function(data, tabletop) {
    hwData = data;
    $loading.hide();
    $lookupForm.show();
    // console.log(hwData);
  }
});

$('#lookup-form').submit(function(e) {
  e.preventDefault();
  $('#result').text('');

  var form = this;
  var found = false;
  for (var i = 0; i < hwData.length; i++) {
    var score = hwData[i];
    if (score.name === form.name.value) {
      $('#last-video').show();
      // $('#result').text(JSON.stringify(score));

            $('#result').html('<div class="row">\
            <div class="col-xs-12">\
            <h2>成績查詢</h2>\
            <hr class="star-primary">\
            </div></div>\
            <div class="row"><div class="col-xs-12">\
            <h3>學號：' + score.id + '&nbsp;&nbsp;姓名：' + score.name + '</h3></div></div>\
            <div class="row"><div class="col-sm-offset-3 col-sm-6 col-xs-12">\
            <div class="table-responsive text-left">\
            <table class="table table-hover table-bordered"><thead>\
            <tr class="warning">\
          <th>項目</th>\
          <th>分數</th>\
        </tr></thead>\
        <tbody><tr>\
          <td>課堂練習一</td>\
          <td>' + score.hw1 + '</td>\
        </tr>\
        <tr>\
          <td>課堂練習二：自我介紹</td>\
          <td>' + score.hw2 + '</td>\
        </tr>\
        <tr>\
          <td>課堂練習三：CSS Selectors</td>\
          <td>' + score.hw3 + '</td>\
        </tr>\
        <tr>\
          <td>課堂練習四：Bootstrap</td>\
          <td>' + score.hw4 + '</td>\
        </tr>\
        <tr>\
          <td>課堂練習五：JavaScript</td>\
          <td>' + score.hw5 + '</td>\
        </tr>\
        <tr class="info">\
          <td>課堂測驗一：HTML</td>\
          <td>' + score.test1 + '</td>\
        </tr>\
        <tr class="info">\
          <td>課堂測驗二：CSS</td>\
          <td>' + score.test2 + '</td>\
        </tr>\
        <tr class="info">\
          <td>課堂測驗三：Bootstrap</td>\
          <td>' + score.test3 + '</td>\
        </tr>\
        <tr class="success">\
          <td>實作一：Google Nexus 6P</td>\
          <td>' + score.p1 + '</td>\
        </tr>\
      </tbody></table></div></div></div>');

//       $('#result').html('<div class="row">\
//       <div class="col-xs-12">\
//       <h2>成績查詢</h2>\
//       <hr class="star-primary">\
//       </div>\
//       <div class="row"><div class="col-xs-12">\
//       <h3>學號：' + score.id + '&nbsp;&nbsp;姓名：' + score.name + '</h3>\
//       <h4>通過預測：' + score.pass + '</h4></div>\
//       <p>訓練班是說證書約末一個月左右會收到，相關疑問請恰訓練班唷～</p>\
//       <div class="row"><div class="col-sm-offset-3 col-sm-6 col-xs-12">\
//       <div class="table-responsive text-left">\
//       <table class="table table-hover table-bordered"><thead>\
//       <tr class="warning">\
//     <th>項目</th>\
//     <th>分數</th>\
//   </tr></thead>\
//   <tbody><tr>\
//     <td>課堂練習一</td>\
//     <td>' + score.hw1 + '</td>\
//   </tr>\
//   <tr>\
//     <td>課堂練習二</td>\
//     <td>' + score.hw2 + '</td>\
//   </tr>\
//   <tr>\
//     <td>課堂練習三</td>\
//     <td>' + score.hw3 + '</td>\
//   </tr>\
//   <tr>\
//     <td>課堂練習四</td>\
//     <td>' + score.hw4 + '</td>\
//   </tr>\
//   <tr>\
//     <td>課堂練習五</td>\
//     <td>' + score.hw5 + '</td>\
//   </tr>\
//   <tr>\
//     <td>課堂練習七</td>\
//     <td>' + score.hw7 + '</td>\
//   </tr>\
//   <tr>\
//     <td>課堂練習八</td>\
//     <td>' + score.hw8 + '</td>\
//   </tr>\
//   <tr class="info">\
//     <td>練習總平均</td>\
//     <td>' + score.hwFinal + '</td>\
//   </tr>\
//   <tr class="info">\
//     <td>實作：練習六</td>\
//     <td>' + score.hw6 + '</td>\
//   </tr>\
//   <tr class="info">\
//     <td>實作：練習九</td>\
//     <td>' + score.hw9 + '</td>\
//   </tr>\
//   <tr>\
//     <td>HTML 測驗</td>\
//     <td>' + score.test1 + '</td>\
//   </tr>\
//   <tr>\
//     <td>CSS 測驗</td>\
//     <td>' + score.test2 + '</td>\
//   </tr>\
//   <tr>\
//     <td>Bootstrap 測驗</td>\
//     <td>' + score.test3 + '</td>\
//   </tr>\
//   <tr>\
//     <td>JavaScript 測驗</td>\
//     <td>' + score.test4 + '</td>\
//   </tr>\
//   <tr>\
//     <td>jQuery 測驗</td>\
//     <td>' + score.test5 + '</td>\
//   </tr>\
//   <tr class="info">\
//     <td>測驗總平均</td>\
//     <td>' + score.testFinal + '</td>\
//   </tr>\
//   <tr class="success">\
//     <td>最後成績</td>\
//     <td>' + score.final + '</td>\
//   </tr>\
//   <tr>\
//     <td>備註</td>\
//     <td>' + score.note + '</td>\
//   </tr>\
// </tbody></table></div></div></div>');


      found = true;
      break;
    }
  }
  if (!found) {
    $('#result').html("<p class=\"well\" style=\"margin-top: 10px;\">查無資料</p>");
  }

});