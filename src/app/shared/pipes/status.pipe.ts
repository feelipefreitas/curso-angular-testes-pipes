import { Pipe, PipeTransform } from "@angular/core";
import { UserStatusEnum } from "../enums/user-status.enum";

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {
    transform(status: number): string {
        if(status === UserStatusEnum.ACTIVE) {
            return 'Ativo';
        } else if(status === UserStatusEnum.INACTIVE) {
            return 'Inativo';
        } else {
            return 'Outro';
        }
    }
}