import { OrderBtnDirective } from "./order-btn.directive";
import { Component, DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

@Component({
  selector: "foo",
  template: "<div [appOrderBtn]=book></div>"
})
export class fooComp {
  book = {
    title: "REST und HTTPS",
    subtitle: "Entwicklung und Integration nach dem Architekturstil des Web",
    isbn: "978-3-86490-120-1",
    abstract:
      "Das Buch bietet eine theoretisch fundierte, vor allem aber praxistaugliche Anleitung zum professionellen Einsatz von RESTful HTTP. Es beschreibt den Architekturstil REST (Representational State Transfer) und seine Umsetzung im Rahmen der Protokolle des World Wide Web (HTTP, URIs und andere).",
    numPages: 330,
    author: "Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf",
    publisher: {
      name: "dpunkt.verlag",
      url: "http://dpunkt.de/"
    },
    id: "978-3-86490-120-1"
  };
}

describe("OrderBtnDirective", () => {
  let component: fooComp;
  let directive: OrderBtnDirective;
  let fixture: ComponentFixture<fooComp>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [fooComp, OrderBtnDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(fooComp);
    component = fixture.componentInstance;

    fixture.detectChanges();
    element = fixture.debugElement;

    directive = fixture.debugElement
      .query(By.directive(OrderBtnDirective))
      .injector.get(OrderBtnDirective);
  });

  it("should create an comp instance", () => {
    expect(component).toBeTruthy();
  });
  it("should create an instance", () => {
    expect(directive).toBeTruthy();
  });
  it("should log to console", () => {
    spyOn(console, "log").and.callThrough();

    directive.orderBtnElement.click();
    expect(console.log).toHaveBeenCalled();
  });
});

let add = (a, b) => a + b;
