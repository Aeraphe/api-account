import { Request } from 'express';
import { AeroResponse } from '../../../core/response';

export class LoginResponse extends AeroResponse {
    constructor() {
        super();
    }
    create(req: Request, data: any): any {
        try {
            if (data.status != 200) {
                return {
                    error: 'Não foi possível criar o token',
                    status: data.status,
                    url: this.route.getRoute(req)
                };
            }
            return {
                message: 'Tokem de acesso criado com sucesso',
                status: data.status,
                data: [
                    {
                        name: data.user.name,
                        email: data.user.email,
                        roles: data.user.roles,
                        address: data.user.address,
                        cellphones: data.user.cellphones,
                        projecs: data.user.projecs
                    }
                ],
                token: data.token,
                url: this.route.getRoute(req)
            };
        } catch (err) {
            console.log(err, 'Error');
        }
    }
}

export default new LoginResponse();
