function data(){
	var data = new Date();
	var year = data.getFullYear();
	var month = data.getMonth();
	var date = data.getDate();
	console.log(year+"年"+month+1+"月"+data+"日")
}
data()