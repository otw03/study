const name = "노드";
const property = { id: 'nodejs', type: 'javascript' };
const say = function() {
    console.log("Hello World");
}

const home = {
    postcode: '12345',
    address: '서울시 강남구 역삼동',
    getAddress: function() {
        console.log(this.postcode + ' ' + this.address);
    }
}

