import { IsInt } from 'class-validator';
import {
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator/types/decorator/decorators';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
