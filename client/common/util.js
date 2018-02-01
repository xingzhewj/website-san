function fileSort(params) {
    let fileds = Object.keys(params);
    fileds.sort();
    let newParams = {};
    fileds.forEach(item => {
        newParams[item] = params[item];
    });
    return newParams;
}

export default fileSort;