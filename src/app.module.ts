import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'xiegangqingnian',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // autoLoadEntities: true, //	如果为true,将自动加载实体(默认：false)
      synchronize: true, // 不能被用于生产环境，否则您可能会丢失生产环境数据
      /**
       * 其他配置参数
       */
      retryAttempts: 10, //	重试连接数据库的次数（默认：10）
      retryDelay: 3000, //	两次重试连接的间隔(ms)（默认：3000）
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
