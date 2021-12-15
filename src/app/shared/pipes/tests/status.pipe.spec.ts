import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UserStatusEnum } from "../../enums/user-status.enum";
import { StatusPipe } from "../status.pipe";

describe('StatusPipe', () => {
    const USER_STATUS_OTHER = 3;
    
    describe('Integrated Tests', () => {
        @Component({
            template: `Status: {{ userStatus | status }}`
        })
        class StatusPipeTestComponent { 
            userStatus: number = 0;
        }

        let component: StatusPipeTestComponent;
        let fixture: ComponentFixture<StatusPipeTestComponent>;
        let htmlElement: HTMLElement;

        beforeEach(() => {
            TestBed.configureTestingModule({
               declarations: [ StatusPipeTestComponent, StatusPipe ],
            });

            fixture = TestBed.createComponent(StatusPipeTestComponent);
            component = fixture.componentInstance;
            htmlElement = fixture.nativeElement;
        });

        it('Should return the status "Ativo"', () => {
            component.userStatus = UserStatusEnum.ACTIVE;
            fixture.detectChanges();
 
            expect(htmlElement.textContent).toBe('Status: Ativo');
        });

        it('Should return the status "Inativo"', () => {
            component.userStatus = UserStatusEnum.INACTIVE;
            fixture.detectChanges();

            expect(htmlElement.textContent).toBe('Status: Inativo');
        });

        it('Should return the status "Outro"', () => {
            component.userStatus = USER_STATUS_OTHER;
            fixture.detectChanges();

            expect(htmlElement.textContent).toBe('Status: Outro');
        });
    });

    describe('Isolated Tests', () => {
        const statusPipe = new StatusPipe();
        
        it('Should return the status "Ativo"', () => {
            expect(statusPipe.transform(UserStatusEnum.ACTIVE)).toBe('Ativo');
        });

        it('Should return the status "Inativo"', () => {
            expect(statusPipe.transform(UserStatusEnum.INACTIVE)).toBe('Inativo');
        });

        it('Should return the status "Outro"', () => {
            expect(statusPipe.transform(USER_STATUS_OTHER)).toBe('Outro');
        });
    });
});