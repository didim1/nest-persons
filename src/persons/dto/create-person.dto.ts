import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
export class CreatePersonDto {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsInt({ always: true })
  @Type(() => Number)
  age: string;
}
