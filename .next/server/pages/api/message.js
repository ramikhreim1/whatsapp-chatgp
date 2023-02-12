"use strict";
(() => {
var exports = {};
exports.id = 439;
exports.ids = [439];
exports.modules = {

/***/ 202:
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ 741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/message.js

const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openAI = new external_openai_namespaceObject.OpenAIApi(configuration);
async function handler(req, res) {
    const MessagingResponse = (__webpack_require__(202).twiml.MessagingResponse);
    var messageResponse = new MessagingResponse();
    const sentMessage = req.body.Body || "";
    let replyToBeSent = "";
    if (sentMessage.trim().length === 0) {
        replyToBeSent = "We could not get your message. Please try again";
    } else {
        try {
            const completion = await openAI.createCompletion({
                model: "text-davinci-003",
                prompt: req.body.Body,
                temperature: 0.6,
                n: 1,
                max_tokens: 50
            });
            replyToBeSent = removeIncompleteText(completion.data.choices[0].text);
        } catch (error) {
            if (error.response) {
                replyToBeSent = "There was an issue with the server";
            } else {
                replyToBeSent = "An error occurred during your request.";
            }
        }
    }
    messageResponse.message(replyToBeSent);
    // send response
    res.writeHead(200, {
        "Content-Type": "text/xml"
    });
    res.end(messageResponse.toString());
}
function removeIncompleteText(inputString) {
    const match = inputString.match(/\b\.\s\d+/g);
    const removeAfter = match ? inputString.slice(0, inputString.lastIndexOf(match[match.length - 1])) : inputString;
    return removeAfter;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(741));
module.exports = __webpack_exports__;

})();