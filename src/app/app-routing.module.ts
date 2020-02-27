import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GooPreviewCardComponent } from "./goo-preview-card/goo-preview-card.component";
import { PreviewCardFeedComponent } from "./preview-card-feed/preview-card-feed.component";
import { GooDetailComponent } from "./goo-detail/goo-detail.component";

const routes: Routes = [
  { path: "gurus", component: PreviewCardFeedComponent },
  { path: "", redirectTo: "/gurus", pathMatch: "full" },
  { path: "detail/:id", component: GooDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
