import { Module} from '@nestjs/common';
import { PostService } from '@app/modules/posts/post.service';
import { PostController } from '@app/modules/posts/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@app/modules/users/user.module';
import { PostEntity, UserEntity } from '@app/entity';
import { OptionModule } from '@app/modules/options/option.module';
import { CacheModule } from '@app/processors/cache/cache.module';
import { CategoriesModule } from '@app/modules/categories/categories.module';
import { AttachmentModule } from '@app/modules/attachments/attachment.module';
import { CommentModule } from '@app/modules/comments/comment.module';
// import { AuthModule } from '@app/modules/auth/auth.module';
// import { Users } from '@app/entity';

@Module({
  // imports: [
  //   TypeOrmModule.forFeature([Post]),
  //   AuthModule,
  // ],
  imports: [
    AttachmentModule,
    UserModule,
    OptionModule,
    CategoriesModule,
    CacheModule,
    CommentModule,
    TypeOrmModule.forFeature([
      UserEntity,
      PostEntity,
    ]),
  ],
  providers: [PostService],
  controllers: [PostController],
  exports: [PostService],
})
export class PostModule {

}
