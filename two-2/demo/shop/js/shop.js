window.onload = function(){
  let userinfo = myTool.getCookie('userinfo');
  console.log(userinfo);
  if(userinfo){
    userinfo = JSON.parse(userinfo);
    document.querySelector('#modal-227581').style.display = 'none';
    document.querySelector('#modal-227582').style.display = 'none';
    document.querySelector('#yiLogin').style.display = 'block';
    document.querySelector('#yiLoginUsernam').innerHTML = userinfo.username;
  }else{
    document.querySelector('#modal-227581').style.display = 'block';
    document.querySelector('#modal-227582').style.display = 'block';
    document.querySelector('#yiLogin').style.display = 'none';
    location.href = 'http://localhost/demo/shop';
  }

  document.querySelector('#modal-227584').onclick = function(){
    if(confirm('sure?')){
      myTool.setCookie('userinfo', '', {expires: -1, path: '/'});
      document.querySelector('#modal-227581').style.display = 'block';
      document.querySelector('#modal-227582').style.display = 'block';
      document.querySelector('#yiLogin').style.display = 'none';
      location.href = 'http://localhost/demo/shop';
    }
  }

  var tbody = document.querySelector('#list_tbody')
  function getDate(){
    myTool.fetch('../api/shop/therefore.php').then(shop => {
      var str = '';
      var { list } = shop.body;
      console.log(list);
      list.forEach( (list, index) => {
        str += `
        <tr data_Id="${list.Id}">
          <td>
            <input type="checkbox" id="check" class="check">
          </td>
          <td>${index + 1}</td>
          <td>
            <span>${list.productname}</span>
            <input type="text">
          </td>
          <td>
            <span>${list.number}</span>
            <input type="text">
          </td>
          <td>
            <span>${list.unitprice}</span>
            <input type="text">
          </td>
          <td>
            <button type="button" class="btn btn-xs btn-edit btn-info editBtn">编辑</button>
            <button type="button" class="btn btn-xs btn-ok btn-success okBtn">确定</button>
            <button type="button" class="btn btn-xs btn-cancel btn-warning cancelBtn">取消</button>
            <button type="button" class="btn btn-xs btn-del btn-danger delBtn">删除</button>
          </td>
        </tr>
        `
      })
      tbody.innerHTML = str;
    })
    totalPrice();
  }
  getDate();

  var table = document.querySelector('.table');
  var num1 = 0;
  table.onclick = function(e){
    var allCheck = document.querySelector('.allCheck')
    var checks = document.querySelectorAll('.check')
    e = e || window.event;
    var target = e.target || e.srcElement;
    var tr = target.parentNode.parentNode;
    var id;
    // switch(target.className){
    //   case  'editBtn':
    //     tr.className = 'edit';
    //     console.log(e);
    //   var spans = tr.querySelectorAll('span');
    //   Array.from(spans).forEach( (span) => {
    //     span.nextElementSibing.value = span.innerHTML;;
    //   });
    //   console.log('1')
    //   break;
    // case 'okBtn':
    //   var spans = tr.querySelectorAll('span');
    //   Array.from(spans).forEach( (span) => {
    //     span.innerHTML = span.nextElementSibing.value;
    //   });
    // case 'cancelBtn':
    //   tr.className = '';
    //   break;
    // }
    if(target.className.includes('editBtn')){
      tr.className = 'edit';
      var spans = tr.querySelectorAll('span');
      Array.from(spans).forEach( (span) => {
        span.nextElementSibling.value = span.innerHTML;
      })
    }else if(target.className.includes('okBtn')){
      var spans = tr.querySelectorAll('span');
      id = tr.getAttribute('data_id');
      let name = spans[0].nextElementSibling.value,
          num = spans[1].nextElementSibling.value,
          price = spans[2].nextElementSibling.value;
      myTool.fetch('../api/shop/edit.php', {id,name,num,price}).then( resp => {
        if(resp.code === 200){
          Array.from(spans).forEach( (span) => {
            span.innerHTML = span.nextElementSibling.value;
          })
          totalPrice();
          alert(resp.body.msg);
        }
      })
      tr.className = ''
    }else if(target.className.includes('cancelBtn')){
      tr.className = ''
    }else if(target.className.includes('delBtn')){
      id = tr.getAttribute('data_id');
      if(confirm('suer?')){
        myTool.fetch('../api/shop/delete.php', {id}).then(resp => {
          if(resp.code === 200)
          alert(resp.body.msg)
          getDate();
          num1 = 0;
          checks = document.querySelectorAll('.check');
          Array.from(checks).forEach( (check) => {
            if(check.checked) num1++;
          })
          allCheck.checked = num1 === checks.length;
        })
      }
    }else if(target.className.includes('allCheck')){
      num1 = allCheck.checked ? checks.length : 0;
      Array.from(checks).forEach( (check) => {
        check.checked = allCheck.checked;
      })
    }else if(target.className.includes('check')){
      num1 += target.checked  ?  1 : -1;
      allCheck.checked = num1 === checks.length; 
    }
    totalPrice();
  }

  document.querySelector('#addProduct').onclick = function(){
    var productname = document.querySelector('#productname');
    var number = document.querySelector('#number');
    var unitprice = document.querySelector('#unitprice');
    var add_info = document.querySelector('#add_info');
    const name = productname.value,
          num = number.value,
          price = unitprice.value;
    myTool.fetch('../api/shop/add.php', { name, price, num}).then(resp => {
      add_info.innerHTML = resp.body.msg;
      if(resp.code === 200){
        add_info.className = 'text-center text-success';
        setTimeout(() => {
          add_info.innerHTML = '';
          $('#modal-container-227585').modal('hide');
          productname.value = unitprice.value = number.value = '';
          if(document.querySelector('.allCheck').checked){
            document.querySelector('.allCheck').checked = false;
          }
          getDate();
          
        }, 1000);
      }else{
        add_info.className = 'text-center text-danger';
        setTimeout(() => {
          add_info.innerHTML = '';
        }, 1000);
      }
    })
  }

  function totalPrice(){
    var prices = 0;
    checks = document.querySelectorAll('.check');
    Array.from(checks).forEach( (check) => {
      if(check.checked){
        var tr = check.parentNode.parentNode;
        var unitprice = tr.children[4].children[0].innerHTML;
        var count = tr.children[3].children[0].innerHTML;
        prices += unitprice * count; 
      }
    })
    document.querySelector('#money').innerHTML = prices;
  }
}