// video.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video.model';

@Controller()
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  async findAll(): Promise<Video[]> {
    console.log('get ');
    console.log('this.videoService.findAll() ', this.videoService.findAll());
    return this.videoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Video> {
    console.log('get ', id);
    return this.videoService.findOne(+id);
  }

  @Post()
  async create(@Body() videoData: Partial<Video>): Promise<Video> {
    console.log('videoData ', videoData);
    return this.videoService.create(videoData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() videoData: Partial<Video>,
  ): Promise<Video> {
    console.log('update ', id);
    return this.videoService.update(+id, videoData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.videoService.remove(+id);
  }
}
