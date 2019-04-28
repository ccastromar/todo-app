import { Payload } from 'src/interfaces/payload.interface';
import { UserService } from 'src/shared/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    signPayload(payload: Payload): Promise<string>;
    validateUser(payload: Payload): Promise<any>;
}
