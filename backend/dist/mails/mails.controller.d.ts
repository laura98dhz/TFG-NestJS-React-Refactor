import { MailsService } from './mails.service';
export declare class MailsController {
    private readonly mailsService;
    constructor(mailsService: MailsService);
    sendEmailWelcome(email: string, name: string): Promise<void>;
    sendEmailPassword(email: string, name: string): Promise<void>;
}
