function type_of(value) {
    return Object.prototype.toString.call(value).split("]")[0].split(" ")[1].toLowerCase();
}

export default type_of;