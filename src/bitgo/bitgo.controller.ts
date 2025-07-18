import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BitgoService } from './bitgo.service';
import { CreateWalletDto } from './dto/create-wallet-dto';

@Controller('bitgo')
export class BitgoController {
  constructor(private readonly bitgoService: BitgoService) {}

  @Post('wallet')
  async createWallet(@Body() body: CreateWalletDto) {
    const bitgo = this.bitgoService.getBitgoInstance();

    try {
      // Create a new Bitcoin wallet (example for BTC, adjust for other coins)
      const walletData = await bitgo
        .coin('tbtc') // Use 'tbtc' for testnet Bitcoin, 'btc' for mainnet
        .wallets()
        .generateWallet({
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
  @Get('test')
  async testRole() {
    const bitgo = this.bitgoService.getBitgoInstance();
    const userInfo = await bitgo.me();
    console.log(userInfo);
  }
}
