import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Book {
  @ObjectIdColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  year: string;

  @Column()
  lang: string;
}
