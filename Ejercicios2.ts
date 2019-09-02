function iReturnPromiseAfter1Second():Promise<string> {
    return new Promise((resolve: (arg0: string) => void)=>{
    setTimeout(()=>resolve("Hello world!"), 1000);
    });
    }
    Promise.resolve(123)
    .then((res: any)=>{
    return iReturnPromiseAfter1Second();
    })
    .then((res: any) => {
    console.log(res);
    });
    