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
exports.SeguindoController = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var SeguindoController = /** @class */ (function () {
    function SeguindoController(seguindoService) {
        this.seguindoService = seguindoService;
    }
    SeguindoController.prototype.create = function (createSeguindoDto) {
        return this.seguindoService.create(createSeguindoDto);
    };
    SeguindoController.prototype.findAll = function () {
        return this.seguindoService.findAll();
    };
    SeguindoController.prototype.findOne = function (id) {
        return this.seguindoService.findOne(+id);
    };
    SeguindoController.prototype.update = function (id, updateSeguindoDto) {
        return this.seguindoService.update(+id, updateSeguindoDto);
    };
    SeguindoController.prototype.remove = function (id) {
        return this.seguindoService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], SeguindoController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], SeguindoController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SeguindoController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SeguindoController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SeguindoController.prototype, "remove");
    SeguindoController = __decorate([
        (0, common_1.Controller)('seguindo')
    ], SeguindoController);
    return SeguindoController;
}());
exports.SeguindoController = SeguindoController;
