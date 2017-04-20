export default (req, res, next) => {
    let now = new Date();
    let d = `${ leadZero(now.getDate()) }/${ leadZero(now.getMonth() + 1) }/${ now.getFullYear() } ${ leadZero(now.getHours()) }:${ leadZero(now.getMinutes()) }:${ leadZero(now.getSeconds()) }`;
    console.log(`Request Received: ${ d }`);
    return next();
}

const leadZero = (val) => {
    let temp = `0${ val }`;
    return temp.slice(-2);
};