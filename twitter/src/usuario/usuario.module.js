"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsuarioModule = void 0;
var common_1 = require("@nestjs/common");
var usuario_service_1 = require("./usuario.service");
var usuario_controller_1 = require("./usuario.controller");
var prisma_module_1 = require("../../../../../../../../../../src/prisma/prisma.module");
var UsuarioModule = /** @class */ (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        (0, common_1.Module)({
            imports: [prisma_module_1.PrismaModule],
            controllers: [usuario_controller_1.UsuarioController],
            providers: [usuario_service_1.UsuarioService]
        })
    ], UsuarioModule);
    return UsuarioModule;
}());
exports.UsuarioModule = UsuarioModule;
