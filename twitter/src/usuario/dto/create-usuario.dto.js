"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUsuarioDto = void 0;
/* eslint-disable prettier/prettier */
var class_validator_1 = require("class-validator");
/* eslint-disable prettier/prettier */
var CreateUsuarioDto = /** @class */ (function () {
    function CreateUsuarioDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateUsuarioDto.prototype, "nome");
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateUsuarioDto.prototype, "imagem");
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateUsuarioDto.prototype, "bio");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsDate)()
    ], CreateUsuarioDto.prototype, "nascimento");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateUsuarioDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateUsuarioDto.prototype, "senha");
    return CreateUsuarioDto;
}());
exports.CreateUsuarioDto = CreateUsuarioDto;
