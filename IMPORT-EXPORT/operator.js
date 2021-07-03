const add = (value1,value2)=>{
    return value1+value2
};

const name = "Dikshit Singh";

// >>Here add function is in private scope, so to use it we have to public it..
// >> Now our add is public

// But now what if we have to use sub property too with add .. 
const sub = (value1,value2)=>{
    return value1-value2
};
// module.exports.add = add;
// module.exports.sub = sub;

// >>But here still a problem that we have to make exports for different property everytime, so to solve it we have to do something new..

// >> We can write it in oneline again with the help of object destructuring

module.exports = {add,sub,name};