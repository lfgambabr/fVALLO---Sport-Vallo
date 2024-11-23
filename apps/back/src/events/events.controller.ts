import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { DateFormat, events, Event, Id, Invited, completeEvent, completeInvited} from 'core';
import { EventPrisma } from './event.prisma';

@Controller('events')
export class EventsController {
    constructor(readonly repo: EventPrisma) {

    }

    @Post()
    async saveEvent(@Body() event: Event) {
      const eventDuplicate = await this.repo.findByAlias(event.alias);

      if (eventDuplicate && eventDuplicate.id !== event.id) {
        throw new HttpException('Já existe um evento com esse alias.', 400);
      }
  
      const eventComplete = completeEvent(this.deserialize(event));
      await this.repo.saveEvent(eventComplete);
    }

    @Post(':alias/invited')
    async saveInvited(
      @Param('alias') alias: string,
      @Body() invited: Invited,
    ) {
  
      const event = await this.repo.findByAlias(alias);
  
      if (!event) {
        throw new HttpException('Evento não encontrado.', 400);
      }
  
      const invitedComplete = completeInvited(invited);
      await this.repo.saveInvited(event, invitedComplete);
    }


    @Get()
    async findEvents() {
        return this.repo.findAll() as any;    
    }

    @Get(':idOrAlias')
    async findEvent(@Param('idOrAlias') idOrAlias: string) {
      let event: Event;
      if (Id.validateId(idOrAlias)) {
        event = await this.repo.findById(idOrAlias, true);
      } else {
        event = await this.repo.findByAlias(idOrAlias, true);
      }
      return this.serialize(event);
    }

    @Get('validate/:alias/:id')
    async validateAlias(@Param('alias') alias: string, @Param('id') id: string) {
      const event = events.find((event) => event.alias === alias
    );
      return { valid: !event || event.id === id };
    }

    @Post('access')
    async accessEvent(@Body() data: { id: string; password: string }) {
      const event = await this.repo.findById(data.id);

      if (!event) {
        throw new HttpException('Evento não encontrado.', 400);
      }
  
      console.log(event.password+' '+data.password);
      if (event.password !== data.password) {
        throw new HttpException('Senha não corresponde ao evento.', 400);
      }
      
      return this.serialize(event);
    }

    private serialize(event: Event) {
        if (!event) return null;
        return {
            ...event,
            date: DateFormat.dtos(event.date),
        }
    }

    private deserialize(event: any): Event {
        if (!event) return null;
        return {
          ...event,
          date: DateFormat.stod(event.date),
        } as Event;
      }



}
