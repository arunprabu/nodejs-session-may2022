const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae nunc vel mauris facilisis congue sit amet vitae erat. Aliquam nec nibh nec nunc ornare dignissim sed ac sapien. Suspendisse vitae urna nec enim placerat laoreet in eu justo. Integer et dui vitae nisl fermentum venenatis sed in justo.";

const buffer = new Buffer.from( dummyText, 'utf8');

console.log(buffer); // prints the dummyText content in buffer format 
console.log(buffer.toString()); // // prints the dummyText content in string format 
console.log(buffer.toJSON()); // shows  the type and also data an array of unicode characters 
// inside the array you will see 76 as first item, which represents 'L' -- the first letter of Lorem // Refer: https://www.codetable.net/decimal/76  

console.log("===========");
console.log(buffer[0]);   // you will get 76 here

buffer.write('NodeJS Rocks'); // replacing first 12 chars of the buffer
console.log(buffer.toString());
