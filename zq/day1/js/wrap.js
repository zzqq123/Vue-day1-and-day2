
class wrap(){
    constructor(){
        this.olddiv();
    }
    olddiv(){
        var div = document.createElement('div');
        div.className = 'head';
        document.body.append(div);
    }
}

let wrap = new wrap();
wrap();
