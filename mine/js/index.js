var ip = 'http://192.168.1.103:8080/';
function openHref(str){
	window.location.href = str;
}
function telphone_check(num){
	 var rePhone = /^(13[0-9]{9})|(14[0-9]{9})|(15[0-9]{9})|(18[0-9]{9})|(17[0-9]{9})$/;
     if (!rePhone.test(num)){
		return false;
	 }else{
    	return true;
     }    
}
// 获得url后面参数
function getQueryString(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	 var r = window.location.search.substr(1).match(reg);
	 return  r != null ? unescape(r[2]) : null;
}
//判断是否微信浏览器
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
var rankData = "";
var iptop = "http://192.168.1.123/wei/";
var CLIENT_ID_WX = "wxe8d9c8f925a30020";
var REDICE_URL_WX = "http://pay.tbjiaoyu.com/weixin/jsp/shopping/authWXInfo.jsp";
var redictUrl = iptop+"SHOP/index.html";
//判断当前浏览器是否是微信浏览器，如果是，则自动前往微信授权
if(isWeiXin()){
	var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+CLIENT_ID_WX;
	if(isNotNull(redictUrl)){
	    url = url +"&redirect_uri="+encodeURIComponent(REDICE_URL_WX+"?redictUrl="+redictUrl);
	}else{
	    url = url +"&redirect_uri="+encodeURIComponent(REDICE_URL_WX);
	}
	url = url +"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
	window.location.href=url;
}else{

}
// 获取周排行榜
function getRankData(rankdatas){
   var rankHtml = "";
   for(var i=0;i<rankdatas.length;i++){
        rankHtml +='<div class="ub ub-pj"><div class="xuhao tx-c">'+(i+1)+'</div><div class="userImg ub ub-ac ub-pc"><div class="touxiang ub-img7"></div></div><div class="userName ub-f1 tx-l">'+rankdatas[i].nickName+'</div><div class="userScale tx-c">'+rankdatas[i].record.medalCount+'</div></div>';
    }
    $('.rankBox').html(rankHtml);
}
function back(){
    window.history.back()
}
function timeChange(time,timePlace) {
    var timePlace = document.getElementById(timePlace);
    var minute = time / 60;
    var minutes = parseInt(minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var second = time % 60;
    seconds = parseInt(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var allTime = "" + minutes + "" + ":" + "" + seconds + "";
    timePlace.innerHTML = allTime;
}
