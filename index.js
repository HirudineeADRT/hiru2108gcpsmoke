// This file is used to register all your cloud functions in GCP.
// DO NOT EDIT/DELETE THIS, UNLESS YOU KNOW WHAT YOU ARE DOING.

exports.hiru2108gcpsmokefunction = require("./hiru2108gcpsmoke/function.js").handler;
exports.hiru2108gcpsmokesamplehiru = require("./hiru2108gcpsmoke/samplehiru.js").handler;
exports.hiru2108gcpsmoketestsamplehiru = require("./hiru2108gcpsmoke/testsamplehiru.js").handler;
exports.hiru2108gcpsmoketesthiru77 = require("./hiru2108gcpsmoke/testhiru77.js").handler;