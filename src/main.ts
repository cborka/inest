import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setViewEngine('html');


  await app.listen(PORT, () => console.log(`Сервер стартанул на порту ${PORT}`))
//  const app = await NestFactory.create(AppModule);
//  await app.listen(3000);
}
bootstrap();
