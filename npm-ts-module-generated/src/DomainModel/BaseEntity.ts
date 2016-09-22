'use strict';

import {BaseCoreEntity} from './BaseCoreEntity';

export class BaseEntity extends BaseCoreEntity {

    public IsActive(): boolean {
        return false;
    }
}
