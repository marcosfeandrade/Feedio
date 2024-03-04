// video.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from '../models/video.model';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
  ) {}

  async findAll(): Promise<Video[]> {
    return this.videoRepository.find();
  }

  async findOne(id: number): Promise<Video> {
    return this.videoRepository.findOne({ where: { id: id } });
  }

  async create(videoData: Partial<Video>): Promise<Video> {
    const video = this.videoRepository.create(videoData);
    return this.videoRepository.save(video);
  }

  async update(id: number, videoData: Partial<Video>): Promise<Video> {
    await this.videoRepository.update(id, videoData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.videoRepository.delete(id);
  }
}
