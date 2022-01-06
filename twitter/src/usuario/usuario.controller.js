"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UsuarioController = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var UsuarioController = /** @class */ (function () {
    function UsuarioController(usuarioService) {
        this.usuarioService = usuarioService;
    }
    UsuarioController.prototype.create = function (createUsuarioDto) {
        return this.usuarioService.create(createUsuarioDto);
    };
    UsuarioController.prototype.findAll = function () {
        return this.usuarioService.findAll();
    };
    UsuarioController.prototype.findOne = function (id) {
        return this.usuarioService.findOne(+id);
    };
    UsuarioController.prototype.update = function (id, updateUsuarioDto) {
        return this.usuarioService.update(+id, updateUsuarioDto);
    };
    UsuarioController.prototype.remove = function (id) {
        return this.usuarioService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], UsuarioController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], UsuarioController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UsuarioController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], UsuarioController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UsuarioController.prototype, "remove");
    UsuarioController = __decorate([
        (0, common_1.Controller)('usuario')
    ], UsuarioController);
    return UsuarioController;
}());
exports.UsuarioController = UsuarioController;
