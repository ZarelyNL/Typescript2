Promise.resolve(123)
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
