import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StatusPipe } from "../status.pipe";

describe('StatusPipe', () => {

    describe('Integrated tests', () => {
        @Component({
            template: `Status: {{ status | status }}`
        })
        class TestComponent {
            status: number = 0;
        }

        let component: TestComponent;
        let fixture: ComponentFixture<TestComponent>;
        let el: HTMLElement;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [StatusPipe, TestComponent]
            });

            fixture = TestBed.createComponent(TestComponent);
            component = fixture.componentInstance;
            el = fixture.nativeElement;
        });

        it('Should render the status "Ativo"', () => {
            component.status = 1;
            fixture.detectChanges();
            expect(el.textContent).toContain('Status: Ativo');
        });

        it('Should render the status "Inativo"', () => {
            component.status = 2;
            fixture.detectChanges();
            expect(el.textContent).toContain('Status: Inativo');
        });

        it('Should render the status "Outro"', () => {
            component.status = 3;
            fixture.detectChanges();
            expect(el.textContent).toContain('Status: Outro');
        });
    });

    describe('Isolated tests', () => {
        const statusPipe = new StatusPipe();

        it('Should return the status "Ativo"', () => {
            expect(statusPipe.transform(1)).toBe('Ativo');
        });

        it('Should return the status "Inativo"', () => {
            expect(statusPipe.transform(2)).toBe('Inativo');
        });

        it('Should return the status "Outro"', () => {
            expect(statusPipe.transform(3)).toBe('Outro');
        });
    });
});