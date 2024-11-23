import { PrismaClient } from "@prisma/client";
import { events } from "core";

async function seed() {
    const prisma = new PrismaClient();

    const transactions = events.map(async (event) => {
        await prisma.event.create({
            data: {
                id: event.id,
                alias: event.alias,
                password: event.password,
                name: event.name,
                date: event.date,
                location: event.location,
                description: event.description,
                image: event.image,
                imageBackground: event.imageBackground,
                expectedAudience: event.expectedAudience,
                inviteds: {
                  create: event.inviteds.map((invited) => ({
                    id: invited.id,
                    name: invited.name,
                    email: invited.email,
                    confirmed: invited.confirmed,
                    hasCompanion: invited.hasCompanion,
                    qtCompanions: invited.qtCompanions,
                  })),
                },
              },
        })
    })
    await Promise.all(transactions);
}

seed();