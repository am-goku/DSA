class Stack{
    constructor(size){
        this.size = size
        this.stack = []
    }


    insert(value){
        if(this.stack.length < this.size){
            return this.stack.push(value)
        }

        console.log("Stack overflow")
    }


    remove(){
        if(!this.stack.length) {
            console.log("Stack underflow")
            return;
        }

        return this.stack.pop()
    }


    peek(){
        if (!this.stack.length) {
          console.log("Stack underflow");
          return;
        }

        return this.stack[0];
    }

}


const stack = new Stack(10);

stack.insert(20)
stack.insert(30)
stack.insert(40)
stack.insert(70)
stack.insert(60)


stack.remove();



console.log(stack.stack)