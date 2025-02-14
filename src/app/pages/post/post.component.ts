import { Component, OnInit, ViewChild } from "@angular/core";
import { PostService } from "src/app/services/post/post.service";
import { Post } from "src/app/models/post";
import { Router } from "@angular/router";
import { StaticRoutes } from "src/app/routes/static-routes";
import { ToastrService } from "ngx-toastr";
import { PostText } from "src/app/text/post.text";
import { UserOptions } from 'src/app/options/userOptions';
import { CharacterPickerComponent } from 'src/app/components/character-picker/character-picker.component';

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @ViewChild('characterPicker', { static: false}) characterPicker: CharacterPickerComponent;
  constructor(
    private postService: PostService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  loading: boolean = true;
  posts: Post[];
  displayPosts: Post[];
  searchTerm: string;
  gameId: number = UserOptions.getCurrentGame();

  ngOnInit() {
    this.postService.getPosts().subscribe(
      postArray => {
        this.setupPosts(postArray);
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.toastrService.error(PostText.failedPostsLoad);
      }
    );
  }

  private setupPosts(posts: Post[]): void {
    this.posts = posts;
    this.displayPosts = posts;
    this.filterPosts();
  }

  onGameChange(gameId: number): void {
    this.gameId = gameId;
    this.filterPosts();
    this.characterPicker.updateGame(gameId);
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filterPosts();
  }

  filterPosts(): void {
    if (this.gameId === 0) {
      this.displayPosts = this.posts;
    } else {
      this.displayPosts = this.posts.filter(
        post => post.gameId === this.gameId
      );
    }

    if (this.searchTerm) {
      this.displayPosts = this.displayPosts.filter(
        post =>
          post.title.includes(this.searchTerm) ||
          post.author.name.includes(this.searchTerm)
      );
    }
  }

  createPost() {
    this.router.navigate([`/${StaticRoutes.createPost}`]);
  }
}
