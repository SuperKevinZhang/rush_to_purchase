


var nIntervId;
var count = 1;
var goDate;
function kevin_test(){
    alert(1);
}
function go() {
    console.log("小桃子 ^_^ 正在帮你抢购＊＊＊＊＊＊＊＊＊＊＊＊＊ 刷新" + count + "次");
    //console.log("host:" + window.location.hostname);
    count++;
    // iPhone X go set time
    if (Date.now() >= new Date("2017-11-03 15:59:59")) {
        console.log("开始抢购iPhone X" + Date.now());

        // iphoneX 抢购
        if ($(parent.frames[0].document).find("#choose-btn-ko").length == 1) {
            console.log("(++++++++++++iphoneX 抢购");
            var sku = window.location.pathname.replace(/[^0-9]/ig, "");
            var ref = "//cart.jd.com/gate.action?pid=" + sku + "&pcount=1&ptype=1";
            console.log("https:" + ref);
            //5089237
            $(parent.frames[0].document).find("#choose-btn-ko").attr("href", ref);//                 
            parent.frames[0].document.getElementById("choose-btn-ko").click();
            return;
        }

        //预约抢购
        if ($(parent.frames[0].document).find("#btn-reservation").length == 1) {
            console.log("(++++++++++++正在预约抢购");

            parent.frames[0].document.getElementById("btn-reservation").click();
            return;
        }

        //秒杀   
        if ($(parent.frames[0].document).find("#InitCartUrl").length == 1) {
            console.log("(++++++++++++正在秒杀");
            parent.frames[0].document.getElementById("InitCartUrl").click();
            return;
        }

        //去购物车结算
        if ($(parent.frames[0].document).find("#GotoShoppingCart").length == 1) {
            console.log("(++++++++++++正在去购物车结算");
            parent.frames[0].document.getElementById("GotoShoppingCart").click();
        }

        //去结算        
        if ($(parent.frames[0].document).find(".submit-btn").length == 1) {
            console.log("(++++++++++++正在去结算");

            //只提交我抢购的商品
            //var sku = window.location.pathname.replace(/[^0-9]/ig, "");                 

            //$("#toggle-checkboxes_up").trigger("click");
            //全不选择
            //parent.frames[0].document.getElementById("toggle-checkboxes_up").click();

            //$(parent.frames[0].document).find('input:checkbox').attr("checked",false);
            //$(parent.frames[0].document).find("input:checkbox[value^='"+sku+"']").trigger("click");

            //$(parent.frames[0].document).find("input:checkbox[value^='"+sku+"']").attr("checked",true);

            parent.frames[0].document.getElementsByClassName("submit-btn")[0].click();
        }
        //提交订单order-submit
        if ($(parent.frames[0].document).find("#order-submit").length == 1) {
            console.log("(++++++++++++正在提交订单");
            //$(parent.frames[0].document).find(".payment-item item-selected online-payment")

            //在线支付
            parent.frames[0].document.getElementById("order-submit").click();
        }
    }
}
function rewrite(current) {
    fr4me = '<frameset cols=\'*\'>\n<frame src=\'' + current + '\'/>';
    fr4me += '</frameset>';
    with (document) { write(fr4me); void (close()) };
}


//注入sql
rewrite(window.location.href);

// //这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值
// var d = prompt("请输入抢购开始时间", "2017-11-03 15:59:59");
// //如果返回的有内容
// if (d) {
//     try {
//         goDate = new Date(d);
//         console.log("设定时间成功:" + goDate);

//         alert("监控期间,请保持标签页在最前面");
//         //go(); 0.25秒执行一次
//         nIntervId = setInterval("go()", 250);
//     }
//     catch (e) {
//         alert("时间格式不正确,请使用yyyy-MM-dd hh:mm:ss格式,精确到秒, 请重试");
//     }
// }
// else {
//     alert("请抢购时间, 请重重试");

// }


/*
    clearInterval(nIntervId);//停止监控
    */
