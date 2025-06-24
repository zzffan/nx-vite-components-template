import { action, computed, flow, makeObservable, observable } from 'mobx';
import ky from 'ky';

interface IUser {
    name: string;
}

export class User implements IUser {
    name = '哈哈哈';
    private say = 'x';

    constructor() {
        makeObservable(this, {
            name: observable,
            getSay: computed,
            resetName: action,
            changeName: action,
        });
    }

    get getSay() {
        return this.say;
    }

    resetName = () => {
        this.name = '哈哈哈';
    };

    changeName = (name: string) => {
        this.name = name;
    };

    getUserInfo = flow(function* (this: User) {
        try {
            const res = yield ky
                .post(`/api/ai/demo/gettraintext`, {
                    json: { type: 'speech' },
                })
                .json();

            console.log('res：', res);
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`获取信息失败 ${e.message}`);
            }
            throw e;
        }
    });
}
