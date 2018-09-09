var U = {
    strokeRect: function (x, y, width, height) {
        let o = new Object();
        o.context = this.context;
        o.context.strokeRect(x, y, width, height);
        o.position = new Object();
        o.x = x;
        o.y = y;
        o.width=width;
        o.height=height;
        o.isUp=false;
        o.clear=function(){
            o.context.clearRect(o.x-1, o.y-1, o.width+2, o.height+2);
        }
        o.up=function(){
            o.isUp=true;
            o.clear();
            o.y=o.y-20;
            o.context.strokeRect(x, o.y, width, height);
        }
        o.down=function(){
            o.isUp=false;
            o.clear();
            o.y=o.y+20;
            o.context.strokeRect(x, o.y, width, height);
        }
        return o;
    },
    setContext: function (context) {
        this.context = context;
    },
    drawImage:function(img,sx,sy,swidth,sheight,x,y,width,height){
        let o=new Object();
        o.context=this.context;
        o.context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
        o.img=img;
        o.sx=sx;
        o.sy=sy;
        o.swidth=swidth;
        o.sheight=sheight;
        o.x=x;
        o.y=y;
        o.width=width;
        o.height=height;
        o.clear=function(){
            o.context.clearRect(o.x-1, o.y-1, o.width+2, o.height+2);
        }
        o.up=function(){
            o.isUp=true;
            o.clear();
            o.y=o.y-20;
            o.context.drawImage(img,sx,sy,swidth,sheight,x,o.y,width,height);
        }
        o.down=function(){
            o.isUp=false;
            o.clear();
            o.y=o.y+20;
            o.context.drawImage(img,sx,sy,swidth,sheight,x,o.y,width,height);
        }
        return o;
    }
    
}