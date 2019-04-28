import { Model } from 'mongoose';
import { LoginDTO, RegisterDTO } from '../auth/dto/auth.dto';
import { Payload } from '../interfaces/payload.interface';
import { User } from '../interfaces/user.interface';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    create(userDTO: RegisterDTO): Promise<any>;
    find(): Promise<any>;
    findByLogin(userDTO: LoginDTO): Promise<any>;
    findByPayload(payload: Payload): Promise<any>;
}
