"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Infrastructure = require("npm-ts-module");
var Currency = (function (_super) {
    __extends(Currency, _super);
    function Currency() {
        _super.apply(this, arguments);
    }
    Currency.prototype.Code = function () {
        return "EUR";
    };
    Currency.prototype.Test = function () {
        var isActive = this.IsActive();
    };
    return Currency;
}(Infrastructure.DomainModel.BaseEntity));
exports.Currency = Currency;
