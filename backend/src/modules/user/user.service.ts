import { PrismaClient, User } from "@prisma/client";
import prisma from "../utility/prisma";

export class UserService {
    prisma: PrismaClient = prisma;

    async findUserByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findFirst({
            where: { email: email },
        });
        return user;
    }
}
