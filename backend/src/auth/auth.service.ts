import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Payload } from 'src/interfaces/payload.interface';
import { UserService } from 'src/shared/user.service';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
  
    async signPayload(payload: Payload) {
      //TODO get from env
      const SECRET_KEY: string = "enunlugardelamancha";
      return sign(payload, SECRET_KEY, { expiresIn: '1h' });
    }
  
    async validateUser(payload: Payload) {
      return await this.userService.findByPayload(payload);
    }
  }