"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UpdateSeguindoDto = void 0;
/* eslint-disable prettier/prettier */
var swagger_1 = require("@nestjs/swagger");
var create_seguindo_dto_1 = require("./create-seguindo.dto");
var UpdateSeguindoDto = /** @class */ (function (_super) {
    __extends(UpdateSeguindoDto, _super);
    function UpdateSeguindoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateSeguindoDto;
}((0, swagger_1.PartialType)(create_seguindo_dto_1.CreateSeguindoDto)));
exports.UpdateSeguindoDto = UpdateSeguindoDto;
