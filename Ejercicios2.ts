Promise.reject(new Error('something bad happened'))
.then((res: any) => {
console.log(res); 
return 456;
})
.then((res: any) => {
console.log(res); 
return Promise.resolve(123);
})
.then((res: any) => {
console.log(res);
return Promise.resolve(123);
})
.catch((err: { message: any; }) => {
console.log(err.message);
});

