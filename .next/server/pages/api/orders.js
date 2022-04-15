"use strict";
(() => {
var exports = {};
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ }),

/***/ 1266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6198);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/*
DATABASE DESIGN:
I created one database with two collections in mongodb. One was with with customer information in it and item information in it and the
other contained item information. I then created another collection which was intended to hold the customers orders 
when the users id was entered into the searchbar on the orders page along with the id of the item then the customers information along with the item 
information will be pulled from both collections and added to one document to the orders collection. This way a 
new order is created everytime a customer makes a new purchase and you can easily search 
all the customers orders by looking up their id.
I used vsCode to build this application
I am using NextJS on the frontend.
*/ 

// reference: how to create a post method with next.js https://www.techomoro.com/how-to-connect-mongodb-atlas-with-a-next-js-app/
async function handler(req, res) {
    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    const db = client.db("mobile-phone-store");
    switch(req.method){
        case "POST":
            let bodyObject = JSON.parse(req.body);
            let newPost = await db.collection("customeritems").insertOne(bodyObject);
            res.json(newPost);
            break;
        case "GET":
            const query = req.query.customeritems_id;
            //let custname = JSON.parse(req.searchedname);
            let posts = await db.collection("customeritems").findOne({
                "customerfromdatabase._id": query
            });
            res.json(posts);
            break;
        case "PUT":
            const updatecustname = req.query.customeritems_id;
            let update = await db.collection("customeritems").updateMany({
                "customerfromdatabase._id": updatecustname
            }, {
                $set: {
                    "customerfromdatabase.FirstName": req.body
                }
            });
            await db.collection("customers").updateOne({
                _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(updatecustname)
            }, {
                $set: {
                    FirstName: req.body
                }
            });
            res.json(update);
            break;
        case "DELETE":
            let deletevar = await db.collection("customeritems").deleteOne(req.body);
            console.log(`${deletevar.deletedCount} document(s) were deleted`);
            res.json(deletevar);
            break;
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1266));
module.exports = __webpack_exports__;

})();