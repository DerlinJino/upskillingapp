import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  activateRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activateRoute.fragment.subscribe((data) => {
      this.jumbToSection(data);
    });
  }

  jumbToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  }
}
