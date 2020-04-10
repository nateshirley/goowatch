// NATHAN SHIRLEY (nes2ta)
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GooPreviewCardComponent } from "./goo-preview-card/goo-preview-card.component";
import { PreviewCardFeedComponent } from "./preview-card-feed/preview-card-feed.component";
import { GooDetailComponent } from "./goo-detail/goo-detail.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommentCardComponent } from "./comment-card/comment-card.component";

import { AddGuruComponent } from "./add-guru/add-guru.component";
import { FooterComponent } from "./footer/footer.component";

import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    GooPreviewCardComponent,
    PreviewCardFeedComponent,
    GooDetailComponent,
    NavbarComponent,
    CommentCardComponent,
    AddGuruComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
