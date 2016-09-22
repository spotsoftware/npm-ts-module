import * as Infrastructure from "npm-ts-module";

export class Currency extends Infrastructure.DomainModel.BaseEntity {

    public Code(): string {
        return "EUR";
    }

    public Test() {
        var isActive = this.IsActive();
    }

}
