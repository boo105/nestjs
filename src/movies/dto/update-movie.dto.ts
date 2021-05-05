import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

// 업데이트는 일부분만 수정도 되니까
// 모든 사항이 필수적은 아님.
// PartialType을 쓰려면 @nestjs/mapped-types를 설치해야함
// 매개변수로는 베이스 클래스를 받음
export class UpdateMovieDto extends PartialType(CreateMovieDto){

    /*
    이렇게 써도 되는데 PartialType 상속받아도 됨
    @IsString()
    readonly title? : string;
    @IsNumber()
    readonly year? : number;
    @IsString({each : true})
    readonly genres? : string[]; */

}