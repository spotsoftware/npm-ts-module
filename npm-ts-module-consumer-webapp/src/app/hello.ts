import * as Infrastructure from 'npm-ts-module-generated';

export const hello: angular.IComponentOptions = {
  template: require('./hello.html'),
  controller: function () { // eslint-disable-line babel/object-shorthand
    this.hello = 'Hello World!';

    var entity: Infrastructure.DomainModel.BaseEntity = new Infrastructure.DomainModel.BaseEntity();

    console.log('inheritance test: ', entity.IsActive());
  }
};
