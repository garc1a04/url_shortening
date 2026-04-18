import { ApiProperty } from '@nestjs/swagger';

export class ResponseOk {
  constructor(status: boolean, mensagem: string) {
    this.status = status;
    this.mensagem = mensagem;
  }
  @ApiProperty()
  status!: boolean;

  @ApiProperty()
  mensagem!: string;
}
