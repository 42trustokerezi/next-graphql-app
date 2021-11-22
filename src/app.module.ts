import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module'; 
import { CoursesModule } from './courses/courses.module';
import { CourcesService } from './cources/cources.service';
@Module({  
 imports: [    
  GraphQLModule.forRoot({autoSchemaFile: true}),    
  UsersModule, CoursesModule,],  
 controllers: [],  
 providers: [CourcesService],
})
export class AppModule {}
