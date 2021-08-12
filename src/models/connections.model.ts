
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './users.model';

@Table
export class Connection extends Model {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @Column
    type: string;

    @Column(DataType.JSON)
    meta: any;
}