import { MailerService } from "@nestjs-modules/mailer";
export declare class MailsService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendMailWelcome(email: string, name: string): Promise<void>;
    sendMailPassword(email: string, name: string): Promise<void>;
    sendMailForm(name: string, surname: string, email: string, reason: string, message: string): Promise<void>;
}
