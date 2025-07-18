import { Controller, Post, Body } from '@nestjs/common';
import { BitgoService } from './bitgo.service';
import { CreateWalletDto } from './dto/create-wallet-dto';

@Controller('bitgo')
export class BitgoController {
  constructor(private readonly bitgoService: BitgoService) {}

  @Post('wallet')
  async createWallet(@Body() body: CreateWalletDto) {
    const bitgo = this.bitgoService.getBitgoInstance();

    try {
      const walletData = await bitgo.coin('tbtc').wallets().generateWallet({
        label: body.label,
        passphrase: body.passphrase,
        enterprise: '6879f813fd80a9fd8402333bb331619c',
      });

      return {
        walletId: walletData.wallet.id(),
        address: walletData.wallet.receiveAddress(),
      };
    } catch (error) {
      throw new Error(`Failed to create wallet: ${error.message}`);
    }
  }
}
