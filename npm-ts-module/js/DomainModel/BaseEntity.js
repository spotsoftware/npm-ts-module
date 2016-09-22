'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseCoreEntity_1 = require('./BaseCoreEntity');
var BaseEntity = (function (_super) {
    __extends(BaseEntity, _super);
    function BaseEntity() {
        _super.apply(this, arguments);
    }
    BaseEntity.prototype.IsActive = function () {
        return false;
    };
    return BaseEntity;
}(BaseCoreEntity_1.BaseCoreEntity));
exports.BaseEntity = BaseEntity;
