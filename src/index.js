function writeHelloGithubPackageRegistry(){
    const msg = "Hey Github Package Registry!!";
    console.log(msg);
    console.log(process.env.PWD);
    return msg;
}

module.exports = { writeHelloGithubPackageRegistry };
