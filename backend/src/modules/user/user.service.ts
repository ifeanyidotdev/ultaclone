import { PrismaClient, User } from "@prisma/client";



export class UserService {

    prisma: PrismaClient = new PrismaClient()

    async findUserByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findFirst({where: {email: email}})
        return user
    }

}