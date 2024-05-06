import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "src/app/Models/course";
import { CourseService } from "src/app/Services/course.service";

@Component({
  selector: "app-popular",
  templateUrl: "./popular.component.html",
  styleUrls: ["./popular.component.css"],
})
export class PopularComponent {
  courseService = inject(CourseService);
  popularCourses: Course[] = [];
  router: Router = inject(Router);
  activateRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.popularCourses = this.courseService.courses.filter(
      (c) => c.rating >= 4.5
    );
  }

  navigateToCourses() {
    //this.router.navigate(["Courses"]); //It is absolute path
    //this.router.navigate(["Courses"], { relativeTo: this.activateRoute }); //Here making it into relative path
    this.router.navigateByUrl("Courses"); //It is absolute path by default
  }
}
