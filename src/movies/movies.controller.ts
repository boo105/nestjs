import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

// Controller(매개변수) 에서 매개변수가 url의 엔트리 포인트가 된다.
@Controller()
export class MoviesController {
    @Get()
    getAll() 
    {
        return "This will return all movies";
    }

    @Get("/search")
    search(@Query("year") searchingYear : string)
    {
        return `We are searching for a movie made after : ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param("id") id : string)
    {
        return `This will return one movie with the id : ${id}`;
    }

    @Post()
    create(@Body() movieData)
    {
        return movieData;
    }

    @Delete("/:id")
    remove(@Param("id") movieId : string)
    {
        return `This will delete a movie with the id : ${movieId}`;
    }
    // put은 전체 업데이트 patch는 일부분 업데이트
    @Patch("/:id")
    patch(@Param('id') movieId : string, @Body() updateData)
    {
        return {
            updateMovie : movieId,
            ...updateData,
        };
    }
}
