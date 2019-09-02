Promise.resolve(123)
.then((res: any) => {
throw new Error('something bad happened')
return 456;
})
.then((res: any) => {
console.log(res); 
return Promise.resolve(789);
})
.catch((err: { message: any; }) => {
console.log(err.message); 
})
