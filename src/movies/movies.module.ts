import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

// 하나의 모듈안에는 Controller 랑 Provider 가지고 사용하는게 원칙.
@Module({
    controllers : [MoviesController],
    providers : [MoviesService],
})
export class MoviesModule {}
