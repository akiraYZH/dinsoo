onload=function(){
    new Carousel('carousel');
}

function Carousel(id){
    // var oCarousel = document.getElementById(id);
    // alert(oCarousel);


    var _this=this;
    this.speed=-1;

    
    
    this.img_bar = document.querySelector('#c_bar');
    this.oCtl_l = document.querySelector('#ctl-l');
    this.oCtl_r = document.querySelector('#ctl-r');
    this.timer=null;


    this.img_bar.innerHTML+= this.img_bar.innerHTML;
    this.img_bar.style.width=(this.img_bar.offsetWidth*2) + 'px';

    

    this.timer = setInterval(function(){
        _this.move(_this.img_bar, _this.speed);
    }, 30)
 
    this.oCtl_l.onclick=function () { 
        _this.speed=-1;
     }

     this.oCtl_r.onclick=function () { 
        _this.speed=1;
     }


}


Carousel.prototype.move = function (img_bar, speed){
    var oC_bar = img_bar;
    var speed = speed;
    // alert((-oC_bar.offsetWidth/2));

    if(parseInt(oC_bar.style.left)<=(-oC_bar.offsetWidth/2)){
        oC_bar.style.left=0 + 'px'
    } else if(parseInt(oC_bar.style.left)>=0) {
        oC_bar.style.left=(-oC_bar.offsetWidth/2) +'px';
    }
    console.log(oC_bar.style.left);
    oC_bar.style.left=oC_bar.offsetLeft;
    oC_bar.style.left=parseInt(oC_bar.style.left)+speed+'px';
    
}