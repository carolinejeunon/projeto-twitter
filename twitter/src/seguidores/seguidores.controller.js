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
exports.SeguidoresController = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var SeguidoresController = /** @class */ (function () {
    function SeguidoresController(seguidoresService) {
        this.seguidoresService = seguidoresService;
    }
    SeguidoresController.prototype.create = function (createSeguidoresDto) {
        return this.seguidoresService.create(createSeguidoresDto);
    };
    SeguidoresController.prototype.findAll = function () {
        return this.seguidoresService.findAll();
    };
    SeguidoresController.prototype.findOne = function (id) {
        return this.seguidoresService.findOne(+id);
    };
    SeguidoresController.prototype.update = function (id, updateSeguidoresDto) {
        return this.seguidoresService.update(+id, updateSeguidoresDto);
    };
    SeguidoresController.prototype.remove = function (id) {
        return this.seguidoresService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], SeguidoresController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], SeguidoresController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SeguidoresController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SeguidoresController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SeguidoresController.prototype, "remove");
    SeguidoresController = __decorate([
        (0, common_1.Controller)('seguidores')
    ], SeguidoresController);
    return SeguidoresController;
}());
exports.SeguidoresController = SeguidoresController;
