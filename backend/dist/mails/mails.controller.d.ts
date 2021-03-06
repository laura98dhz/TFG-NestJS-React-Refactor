import { MailsService } from './mails.service';
export declare class MailsController {
    private readonly mailsService;
    constructor(mailsService: MailsService);
    sendEmailWelcome(email: string, name: string): Promise<void>;
    sendEmailPassword(email: string, name: string): Promise<void>;
    sendEmailForm(name: string, surname: string, email: string, reason: string, message: string): Promise<void>;
}
