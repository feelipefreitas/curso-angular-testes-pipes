import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {
    transform(status: number): string {
        if(status === 1) {
            return 'Ativo';
        } else if(status === 2) {
            return 'Inativo';
        } else {
            return 'Outro';
        }
    }
}