import { Controller, Param, Post, Query } from '@nestjs/common';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {
    
    constructor(private readonly mailsService: MailsService) {}

    @Post('/welcome')
    async sendEmailWelcome(@Query('email') email: string, @Query('name') name: string) {        
        return await this.mailsService.sendMailWelcome(email, name);
    }

    @Post('/send')
    async sendEmailPassword(@Query('email') email: string, @Query('name') name: string) {        
        return await this.mailsService.sendMailPassword(email, name);
    } 
}
