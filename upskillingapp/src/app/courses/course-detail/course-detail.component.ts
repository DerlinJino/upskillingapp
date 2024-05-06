import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Course } from "src/app/Models/course";
import { CourseService } from "src/app/Services/course.service";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activateRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs: Subscription;

  ngOnInit(): void {
    //this.courseId = this.activateRoute.snapshot.params["id"];
    //this.courseId = +this.activateRoute.snapshot.paramMap.get("id");

    /* 
      //Not to use the above two methods, this method also depricated , use the next method I mean paramMap 
    this.activateRoute.params.subscribe((data) => {
      this.courseId = +data["id"];
      this.selectedCourse = this.courseService.courses.find(
        (course) => course.id === this.courseId
      );
    });
    */

    this.paramMapObs = this.activateRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get("id");
      this.selectedCourse = this.courseService.courses.find(
        (course) => course.id === this.courseId
      );
    });
  }

  ngOnDestroy() {
    this.paramMapObs.unsubscribe();
  }
}
