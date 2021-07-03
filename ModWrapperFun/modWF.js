// We called it node module wrapper function in node

(function(){
    const name = "Dikshit singh";
    console.log(name);
})
// yeh hamesha hi private mode m set hotee hai. esliyee enhe module ki tarah estemaal krne k wqt export krna padtaa hai.. 

// behind the scenes kuch aisa dikhtaa hai

// (function(exports,require,module,_filename,_dirname){
//     const name = "Dikshit singh";
//     console.log(name);
// })


console.log(__dirname)
console.log(__filename)