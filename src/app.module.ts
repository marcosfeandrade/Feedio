import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoModule } from './video/video.module';
import { Video } from './models/video.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senha',
      database: 'user',
      entities: [Video],
      synchronize: true, // Apenas para ambiente de desenvolvimento
    }),
    VideoModule,
  ],
})
export class AppModule {}
