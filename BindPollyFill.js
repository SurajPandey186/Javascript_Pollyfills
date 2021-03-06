
// Custom myBind pollyFill. 
Function.prototype.myBind = function (context, ...args){
    let func = this;
    return (...runTimeArgs) => {
        let allArgs = runTimeArgs.concat(args);
        func.apply(context, allArgs);
    }
};


// Basic function with parameter.
function getFullName(lastName, bindTimeArgs){
    console.log("run time arguments ", lastName);
    console.log("bind Time Args ", bindTimeArgs);
    console.log(" Conext output: ", this);
};


