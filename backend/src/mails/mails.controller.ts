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

    @Post('/form')
    async sendEmailForm(@Query('name') name: string, @Query('surname') surname: string, @Query('email') email: string, @Query('reason') reason: string, @Query('message') message: string ) {        
        return await this.mailsService.sendMailForm(name, surname, email, reason, message);
    } 
}
