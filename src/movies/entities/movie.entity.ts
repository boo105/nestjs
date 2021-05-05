/**
 * Javascript object로 데이터베이스를 대체 할건데
 * 실제에서는 데이터베이스 모델 만들어서 쓰기
 */
export class Movie {
    // 접근 제한자를 안써주면 기본적으로는 public 임
    id : number;
    title : string;
    year : number;
    genres : string[];


}