import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoModule } from './todo/todo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/todo-app',     {
              useNewUrlParser: true,
              useFindAndModify: false
            }),
            SharedModule,
            AuthModule,           
            TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('todo','auth');
  }
}*/
