$.post("/users/user").then((res)=>{
	if(res.status===-1) 
	{
		location.href="/login.html";
	}
	else{
		$("body").prepend(`<div>${res.user}<button id="quit">退出</button></div>`)
	}
	
})
$(function(){   //$(document).ready(callback)
		$("body").on("click","#quit",function(){
		$.post("/users/quit").then((res)=>{
			if(res.status===0){
				location.href="/login.html";  
			}
		})
	})
})
