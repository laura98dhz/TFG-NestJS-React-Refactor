"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const imagenes_helper_1 = require("./helpers/imagenes.helper");
const imagenes_service_1 = require("./imagenes.service");
let ImagenesController = class ImagenesController {
    constructor(imagenesService) {
        this.imagenesService = imagenesService;
    }
    async uploadFiles(id, files) {
        return await this.imagenesService.uploadFiles(id, files);
    }
    async getPaths(id) {
        return await this.imagenesService.getPath(id);
    }
    async getFile(path, res) {
        console.log(path);
    }
};
__decorate([
    (0, common_1.Post)('upload/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 5, {
        storage: (0, multer_1.diskStorage)({
            destination: './upload',
            filename: imagenes_helper_1.renameImage
        }),
        fileFilter: imagenes_helper_1.fileFilter
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], ImagenesController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.Get)('/getPaths/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImagenesController.prototype, "getPaths", null);
__decorate([
    (0, common_1.Get)('/getImage/:path'),
    __param(0, (0, common_1.Query)('path')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ImagenesController.prototype, "getFile", null);
ImagenesController = __decorate([
    (0, common_1.Controller)('imagenes'),
    __metadata("design:paramtypes", [imagenes_service_1.ImagenesService])
], ImagenesController);
exports.ImagenesController = ImagenesController;
//# sourceMappingURL=imagenes.controller.js.map