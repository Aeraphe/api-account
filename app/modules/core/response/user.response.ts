import { Request } from 'express';
import { AeroResponse } from '../../../core/response';

export class UserResponse extends AeroResponse {
    constructor() {
        super();
    }
    create(req: Request, data: any): any {
        try {
            if (data.status != 200) {
                return {
                    message: 'Não foi possível cadastrar o Usuário',
                    data
                };
            }
            return {
                message: 'Usuário cadastrado com sucesso!!!',
                status: data.status,
                data: [data.data],
                url: this.route.getRoute(req)
            };
        } catch (err) {
            console.log(err, 'Error');
        }
    }
}

export default new UserResponse();
