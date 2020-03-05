// NATHAN SHIRLEY (nes2ta)
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GooPreviewCardComponent } from "./goo-preview-card/goo-preview-card.component";
import { PreviewCardFeedComponent } from "./preview-card-feed/preview-card-feed.component";
import { GooDetailComponent } from "./goo-detail/goo-detail.component";
import { AddGuruComponent } from "./add-guru/add-guru.component";
// controls the flow of the website between various pages
// the empty string path controls how the page appears by default, which goes to the "gurus" path
const routes: Routes = [
  { path: "gurus", component: PreviewCardFeedComponent },
  { path: "", redirectTo: "/gurus", pathMatch: "full" },
  { path: "detail/:id", component: GooDetailComponent },
  { path: "addGuru", component: AddGuruComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
