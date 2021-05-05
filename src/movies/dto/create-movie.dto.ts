import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto{
    /*
    DTO는 데이터 전송 객체를 뜻함
    */
    // 유효성을 위해 만듬 
    // class-validator의 데코레이터로 class의 유효성을 검사할수 있음
    // 데코레이터 옵션들이 되게 많으니 깃허브 문서 한번 보기!
    
    @IsString()
    readonly title : string;
    @IsNumber()
    readonly year : number;
    // each true는 모든 요소를 검사한다는 뜻
    @IsOptional()
    @IsString({each : true})
    readonly genres : string[]; 

}