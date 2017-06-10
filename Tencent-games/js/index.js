/**
 * Created by wuyongyu on 2017/6/2.
 */
var table = document.getElementById('js_table');
var a = table.getElementsByTagName('a');
var main = document.getElementById('js_main');

for(var i = 0,len = a.length; i < len; i++){
    a[i].index = i;
    a[i].onclick = function () {
        for(var j = 0,len = a.length; j < len; j++){
            a[j].className = '';
            main.children[j].style.display = 'none';
        }
        a[this.index].className = 'active';
        main.children[this.index].style.display = 'block';
    }
}