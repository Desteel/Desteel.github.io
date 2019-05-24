export interface IEventValue {
    target: {
        value: string | number;
    };
}

export type TCardItem = {
    id: string;
    photoUrl: string;
    name: string;
    lastname: string;
    phoneValues: Array<number | string>;
    address: string;
};
