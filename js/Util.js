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
        o.clear=function(){
            o.context.clearRect(o.x-1, o.y-1, o.width+2, o.height+2);
        }
        return o;
    },
    setContext: function (context) {
        this.context = context;
    }
}