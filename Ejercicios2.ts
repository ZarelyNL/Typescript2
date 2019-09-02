function rest(first: string, second: string, ...allOthers: (string | undefined)[]) {
    console.log(allOthers);
    }
    rest('foo', 'bar');
    rest('foo', 'bar', 'bas', 'qux');