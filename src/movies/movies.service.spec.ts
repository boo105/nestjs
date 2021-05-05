import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

// Jest : https://velog.io/@jeongin/jest
describe('MoviesService', () => {
  let service: MoviesService;

  // beforeEach는 테스트를 하기 전 실행됨.
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // 테스트 하는 부분
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("create() 테스트", () => {
    it("영화 생성", () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title : "Test Movie",
        genres : ['Test'],
        year : 200
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });
  
  describe("getAll() 테스트",() => {
    it("배열을 반환 해야함.", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("getOne() 테스트", () => {
    it("영화 객체를 반환 해야함.", () => {
      service.create({
        title : "Test Movie",
        genres : ['Test'],
        year : 200
      });

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });

    it("404 에러 발생",() => {
      try
      { service.getOne(999);}
      catch(e)
      { 
        expect(e).toBeInstanceOf(NotFoundException); 
        expect(e.message).toEqual(`Movie with ID 999 not found.`);
      }
    });
  });

  describe("deleteOne() 테스트", () => {
    it("영화 삭제", () => {
      service.create({
        title : "Test Movie",
        genres : ['Test'],
        year : 200
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });

    it("404 에러 발생", () => {
      try { service.deleteOne(999);}
      catch(e)
      {
        expect(e).toBeInstanceOf(NotFoundException); 
      }
    });
  });

  describe("update() 테스트", () => {
    it("영화 업데이트", () => {
      service.create({
        title : "Test Movie",
        genres : ['Test'],
        year : 200
      });

      service.update(1,{title : "Update Test"});
      const movie = service.getOne(1);
      expect(movie.title).toEqual("Update Test");
    });

    it("404 에러 발생", () => {
      try { service.update(999,{title : "Update Test"});}
      catch(e)
      {
        expect(e).toBeInstanceOf(NotFoundException); 
      }
    });
  });
});