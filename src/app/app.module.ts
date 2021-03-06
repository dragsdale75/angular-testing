import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { PostService } from './pages/post.service';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { PopupComponent } from './pages/popup/popup.component';
import { AdComponent } from './pages/ad/ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CreatePostComponent,
    ToolbarComponent,
    PopupComponent,
    AdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
