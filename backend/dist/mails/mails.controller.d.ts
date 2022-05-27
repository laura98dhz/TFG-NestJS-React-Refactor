import { MailsService } from './mails.service';
export declare class MailsController {
    private readonly mailsService;
    constructor(mailsService: MailsService);
    sendEmailWelcome(email: any, name: any): Promise<void>;
    sendEmailPassword(email: any, name: any, password: any): Promise<void>;
}
