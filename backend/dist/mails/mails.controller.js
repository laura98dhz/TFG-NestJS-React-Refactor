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
exports.MailsController = void 0;
const common_1 = require("@nestjs/common");
const mails_service_1 = require("./mails.service");
let MailsController = class MailsController {
    constructor(mailsService) {
        this.mailsService = mailsService;
    }
    async sendEmailWelcome(email, name) {
        return await this.mailsService.sendMailWelcome(email, name);
    }
    async sendEmailPassword(email, name) {
        return await this.mailsService.sendMailPassword(email, name);
    }
    async sendEmailForm(name, surname, email, reason, message) {
        return await this.mailsService.sendMailForm(name, surname, email, reason, message);
    }
};
__decorate([
    (0, common_1.Post)('/welcome'),
    __param(0, (0, common_1.Query)('email')),
    __param(1, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MailsController.prototype, "sendEmailWelcome", null);
__decorate([
    (0, common_1.Post)('/send'),
    __param(0, (0, common_1.Query)('email')),
    __param(1, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MailsController.prototype, "sendEmailPassword", null);
__decorate([
    (0, common_1.Post)('/form'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('surname')),
    __param(2, (0, common_1.Query)('email')),
    __param(3, (0, common_1.Query)('reason')),
    __param(4, (0, common_1.Query)('message')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], MailsController.prototype, "sendEmailForm", null);
MailsController = __decorate([
    (0, common_1.Controller)('mails'),
    __metadata("design:paramtypes", [mails_service_1.MailsService])
], MailsController);
exports.MailsController = MailsController;
//# sourceMappingURL=mails.controller.js.map