/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import { BaseEntity  } from "../src/DomainModel/BaseEntity";
import * as chai from "chai";

const expect = chai.expect;

describe("BaseEntity", () => {
  it("should not be active", () => {
    const entity = new BaseEntity();
    expect(entity.IsActive()).to.equal(false);
  });
});
