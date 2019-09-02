const promise = new Promise((resolve: any, reject: (arg0: Error) => void) => {
    reject(new Error("Algo malo a pasado"));
    });
    promise.then((res: any) => {
    });
    promise.catch((err: { message: any; }) => {
    console.log('Tengo una llamada: ', err.message); 
    });