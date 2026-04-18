import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Shorten')
export class URLShortenEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @Column()
  short_code!: string;

  @Column()
  created_at!: string;

  @Column()
  updated_at!: string;

  @Column()
  access_count!: number;
}
