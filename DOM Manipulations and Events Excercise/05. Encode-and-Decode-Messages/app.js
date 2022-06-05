function encodeAndDecodeMessages() {
    let inputText = document.getElementsByTagName("textarea")[0];
    let outputText = document.getElementsByTagName("textarea")[1];
    document
        .getElementsByTagName("button")[0]
        .addEventListener("click", encode);
    document
        .getElementsByTagName("button")[1]
        .addEventListener("click", decode);


    let encryptedMsg = "";
    let decryptedMsg = "";

    function encode(e) {
        for (let i = 0; i < inputText.value.length; i++) {
            let char = inputText.value[i].charCodeAt() + 1;
            encryptedMsg += String.fromCharCode(char);
        }

        outputText.value = encryptedMsg;
        inputText.value = "";
        encryptedMsg = '';
    }
    function decode(e) {
        for (let i = 0; i < outputText.value.length; i++) {
            let char = outputText.value[i].charCodeAt() - 1;
            console.log(char);
            decryptedMsg += String.fromCharCode(char);
        }
        outputText.value = decryptedMsg;
        decryptedMsg = '';
    }
}
