import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// nestjs는 Express,Fastify(Express보다 빠름) 위에서 돌아감.
// Express -> Fastify, Fastify -> Express 로 전환이 가능하기떄문에 
// 둘중 하나의 프레임워크 방식으로 쓰는것보다 nestjs 방식으로 하면 두가지 프레임워크에서 잘 돌아감.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사 파이프 (미들웨어 같은거라고 봐도됨)
  // validationPipe 옵션 같은건 여러가지 있으니 찾아보기!
  // whitelist는 decorator없는 프로퍼티는 validator에 도달못함
  // forbidNonWhitelisted는 리퀘스트를 막아버림(이상한거 보낼때)
  // tranform 은 유저들이 보낸걸 우리가 원하는 실제 타입으로 변환함(query 값은 모든게 string으로 읽혀지기 떄문)
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true, 
    forbidNonWhitelisted : true,
    transform : true
  }));
  await app.listen(3000);
}
bootstrap();
