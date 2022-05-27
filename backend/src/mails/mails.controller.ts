import { Controller, Param, Post, Query } from '@nestjs/common';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {
    
    constructor(private readonly mailsService: MailsService) {}

    @Post('welcome')
    async sendEmailWelcome(@Query() email: any, @Query() name: any) {        
        return await this.mailsService.sendMailWelcome(email.email, name.name);
    }

    @Post('send')
    async sendEmailPassword(@Query() email: any, @Query() name: any, @Query() password: any) {        
        return await this.mailsService.sendMailPassword(email.email, name.name, password.password);
    } 
}
