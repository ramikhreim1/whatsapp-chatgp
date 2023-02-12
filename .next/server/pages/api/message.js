"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/message";
exports.ids = ["pages/api/message"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ "(api)/./pages/api/message.js":
/*!******************************!*\
  !*** ./pages/api/message.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openAI = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    const MessagingResponse = (__webpack_require__(/*! twilio */ \"twilio\").twiml.MessagingResponse);\n    var messageResponse = new MessagingResponse();\n    const sentMessage = req.body.Body || \"\";\n    let replyToBeSent = \"\";\n    if (sentMessage.trim().length === 0) {\n        replyToBeSent = \"We could not get your message. Please try again\";\n    } else {\n        try {\n            const completion = await openAI.createCompletion({\n                model: \"text-davinci-003\",\n                prompt: req.body.Body,\n                temperature: 0.6,\n                n: 1,\n                max_tokens: 50\n            });\n            replyToBeSent = removeIncompleteText(completion.data.choices[0].text);\n        } catch (error) {\n            if (error.response) {\n                replyToBeSent = \"There was an issue with the server\";\n            } else {\n                replyToBeSent = \"An error occurred during your request.\";\n            }\n        }\n    }\n    messageResponse.message(replyToBeSent);\n    // send response\n    res.writeHead(200, {\n        \"Content-Type\": \"text/xml\"\n    });\n    res.end(messageResponse.toString());\n}\nfunction removeIncompleteText(inputString) {\n    const match = inputString.match(/\\b\\.\\s\\d+/g);\n    const removeAfter = match ? inputString.slice(0, inputString.lastIndexOf(match[match.length - 1])) : inputString;\n    return removeAfter;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHb0I7QUFDaEIsTUFBTUUsZ0JBQWdCLElBQUlGLGlEQUFhQSxDQUFDO0lBQ3hDRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDbEM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUNkLGVBQWVNLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2hELE1BQU1DLG9CQUFvQkMscUVBQXlDO0lBQ25FLElBQUlFLGtCQUFrQixJQUFJSDtJQUMxQixNQUFNSSxjQUFjTixJQUFJTyxJQUFJLENBQUNDLElBQUksSUFBSTtJQUN6QyxJQUFJQyxnQkFBZ0I7SUFDcEIsSUFBSUgsWUFBWUksSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUNyQ0YsZ0JBQWdCO0lBQ2hCLE9BQU87UUFDUCxJQUFJO1lBQ0osTUFBTUcsYUFBYSxNQUFNZCxPQUFPZSxnQkFBZ0IsQ0FBQztnQkFDakRDLE9BQU87Z0JBQ1BDLFFBQVFmLElBQUlPLElBQUksQ0FBQ0MsSUFBSTtnQkFDckJRLGFBQWE7Z0JBQ2JDLEdBQUc7Z0JBQ0hDLFlBQVk7WUFFWjtZQUNBVCxnQkFBZ0JVLHFCQUFxQlAsV0FBV1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO1FBQ3BFLEVBQUUsT0FBT0MsT0FBTztZQUNoQixJQUFJQSxNQUFNQyxRQUFRLEVBQUU7Z0JBQ3BCZixnQkFBZ0I7WUFDaEIsT0FBTztnQkFDUEEsZ0JBQWdCO1lBQ2hCLENBQUM7UUFDRDtJQUNBLENBQUM7SUFDREosZ0JBQWdCb0IsT0FBTyxDQUFDaEI7SUFDeEIsZ0JBQWdCO0lBQ2hCUixJQUFJeUIsU0FBUyxDQUFDLEtBQUs7UUFDbkIsZ0JBQWdCO0lBQ2hCO0lBQ0F6QixJQUFJMEIsR0FBRyxDQUFDdEIsZ0JBQWdCdUIsUUFBUTtBQUNoQyxDQUFDO0FBRUQsU0FBU1QscUJBQXFCVSxXQUFXLEVBQUU7SUFDdkMsTUFBTUMsUUFBUUQsWUFBWUMsS0FBSyxDQUFDO0lBQ2hDLE1BQU1DLGNBQWNELFFBQVFELFlBQVlHLEtBQUssQ0FBQyxHQUFHSCxZQUFZSSxXQUFXLENBQUNILEtBQUssQ0FBQ0EsTUFBTW5CLE1BQU0sR0FBRyxFQUFFLEtBQUtrQixXQUFXO0lBQ2hILE9BQU9FO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0c2FwcC5jaGF0Ym90Ly4vcGFnZXMvYXBpL21lc3NhZ2UuanM/ZmRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29uZmlndXJhdGlvbixcclxuICAgIE9wZW5BSUFwaVxyXG4gICAgfSBmcm9tIFwib3BlbmFpXCI7XHJcbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xyXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb3BlbkFJID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcclxuICAgIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IE1lc3NhZ2luZ1Jlc3BvbnNlID0gcmVxdWlyZSgndHdpbGlvJykudHdpbWwuTWVzc2FnaW5nUmVzcG9uc2U7XHJcbiAgICB2YXIgbWVzc2FnZVJlc3BvbnNlID0gbmV3IE1lc3NhZ2luZ1Jlc3BvbnNlKCk7XHJcbiAgICBjb25zdCBzZW50TWVzc2FnZSA9IHJlcS5ib2R5LkJvZHkgfHwgJyc7XHJcbmxldCByZXBseVRvQmVTZW50ID0gXCJcIjtcclxuaWYgKHNlbnRNZXNzYWdlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxucmVwbHlUb0JlU2VudCA9IFwiV2UgY291bGQgbm90IGdldCB5b3VyIG1lc3NhZ2UuIFBsZWFzZSB0cnkgYWdhaW5cIjtcclxufSBlbHNlIHtcclxudHJ5IHtcclxuY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5BSS5jcmVhdGVDb21wbGV0aW9uKHtcclxubW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLCAvLyByZXF1aXJlZFxyXG5wcm9tcHQ6IHJlcS5ib2R5LkJvZHksIC8vIGNvbXBsZXRpb24gYmFzZWQgb24gdGhpc1xyXG50ZW1wZXJhdHVyZTogMC42LCAvL1xyXG5uOiAxLFxyXG5tYXhfdG9rZW5zOiA1MCxcclxuLy8gc3RvcDogXCIuXCJcclxufSk7XHJcbnJlcGx5VG9CZVNlbnQgPSByZW1vdmVJbmNvbXBsZXRlVGV4dChjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0KVxyXG59IGNhdGNoIChlcnJvcikge1xyXG5pZiAoZXJyb3IucmVzcG9uc2UpIHtcclxucmVwbHlUb0JlU2VudCA9IFwiVGhlcmUgd2FzIGFuIGlzc3VlIHdpdGggdGhlIHNlcnZlclwiXHJcbn0gZWxzZSB7IC8vIGVycm9yIGdldHRpbmcgcmVzcG9uc2VcclxucmVwbHlUb0JlU2VudCA9IFwiQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHlvdXIgcmVxdWVzdC5cIjtcclxufVxyXG59XHJcbn1cclxubWVzc2FnZVJlc3BvbnNlLm1lc3NhZ2UocmVwbHlUb0JlU2VudCk7XHJcbi8vIHNlbmQgcmVzcG9uc2VcclxucmVzLndyaXRlSGVhZCgyMDAsIHtcclxuJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3htbCdcclxufSk7XHJcbnJlcy5lbmQobWVzc2FnZVJlc3BvbnNlLnRvU3RyaW5nKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJbmNvbXBsZXRlVGV4dChpbnB1dFN0cmluZykge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBpbnB1dFN0cmluZy5tYXRjaCgvXFxiXFwuXFxzXFxkKy9nKTtcclxuICAgIGNvbnN0IHJlbW92ZUFmdGVyID0gbWF0Y2ggPyBpbnB1dFN0cmluZy5zbGljZSgwLCBpbnB1dFN0cmluZy5sYXN0SW5kZXhPZihtYXRjaFttYXRjaC5sZW5ndGggLSAxXSkpIDogaW5wdXRTdHJpbmc7XHJcbiAgICByZXR1cm4gcmVtb3ZlQWZ0ZXJcclxuICAgIH1cclxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbkFJIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIk1lc3NhZ2luZ1Jlc3BvbnNlIiwicmVxdWlyZSIsInR3aW1sIiwibWVzc2FnZVJlc3BvbnNlIiwic2VudE1lc3NhZ2UiLCJib2R5IiwiQm9keSIsInJlcGx5VG9CZVNlbnQiLCJ0cmltIiwibGVuZ3RoIiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsInRlbXBlcmF0dXJlIiwibiIsIm1heF90b2tlbnMiLCJyZW1vdmVJbmNvbXBsZXRlVGV4dCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwid3JpdGVIZWFkIiwiZW5kIiwidG9TdHJpbmciLCJpbnB1dFN0cmluZyIsIm1hdGNoIiwicmVtb3ZlQWZ0ZXIiLCJzbGljZSIsImxhc3RJbmRleE9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/message.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/message.js"));
module.exports = __webpack_exports__;

})();