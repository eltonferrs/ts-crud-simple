const nameList: string[] = [];

const postName = (name:string) => {
    nameList.push(name);
}

const getNames = () => {
    nameList.forEach(name => console.log(name));
}

const removeName = (name:string) => {
    const indexname = nameList.findIndex(value => value == name);
    if(indexname >= 0) nameList.splice(indexname, 1)
}

const  updateName = (name:string, newName: string) => {
    const indexname = nameList.findIndex(value => value == name);
    if(indexname >= 0) nameList[indexname] = newName;
}
