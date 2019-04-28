import { Payload } from '../interfaces/payload.interface';
import { UserService } from '../shared/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    signPayload(payload: Payload): Promise<string>;
    validateUser(payload: Payload): Promise<any>;
}
