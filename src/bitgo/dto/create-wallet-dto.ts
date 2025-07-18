import { IsString, MinLength } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  label: string;

  @IsString()
  @MinLength(8, { message: 'Passphrase must be at least 8 characters long' })
  passphrase: string;
}
