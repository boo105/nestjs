import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// Controller(매개변수) 에서 매개변수가 url의 엔트리 포인트가 된다.
@Controller('movies')
export class MoviesController {

    // 매개변수에 접근 제한자를 사용한 변수를 쓰면
    // 객체가 가지는 변수를 만든것이나 마찬가지임.
    constructor(private readonly moviesService : MoviesService){} 
    
    @Get()
    getAll() : Movie[]
    {
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") movieId : number) : Movie 
    {
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData : CreateMovieDto)
    {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieId : number)
    {
        return this.moviesService.deleteOne(movieId);
    }
    // put은 전체 업데이트 patch는 일부분 업데이트
    @Patch("/:id")
    patch(@Param('id') movieId : number, @Body() updateData : UpdateMovieDto)
    {
        return this.moviesService.update(movieId, updateData);
    }
}
