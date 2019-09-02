var __awaiter = (this && this.__awaiter) || function (thisArg: any, _arguments: any, P: new (arg0: (resolve: any) => void) => { then: (arg0: (value: any) => void, arg1: (value: any) => void) => void; }, generator: { next: (arg0: any) => void; throw: (arg0: any) => void; apply: (arg0: any, arg1: any) => void; }
    ) {
    return new (P || (P = Promise))(function (resolve: (arg0: any) => void, reject: any) {
    function fulfilled(value: any) { try { step(generator.next(value)); } catch (e) { r
    eject(e); } }
    function rejected(value: any) { try { step(generator.throw(value)); } catch (e) { r
    eject(e); } }
    function step(result: { done: any; value: any; }) { result.done ? resolve(result.value) : new P(function (
    resolve: (arg0: any) => void) { resolve(result.value); }).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments)).next());
    });
    };
    function foo() {
    return __awaiter(this, void 0, void 0, function* () {
    try {
    var val = yield getMeAPromise();
    console.log(val);
    }
    catch (err) {
    console.log('Error: ', err.message);
    }
    });
    }