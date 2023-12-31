function area(shape: "circle", width: number, height?: number): string;

function area(shape: "rectangle", radius: number): string;

function area(shape: "circle"|"rectangle", width: number, height?:number):string{
    if (shape==='rectangle'){
        return `${shape} ${width}`;
    }else{
        return `${shape} ${width} ${height}`;
    }
}


console.log(area("circle", 20));

console.log(70000000011-1200340);