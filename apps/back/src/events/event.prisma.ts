import { Injectable } from '@nestjs/common';
import { Event, Invited } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
    constructor(readonly prisma: PrismaProvider) {}

    saveEvent(event: Event) {
        return this.prisma.event.create({
          data: {
            ...(event as any),
            inviteds: { create: event.inviteds },
          },
        });
      }
    
      saveInvited(event: Event, invited: Invited) {
        return this.prisma.invited.create({
          data: {
            ...invited,
            qtCompanions: +(invited.qtCompanions ?? 0),
            event: { connect: { id: event.id } },
          },
        });
      }
    
      async findAll(): Promise<Event[]> {
        return this.prisma.event.findMany() as any;
      }
    
      async findById(
        id: string,
        complete: boolean = false,
      ): Promise<Event | null> {
        return this.prisma.event.findUnique({
          where: { id },
          include: { inviteds: complete },
        }) as any;
      }
    
      async findByAlias(
        alias: string,
        complete: boolean = false,
      ): Promise<Event | null> {
        return this.prisma.event.findUnique({
          select: {
            id: true,
            name: true,
            description: true,
            date: true,
            location: true,
            image: true,
            imageBackground: true,
            alias: true,
            password: complete,
            expectedAudience: complete,
            inviteds: complete,
          },
          where: { alias },
        }) as any;
      }
}
