class HashTable {
    constructor(){
        this.table = new Array(37).fill(null).map(()=>[])
    }


    hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++) hash += key.charCodeAt(i);
        return hash%37;
    }

    insert(key, value){
        const index = this.hash(key);


        this.table[index].push({key, value})
    }

    get(key){
        const index = this.hash(key);

        for(let i=0; i<this.table[index].length; i++){
            if(this.table[index][i].key === key){
                return this.table[index][i].value;
            }
        }

        return undefined;
    }

    remove(key){
        const index = this.hash(key);

        for(let i=0; i<this.table[index].length; i++){
            if(this.table[index][i].key === key){
                return this.table[index].splice(i, 1);
            }
        }

        return undefined;
    }

}

const table = new HashTable();

table.insert("name", "Goku")
table.insert("name", "Akhil")
table.insert("mane", "Joel");

console.log(table.get("mane"));

table.remove("mane")

console.log(table.table)