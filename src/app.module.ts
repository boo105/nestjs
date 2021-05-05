import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

/**
 * Provider와 Module이란? : https://velog.io/@ordidxzero/nest-provider-and-module
 * 모듈 종류 : https://velog.io/@kimjeongwonn/NestJS-%EB%8F%85%ED%95%99-Module
 */
// 모든 모듈은 싱글톤임.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
