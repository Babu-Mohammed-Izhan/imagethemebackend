import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imgurl: string;

  @Column()
  colorScheme1: string;

  @Column()
  colorScheme2: string;

  @Column()
  colorScheme3: string;

  @Column()
  colorScheme4: string;

  @Column()
  colorScheme5: string;
}
