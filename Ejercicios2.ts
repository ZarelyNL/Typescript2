const promise = new Promise((resolve: (arg0: number) => void, reject: any) => {
    resolve(123);
    });
    promise.then((res: number) => {
    console.log('I get called:', res === 123); 
    });
    promise.catch((err: any) => {
    });