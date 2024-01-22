class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;
            return;
        }

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = newNode;
        this.tail = current.next;
    }


    delete(value){
        if(this.head.data === value){
            this.head = this.head.next;
            return
        };
        let current = this.head;

        while(current){
            if(current.next.data === value){
                break;
            }
            current = current.next;
        };

        if(current.next === this.tail){
            current.next = null;
            this.tail = current;
        } else {
            current.next = current.next.next;
        }
    }


    addAfter(value, nodeValue){
        const newNode = new Node(value);

        if(this.tail.data === nodeValue){
            this.tail.next = newNode;
            this.tail = this.tail.next;
            return;
        }

        let current = this.head;

        while(current){
            if(current.data === nodeValue){
                newNode.next = current.next;
                current.next = newNode;
                break;
            }

            current = current.next
        }
    }

    addBefore(value, nodeVlaue){
        const newNode = new Node(value);

        if(this.head.data === nodeVlaue){
            newNode.next = this.head;
            this.head = newNode;
            return
        }

        let current = this.head;

        while(current){
            if(current.next.data === nodeVlaue){
                newNode.next = current.next;
                current.next = newNode;
                break;
            }
            current = current.next
        }
    }


    print(){
        let current = this.head, result = []

        while(current){
            result.push(current.data);
            current= current.next;
        }


        console.log(result)
    }
};


const list = new LinkedList();


list.insert(10)
list.insert(20)
list.insert(30)
list.insert(40)
list.insert(50)
list.insert(60)

list.addAfter(44, 40)

list.addBefore(28, 30)

list.delete(20)


list.print()
